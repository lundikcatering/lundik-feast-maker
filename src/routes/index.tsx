import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sparkles, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import wedding from "@/assets/wedding.jpg";
import corporate from "@/assets/corporate.jpg";
import privateChef from "@/assets/private.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lundik Catering Limited — Seasonal catering, beautifully served" },
      {
        name: "description",
        content:
          "Award-worthy catering for weddings, corporate events and private dinners. Seasonal menus, locally sourced ingredients, exceptional service.",
      },
      { property: "og:title", content: "Lundik Catering Limited" },
      {
        property: "og:description",
        content:
          "Seasonal catering for weddings, corporate events and private dinners.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative z-10">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Seasonal · Sourced · Served
            </span>
            <h1 className="mt-6 text-balance text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Catering crafted for moments worth remembering.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Lundik Catering Limited brings considered, seasonal menus to weddings,
              boardrooms and private tables across the UK — combining honest
              ingredients with quietly confident service.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm shadow-soft hover:opacity-95 transition"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm hover:border-primary hover:text-primary transition"
              >
                Explore our services
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
              {[
                { n: "12+", l: "Years catering" },
                { n: "400+", l: "Events served" },
                { n: "100%", l: "Locally sourced" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-primary">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 bg-gradient-warm opacity-20 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elevated">
              <img
                src={hero}
                alt="Lundik catering spread on a terracotta and sage table"
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card border border-border/60 rounded-sm p-5 max-w-[220px] shadow-soft">
              <div className="font-display text-lg leading-tight">
                Farm to table, by the season.
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Menus designed weekly with regional growers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-muted/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Leaf,
              title: "Seasonal sourcing",
              body: "We build menus around what's growing now — from regional farms, fishmongers and producers we know by name.",
            },
            {
              icon: Sparkles,
              title: "Quiet excellence",
              body: "Service that anticipates, never intrudes. Our team blends into the room while elevating every detail.",
            },
            {
              icon: Users,
              title: "Made for your guests",
              body: "Every brief is bespoke. Dietary care, cultural traditions and personal stories shape each menu we serve.",
            },
          ].map((f) => (
            <div key={f.title} className="group">
              <div className="h-12 w-12 rounded-full bg-background grid place-items-center border border-border/60 group-hover:border-primary transition">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-primary">What we do</span>
            <h2 className="mt-3 text-4xl md:text-5xl max-w-xl text-balance">
              From quiet dinners to grand celebrations.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: wedding, title: "Weddings", body: "Unhurried, personal celebrations — from canapé welcomes to late-night feasts." },
            { img: corporate, title: "Corporate", body: "Working lunches, conferences and launches with crisp logistics and refined food." },
            { img: privateChef, title: "Private dining", body: "Intimate at-home menus designed and served by our chef team." },
          ].map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-sm bg-card border border-border/60">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-primary">Kind words</span>
          <blockquote className="mt-8 font-display text-3xl md:text-4xl leading-snug text-balance">
            “Lundik turned our wedding into something we still hear about.
            The food was exquisite, the service invisible in the best way.”
          </blockquote>
          <div className="mt-8 text-sm text-muted-foreground">
            — Amelia & Tom · Cotswolds Wedding, 2025
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-8">
        <div className="rounded-sm bg-gradient-warm p-12 md:p-16 text-primary-foreground grid md:grid-cols-2 gap-8 items-center shadow-elevated">
          <div>
            <h2 className="text-4xl md:text-5xl text-balance">
              Tell us about your event.
            </h2>
            <p className="mt-4 text-base opacity-90 max-w-md">
              We'd love to hear what you're planning. Share a few details and we'll
              come back with ideas, menus and a tailored proposal.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm hover:bg-background/90 transition"
            >
              Start the conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
