import Image from "next/image";
import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Locale, ProfileData, PortfolioCopy } from "@/types/site";

interface HeroSectionProps {
  name: string;
  profile: ProfileData;
  locale: Locale;
  copy: PortfolioCopy["hero"];
}

export const HeroSection = ({ name, profile, locale, copy }: HeroSectionProps) => {
  const showAvatarLabel = profile.avatar.includes("placeholder");
  const highlightedOnce = new Set<string>();
  const highlightRules =
    locale === "en"
      ? [
          { key: "scalable", pattern: /\bscalable\b/gi, firstOnly: true },
          { key: "production-ready", pattern: /\bproduction-ready\b/gi, firstOnly: false },
          {
            key: "continuously-learning",
            pattern: /\bcontinuously learning\b/gi,
            firstOnly: false,
          },
          { key: "solid-architecture", pattern: /\bsolid architecture\b/gi, firstOnly: false },
        ]
      : locale === "es"
        ? [
            { key: "escalables", pattern: /\bescalables\b/gi, firstOnly: true },
            {
              key: "listos-para-produccion",
              pattern: /\blistos para producción\b/gi,
              firstOnly: false,
            },
            {
              key: "aprendizaje-continuo",
              pattern: /\baprendizaje continuo\b/gi,
              firstOnly: false,
            },
            {
              key: "arquitectura-solida",
              pattern: /\barquitectura sólida\b/gi,
              firstOnly: false,
            },
          ]
      : [];

  const highlightParagraph = (text: string): ReactNode => {
    if (!highlightRules.length) return text;

    const content: ReactNode[] = [];
    let pointer = 0;

    while (pointer < text.length) {
      let bestMatch:
        | {
            start: number;
            end: number;
            key: string;
            firstOnly: boolean;
          }
        | undefined;

      for (const rule of highlightRules) {
        if (rule.firstOnly && highlightedOnce.has(rule.key)) continue;

        rule.pattern.lastIndex = pointer;
        const currentMatch = rule.pattern.exec(text);
        if (!currentMatch) continue;

        const start = currentMatch.index;
        const end = start + currentMatch[0].length;

        if (!bestMatch || start < bestMatch.start) {
          bestMatch = { start, end, key: rule.key, firstOnly: rule.firstOnly };
        }
      }

      if (!bestMatch) {
        content.push(text.slice(pointer));
        break;
      }

      if (bestMatch.start > pointer) {
        content.push(text.slice(pointer, bestMatch.start));
      }

      const highlightedText = text.slice(bestMatch.start, bestMatch.end);
      content.push(
        <span key={`${bestMatch.key}-${bestMatch.start}`} className="font-semibold text-[var(--accent)]">
          {highlightedText}
        </span>,
      );

      if (bestMatch.firstOnly) {
        highlightedOnce.add(bestMatch.key);
      }

      pointer = bestMatch.end;
    }

    return content;
  };

  return (
    <section id="home" className="section-shell pt-28 md:pt-32">
      <div className="glass-panel relative overflow-hidden rounded-3xl">
        <Image
          src={profile.heroBackground}
          alt="Portfolio hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--bg)_88%,transparent)] via-[color-mix(in_srgb,var(--bg)_75%,transparent)] to-[color-mix(in_srgb,var(--bg)_40%,transparent)]" />
        <div className="grid-overlay absolute inset-0 opacity-25" />

        <div className="relative z-10 grid gap-10 p-7 md:p-12 lg:grid-cols-[1.3fr_0.8fr]">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-4 inline-flex rounded-full border px-3 py-1 text-xs tracking-[0.2em] text-[var(--accent-soft)]">
                {copy.badge}
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {name}
              </h1>
              <p className="mt-3 text-xl text-[var(--accent-soft)]">{profile.title}</p>
              <div className="mt-6 max-w-2xl space-y-3">
                {copy.descriptionParagraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-[var(--text-soft)]">
                    {highlightParagraph(paragraph)}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="button-primary">
                  {copy.projectsCta}
                </a>
                <a href={profile.cv[locale]} download className="button-secondary">
                  {copy.cvCta}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="glass-panel card-hover mx-auto flex w-full max-w-sm flex-col items-center rounded-2xl p-6">
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border md:h-48 md:w-48">
                <Image
                  src={profile.avatar}
                  alt={`${name} profile photo`}
                  fill
                  className="object-cover"
                />
                {showAvatarLabel ? (
                  <span className="terminal-label absolute bottom-2 left-1/2 -translate-x-1/2">
                    {copy.avatarPlaceholder}
                  </span>
                ) : null}
              </div>
              <span className="mt-5 terminal-label">{copy.roleLine}</span>
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent-soft)]">
                  {copy.focusTitle}
                </p>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-[var(--text-soft)]">
                  {copy.focusItems.map((item, index) => (
                    <li key={item}>
                      <span>{item}</span>
                      {index < copy.focusItems.length - 1 ? (
                        <span className="block text-[var(--accent-soft)]" aria-hidden="true">
                          -
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
