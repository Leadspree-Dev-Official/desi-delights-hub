import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="font-display text-3xl" data-brand-text="business-name">Rasa</div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            A modern Indian kitchen & bar celebrating regional spice, wood-fire
            tandoor and the quiet rituals of a good meal.
          </p>
          <div className="hairline mt-6 w-24" />
        </div>
        <div>
          <div className="eyebrow mb-3">Visit</div>
          <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            <span data-brand-text="address">42 Curzon Lane</span><br />
            Bandra West, Mumbai<br />
            <span data-brand-text="phone">+91 22 6100 4200</span>
          </address>
        </div>
        <div>
          <div className="eyebrow mb-3">Hours</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Tue – Thu · 6pm – 11pm</li>
            <li>Fri – Sat · 6pm – 1am</li>
            <li>Sunday brunch · 12pm – 4pm</li>
          </ul>
          <Link
            to="/contact"
            className="mt-4 inline-block text-saffron text-sm hover:underline"
          >
            Reserve a table →
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rasa Modern Indian. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/admin" className="hover:underline">🔑 Admin Console</a>
            <p className="tracking-widest uppercase">Est. 2019 · Mumbai</p>
          </div>
        </div>
        <div className="container-x pb-6 text-center text-xs text-muted-foreground">
          Developer: Aniruddha Das | Developed by LeadSpree Business Solutions
        </div>
      </div>
    </footer>
  );
}