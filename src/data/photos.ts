import capacitacion from "../assets/site/capacitacion.jpg"
import equipoEvento from "../assets/site/equipo-evento.jpg"
import equipoOficina from "../assets/site/equipo-oficina.jpg"
import graduacion from "../assets/site/graduacion.jpg"
import siniestrosMorelia from "../assets/site/siniestros-morelia.jpg"
import visitaQualitas from "../assets/site/visita-qualitas.jpg"

export type Photo = {
  src: string
  alt: string
  caption: string
}

export const heroPhoto: Photo = {
  src: equipoOficina,
  alt: "Equipo de ATCH Tornel Asesores en oficina",
  caption: "El equipo de asesoría",
}

export const homePhotos: Photo[] = [
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

export const galleryPhotos: Photo[] = [
  heroPhoto,
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
