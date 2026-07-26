import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Rasa Modern Indian" },
      {
        name: "description",
        content:
          "The Rasa menu — small plates, wood-fire tandoor, regional mains, thali of the week and cardamom-forward cocktails.",
      },
      { property: "og:title", content: "Menu — Rasa Modern Indian" },
      {
        property: "og:description",
        content: "Small plates, tandoor, regional mains and cardamom-forward cocktails.",
      },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; tag?: "V" | "VG" | "GF" };

const sections: { title: string; note?: string; items: Item[] }[] = [
  {
    title: "To Begin",
    note: "Small plates meant for the table",
    items: [
      { name: "Guntur Chilli Paneer", desc: "Hand-pressed paneer, ghost pepper glaze, curry leaf", price: "₹ 420", tag: "V" },
      { name: "Bombay Bhel", desc: "Puffed rice, green mango, tamarind rain, coriander snow", price: "₹ 320", tag: "VG" },
      { name: "Kerala Prawn Balchão", desc: "Toddy vinegar, dried red chilli, pav", price: "₹ 560" },
      { name: "Amritsari Fish Fry", desc: "Ajwain-battered barramundi, mint chutney", price: "₹ 520", tag: "GF" },
    ],
  },
  {
    title: "From the Tandoor",
    note: "Coal-fired over Assamese hardwood",
    items: [
      { name: "Malai Chicken Tikka", desc: "Cream cheese marinade, black cardamom, burnt lime", price: "₹ 640", tag: "GF" },
      { name: "Lasooni Broccoli", desc: "Aged garlic yogurt, pink peppercorn, sesame", price: "₹ 480", tag: "V" },
      { name: "Rajasthani Lamb Chops", desc: "Mathania chilli, ghee-basted, mint raita", price: "₹ 1,120" },
      { name: "Tandoori Aubergine", desc: "Smoked bharta, walnut, coriander stem oil", price: "₹ 460", tag: "VG" },
    ],
  },
  {
    title: "The Curries",
    note: "Served with basmati or house naan",
    items: [
      { name: "Old Delhi Butter Chicken", desc: "Eight-hour tomato, kasuri methi, hand-churned butter", price: "₹ 780" },
      { name: "Kashmiri Rogan Josh", desc: "Slow-braised lamb, mattha spice, ratanjot oil", price: "₹ 920" },
      { name: "Chettinad Fish Moilee", desc: "Coconut, green chilli, curry leaf, tamarind", price: "₹ 860", tag: "GF" },
      { name: "Dal Rasa", desc: "Black lentils, tomato, cream, twelve hours over embers", price: "₹ 480", tag: "V" },
    ],
  },
  {
    title: "Sweet Finish",
    items: [
      { name: "Rose Kulfi", desc: "Slow-reduced milk, Kannauj rose, pistachio", price: "₹ 320", tag: "V" },
      { name: "Gulab Jamun Sundae", desc: "Warm jamun, saffron ice cream, cardamom crumble", price: "₹ 360", tag: "V" },
      { name: "Filter Coffee Ganache", desc: "Chicory-dark ganache, jaggery, sea salt", price: "₹ 340", tag: "V" },
    ],
  },
  {
    title: "The Bar",
    note: "Small-batch spirits, house infusions",
    items: [
      { name: "Cardamom Old-Fashioned", desc: "Amrut peated, jaggery, green cardamom bitters", price: "₹ 680" },
      { name: "Curry Leaf Gimlet", desc: "Bombay gin, curry leaf cordial, lime", price: "₹ 620" },
      { name: "Tamarind Highball", desc: "Rye whisky, tamarind soda, black salt", price: "₹ 640" },
      { name: "Rasam Bloody Mary", desc: "Vodka, house rasam, coriander foam", price: "₹ 660" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div>
      <section className="container-x pt-40 pb-16">
        <div className="eyebrow">The Menu</div>
        <h1 className="mt-4 text-5xl md:text-7xl leading-[1.05]">Everything on the fire tonight.</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Our menu changes with the season and the market. Spice notes are
          calibrated to the plate — please tell us how you like it.
        </p>
        <div className="hairline mt-10 w-32" />
      </section>

      <section className="container-x pb-24 space-y-24">
        {sections.map((s) => (
          <div key={s.title} className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl">{s.title}</h2>
              {s.note && (
                <p className="mt-3 text-sm text-muted-foreground italic">{s.note}</p>
              )}
            </div>
            <ul className="md:col-span-8 divide-y divide-border">
              {s.items.map((i) => (
                <li key={i.name} className="py-6 flex items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl text-foreground">{i.name}</h3>
                      {i.tag && (
                        <span className="text-[10px] tracking-widest text-saffron border border-saffron/60 rounded px-1.5 py-0.5">
                          {i.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xl">
                      {i.desc}
                    </p>
                  </div>
                  <div className="text-saffron whitespace-nowrap">{i.price}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container-x pb-28">
        <div className="rounded-lg border border-border bg-card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="eyebrow">Chef's Tasting</div>
            <h3 className="mt-2 text-2xl md:text-3xl">Seven courses · ₹ 3,200 per guest</h3>
            <p className="mt-2 text-sm text-muted-foreground">Available Tuesday to Thursday. Wine pairing on request.</p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-saffron px-6 py-3 text-sm tracking-widest uppercase text-primary-foreground hover:opacity-90 transition"
          >
            Book the tasting
          </Link>
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center">
          V — vegetarian · VG — vegan · GF — gluten free. Please let us know of any allergies.
        </p>
      </section>
    </div>
  );
}