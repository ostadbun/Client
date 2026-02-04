"use client"

export type Translations = {
  [key: string]: {
    dir: "ltr" | "rtl"
    values: {
      title: string
      subtitle: string
      description: string
    }
  }
}

export function useTranslation(
  translations: Translations,
  lang: keyof Translations
) {
  const t = translations[lang].values
  const dir = translations[lang].dir
  return { t, dir }
}
