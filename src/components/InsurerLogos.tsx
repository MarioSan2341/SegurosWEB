import { useEffect, useState } from "react"
import { insurers } from "../data/content"

type InsurerLogosProps = {
  className?: string
}

function usePerView() {
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setPerView(3)
      else if (window.matchMedia("(min-width: 640px)").matches) setPerView(2)
      else setPerView(1)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return perView
}

export function InsurerLogos({ className = "" }: InsurerLogosProps) {
  const perView = usePerView()
  const maxIndex = Math.max(0, insurers.length - perView)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (paused || maxIndex === 0) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, 3200)

    return () => window.clearInterval(timer)
  }, [paused, maxIndex])

  function go(next: number) {
    if (next < 0) setIndex(maxIndex)
    else if (next > maxIndex) setIndex(0)
    else setIndex(next)
  }

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Aseguradora anterior"
          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-xl text-ink hover:border-copper hover:text-copper sm:inline-flex"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>

        <div className="overflow-hidden" aria-roledescription="carrusel" aria-label="Aseguradoras en convenio">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {insurers.map((item) => (
              <div
                key={item.name}
                className="shrink-0 px-2"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="flex h-48 items-center justify-center rounded-2xl border border-line bg-white p-6 sm:h-52">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Siguiente aseguradora"
          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-xl text-ink hover:border-copper hover:text-copper sm:inline-flex"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }, (_, dot) => (
          <button
            key={dot}
            type="button"
            aria-label={`Ver grupo ${dot + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              dot === index ? "w-6 bg-copper" : "w-2.5 bg-line"
            }`}
            onClick={() => setIndex(dot)}
          />
        ))}
      </div>

      <p className="mt-3 text-xs text-muted">
        Marcas registradas de cada aseguradora. ATCH Tornel Asesores actúa como
        intermediario.
      </p>
    </div>
  )
}
