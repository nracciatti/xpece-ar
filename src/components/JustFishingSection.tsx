import React from "react";

type Props = {
  src: string; 
  title: string; 
  subtitle?: string; 
  emphasize?: string;
  overlayOpacity?: number; 
  height?: "md" | "lg" | "xl"; 
};

export function JustFishingSection({
  src,
  title,
  subtitle,
  emphasize = "",
  overlayOpacity = 0.45,
  height = "lg",
}: Props) {
  const h =
    height === "md"
      ? "h-[56svh] md:h-[64svh]"
      : height === "xl"
      ? "h-[78svh] md:h-[86svh]"
      : "h-[64svh] md:h-[74svh]";

  const [before, under, after] = splitEmphasis(title, emphasize);

  return (
    <section className="relative bg-white">
      <div
        className={[
          "relative overflow-hidden rounded-[28px] mx-3 md:mx-8",
          h,
        ].join(" ")}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h2 className="text-white font-semibold tracking-tight leading-[1.05] text-3xl sm:text-4xl md:text-6xl">
              {before}
              {under ? (
                <span className="relative inline-block">
                  {under}
                  <span className="absolute -inset-x-3 top-1/2 -translate-y-1/2 h-[1.15em] rounded-full border-2 border-[#d7b08c]/90" />
                </span>
              ) : null}
              {after}
            </h2>

            {subtitle ? (
              <p className="mt-5 text-white/90 text-base sm:text-lg md:text-xl">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function splitEmphasis(full: string, emphasize: string) {
  if (!emphasize) return [full, "", ""];
  const idx = full.toLowerCase().indexOf(emphasize.toLowerCase());
  if (idx === -1) return [full, "", ""];
  return [
    full.slice(0, idx),
    full.slice(idx, idx + emphasize.length),
    full.slice(idx + emphasize.length),
  ] as const;
}
