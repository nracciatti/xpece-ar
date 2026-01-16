export function UnderwaterSection() {
  return (
    <section className="bg-[color:var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-3xl bg-black">
            <div className="aspect-[3/4] md:aspect-square">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="/videos/XPECE_UNDERWTR_SECTION.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Vola y mira{" "}
              <span className="relative inline-block">
                debajo del agua
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-[#f2c79b] rounded-full opacity-70" />
              </span>
              .
            </h2>

            <p className="max-w-md text-base text-[color:var(--muted)]">
              Vola y mira debajo del agua desde la superficie.
            </p>

            <p className="max-w-md text-base text-[color:var(--muted)]">
              Transmite video al control remoto, resistente al agua y visible
              incluso bajo el sol.
            </p>

            <div className="pt-4">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/remote_control_girl.webp"
                  alt="Waterproof remote screen"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
