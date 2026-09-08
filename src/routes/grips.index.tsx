import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/grips/")({
  component: Grips,
  head: () =>
    pageHead(
      "Custom AR-15 Pistol Grip | PrecisionFit | NXG Arms",
      "Custom AR grip molded from your hand. PrecisionFit AR-15 pistol grip: $100 setup + $49. Reorders $49. Cerakote, texture, engraving optional.",
    ),
});

const pick =
  "group flex flex-col border border-line bg-surface p-8 no-underline transition-[border-color,background-color,box-shadow] duration-150 hover:border-gold hover:bg-gold/30 hover:shadow-[inset_0_0_0_2px_#c4a574]";

function Grips() {
  return (
    <main className="px-4 py-12 sm:px-[6%] sm:py-20">
      <p className="text-xs tracking-[0.2em] text-gold uppercase">
        PrecisionFit · AR Platform
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Custom AR-15 pistol grip</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
        PrecisionFit is a custom AR grip molded from your hand — not a catalog AR-15 pistol grip.
        First grip is $100 setup + $49. Every grip after is $49 for life.
      </p>

      <p className="mt-12 text-xs tracking-[0.16em] text-gold uppercase">
        New customer — pick one
      </p>
      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        <Link to="/grips/consent" className={pick}>
          <img
            src="/precisionfit-logo.png"
            alt="PrecisionFit Grips"
            className="h-8 w-auto sm:h-10"
          />
          <h2 className="mt-6 text-3xl text-fg">Standard</h2>
          <p className="mt-1 text-xl text-fg">No add-ons</p>
          <p className="mt-4 font-price text-4xl font-black tracking-tight text-gold">$149</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Your molded grip. No Cerakote, texture, or engraving.
          </p>
          <span className="mt-8 inline-block w-fit border border-line px-6 py-3 text-xs font-semibold tracking-[0.1em] text-fg uppercase group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
            Build Standard
          </span>
        </Link>

        <Link
          to="/grips/configure"
          search={{ tier: "precisionfit", mode: "custom" }}
          className={pick}
        >
          <img
            src="/precisionfit-logo.png"
            alt="PrecisionFit Grips"
            className="h-8 w-auto sm:h-10"
          />
          <p className="mt-5 text-xs tracking-[0.16em] text-gold uppercase">
            Most popular
          </p>
          <h2 className="mt-2 text-3xl text-fg">Customize</h2>
          <p className="mt-1 text-xl text-fg">Add-ons</p>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-gold">
            <span className="font-sans text-sm font-medium">Starting at</span>
            <span className="font-price text-4xl font-black tracking-tight">$149+</span>
            <span className="font-sans text-sm font-medium">optional add-ons</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Available options such as Cerakote, texture, engraving, and more.
          </p>
          <span className="mt-8 inline-block w-fit border border-gold bg-gold px-6 py-3 text-xs font-semibold tracking-[0.1em] text-ink uppercase">
            Customize It
          </span>
        </Link>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        Setup covers the mold kit, 3D scan, design, cleaning, and production.
        After that, reorders are $49.
      </p>

      <Link
        to="/grips/configure"
        search={{ tier: "returning" }}
        className="group mt-12 flex flex-col gap-4 border border-line bg-surface px-8 py-6 no-underline transition-[border-color,background-color,box-shadow] duration-150 hover:border-gold hover:bg-gold/30 hover:shadow-[inset_0_0_0_2px_#c4a574] sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-xs tracking-[0.16em] text-gold uppercase">
            Returning
          </p>
          <h2 className="mt-2 text-2xl text-fg">Mold already on file?</h2>
          <p className="mt-3 font-price text-4xl font-black tracking-tight text-gold">$49</p>
          <p className="mt-2 text-sm text-muted">Skip the kit. Per grip for life.</p>
        </div>
        <span className="inline-block w-fit border border-line px-6 py-3 text-xs font-semibold tracking-[0.1em] text-fg uppercase group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
          Order Again
        </span>
      </Link>
    </main>
  );
}
