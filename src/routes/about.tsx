import { createFileRoute } from "@tanstack/react-router";
import interior from "@/assets/interior.jpg";
import dish1 from "@/assets/dish1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Rasa Modern Indian" },
      {
        name: "description",
        content:
          "The story behind Rasa — a family of handwritten recipes, a wood-fire tandoor, and a small dining room in Bandra West.",
      },
      { property: "og:title", content: "Our Story — Rasa Modern Indian" },
      {
        property: "og:description",
        content: "Four generations of recipes, one small room in Bandra West.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="container-x pt-40 pb-20 max-w-4xl">
        <div className="eyebrow">Our Story</div>
        <h1 className="mt-4 text-5xl md:text-7xl leading-[1.05]">
          Four generations of recipes, one small room.
        </h1>
        <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
          Rasa is a family project. It began with a leather-bound book of
          handwritten recipes from chef Aarav's great-grandmother in Palakkad —
          notes on spice ratios, seasonal fish, the exact ghee to use for
          Sundays. We're still cooking from those pages.
        </p>
      </section>

      <section className="container-x pb-28 grid md:grid-cols-2 gap-10">
        <img
          src={interior}
          alt="The Rasa dining room"
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-md"
        />
        <img
          src={dish1}
          alt="A signature Rasa plate"
          loading="lazy"
          className="w-full aspect-[4/5] object-cover rounded-md md:mt-24"
        />
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="container-x py-24 grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Sourced by hand",
              body: "Fish from Sassoon Docks each morning. Spices ground the same day. Vegetables from our own kitchen garden in Alibaug.",
            },
            {
              title: "Cooked over wood",
              body: "A single wood-fire tandoor anchors the kitchen. Assamese hardwood, coal, and patience — no shortcuts.",
            },
            {
              title: "Served slowly",
              body: "Forty seats. One long dinner service. We plate at the pace of the table, not the clock.",
            },
          ].map((c) => (
            <div key={c.title}>
              <div className="hairline mb-6 w-16" />
              <h3 className="text-2xl">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-28 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <div className="eyebrow">The Team</div>
          <h2 className="mt-3 text-4xl">Hands in the kitchen.</h2>
        </div>
        <div className="md:col-span-8 divide-y divide-border">
          {[
            { name: "Aarav Menon", role: "Chef & Owner", bio: "Grew up in Palakkad. Trained in Copenhagen. Came home to cook his grandmother's food properly." },
            { name: "Ishani Rao", role: "Head of Pastry", bio: "Reworks childhood mithai into something you'll want to eat twice. Studied under Pierre Hermé." },
            { name: "Vikram Shetty", role: "Bar Director", bio: "Builds cocktails the way we build curries — one spice at a time, until it sings." },
          ].map((p) => (
            <div key={p.name} className="py-8 grid grid-cols-3 gap-6 items-start">
              <div>
                <div className="text-xl">{p.name}</div>
                <div className="text-sm text-saffron mt-1">{p.role}</div>
              </div>
              <p className="col-span-2 text-muted-foreground leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}