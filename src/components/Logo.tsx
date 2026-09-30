import logo from "../assets/logoSegurosattch.png"
import { brand } from "../data/brand"

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
          {brand.shortName}
        </span>
        <span
          className={`block text-[0.65rem] font-semibold tracking-[0.18em] uppercase ${
            onDark ? "text-cream/70" : "text-muted"
          }`}
        >
          Asesores
        </span>
      </span>
    </span>
  )
}
