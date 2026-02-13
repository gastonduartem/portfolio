import { Theme } from "@/types/site";
import { LuMoonStar, LuSun } from "react-icons/lu";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  darkLabel: string;
  lightLabel: string;
}

export const ThemeToggle = ({
  theme,
  onToggle,
  darkLabel,
  lightLabel,
}: ThemeToggleProps) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs transition hover:border-[var(--accent)]"
      aria-label={isDark ? lightLabel : darkLabel}
    >
      {isDark ? <LuMoonStar size={14} /> : <LuSun size={14} />}
      <span>{isDark ? darkLabel : lightLabel}</span>
    </button>
  );
};
