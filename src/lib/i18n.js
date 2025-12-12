import { createContext, useContext, useMemo } from "react";

export const LocalizationContext = createContext(null);

export function useLocalization() {
  const ctx = useContext(LocalizationContext);
  if (!ctx) throw new Error("useLocalization must be used within LocalizationProvider");
  return ctx;
}

export function useTranslation(namespace) {
  const { t, locale, setLocale } = useLocalization();
  const nsT = useMemo(() => {
    return (key, fallback) => t(namespace, key, fallback);
  }, [t, namespace]);
  return { t: nsT, locale, setLocale };
}
