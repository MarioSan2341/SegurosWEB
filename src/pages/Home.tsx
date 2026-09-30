import { Link } from "react-router-dom"
import { InsurerLogos } from "../components/InsurerLogos"
import { PhotoGrid } from "../components/PhotoGrid"
import { brand } from "../data/brand"
import { faqs, products, stats, steps } from "../data/content"
import { heroPhoto, homePhotos } from "../data/photos"
import { primaryWhatsAppUrl } from "../lib/whatsapp"

export function Home() {
  return (
    <div>
      <section className="hero-grid border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
              {brand.name}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {brand.slogan}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {brand.summary} Te acercamos a la aseguradora correcta y te
              acompañamos para que el contrato se cumpla.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cotizar"
                className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-cream transition hover:bg-copper-dark"
              >
                Solicitar cotización
              </Link>
              <a
                href={primaryWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/15 bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:border-copper hover:text-copper"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-line shadow-[0_24px_60px_-28px_rgba(18,32,51,0.55)]">
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4]"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-3xl text-ink">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
              Intermediación
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Seguros personales que sí medimos contigo
            </h2>
          </div>
          <Link to="/seguros" className="text-sm font-semibold text-copper hover:text-copper-dark">
            Ver todos los productos →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-line bg-paper p-6 shadow-[0_12px_30px_-24px_rgba(18,32,51,0.4)]"
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl sm:text-4xl">Así trabajamos</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="border-t border-cream/15 pt-6">
                <p className="text-sm font-semibold tracking-[0.18em] text-copper">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
          En el día a día
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          Asesoría, campo y siniestros
        </h2>
        <PhotoGrid photos={homePhotos} className="mt-8" />
      </section>
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
            Aseguradoras en convenio
          </p>
          <InsurerLogos className="mt-6" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl text-ink">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-medium text-ink [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-copper transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-sage px-8 py-10 text-cream md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl">{brand.slogan}</h2>
            <p className="mt-2 max-w-xl text-sm text-cream/80">
              Un asesor te contacta para comparar opciones y explicarte la póliza
              con calma. Sin letra chica escondida.
            </p>
          </div>
          <Link
            to="/cotizar"
            className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition hover:bg-paper"
          >
            Empezar ahora
          </Link>
        </div>
      </section>
    </div>
  )
}
