import Link from "next/link";
import { Reviews } from "@/components/Reviews";
import { TrustBar } from "@/components/TrustBar";
import { UnderwaterSection } from "@/components/UnderWaterSection";
import { SliderSection } from "@/components/SliderSection";
import { Reveal } from "@/components/Reveal";
import { SaltwaterSection } from "@/components/SaltwaterSection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { JustFishingSection } from "@/components/JustFishingSection";
import FeaturedProduct from "@/components/Product";
// import { HeroVideo } from "@/components/Hero";
import { ProductHero } from "@/components/ProductHero";

export default function HomePage() {
  return (
    <main>
      {/* <Reveal>
        <HeroVideo
          videoSrc="/videos/XPECE_HERO_VID.mp4"
          posterSrc="/images/hero-poster.jpg"
          primaryCtaHref="#productos"
          primaryCtaLabel="Ver productos"
          secondaryCtaHref="https://tu-tienda.empretiendanube.com" // cambialo cuando lo tengas
          secondaryCtaLabel="Comprar"
        />
      </Reveal> */}

      {/* lo demás… */}
      {/* </main>

      {/* HERO */}
      <Reveal>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,212,255,.35), transparent 60%)",
              }}
            />
            <div
              className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,123,255,.25), transparent 60%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 relative">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-xs text-[color:var(--muted)]">
                  Representantes oficiales en Argentina
                </p>

                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Drones de pesca{" "}
                  <span className="text-[color:var(--primary)]">XPece</span>{" "}
                  para llevar tu experiencia al siguiente nivel.
                </h1>

                <p className="text-[color:var(--muted)] md:text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consectetur hic temporibus, dolore qui, minima suscipit sed cupiditate iste porro, excepturi possimus id iusto illum.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/xpece-one-bundle"
                    className="rounded-xl bg-[color:var(--primary)] px-6 py-3 text-center font-semibold text-black hover:opacity-90 transition"
                  >
                    XPece ONE Bundle
                  </Link>
                  <Link
                    href="/nosotros"
                    className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-center font-semibold hover:opacity-90 transition"
                  >
                    Conocé más
                  </Link>
                </div>
              </div>

              {/* Video/Imagen placeholder responsive */}
              <div className="relative">
                <div className="relative w-full aspect-video overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-[var(--shadow)]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/XPECE_HERO_VID.mp4" type="video/mp4" />
                    Tu navegador no soporta video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <TrustBar />
      </Reveal>

      <Reveal>
        <UnderwaterSection />
      </Reveal>

      <Reveal>
        <SliderSection
          autoPlayMs={6500}
          showArrows
          showDots
          slides={[
            {
              kind: "video",
              src: "/videos/XPECE_VIDE_SLIDE.mp4",
              title: "Cargue carnada de hasta 3kg.",
            },
            {
              kind: "image",
              src: "/images/IMG_SLIDE.webp",
              title: "Carnada pequeña y grande.",
            },
            {
              kind: "image",
              src: "/images/bait_release_switch.webp",
              title: "Soltar la carnada, facil.",
            },
          ]}
        />
      </Reveal>

      <Reveal>
        <SaltwaterSection
          topTitle={"28 Minutos de vuelo"}
          mediaSrc="/images/ready_for_elements.webp" // placeholder
          title="Listo para agua salada"
          body="Xpece es impermeable y está protegido contra el agua salada."
          ctaLabel="Comprar ahora"
          ctaHref="https://tu-tienda-nube.com" // después lo cambiás
        />
      </Reveal>

      <ParallaxSection
        src="/videos/XPECE_VID_PARAL.mp4"
        title="Laser visible"
        subtitle="Ver tu dron de noche: facil."
        heightVh={210}
        startMaxWidthPx={1100}
        startRadiusPx={26}
      />
      <Reveal>
        {/* REVIEWS */}
        <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
          <Reviews />
        </section>
      </Reveal>

      <Reveal>
        <JustFishingSection
          src="/videos/XPECE_JUST_FISH.mp4"
          title="Sin Apps. Sin Calibracion. Solo Pescar."
          emphasize="Pescar."
          subtitle="Simple. Porque no se trata del cambio, se trata de pescar más."
          overlayOpacity={0.45}
          height="lg"
        />
      </Reveal>

      <Reveal>
        <FeaturedProduct
          imageSrc="/images/XPECE_Bundle.webp"
          buyUrl="https://TU-TIENDANUBE.com/xpece-one-bundle"
        />
      </Reveal>

      <Reveal>
        {/* CTA FINAL */}
        <section className="mt-12 md:mt-16 bg-[#f7f7f7] py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    ¿Listo para comprar?
                  </h3>
                  <p className="mt-2 text-black/60 max-w-xl">
                    Te llevás el bundle completo, soporte en Argentina y
                    garantía local.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a className="inline-flex justify-center rounded-full bg-[#5bb000] px-6 py-3 text-white font-semibold hover:bg-[#4e9600] transition">
                    Ir a Tienda
                  </a>
                  <a className="inline-flex justify-center rounded-full bg-black/5 px-6 py-3 font-semibold text-black hover:bg-black/10 transition">
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
