import { Link } from "react-router-dom"
import { brand, fullAddress } from "../data/brand"

export function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-copper uppercase">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink">Aviso de privacidad</h1>
      <p className="mt-5 leading-relaxed text-muted">
        {brand.name}, con domicilio en {fullAddress()}, trata tus datos personales
        para cotizar, intermediar y dar seguimiento a seguros, así como para
        contactarte por teléfono, WhatsApp o correo si lo solicitas.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Los datos que envías por los formularios se canalizan a las líneas de
        atención de la agencia. No se utilizan para mercadeo de terceros. Para
        ejercer tus derechos ARCO puedes escribir a {brand.emails[0]}.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Cédula de agente ante la CNSF: {brand.license}.
      </p>
      <Link to="/" className="mt-8 inline-flex text-sm font-semibold text-copper">
        Volver al inicio
      </Link>
    </div>
  )
}
