import { useState } from "react"
import { NavLink } from "react-router-dom"
import { primaryWhatsAppUrl } from "../lib/whatsapp"
import { Logo } from "./Logo"

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Quiénes somos" },
  { to: "/seguros", label: "Seguros" },
  { to: "/cotizar", label: "Cotizar" },
  { to: "/contacto", label: "Contacto" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5">
        <NavLink to="/" onClick={() => setOpen(false)} aria-label="Ir al inicio">
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-copper" : "text-ink-2 hover:text-copper"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={primaryWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-copper hover:text-copper"
          >
            WhatsApp
          </a>
          <NavLink
            to="/cotizar"
            className="rounded-full bg-copper px-4 py-2 text-sm font-semibold text-cream transition hover:bg-copper-dark"
          >
            Cotizar
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menú</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-5 py-4 lg:hidden" aria-label="Móvil">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2 text-base font-medium ${
                    isActive ? "bg-paper text-copper" : "text-ink-2"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/cotizar"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-copper px-4 py-2.5 text-center text-sm font-semibold text-cream"
            >
              Cotizar
            </NavLink>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
