import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-gradient-warm grid place-items-center text-primary-foreground font-display text-lg">
              L
            </span>
            <div>
              <div className="font-display text-2xl">Lundie Catering</div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Limited
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Seasonal, locally sourced catering for weddings, corporate gatherings,
            and intimate celebrations across Northern Ireland. Crafted with care, served with grace.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@lundiecatering.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> 1 Kings Crescent, Doagh Road,<br />Newtownabbey, BT37 0DH</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lundie Catering Limited. All rights reserved.</p>
          <p className="font-display tracking-wide">Crafted with seasonal care.</p>
        </div>
      </div>
    </footer>
  );
}
