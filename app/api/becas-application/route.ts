import { NextResponse } from "next/server"
import { google } from "googleapis"
import { getUsaVacancy } from "@/data/usa-vacancies"

const SPREADSHEET_ID = "1k_Zw8xqWX6AEdxuqygiTfAYnPqnHmiUmqOiAIu8qVf4"
const NOTIFICATION_EMAIL = "hola@goatsports.ar"

const COLUMNS: { field: string; header: string; required?: boolean }[] = [
  { field: "fullName", header: "Nombre y apellido", required: true },
  { field: "birthDate", header: "Fecha de nacimiento", required: true },
  { field: "province", header: "Provincia", required: true },
  { field: "graduation", header: "Fin del secundario", required: true },
  { field: "school", header: "Colegio" },
  { field: "club", header: "Club", required: true },
  { field: "category", header: "Categoría y división", required: true },
  { field: "position", header: "Posición", required: true },
  { field: "nationalTeam", header: "Seleccionado" },
  { field: "hasVideos", header: "Tiene videos", required: true },
  { field: "englishLevel", header: "Nivel de inglés", required: true },
  { field: "englishExam", header: "Examen de inglés" },
  { field: "playerPhone", header: "Teléfono jugadora", required: true },
  { field: "email", header: "Mail", required: true },
  { field: "guardianName", header: "Madre, padre o tutor", required: true },
  { field: "guardianPhone", header: "Teléfono tutor", required: true },
  { field: "source", header: "Cómo se enteró" },
]

const HEADERS = ["Fecha", "Búsqueda", ...COLUMNS.map((column) => column.header)]
const MAX_LENGTH = 200
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : ""
}

function getSheets() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n")

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are not configured")
  }

  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  return google.sheets({ version: "v4", auth })
}

async function resolveTab(sheets: ReturnType<typeof getSheets>, spreadsheetId: string) {
  const { data } = await sheets.spreadsheets.get({ spreadsheetId, fields: "sheets.properties.title" })
  const title = data.sheets?.[0]?.properties?.title
  if (!title) throw new Error("Spreadsheet has no tabs")

  const tab = `'${title.replace(/'/g, "''")}'`
  const firstCell = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${tab}!A1` })
  if (!firstCell.data.values?.[0]?.[0]) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${tab}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [HEADERS] },
    })
  }
  return tab
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 })
  }

  const vacancy = getUsaVacancy(clean(body.vacancyId))
  const values = COLUMNS.map((column) => clean(body[column.field]))
  const missingRequired = COLUMNS.some((column, index) => column.required && !values[index])
  const email = clean(body.email)

  if (!vacancy || missingRequired || !EMAIL_PATTERN.test(email) || body.consent !== true) {
    return NextResponse.json({ success: false, message: "Missing or invalid fields" }, { status: 400 })
  }

  const submittedAt = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })
  const row = [submittedAt, vacancy.id, ...values]

  const results = await Promise.allSettled([saveToSheet(row), sendNotification(row, email)])
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const channel = index === 0 ? "sheet" : "email"
      const reason = result.reason instanceof Error ? result.reason.message : result.reason
      console.error(`Scholarship application ${channel} failed:`, reason)
    }
  })

  // One channel is enough to not lose the application
  if (results.every((result) => result.status === "rejected")) {
    return NextResponse.json({ success: false, message: "Could not save application" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

async function saveToSheet(row: string[]) {
  const spreadsheetId = process.env.BECAS_SPREADSHEET_ID || SPREADSHEET_ID
  const sheets = getSheets()
  const tab = await resolveTab(sheets, spreadsheetId)
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tab}!A:A`,
    // RAW keeps phone numbers intact and stops "=..." answers from running as formulas
    valueInputOption: "RAW",
    requestBody: { values: [row] },
  })
}

async function sendNotification(row: string[], replyTo: string) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured")

  const fullName = row[HEADERS.indexOf("Nombre y apellido")]
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `GOAT Sports Web <${process.env.BECAS_SENDER_EMAIL || NOTIFICATION_EMAIL}>`,
      to: [process.env.BECAS_NOTIFICATION_EMAIL || NOTIFICATION_EMAIL],
      reply_to: replyTo,
      subject: `Nueva postulación Becas USA: ${fullName}`,
      text: HEADERS.map((header, index) => `${header}: ${row[index] || "-"}`).join("\n"),
    }),
  })

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${(await response.text()).slice(0, 300)}`)
  }
}
