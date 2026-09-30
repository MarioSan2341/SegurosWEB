import { brand, defaultWhatsAppMessage } from "../data/brand"

export function whatsappUrl(e164: string, message = defaultWhatsAppMessage()): string {
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`
}

export function primaryWhatsAppUrl(message?: string): string {
  return whatsappUrl(brand.whatsapp[0].e164, message)
}
