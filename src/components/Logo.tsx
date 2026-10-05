import logo from "../assets/logoSegurosattch.png"

type LogoProps = {
  className?: string
  onDark?: boolean
  mark?: boolean
}

export function Logo({ className = "", onDark = false, mark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark ? (
        <img
          src={logo}
          alt=""
          className="h-14 w-14 shrink-0 object-contain"
        />
      ) : null}
      <span className="leading-tight">
        <span
          className={`block font-display text-[1.15rem] font-semibold tracking-tight ${
            onDark ? "text-cream" : "text-ink"
          }`}
        >
          ATCH
        </span>
        <span
          className={`block text-sm font-medium ${
            onDark ? "text-cream/80" : "text-muted"
          }`}
        >
          Tornel asesores
        </span>
      </span>
    </span>
  )
}
