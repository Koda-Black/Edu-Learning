// WhatsApp integration
export const getWhatsAppLink = (phone: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

// Email integration
export const getEmailLink = (email: string, subject: string) => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
};

// Lead data structure
export interface Lead {
  id?: string;
  name: string;
  email: string;
  whatsapp: string;
  type: "b2c" | "b2b" | "partner";
  program?: string;
  level?: string;
  message?: string;
  createdAt?: Date;
}

export interface ProgramRegistration extends Lead {
  type: "b2c";
  program: string;
  level: string;
  schedule: string;
}

export interface QuoteRequest extends Lead {
  type: "b2b";
  documentType: string;
  serviceSpeed: string;
  languagePair: string;
  fileUrl?: string;
}

export interface PartnerApplication extends Lead {
  type: "partner";
  expertise: string;
  services: string;
}
