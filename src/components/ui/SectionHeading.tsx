interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({
  kicker,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <header className="mb-9 max-w-3xl">
      <p className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs tracking-[0.2em] text-[var(--accent-soft)]">
        {kicker}
      </p>
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 leading-relaxed text-[var(--text-soft)]">{description}</p>
      ) : null}
    </header>
  );
};
