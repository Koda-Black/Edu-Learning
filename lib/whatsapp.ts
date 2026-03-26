const WHATSAPP_NUMBER = "2348100835573";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export { WHATSAPP_NUMBER };
