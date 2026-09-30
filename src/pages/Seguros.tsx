import { Link } from "react-router-dom"
import { products } from "../data/content"

export function Seguros() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
        Productos
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
        Seguros que intermediamos
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Autos y flotillas, salud, vida, hogar y accidentes personales. Un asesor
        te explica qué conviene según tu caso y con qué aseguradora.
      </p>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {products.map((item) => (
          <article key={item.id} className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="font-display text-2xl text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.details}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.items.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-2"
                >
                  {chip}
                </li>
              ))}
            </ul>
            <Link
              to="/cotizar"
              className="mt-6 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream hover:bg-ink-2"
            >
              Cotizar este seguro
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
