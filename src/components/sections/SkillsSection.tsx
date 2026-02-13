import { IconType } from "react-icons";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillItem, SkillIconKey, PortfolioCopy } from "@/types/site";

interface SkillsSectionProps {
  copy: PortfolioCopy["skills"];
  skills: SkillItem[];
}

const skillIconMap: Record<SkillIconKey, IconType> = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  react: SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  postgresql: SiPostgresql,
  tailwind: SiTailwindcss,
  python: SiPython,
};

export const SkillsSection = ({ copy, skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker={copy.kicker}
          title={copy.title}
          description={copy.description}
        />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skillIconMap[skill.icon];

          return (
            <Reveal key={skill.name} delay={index * 60}>
              <article className="glass-panel card-hover flex items-center gap-4 rounded-xl p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-[var(--accent-soft)]">
                  <Icon size={22} />
                </span>
                <h3 className="text-sm font-semibold tracking-wide">{skill.name}</h3>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
