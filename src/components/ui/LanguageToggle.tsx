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
    <div className="inline-flex h-12 items-center gap-2 rounded-xl border px-3">
      <span className="hidden text-sm text-[var(--text-soft)] md:block">{label}</span>
      <button
        type="button"
        onClick={() => onLocaleChange("es")}
        className={`h-8 min-w-10 rounded-md px-3 text-sm font-semibold leading-none transition ${
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
        className={`h-8 min-w-10 rounded-md px-3 text-sm font-semibold leading-none transition ${
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
