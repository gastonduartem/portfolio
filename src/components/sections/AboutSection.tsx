"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCopy } from "@/types/site";

interface AboutSectionProps {
  copy: PortfolioCopy["about"];
}

export const AboutSection = ({ copy }: AboutSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker={copy.kicker}
          title={copy.title}
          description={copy.summary}
        />
        <article className="glass-panel rounded-2xl p-6 md:p-8">
          {isExpanded ? (
            <p className="leading-relaxed text-[var(--text-soft)]">{copy.full}</p>
          ) : null}
          <button
            type="button"
            onClick={() => setIsExpanded((currentState) => !currentState)}
            className="button-secondary mt-6"
          >
            {isExpanded ? copy.showLess : copy.readMore}
          </button>
        </article>
      </Reveal>
    </section>
  );
};
