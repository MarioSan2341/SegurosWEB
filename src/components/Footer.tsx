import { Link } from "react-router-dom"
import { brand, fullAddress } from "../data/brand"
import { Logo } from "./Logo"
import { SocialIcon } from "./SocialIcon"

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo onDark mark={false} />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">
            {brand.summary}
          </p>
          <p className="mt-3 text-sm font-semibold text-copper">{brand.slogan}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Sitio
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <Link to="/nosotros" className="hover:text-cream">
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link to="/seguros" className="hover:text-cream">
                Seguros
              </Link>
            </li>
            <li>
              <Link to="/cotizar" className="hover:text-cream">
                Cotizar
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-cream">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/aviso-de-privacidad" className="hover:text-cream">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {brand.whatsapp.map((line) => (
              <li key={line.e164}>
                WhatsApp {line.region}: {line.display}
                {line.email ? (
                  <>
                    <br />
                    <a href={`mailto:${line.email}`} className="hover:text-cream">
                      {line.email}
                    </a>
                  </>
                ) : null}
              </li>
            ))}
            {brand.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="hover:text-cream">
                  {email}
                </a>
              </li>
            ))}
            <li>{fullAddress()}</li>
          </ul>
          <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Redes
          </p>
          <ul className="mt-2 space-y-1 text-sm text-cream/80">
            {brand.socials.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  className="inline-flex items-center gap-2 hover:text-cream"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon name={item.name} className="h-4 w-4" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {brand.name}. Cédula CNSF {brand.license}.
      </div>
    </footer>
  )
}
