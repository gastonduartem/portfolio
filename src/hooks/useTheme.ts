"use client";

import { useEffect, useState } from "react";
import { Theme } from "@/types/site";

const STORAGE_KEY = "portfolio_theme";

const isTheme = (value: string | null): value is Theme => {
  return value === "dark" || value === "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (isTheme(storedTheme)) {
      const frameId = window.requestAnimationFrame(() => {
        setTheme(storedTheme);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

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
