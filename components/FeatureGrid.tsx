import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export default function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    // gap-px over a gray background renders the thin vertical & horizontal divider lines
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="group bg-white p-8 transition-colors duration-300">
            <Icon className="w-8 h-8 mb-5 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
            <h3 className="text-lg font-bold mb-2 text-primary inline-block origin-left transition-all duration-300 group-hover:text-accent group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
