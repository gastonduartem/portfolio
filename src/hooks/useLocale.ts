"use client";

import { useEffect, useState } from "react";
import { Locale } from "@/types/site";

const STORAGE_KEY = "portfolio_locale";

const isLocale = (value: string | null): value is Locale => {
  return value === "es" || value === "en";
};

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "en";

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(storedLocale)) return storedLocale;

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return {
    locale,
    setLocale,
  };
};
