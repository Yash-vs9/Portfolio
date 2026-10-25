export default function SectionHead({ title, sub }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-3 mb-6">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
        {title}
      </h2>
      {sub && (
        <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">
          {sub}
        </span>
      )}
    </div>
  );
}
