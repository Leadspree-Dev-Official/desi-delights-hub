import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Reserve — Rasa Modern Indian" },
      {
        name: "description",
        content:
          "Reserve a table at Rasa in Bandra West, Mumbai. Hours, address, private dining and press enquiries.",
      },
      { property: "og:title", content: "Visit & Reserve — Rasa Modern Indian" },
      {
        property: "og:description",
        content: "Reserve a table in Bandra West. Nightly from 6pm.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="container-x pt-40 pb-16 max-w-3xl">
        <div className="eyebrow">Visit</div>
        <h1 className="mt-4 text-5xl md:text-7xl leading-[1.05]">
          Come sit at our table.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We keep the room small on purpose. Reservations are recommended;
          walk-ins welcome at the bar.
        </p>
      </section>

      <section className="container-x pb-28 grid md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <div className="eyebrow mb-2">Address</div>
            <p className="text-lg leading-relaxed">
              42 Curzon Lane<br />
              Bandra West, Mumbai 400050<br />
              India
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2">Hours</div>
            <ul className="text-lg space-y-1">
              <li>Tuesday – Thursday · 6pm – 11pm</li>
              <li>Friday – Saturday · 6pm – 1am</li>
              <li>Sunday brunch · 12pm – 4pm</li>
              <li className="text-muted-foreground">Monday · closed</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-2">Contact</div>
            <p className="text-lg">
              +91 22 6100 4200<br />
              <a href="mailto:hello@rasa.in" className="text-saffron hover:underline">hello@rasa.in</a>
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2">Private dining & press</div>
            <p className="text-muted-foreground leading-relaxed">
              Buyouts, tasting menus for parties of ten or more, and press
              enquiries — write to <a href="mailto:events@rasa.in" className="text-saffron hover:underline">events@rasa.in</a>.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 md:p-10">
          <h2 className="text-3xl">Reserve a table</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll confirm by email within a few hours.
          </p>
          {sent ? (
            <div className="mt-10 text-center py-16">
              <div className="hairline mx-auto w-16" />
              <p className="mt-6 text-xl">Thank you — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" name="date" type="date" required />
                <Field label="Time" name="time" type="time" required />
              </div>
              <Field label="Party size" name="party" type="number" defaultValue="2" min={1} max={12} required />
              <div>
                <label className="eyebrow block mb-2">Notes</label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Allergies, occasion, seating preference…"
                  className="w-full rounded-md bg-background border border-input px-4 py-3 text-sm outline-none focus:border-saffron transition"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-saffron px-6 py-3 text-sm tracking-widest uppercase text-primary-foreground hover:opacity-90 transition"
              >
                Request reservation
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="eyebrow block mb-2" htmlFor={props.name}>
        {label}
      </label>
      <input
        id={props.name}
        {...props}
        className="w-full rounded-md bg-background border border-input px-4 py-3 text-sm outline-none focus:border-saffron transition"
      />
    </div>
  );
}