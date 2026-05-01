import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Briefcase, UtensilsCrossed, PackageCheck } from "lucide-react";
import wedding from "@/assets/wedding.jpg";
import corporate from "@/assets/corporate.jpg";
import privateChef from "@/assets/private.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Wedding, Corporate & Private Catering | Lundik" },
      {
        name: "description",
        content:
          "Wedding catering, corporate events, private dining and drop-off catering across the UK — seasonal menus designed and served by Lundik Catering Limited.",
      },
      { property: "og:title", content: "Services — Lundik Catering" },
      {
        property: "og:description",
        content: "Wedding, corporate, private dining and drop-off catering services.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Heart,
    img: wedding,
    title: "Wedding catering",
    body: "From canapé welcomes and seated banquets to grazing tables and late-night bites — menus designed to feel personal, never templated.",
    points: ["Bespoke seasonal menus", "Tasting sessions", "Front-of-house team", "Bar & drinks pairing"],
  },
  {
    icon: Briefcase,
    img: corporate,
    title: "Corporate events",
    body: "Conferences, board lunches, launches and away-days delivered with crisp logistics and food worth remembering.",
    points: ["Working lunches", "Conferences & away-days", "Brand launches", "Office hospitality programs"],
  },
  {
    icon: UtensilsCrossed,
    img: privateChef,
    title: "Private dining",
    body: "Intimate dinners at your home or chosen venue — designed and served by our chef team for an effortless evening.",
    points: ["Tasting menus", "At-home chef service", "Wine pairings", "Birthdays & anniversaries"],
  },
  {
    icon: PackageCheck,
    img: hero,
    title: "Drop-off catering",
    body: "Beautifully presented food delivered to your door — perfect for celebrations that don't need full-service staff.",
    points: ["Grazing boards", "Family-style platters", "Breakfast & brunch", "Dessert tables"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
        <span className="text-xs uppercase tracking-[0.28em] text-primary">Services</span>
        <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl max-w-4xl text-balance">
          Catering tailored to the moment.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          A full-service catering team for weddings, corporate gatherings, private
          dinners and drop-off celebrations — across London and the wider UK.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 space-y-24">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="grid lg:grid-cols-12 gap-10 items-center"
          >
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="aspect-[5/4] overflow-hidden rounded-sm shadow-soft">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="h-12 w-12 rounded-full bg-muted grid place-items-center border border-border/60">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl text-balance">{s.title}</h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
                {s.body}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <span className="mt-2 h-1 w-3 bg-primary rounded-full" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm hover:text-primary transition"
              >
                Enquire about {s.title.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="rounded-sm bg-secondary text-secondary-foreground p-12 md:p-16 grid md:grid-cols-2 gap-8 items-center shadow-elevated">
          <h2 className="text-4xl md:text-5xl text-balance">
            Have a brief? Let's start a menu.
          </h2>
          <div className="md:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-sm hover:bg-background/90 transition"
            >
              Request a proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
