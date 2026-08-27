interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, light = false, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`}>
      <p data-testid={`section-eyebrow-${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className={`mb-4 text-[10px] font-bold uppercase tracking-[0.28em] ${light ? "text-[#e7c36d]" : "text-[#a80000]"}`}>{eyebrow}</p>
      <h2 data-testid={`section-heading-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className={`font-display text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl ${light ? "text-[#fffaf2]" : "text-[#241b18]"}`}>{title}</h2>
      {description && <p data-testid={`section-description-${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className={`mt-6 max-w-2xl text-sm leading-7 md:text-base ${align === "center" ? "mx-auto" : ""} ${light ? "text-[#f7f1e8]/75" : "text-[#756862]"}`}>{description}</p>}
    </div>
  );
}