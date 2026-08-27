interface PlaceholderProps {
  label: string;
  aspect?: "square" | "landscape" | "portrait";
  dark?: boolean;
  className?: string;
}

export default function Placeholder({ label, aspect = "landscape", dark = false, className = "" }: PlaceholderProps) {
  const aspectClass = aspect === "square" ? "aspect-square" : aspect === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";
  return (
    <div
      role="img"
      aria-label={label.replaceAll("[", "").replaceAll("]", "")}
      data-testid={`placeholder-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
      className={`placeholder-grid ${aspectClass} flex items-center justify-center rounded-sm border border-dashed px-6 text-center ${dark ? "border-[#f7f1e8]/35 bg-[#820000] text-[#f7f1e8]/75" : "border-[#a80000]/25 bg-[#eadfd2] text-[#8d302c]"} ${className}`}
    >
      <span className="max-w-[16rem] text-[10px] font-semibold uppercase tracking-[0.18em]">{label}</span>
    </div>
  );
}