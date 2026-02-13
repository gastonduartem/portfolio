"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCopy } from "@/types/site";

interface AboutSectionProps {
  copy: PortfolioCopy["about"];
}

export const AboutSection = ({ copy }: AboutSectionProps) => {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading kicker={copy.kicker} title={copy.title} />
        <article className="mt-6 space-y-5 md:mt-8 md:space-y-6">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-5xl leading-relaxed text-[var(--text-soft)]">
              {paragraph}
            </p>
          ))}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent-soft)]">
              {copy.focusTitle}
            </p>
            <ul className="flex flex-wrap items-center gap-y-2 text-base font-medium text-[var(--text-soft)] md:text-lg">
              {copy.focusItems.map((item, index) => (
                <li key={item} className="flex items-center">
                  {index > 0 ? (
                    <span className="mx-3 text-[var(--accent-soft)]" aria-hidden="true">
                      -
                    </span>
                  ) : null}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </section>
  );
};
