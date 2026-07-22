import Reveal from "./Reveal";

export default function SectionHead({ num, title, sub }) {
  return (
    <Reveal>
      <div className="mb-12 flex items-end justify-between gap-6 border-b border-white/10 pb-5 lg:mb-20">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-lime">{num}</span>
          <h2
            style={{ fontFamily: "var(--font-bricolage)" }}
            className="text-4xl font-bold tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          >
            {title}
          </h2>
        </div>
        {sub && (
          <span className="hidden max-w-[22ch] text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-bone-dim sm:block">
            {sub}
          </span>
        )}
      </div>
    </Reveal>
  );
}
