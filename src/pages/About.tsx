import { Link } from "react-router-dom"
import { InsurerLogos } from "../components/InsurerLogos"
import { PhotoGrid } from "../components/PhotoGrid"
import { brand } from "../data/brand"
import { galleryPhotos } from "../data/photos"

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
        Quiénes somos
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">{brand.name}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{brand.summary}</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-display text-2xl text-ink">Visión</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{brand.vision}</p>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-display text-2xl text-ink">Misión</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{brand.mission}</p>
        </article>
      </div>

      <article className="mt-6 rounded-2xl border border-line bg-paper p-6 lg:p-8">
        <h2 className="font-display text-2xl text-ink">Experiencia</h2>
        <p className="mt-3 max-w-4xl leading-relaxed text-muted">{brand.experience}</p>
        <p className="mt-6 inline-flex rounded-full bg-cream px-4 py-2 text-sm font-semibold text-ink">
          Cédula de agente ante CNSF {brand.license}
        </p>
      </article>

      <section className="mt-12">
        <h2 className="font-display text-3xl text-ink">Aseguradoras en convenio</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Intermediamos productos de compañías con las que tenemos convenio, para
          que compares cobertura y servicio, no solo una marca.
        </p>
        <InsurerLogos className="mt-6" />
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-ink">El equipo en acción</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Capacitación, visitas con aseguradoras y acompañamiento cuando hay un siniestro.
        </p>
        <PhotoGrid photos={galleryPhotos} className="mt-8" />
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link
          to="/cotizar"
          className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-cream hover:bg-copper-dark"
        >
          Solicitar cotización
        </Link>
        <Link
          to="/contacto"
          className="rounded-full border border-ink/15 bg-paper px-6 py-3 text-sm font-semibold text-ink hover:border-copper hover:text-copper"
        >
          Ver oficina y contactos
        </Link>
      </div>
    </div>
  )
}
