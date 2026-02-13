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
      className="inline-flex h-12 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition hover:border-[var(--accent)]"
      aria-label={isDark ? lightLabel : darkLabel}
    >
      {isDark ? <LuMoonStar size={16} /> : <LuSun size={16} />}
      <span className="hidden sm:inline">{isDark ? darkLabel : lightLabel}</span>
    </button>
  );
};
