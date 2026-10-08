import { useState, type FormEvent } from "react"
import officePhoto from "../assets/site/FotoLugar.jpeg"
import officeVideo from "../assets/site/VideoLugar.mp4"
import { SocialIcon } from "../components/SocialIcon"
import { brand, fullAddress } from "../data/brand"
import { primaryWhatsAppUrl, whatsappUrl } from "../lib/whatsapp"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function buildMessage(): string {
    return [
      `Hola, soy ${name}.`,
      phone ? `Mi WhatsApp: ${phone}.` : "",
      email ? `Correo: ${email}.` : "",
      message,
    ]
      .filter(Boolean)
      .join(" ")
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.open(primaryWhatsAppUrl(buildMessage()), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
          Contacto
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          {brand.slogan}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Oficina en Tlaquepaque, Jalisco, y atención por WhatsApp en Jalisco,
          Nuevo León y Guanajuato.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {brand.whatsapp.map((line) => (
            <a
              key={line.e164}
              href={whatsappUrl(line.e164)}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-line bg-paper p-5 transition hover:border-copper"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
                WhatsApp {line.region}
              </p>
              <p className="mt-2 text-ink">{line.display}</p>
              {line.email ? (
                <a href={`mailto:${line.email}`} className="mt-1 block text-sm text-muted">
                  {line.email}
                </a>
              ) : null}
            </a>
          ))}
          <div className="rounded-2xl border border-line bg-paper p-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Teléfono
            </p>
            <a href={`tel:${brand.phoneTel}`} className="mt-2 block text-ink">
              {brand.phoneDisplay}
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Correos
            </p>
            {brand.emails.map((emailAddress) => (
              <a key={emailAddress} href={`mailto:${emailAddress}`} className="mt-2 block text-sm text-ink">
                {emailAddress}
              </a>
            ))}
          </div>
          <a
            href={brand.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-line bg-paper p-5 sm:col-span-2 hover:border-copper"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Oficina
            </p>
            <p className="mt-2 text-ink">{fullAddress()}</p>
            <p className="mt-1 text-sm text-muted">Ver en Google Maps</p>
          </a>
          <div className="rounded-2xl border border-line bg-paper p-5 sm:col-span-2">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Redes
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {brand.socials.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm text-ink hover:bg-cream hover:text-copper"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                      <SocialIcon name={item.name} />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block font-medium">{item.name}</span>
                      <span className="block truncate text-xs text-muted">{item.handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {sent ? (
        <div className="rounded-3xl border border-line bg-paper p-8">
          <h2 className="font-display text-2xl text-ink">Mensaje listo en WhatsApp</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Si no se abrió, usa una de las líneas de {brand.shortName}.
          </p>
          <button
            type="button"
            className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream"
            onClick={() => setSent(false)}
          >
            Escribir otro mensaje
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-line bg-paper p-6 sm:p-8"
        >
          <label className="block text-sm font-medium text-ink">
            Nombre
            <input
              required
              className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            WhatsApp
            <input
              required
              type="tel"
              className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Correo
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            Mensaje
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-line bg-cream px-3 py-2.5"
              placeholder="Cuéntanos qué seguro te interesa."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-copper px-5 py-3 text-sm font-semibold text-cream hover:bg-copper-dark"
          >
            Enviar por WhatsApp
          </button>
        </form>
      )}

      <section className="lg:col-span-2">
        <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
          La oficina
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink">Manuel Acuña #3, Santa Anita</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Así se ve el lugar en Tlaquepaque. La entrada está junto al árbol, frente a la casa blanca con el zoclo morado.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <img
            src={officePhoto}
            alt="Fachada de la oficina de ATCH Tornel Asesores en Santa Anita, Tlaquepaque"
            className="h-full max-h-[28rem] w-full rounded-2xl border border-line object-cover"
          />
          <video
            src={officeVideo}
            controls
            playsInline
            preload="metadata"
            className="h-full max-h-[28rem] w-full rounded-2xl border border-line bg-ink object-cover"
          >
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </section>
    </div>
  )
}
