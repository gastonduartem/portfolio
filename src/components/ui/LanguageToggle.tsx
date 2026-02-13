import { Locale } from "@/types/site";

interface LanguageToggleProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  label: string;
}

export const LanguageToggle = ({
  locale,
  onLocaleChange,
  label,
}: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border px-2 py-1.5">
      <span className="hidden text-xs text-[var(--text-soft)] md:block">{label}</span>
      <button
        type="button"
        onClick={() => onLocaleChange("es")}
        className={`rounded px-2 py-1 text-xs font-semibold transition ${
          locale === "es"
            ? "bg-[var(--accent)] text-white"
            : "text-[var(--text-soft)] hover:bg-[color-mix(in_srgb,var(--panel)_72%,transparent)]"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => onLocaleChange("en")}
        className={`rounded px-2 py-1 text-xs font-semibold transition ${
          locale === "en"
            ? "bg-[var(--accent)] text-white"
            : "text-[var(--text-soft)] hover:bg-[color-mix(in_srgb,var(--panel)_72%,transparent)]"
        }`}
      >
        EN
      </button>
    </div>
  );
};
