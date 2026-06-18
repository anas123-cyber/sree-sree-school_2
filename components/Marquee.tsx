import { Sparkles } from "lucide-react";

export default function Marquee({ items }: { items: string[] }) {
  // Duplicate the list so the -50% translate loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask group/marquee w-full overflow-hidden py-4">
      <div className="marquee-track items-center gap-3">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="text-lg md:text-xl font-serif font-semibold text-primary/70 whitespace-nowrap">
              {item}
            </span>
            <Sparkles className="w-4 h-4 text-accent shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
