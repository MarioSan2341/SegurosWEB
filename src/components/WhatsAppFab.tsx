import { useState } from "react"
import { brand } from "../data/brand"
import { whatsappUrl } from "../lib/whatsapp"

export function WhatsAppFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2">
      {open ? (
        <div className="w-64 rounded-2xl border border-line bg-paper p-3 shadow-[0_16px_40px_-20px_rgba(18,32,51,0.55)]">
          <p className="px-1 text-xs font-semibold tracking-[0.14em] text-copper uppercase">
            WhatsApp
          </p>
          <ul className="mt-2 space-y-1">
            {brand.whatsapp.map((line) => (
              <li key={line.e164}>
                <a
                  href={whatsappUrl(line.e164)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-ink hover:bg-cream"
                >
                  <span>{line.region}</span>
                  <span className="font-medium">{line.display}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-lg transition hover:bg-[#196641]"
        aria-expanded={open}
        aria-label={open ? "Cerrar WhatsApp" : "Escribir por WhatsApp"}
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.5 2 2.05 6.45 2.05 12c0 1.76.46 3.44 1.28 4.9L2 22l5.25-1.28A9.96 9.96 0 0 0 12.04 22C17.57 22 22 17.55 22 12S17.57 2 12.04 2zm5.78 14.16c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.83-.11-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.85-4.2-5-4.39-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.77-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.19-.15.32-.29.49-.15.17-.3.37-.43.5-.14.14-.29.3-.12.58.16.29.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.29.38-.24.64-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38z" />
        </svg>
      </button>
    </div>
  )
}
