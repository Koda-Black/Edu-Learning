import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fr"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "en";

  if (!locales.includes(locale)) {
    return { locale: "en", messages: {} };
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
