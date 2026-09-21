interface ClubLogoProps {
  src: string
  badge?: boolean
  size?: "sm" | "lg"
  className?: string
}

export default function ClubLogo({ src, badge = false, size = "lg", className = "" }: ClubLogoProps) {
  const crestSize = size === "lg" ? "h-16 w-16" : "h-11 w-11"
  const badgeSize = size === "lg" ? "h-11 max-w-[128px] p-1.5" : "h-8 max-w-[84px] p-1"

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`object-contain ${
        badge
          ? `${badgeSize} w-auto rounded-md bg-white/95 shadow-md`
          : `${crestSize} drop-shadow-[0_4px_10px_rgba(0,0,0,0.55)]`
      } ${className}`}
    />
  )
}
