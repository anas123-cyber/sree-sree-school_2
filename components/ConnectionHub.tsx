import Image from "next/image";
import { Clock, GraduationCap, Trophy, Sparkles, BookOpen, HeartHandshake } from "lucide-react";

type Node = {
  icon: typeof Clock;
  tile: string;
  title: string;
  desc: string;
  pos: string; // desktop absolute placement
};

const nodes: Node[] = [
  { icon: Clock,          tile: "bg-accent",     title: "38+ Years of Excellence", desc: "A trusted legacy since 1987",      pos: "top-6 left-2" },
  { icon: GraduationCap,  tile: "bg-blue-500",   title: "Expert Educators",        desc: "100+ dedicated teachers",         pos: "top-1/2 -translate-y-1/2 left-0" },
  { icon: Trophy,         tile: "bg-teal-500",   title: "Proven Results",          desc: "Top SSC board ranks every year",  pos: "bottom-6 left-2" },
  { icon: Sparkles,       tile: "bg-purple-500", title: "Holistic Growth",         desc: "Yoga, arts, sports & values",     pos: "top-6 right-2" },
  { icon: BookOpen,       tile: "bg-rose-500",   title: "Strong Academics",        desc: "Primary to High School",          pos: "top-1/2 -translate-y-1/2 right-0" },
  { icon: HeartHandshake, tile: "bg-green-500",  title: "Caring Campus",           desc: "A safe, nurturing environment",   pos: "bottom-6 right-2" },
];

// center-edge -> node connector lines (viewBox 0 0 1200 560)
const lines = [
  "M470,235 L300,90",
  "M460,280 L250,280",
  "M470,325 L300,470",
  "M730,235 L900,90",
  "M740,280 L950,280",
  "M730,325 L900,470",
];

// Mobile: same hub-and-spoke arrangement, scaled into a 360x440 viewBox.
// Each node sits at the matching % position below; lines run from the center.
const mobilePos = [
  { left: "27%", top: "15%" }, // top-left
  { left: "18%", top: "50%" }, // mid-left
  { left: "27%", top: "85%" }, // bottom-left
  { left: "73%", top: "15%" }, // top-right
  { left: "82%", top: "50%" }, // mid-right
  { left: "73%", top: "85%" }, // bottom-right
];

const mobileLines = [
  "M180,220 L97,66",
  "M180,220 L65,220",
  "M180,220 L97,374",
  "M180,220 L263,66",
  "M180,220 L295,220",
  "M180,220 L263,374",
];

function CenterCard({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-white rounded-xl shadow-2xl px-2 py-2 flex flex-col items-center text-center gap-1">
        <div className="relative w-9 h-9 flex-shrink-0">
          <Image src="/logo.jpg" alt="Sree Sree Educational Society logo" fill className="object-contain" />
        </div>
        <div className="leading-none">
          <p className="font-bold text-[11px] text-brand-red leading-none">
            <span className="font-pragati">Sr</span>
            <span className="font-serif">ee Sree</span>
          </p>
          <p className="text-[6px] font-semibold uppercase tracking-[0.12em] text-brand-blue mt-0.5">Educational Society</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3">
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image src="/logo.jpg" alt="Sree Sree Educational Society logo" fill className="object-contain" />
      </div>
      <div className="leading-tight">
        <p className="font-bold text-lg text-brand-red">
          <span className="font-pragati">Sr</span>
          <span className="font-serif">ee Sree</span>
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">Educational Society</p>
      </div>
    </div>
  );
}

function NodeCard({ node, compact = false }: { node: Node; compact?: boolean }) {
  const Icon = node.icon;
  if (compact) {
    return (
      <div className="flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-lg px-1.5 py-1.5 shadow-lg">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${node.tile}`}>
          <Icon className="w-3.5 h-3.5 text-white" />
        </div>
        <p className="text-white text-[10px] font-semibold leading-tight min-w-0 break-words">{node.title}</p>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-lg">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${node.tile}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="leading-tight">
        <p className="text-white text-sm font-semibold">{node.title}</p>
        <p className="text-gray-400 text-xs">{node.desc}</p>
      </div>
    </div>
  );
}

export default function ConnectionHub() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-slate-900 to-[#0b1730] p-6 md:p-10 border border-white/10 shadow-2xl">
      {/* faint grid background */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* soft accent glow behind the center */}
      <div className="glow-blob bg-accent/20 w-96 h-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* ---------- Desktop: hub with animated connectors ---------- */}
      <div className="relative hidden lg:block h-[560px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {lines.map((d, i) => (
            <g key={i}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
              <path
                d={d}
                fill="none"
                stroke="#F59E0B"
                strokeWidth={2.5}
                strokeLinecap="round"
                pathLength={100}
                vectorEffect="non-scaling-stroke"
                className="beam-line"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            </g>
          ))}
        </svg>

        {/* center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <CenterCard />
        </div>

        {/* surrounding nodes */}
        {nodes.map((node) => (
          <div key={node.title} className={`absolute z-10 w-[230px] ${node.pos}`}>
            <NodeCard node={node} />
          </div>
        ))}
      </div>

      {/* ---------- Mobile / tablet: same hub, scaled down ---------- */}
      <div className="relative lg:hidden mx-auto w-full max-w-[400px] aspect-[36/44]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 360 440"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {mobileLines.map((d, i) => (
            <g key={i}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
              <path
                d={d}
                fill="none"
                stroke="#F59E0B"
                strokeWidth={2}
                strokeLinecap="round"
                pathLength={100}
                vectorEffect="non-scaling-stroke"
                className="beam-line"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            </g>
          ))}
        </svg>

        {/* center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[25%] max-w-[96px]">
          <CenterCard compact />
        </div>

        {/* surrounding nodes */}
        {nodes.map((node, i) => (
          <div
            key={node.title}
            className="absolute z-10 w-[34%] max-w-[120px] -translate-x-1/2 -translate-y-1/2"
            style={mobilePos[i]}
          >
            <NodeCard node={node} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
