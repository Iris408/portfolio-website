// src/utils/i18n.ts
import en from "../i18n/en";
import ja from "../i18n/ja";

const translations = { en, ja };

export function useTranslations(locale: "en" | "ja") {
  return translations[locale];
}