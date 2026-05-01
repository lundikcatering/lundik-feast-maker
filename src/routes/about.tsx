import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lundik Catering Limited" },
      {
        name: "description",
        content:
          "Founded on a love of seasonal food and warm hospitality, Lundik Catering Limited is a Northern Ireland catering team serving weddings, corporate events and private dinners.",
      },
      { property: "og:title", content: "About Lundik Catering" },
      {
        property: "og:description",
        content: "Our story, our kitchen, our approach to seasonal hospitality.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24">
        <span className="text-xs uppercase tracking-[0.28em] text-primary">Our story</span>
        <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl max-w-3xl text-balance">
          A kitchen built on care, season after season.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Lundik Catering Limited began with a simple belief: that food cooked with
            care and served with warmth has the power to make a moment unforgettable.
            What started as a small kitchen serving family celebrations has grown into a
            trusted catering team for weddings, corporate gatherings and private dinners
            across Northern Ireland.
          </p>
          <p>
            Our menus are designed weekly around the seasons. We work directly with
            growers, fishmongers and small producers we know by name — because honest
            sourcing makes for honest food.
          </p>
          <p>
            Behind every event is a team that believes hospitality is craft. From the
            first conversation to the final clear-down, we move quietly, attentively
            and with a pride that shows on every plate.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              { n: "12+", l: "Years of practice" },
              { n: "400+", l: "Events delivered" },
              { n: "30+", l: "Local suppliers" },
              { n: "4.9★", l: "Average rating" },
            ].map((s) => (
              <div key={s.l} className="border-t border-border/60 pt-4">
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elevated">
            <img
              src={about}
              alt="Lundik chefs plating canapés in the kitchen"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1400}
              height={1600}
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <h2 className="text-4xl md:text-5xl max-w-2xl text-balance">How we work.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {[
              { n: "01", t: "Listen", b: "We start with your story — guests, setting, mood, the things that matter." },
              { n: "02", t: "Design", b: "A bespoke menu shaped around the season, your venue and your tastes." },
              { n: "03", t: "Deliver", b: "Calm, polished service on the day. You enjoy the moment; we handle the rest." },
            ].map((step) => (
              <div key={step.n}>
                <div className="font-display text-5xl text-primary/40">{step.n}</div>
                <h3 className="mt-3 font-display text-2xl">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="rounded-sm border border-border/60 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl text-balance">Let's plan something.</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              From a 12-seat private dinner to a 400-guest wedding — we'd love to hear from you.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-95 transition"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
