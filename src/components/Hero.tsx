type HeroVideoProps = {
  videoSrc: string; 
  posterSrc?: string; 
  primaryCtaHref?: string; 
  primaryCtaLabel?: string; 
  secondaryCtaHref?: string; 
  secondaryCtaLabel?: string; 
};

export function HeroVideo({
  videoSrc,
  posterSrc = "/images/hero-poster.jpg",
  primaryCtaHref = "#productos",
  primaryCtaLabel = "Ver productos",
  secondaryCtaHref = "#",
  secondaryCtaLabel = "Comprar",
}: HeroVideoProps) {
  return (
    <section className="bg-white">
      <div className="relative w-full overflow-hidden bg-black">
        <div className="relative h-[52vh] min-h-[340px] md:h-[70vh] md:min-h-[520px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div className="absolute inset-x-0 bottom-5 md:bottom-7">
            <div className="mx-auto max-w-6xl px-4">
              <div className="flex items-center justify-center gap-3">
                <a
                  href={primaryCtaHref}
                  className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[color:var(--fg)] shadow-[var(--shadow-sm)] backdrop-blur hover:bg-white transition"
                >
                  {primaryCtaLabel}
                </a>

                <a
                  href={secondaryCtaHref}
                  target={
                    secondaryCtaHref?.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    secondaryCtaHref?.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="rounded-full bg-[color:var(--primary)] px-5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-sm)] hover:bg-[color:var(--primary-hover)] transition"
                >
                  {secondaryCtaLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
