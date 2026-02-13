import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Locale, Theme } from "@/types/site";

interface NavbarProps {
  name: string;
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  theme: Theme;
  onThemeToggle: () => void;
  controls: {
    dark: string;
    light: string;
    language: string;
  };
  linkedin: string;
  github: string;
}

export const Navbar = ({
  name,
  nav,
  locale,
  onLocaleChange,
  theme,
  onThemeToggle,
  controls,
  linkedin,
  github,
}: NavbarProps) => {
  const links = [
    { href: "#home", label: nav.home },
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="glass-panel sticky top-0 z-50 border-b">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo Gaston Duarte"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="hidden text-sm font-semibold sm:inline md:text-base">
              {name}
            </span>
          </a>

          <div className="flex items-center gap-2">
            <LanguageToggle
              locale={locale}
              onLocaleChange={onLocaleChange}
              label={controls.language}
            />
            <ThemeToggle
              theme={theme}
              onToggle={onThemeToggle}
              darkLabel={controls.dark}
              lightLabel={controls.light}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <nav className="flex gap-1 overflow-x-auto pr-2">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-[var(--text-soft)] transition hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md border p-2 text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
            >
              <FaLinkedin size={14} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md border p-2 text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
            >
              <FaGithub size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
