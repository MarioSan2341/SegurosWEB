import capacitacion from "../assets/site/capacitacion.jpg"
import equipoEvento from "../assets/site/equipo-evento.jpg"
import equipoNuevo from "../assets/site/equipo-nuevo.jpg"
import equipoPresentacion from "../assets/site/equipo-presentacion.jpg"
import fachadaEquipo from "../assets/site/fachada-equipo.jpg"
import graduacion from "../assets/site/graduacion.jpg"
import oficinaEquipo from "../assets/site/oficina-equipo.jpg"
import retratoEquipo from "../assets/site/retrato-equipo.jpg"
import siniestrosMorelia from "../assets/site/siniestros-morelia.jpg"
import visitaQualitas from "../assets/site/visita-qualitas.jpg"

export type Photo = {
  src: string
  alt: string
  caption: string
}

export const homePhotos: Photo[] = [
  {
    src: equipoPresentacion,
    alt: "Asesores de ATCH Tornel Asesores",
    caption: "ATCH Tornel Asesores",
  },
  {
    src: graduacion,
    alt: "Ceremonia de la Escuela de Coordinadores de Quálitas",
    caption: "Formación con Quálitas",
  },
  {
    src: capacitacion,
    alt: "Capacitación sobre el kit de seguridad vial",
    caption: "Capacitación en seguridad",
  },
  {
    src: siniestrosMorelia,
    alt: "Equipo en una jornada de siniestros en Morelia",
    caption: "Acompañamiento en siniestros",
  },
]

export const aboutPhotos: Photo[] = [
  {
    src: oficinaEquipo,
    alt: "Asesores de ATCH Tornel en la oficina",
    caption: "En la oficina",
  },
  {
    src: equipoNuevo,
    alt: "Asesores frente a la oficina y el auto de ATCH Tornel",
    caption: "Frente a la oficina",
  },
  {
    src: fachadaEquipo,
    alt: "Asesores junto al letrero de ATCH Tornel Asesores",
    caption: "Hablemos de seguros",
  },
  {
    src: retratoEquipo,
    alt: "Asesores de ATCH Tornel Asesores",
    caption: "El equipo",
  },
]

export const galleryPhotos: Photo[] = [
  ...aboutPhotos,
  ...homePhotos,
  {
    src: equipoEvento,
    alt: "Equipo en un encuentro de Quálitas",
    caption: "Encuentro con la aseguradora",
  },
  {
    src: visitaQualitas,
    alt: "Visita a las oficinas de Quálitas",
    caption: "Visita a Quálitas",
  },
]
