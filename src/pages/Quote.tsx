import { useState, type FormEvent } from "react"
import { brand } from "../data/brand"
import { quoteProducts } from "../data/content"
import { primaryWhatsAppUrl, whatsappUrl } from "../lib/whatsapp"

type FormState = {
  name: string
  phone: string
  email: string
  product: string
  city: string
  details: string
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  product: "Auto",
  city: "",
  details: "",
}

function buildMessage(form: FormState): string {
  return [
    `Hola, soy ${form.name}.`,
    `Me interesa cotizar: ${form.product}.`,
    form.city ? `Ciudad o estado: ${form.city}.` : "",
    form.phone ? `Mi WhatsApp: ${form.phone}.` : "",
    form.email ? `Correo: ${form.email}.` : "",
    form.details ? `Detalles: ${form.details}` : "",
  ]
    .filter(Boolean)
    .join(" ")
}

export function Quote() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [sent, setSent] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.open(primaryWhatsAppUrl(buildMessage(form)), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
        Cotización
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink">Cuéntanos qué quieres proteger</h1>
      <p className="mt-3 text-muted">
        Un asesor te contacta con opciones reales de las aseguradoras en convenio.
        No mostramos precios automáticos: cada póliza se arma con tus datos.
      </p>

      {sent ? (
        <div className="mt-10 rounded-3xl border border-line bg-paper p-8">
          <h2 className="font-display text-2xl text-ink">Listo, abre WhatsApp</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Si no se abrió la conversación, elige una línea y envía el mensaje
            con tus datos.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {brand.whatsapp.map((line) => (
              <a
                key={line.e164}
                href={whatsappUrl(line.e164, buildMessage(form))}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-copper px-5 py-2.5 text-center text-sm font-semibold text-cream hover:bg-copper-dark"
              >
                WhatsApp {line.region}: {line.display}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="mt-6 text-sm font-semibold text-copper"
            onClick={() => {
              setSent(false)
              setForm(initialForm)
            }}
          >
            Llenar otra solicitud
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 rounded-3xl border border-line bg-paper p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-ink">
              Nombre
              <input
                required
                className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
              />
            </label>
            <label className="text-sm font-medium text-ink">
              WhatsApp
              <input
                required
                type="tel"
                className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
              />
            </label>
            <label className="text-sm font-medium text-ink">
              Correo
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
              />
            </label>
            <label className="text-sm font-medium text-ink">
              Ciudad o estado
              <input
                className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
                placeholder="Ej. Tlaquepaque, Jalisco"
                value={form.city}
                onChange={(event) => update("city", event.target.value)}
              />
            </label>
            <label className="text-sm font-medium text-ink sm:col-span-2">
              Tipo de seguro
              <select
                className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
                value={form.product}
                onChange={(event) => update("product", event.target.value)}
              >
                {quoteProducts.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-ink sm:col-span-2">
              Detalles
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
                placeholder="Si es un vehículo: marca, modelo y año. Si es salud, vida u hogar: cuéntanos lo esencial."
                value={form.details}
                onChange={(event) => update("details", event.target.value)}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-copper px-5 py-3 text-sm font-semibold text-cream hover:bg-copper-dark"
          >
            Enviar por WhatsApp
          </button>
        </form>
      )}
    </div>
  )
}
