export const brand = {
  name: "ATCH Tornel Asesores",
  shortName: "ATCH Tornel",
  slogan: "Hablemos de seguros",
  tagline: "Asesoría cercana para proteger tu vida, salud y patrimonio.",
  summary:
    "Empresa 100% mexicana dedicada a la consultoría, asesoría y mediación para la contratación de seguros en México.",
  vision:
    "Ser la empresa de asesoría más cercana a las personas para lograr desarrollar una cultura de aseguramiento y protección de la vida, salud y patrimonio de quienes radican en nuestro país.",
  mission:
    "Lograr la mediación correcta entre las personas y las aseguradoras, para contratar y proteger su integridad física, familiar y patrimonial mediante la protección de seguros personales.",
  experience:
    "Con más de 20 años de trayectoria en la atención de siniestros, en dos de las más grandes aseguradoras en México, y con 15 años en el servicio a clientes en la principal empresa de telecomunicaciones del país, nuestro compromiso es darte la mejor atención al contratar tus seguros, garantizando que los contratos con las aseguradoras se cumplan a cabalidad.",
  license: "C422710",
  street: "Manuel Acuña #3",
  neighborhood: "Santa Anita",
  municipality: "Tlaquepaque",
  state: "Jalisco",
  zip: "45600",
  country: "México",
  phoneDisplay: "33 4444 6717",
  phoneTel: "+523344446717",
  emails: [
    "jagutierrez@atchtornelasesores.com",
    "alespinosa@atchtornelasesores.com",
  ],
  whatsapp: [
    {
      region: "Jalisco",
      display: "33 1151 7711",
      e164: "523311517711",
    },
    {
      region: "Nuevo León",
      display: "81 4328 5491",
      e164: "528143285491",
    },
  ],
  socials: [
    {
      name: "Instagram",
      handle: "@tornelasesores",
      url: "https://www.instagram.com/tornelasesores/",
    },
    {
      name: "Facebook",
      handle: "Chtto Seguros",
      url: "https://www.facebook.com/chttoseguros",
    },
    {
      name: "TikTok",
      handle: "@chttoseguros",
      url: "https://www.tiktok.com/@chttoseguros",
    },
    {
      name: "YouTube",
      handle: "@chttoseguros",
      url: "https://www.youtube.com/@chttoseguros",
    },
    {
      name: "X",
      handle: "@GutierrezCheto",
      url: "https://x.com/GutierrezCheto",
    },
    {
      name: "Threads",
      handle: "@chttoseguros",
      url: "https://www.threads.com/@chttoseguros",
    },
    {
      name: "Spotify",
      handle: "Hablemos de Seguros",
      url: "https://open.spotify.com/show/4xiBgBlxiI3e7LrWgPnN11",
    },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Manuel+Acu%C3%B1a+3%2C+Santa+Anita%2C+Tlaquepaque%2C+Jalisco+45600",
}

export function fullAddress(): string {
  return `${brand.street}, Col. ${brand.neighborhood}, ${brand.municipality}, ${brand.state} C.P. ${brand.zip}, ${brand.country}`
}

export function defaultWhatsAppMessage(): string {
  return `Hola, me gustaría hablar de seguros con ${brand.name}.`
}
