import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Locale, PortfolioCopy, ProjectItem } from "@/types/site";

interface ProjectsSectionProps {
  locale: Locale;
  copy: PortfolioCopy["projects"];
  projects: ProjectItem[];
}

export const ProjectsSection = ({ locale, copy, projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          kicker={copy.kicker}
          title={copy.title}
          description={copy.description}
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 70}>
            <article className="glass-panel card-hover rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                {project.description[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-2">
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    {copy.openProject}
                  </a>
                ) : (
                  <>
                    <span className="button-secondary cursor-not-allowed opacity-70">
                      {copy.openProject}
                    </span>
                    <p className="font-mono text-[11px] text-[var(--text-soft)]">
                      {copy.missingProjectUrl}
                    </p>
                  </>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
