import { insurers } from "../data/content"

type InsurerLogosProps = {
  className?: string
}

export function InsurerLogos({ className = "" }: InsurerLogosProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {insurers.map((item) => (
          <div
            key={item.name}
            className="flex h-24 items-center justify-center rounded-2xl border border-line bg-white px-5"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-12 w-full max-w-[180px] object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        Marcas registradas de cada aseguradora. ATCH Tornel Asesores actúa como
        intermediario.
      </p>
    </div>
  )
}
