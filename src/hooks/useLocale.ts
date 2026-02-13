"use client";

import { useEffect, useState } from "react";
import { Locale } from "@/types/site";

const STORAGE_KEY = "portfolio_locale";

const isLocale = (value: string | null): value is Locale => {
  return value === "es" || value === "en";
};

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(storedLocale)) {
      const frameId = window.requestAnimationFrame(() => {
        setLocale(storedLocale);
      });
      return () => window.cancelAnimationFrame(frameId);
    }

    const navigatorLocale = window.navigator.language.toLowerCase().startsWith("es")
      ? "es"
      : "en";
    const frameId = window.requestAnimationFrame(() => {
      setLocale(navigatorLocale);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return {
    locale,
    setLocale,
  };
};
