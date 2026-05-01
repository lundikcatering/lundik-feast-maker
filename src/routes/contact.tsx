import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lundie Catering Limited" },
      {
        name: "description",
        content:
          "Get in touch with Lundie Catering Limited. Tell us about your wedding, corporate event or private dinner and we'll come back with a tailored proposal.",
      },
      { property: "og:title", content: "Contact Lundie Catering" },
      {
        property: "og:description",
        content: "Tell us about your event and request a tailored catering proposal.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left: Intro & details */}
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.28em] text-primary">Get in touch</span>
          <h1 className="mt-5 text-5xl md:text-6xl text-balance">
            Tell us about your event.
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
            Share a few details and we'll come back within two working days with menu
            ideas and a tailored proposal. We're based in Newtownabbey and travel
            throughout Northern Ireland.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-muted grid place-items-center border border-border/60">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1">info@lundiecatering.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-muted grid place-items-center border border-border/60">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Studio</div>
                <div className="mt-1">1 Kings Crescent, Doagh Road,<br />Newtownabbey, BT37 0DH</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          <div className="rounded-sm border border-border/60 bg-card p-8 md:p-10 shadow-soft">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 grid place-items-center">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-6 font-display text-3xl">Thank you</h2>
                <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                  Your enquiry is on its way. We'll be in touch within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Phone (optional)" name="phone" type="tel" />
                  <Field label="Event date" name="date" type="date" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Select label="Event type" name="type" options={["Wedding", "Corporate", "Private dining", "Drop-off", "Other"]} />
                  <Field label="Approx. guests" name="guests" type="number" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Tell us about your event
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Venue, vibe, dietary needs, anything that matters to you…"
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:opacity-95 transition shadow-soft"
                >
                  Send enquiry <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
