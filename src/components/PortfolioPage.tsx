"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Loader } from "@/components/ui/Loader";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { translations } from "@/data/translations";
import { useLocale } from "@/hooks/useLocale";
import { useTheme } from "@/hooks/useTheme";

export const PortfolioPage = () => {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShowLoader(false), 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const copy = translations[locale];
  const displayName = locale === "es" ? "Gast\u00f3n Duarte" : "Gaston Duarte";

  if (showLoader) {
    return <Loader text={copy.loader.text} theme={theme} />;
  }

  return (
    <div className="relative overflow-x-clip">
      <div className="grid-overlay pointer-events-none fixed inset-0 z-0 opacity-15" />
      <Navbar
        name={displayName}
        nav={copy.nav}
        locale={locale}
        onLocaleChange={setLocale}
        theme={theme}
        onThemeToggle={toggleTheme}
        controls={copy.controls}
        linkedin={profile.linkedin}
        github={profile.github}
      />
      <main className="relative z-10">
        <HeroSection
          name={displayName}
          profile={profile}
          locale={locale}
          copy={copy.hero}
        />
        <SkillsSection copy={copy.skills} skills={skills} />
        <ProjectsSection locale={locale} copy={copy.projects} projects={projects} />
        <ContactSection copy={copy.contact} profile={profile} />
      </main>
      <footer className="border-t py-6 text-center text-sm text-[var(--text-soft)]">
        {copy.footer}
      </footer>
    </div>
  );
};
