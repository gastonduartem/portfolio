import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCopy, ProfileData } from "@/types/site";

interface ContactSectionProps {
  copy: PortfolioCopy["contact"];
  profile: ProfileData;
}

export const ContactSection = ({ copy, profile }: ContactSectionProps) => {
  const linkedinText = profile.linkedin.replace(/^https?:\/\/(www\.)?/i, "");
  const githubText = profile.github.replace(/^https?:\/\/(www\.)?/i, "");

  return (
    <section id="contact" className="section-shell pb-28">
      <Reveal>
        <SectionHeading
          kicker={copy.kicker}
          title={copy.title}
          description={copy.description}
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        <Reveal delay={40}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-panel card-hover flex min-h-28 items-center gap-3 rounded-xl p-5"
          >
            <FaLinkedin size={18} className="text-[var(--accent-soft)]" />
            <div>
              <p className="font-medium">{copy.linkedin}</p>
              <p className="text-sm text-[var(--text-soft)]">{linkedinText}</p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={110}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass-panel card-hover flex min-h-28 items-center gap-3 rounded-xl p-5"
          >
            <FaGithub size={18} className="text-[var(--accent-soft)]" />
            <div>
              <p className="font-medium">{copy.github}</p>
              <p className="text-sm text-[var(--text-soft)]">{githubText}</p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={180}>
          <a
            href={`mailto:${profile.email}`}
            className="glass-panel card-hover flex min-h-28 items-center gap-3 rounded-xl p-5"
          >
            <FaEnvelope size={18} className="text-[var(--accent-soft)]" />
            <div>
              <p className="font-medium">{copy.email}</p>
              <p className="break-all text-sm text-[var(--text-soft)]">
                {profile.email}
              </p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
