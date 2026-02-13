import Image from "next/image";
import { Theme } from "@/types/site";

interface LoaderProps {
  text: string;
  theme: Theme;
}

export const Loader = ({ text, theme }: LoaderProps) => {
  const logoSrc =
    theme === "dark" ? "/images/logo-oscuro.png" : "/images/logo-claro.png";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)] px-6">
      <div className="glass-panel boot-fade w-full max-w-md rounded-2xl p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="relative h-8 w-14 shrink-0 overflow-hidden">
            <Image
              src={logoSrc}
              alt="Logo Gaston Duarte"
              fill
              className="object-cover"
              sizes="56px"
            />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
            Boot Sequence
          </span>
        </div>
        <p className="font-mono text-sm text-[var(--text)]">
          {text}
          <span className="boot-caret ml-1">|</span>
        </p>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full border">
          <span className="load-progress block h-full w-full rounded-full bg-[var(--accent)]" />
        </div>
      </div>
    </div>
  );
};
