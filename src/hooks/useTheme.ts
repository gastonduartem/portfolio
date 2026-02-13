"use client";

import { useEffect, useState } from "react";
import { Theme } from "@/types/site";

const STORAGE_KEY = "portfolio_theme";

const isTheme = (value: string | null): value is Theme => {
  return value === "dark" || value === "light";
};

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  return isTheme(storedTheme) ? storedTheme : "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return {
    theme,
    toggleTheme,
  };
};
