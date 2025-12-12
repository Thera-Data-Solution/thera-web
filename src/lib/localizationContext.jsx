import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLocalization } from "../service/localization";
import { LocalizationContext } from "./i18n";

export function LocalizationProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    try {
      const saved = localStorage.getItem("locale");
      return saved || "id";
    } catch {
      null;
      return "id";
    }
  });
  const { data } = useQuery({ queryKey: ["localization"], queryFn: getLocalization });

  const dict = useMemo(() => {
    const d = {};
    (data ?? []).forEach((item) => {
      const loc = item.locale;
      const ns = item.namespace;
      const k = item.key;
      const v = item.value;
      if (!d[loc]) d[loc] = {};
      if (!d[loc][ns]) d[loc][ns] = {};
      d[loc][ns][k] = v;
    });
    return d;
  }, [data]);

  const translate = useMemo(() => {
    return (ns, key, fallback) => {
      const v = dict?.[locale]?.[ns]?.[key];
      return v ?? fallback ?? key;
    };
  }, [dict, locale]);

  const value = useMemo(() => ({ locale, setLocale, t: translate }), [locale, translate]);

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch {
      null;
    }
  }, [locale]);

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
}

