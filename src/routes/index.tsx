import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rasa — Modern Indian Kitchen & Bar in Mumbai" },
      {
        name: "description",
        content:
          "Heritage Indian recipes reimagined. Wood-fire tandoor, regional spice, small-batch cocktails — nightly in Bandra West.",
      },
      { property: "og:title", content: "Rasa — Modern Indian Kitchen & Bar" },
      {
        property: "og:description",
        content: "Heritage recipes, reimagined nightly in Bandra West.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Modern Indian tasting spread with saffron rice, curries and marigold petals"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="container-x relative pb-24 pt-40">
          <div className="max-w-2xl">
            <div className="eyebrow">Bandra West · Est. 2019</div>
            <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] text-foreground">
              A modern love letter to Indian cooking.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Regional recipes from Chettinad to Kashmir, coaxed over a wood-fire
              tandoor and served in an intimate, candlelit room.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-saffron px-6 py-3 text-sm tracking-widest uppercase text-primary-foreground hover:opacity-90 transition"
              >
                Reserve a table
              </Link>
              <Link
                to="/menu"
                className="rounded-full border border-border px-6 py-3 text-sm tracking-widest uppercase text-foreground hover:border-saffron hover:text-saffron transition"
              >
                See the menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-x py-28 grid gap-16 md:grid-cols-12 items-start">
        <div className="md:col-span-5">
          <div className="eyebrow">The philosophy</div>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
            Old recipes.<br />New fire.
          </h2>
          <div className="hairline mt-8 w-24" />
        </div>
        <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Rasa began in a small kitchen with a stack of handwritten recipes
            passed down four generations. Today, chef <em className="text-foreground not-italic">Aarav Menon</em> reads
            those pages against the seasons — grinding spices the morning of,
            sourcing fish from the Sassoon Docks, and coaxing paneer over a
            live coal fire.
          </p>
          <p>
            Every plate is a conversation between memory and moment. Nothing
            fussed. Everything considered.
          </p>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="border-y border-border bg-card/40">
        <div className="container-x py-24">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="eyebrow">Signatures</div>
              <h2 className="mt-3 text-4xl md:text-5xl">Tonight, we recommend</h2>
            </div>
            <Link to="/menu" className="text-saffron text-sm hover:underline">
              View full menu →
            </Link>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                img: dish1,
                name: "Chettinad Malai Tikka",
                desc: "Coal-charred chicken, curry leaf oil, burnt-lime chutney.",
                price: "₹ 640",
              },
              {
                img: dish2,
                name: "Old Delhi Butter Chicken",
                desc: "Tomato reduced eight hours, kasuri methi, hand-churned butter.",
                price: "₹ 780",
              },
              {
                img: interior,
                name: "Kashmiri Rogan Josh",
                desc: "Slow-braised lamb shoulder, mattha spice, ratanjot oil.",
                price: "₹ 920",
              },
            ].map((d) => (
              <article key={d.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-md bg-muted">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl">{d.name}</h3>
                  <span className="text-saffron text-sm">{d.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Room */}
      <section className="container-x py-28 grid gap-16 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <div className="eyebrow">The room</div>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
            Forty seats. Warm brass. A wood fire that never rests.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our dining room is small on purpose. Reclaimed teak, hand-thrown
            terracotta, and candlelight that softens the evening into something
            slower. Come for dinner, stay for a cardamom old-fashioned at the bar.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block text-saffron text-sm hover:underline"
          >
            More about Rasa →
          </Link>
        </div>
        <div
          className="order-1 md:order-2 aspect-[5/6] overflow-hidden rounded-md"
          style={{ boxShadow: "var(--shadow-warm)" }}
        >
          <img
            src={interior}
            alt="Warm, intimate dining room with brass pendant lights and dark wood"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-28">
        <div
          className="relative overflow-hidden rounded-lg p-12 md:p-20 text-center"
          style={{ background: "var(--gradient-spice)" }}
        >
          <div className="eyebrow text-primary-foreground/80">Nightly, 6pm</div>
          <h2 className="mt-4 text-4xl md:text-6xl text-primary-foreground max-w-2xl mx-auto leading-tight">
            A table is waiting.
          </h2>
          <p className="mt-6 text-primary-foreground/85 max-w-md mx-auto">
            Reservations open two weeks in advance. Walk-ins welcome at the bar.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-full bg-background px-8 py-3 text-sm tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Reserve now
          </Link>
        </div>
      </section>
    </div>
  );
}
