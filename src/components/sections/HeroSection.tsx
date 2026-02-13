import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Locale, ProfileData, PortfolioCopy } from "@/types/site";

interface HeroSectionProps {
  profile: ProfileData;
  locale: Locale;
  copy: PortfolioCopy["hero"];
}

export const HeroSection = ({ profile, locale, copy }: HeroSectionProps) => {
  const showAvatarLabel = profile.avatar.includes("placeholder");

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
                {profile.name}
              </h1>
              <p className="mt-3 text-xl text-[var(--accent-soft)]">{profile.title}</p>
              <p className="mt-6 max-w-2xl leading-relaxed text-[var(--text-soft)]">
                {copy.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="button-primary">
                  {copy.projectsCta}
                </a>
                <a href={profile.cv[locale]} download className="button-secondary">
                  {copy.cvCta}
                </a>
              </div>
              <p className="mt-4 font-mono text-[11px] text-[var(--text-soft)]">
                {copy.cvHint}
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="glass-panel card-hover mx-auto flex w-full max-w-sm flex-col items-center rounded-2xl p-6">
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border md:h-48 md:w-48">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} profile photo`}
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
              <p className="mt-4 text-center text-sm leading-relaxed text-[var(--text-soft)]">
                {copy.profileCardText}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
