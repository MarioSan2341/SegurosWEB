import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink">Página no encontrada</h1>
      <p className="mt-3 text-muted">Esa ruta no existe en esta base del sitio.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream"
      >
        Ir al inicio
      </Link>
    </div>
  )
}
