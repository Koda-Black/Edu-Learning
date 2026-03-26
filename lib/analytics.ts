// Theme utilities
export const toggleTheme = () => {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  if (isDark) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

export const initTheme = () => {
  const theme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (theme === "dark" || (!theme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Plausible Analytics tracking
declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>,
) => {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, properties ? { props: properties } : undefined);
  }
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    console.debug(`[Analytics] ${eventName}`, properties);
  }
};

export const trackFormSubmit = (formType: string) => {
  trackEvent("form_submit", { form_type: formType });
};

export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click");
};

export const trackEmailClick = () => {
  trackEvent("email_click");
};

export const trackLanguageSwitch = (language: string) => {
  trackEvent("language_switch", { language });
};
