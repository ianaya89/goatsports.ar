import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

const INK = "#00237c"
const GOLD = "#f59e0b"
const PHOTO_WIDTH = 480

interface OgCard {
  eyebrow: string
  title: string
  subtitle: string
  badge?: string
  photo?: Buffer
  dark?: boolean
}

export function pickLocale<T>(copy: { es: T; en: T }, locale: string): T {
  return locale === "en" ? copy.en : copy.es
}

export async function renderOgImage({ eyebrow, title, subtitle, badge, photo, dark }: OgCard) {
  const [bold, medium, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-700.ttf")),
    readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-500.ttf")),
    readFile(join(process.cwd(), "assets/og/logo-white.png")),
  ])

  const base = dark ? "#050b1f" : INK
  const background = photo
    ? base
    : dark
      ? "linear-gradient(135deg, #050b1f 0%, #0a1a4a 60%, #00237c 100%)"
      : "linear-gradient(135deg, #00123f 0%, #00237c 50%, #1a56db 100%)"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background,
          color: "white",
          fontFamily: "Space Grotesk",
        }}
      >
        {photo && (
          <img
            src={`data:image/jpeg;base64,${photo.toString("base64")}`}
            width={PHOTO_WIDTH}
            height={ogSize.height}
            style={{ position: "absolute", top: 0, right: 0, objectFit: "cover" }}
          />
        )}
        {photo && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: PHOTO_WIDTH,
              height: ogSize.height,
              background: `linear-gradient(90deg, ${base} 0%, rgba(0, 35, 124, 0.55) 35%, rgba(0, 35, 124, 0.15) 100%)`,
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            top: 56,
            bottom: 66,
            left: 64,
            width: photo ? 620 : 1072,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img src={`data:image/png;base64,${logo.toString("base64")}`} width={166} height={70} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: GOLD, letterSpacing: 4, textTransform: "uppercase" }}>
              {eyebrow}
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: title.length > 26 ? 62 : 76,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -2,
              }}
            >
              {title}
            </div>
            <div style={{ marginTop: 20, fontSize: 28, fontWeight: 500, lineHeight: 1.3, color: "rgba(255, 255, 255, 0.85)" }}>
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {badge && (
              <div
                style={{
                  display: "flex",
                  marginRight: 24,
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: GOLD,
                  color: "#00123f",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {badge}
              </div>
            )}
            <div style={{ fontSize: 24, fontWeight: 500, color: "rgba(255, 255, 255, 0.75)" }}>goatsports.ar</div>
          </div>
        </div>

        <div style={{ position: "absolute", left: 0, bottom: 0, width: ogSize.width, height: 10, background: GOLD }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Space Grotesk", data: bold, weight: 700, style: "normal" },
        { name: "Space Grotesk", data: medium, weight: 500, style: "normal" },
      ],
    },
  )
}
