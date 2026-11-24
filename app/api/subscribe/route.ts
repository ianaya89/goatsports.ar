import { NextResponse } from "next/server"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let email = ""
  try {
    const body = await request.json()
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
  } catch {
    return NextResponse.json({ message: "Solicitud inválida" }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 320) {
    return NextResponse.json({ message: "Email inválido" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured")
    return NextResponse.json({ message: "No pudimos procesar la suscripción" }, { status: 500 })
  }

  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID

  try {
    const response = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
        ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
      }),
    })

    // 409 = contact already exists, which is fine for a subscribe form
    if (!response.ok && response.status !== 409) {
      console.error(`Resend contact creation failed: ${response.status}`, (await response.text()).slice(0, 300))
      return NextResponse.json({ message: "No pudimos procesar la suscripción" }, { status: 502 })
    }

    return NextResponse.json({ message: "¡Suscripción exitosa!" }, { status: 201 })
  } catch (error) {
    console.error("Subscribe API error:", error instanceof Error ? error.message : error)
    return NextResponse.json({ message: "No pudimos procesar la suscripción" }, { status: 500 })
  }
}
