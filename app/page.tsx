import Link from "next/link";

const features = [
  {
    title: "Unified Remake Vision",
    description:
      "Persona 1 and Persona 2: Innocent Sin / Eternal Punishment rebuilt on Atlus' AETHER engine with dynamic cinematics and hybrid combat.",
    accentClass: "bg-aurora/20"
  },
  {
    title: "Chronicle System",
    description:
      "Jump between eras, track character arcs, and experience bridging episodes that connect the original duology into one saga.",
    accentClass: "bg-gold/20"
  },
  {
    title: "Velvet Remix",
    description:
      "Shoji Meguro returns with original Persona 1 & 2 composers for a 100-track, fully orchestrated soundtrack featuring new vocal themes.",
    accentClass: "bg-ember/20"
  }
];

const timeline = [
  {
    year: "1996",
    title: "Revelations: Persona",
    details:
      "The origin returns with modernized dungeons, New Moon phases, and Persona Fusion that reacts to your Social Alignments."
  },
  {
    year: "1999",
    title: "Persona 2: Innocent Sin",
    details:
      "Rumors reshape reality in an expanded Sumaru City with cooperative Eclipse Battles and revamped Joker mechanics."
  },
  {
    year: "2000",
    title: "Persona 2: Eternal Punishment",
    details:
      "The investigation deepens with cinematic prosecution cases, multi-perspective scenarios, and true-id reveal endings."
  },
  {
    year: "2025",
    title: "Persona Legacy",
    details:
      "Three remakes, one continuum. Persona Legacy stitches every choice into a single New Game Nexus that evolves with each playthrough."
  }
];

const editions = [
  {
    name: "Digital Standard",
    price: "$69.99",
    perks: [
      "Persona Legacy base game",
      "Legacy Remix Sound Selections",
      "Animated opening gallery"
    ]
  },
  {
    name: "Velvet Vault",
    price: "$99.99",
    perks: [
      "Exclusive Philemon & Nyarlathotep DLC storylines",
      "Shoji Meguro soundtrack download",
      "Persona Legacy artbook (digital)"
    ],
    highlight: true
  },
  {
    name: "Collector's Ark",
    price: "$199.99",
    perks: [
      "Feather Mask Replica & Tarot set",
      "Vinyl soundtrack + Blu-ray concert",
      "Sumaru Radio podcast miniseries"
    ]
  }
];

const characterSpotlight = [
  {
    name: "Maki Sonomura",
    tagline: "Dual Realities, Singular Resolve",
    description:
      "Follow Maki’s reimagined journey through SEBEC’s fractured timelines, featuring new Awakening Episodes and co-op Persona Resonance."
  },
  {
    name: "Tatsuya Suou",
    tagline: "The Rumor-Born Flame",
    description:
      "Harness the new Crossfire combat grid and see how Tatsuya’s bonds transform the Legendary Hero timeline across both halves of Persona 2."
  },
  {
    name: "Maya Amano",
    tagline: "Reporter of Destinies",
    description:
      "Investigate Sumaru in episodic chapters, unraveling exclusive Velvet Vault cases and unlocking Persona interviews with returning voice talent."
  }
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 lg:px-12">
      <header className="flex flex-col items-start gap-6 pt-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.35em] text-aurora">Atlus Presents</span>
          <h1 className="mt-3 font-persona text-4xl font-semibold uppercase tracking-wide text-white md:text-5xl lg:text-6xl">
            Persona Legacy
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            P1-2L.jp celebrates the definitive remakes of Persona 1 and Persona 2: Innocent Sin /
            Eternal Punishment. Rebuilt for a new generation, unified through one evolving destiny.
          </p>
        </div>
        <div className="glass relative w-full max-w-sm overflow-hidden rounded-2xl border border-aurora/30 p-6 text-sm text-gray-200 shadow-neon">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-br from-aurora/30 via-transparent to-transparent blur-2xl" />
          <div className="relative flex flex-col gap-3 text-right">
            <span className="text-xs uppercase tracking-[0.4em] text-aurora">Access Link</span>
            <span className="font-mono text-2xl text-white">P1-2L.jp</span>
            <p className="text-gray-300">
              Bookmark the official hub for Persona Legacy updates, trailers, and developer insights.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-aurora/40 hover:shadow-neon"
          >
            <div className={`absolute inset-y-0 right-0 w-1/3 ${feature.accentClass} blur-3xl`} />
            <h3 className="font-persona text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-4 text-base text-gray-300">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="glass relative overflow-hidden rounded-3xl border border-white/10 p-10">
        <div className="absolute inset-0 bg-grid-glow opacity-80" aria-hidden />
        <div className="relative">
          <h2 className="font-persona text-3xl font-semibold uppercase tracking-wide text-white">
            Legacy Timeline
          </h2>
          <p className="mt-3 max-w-2xl text-gray-300">
            Trace the evolution from the origins of Persona to the unified Persona Legacy remake.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {timeline.map((entry) => (
              <div key={entry.year} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="font-mono text-sm uppercase tracking-[0.35em] text-aurora">
                  {entry.year}
                </span>
                <h3 className="mt-2 font-persona text-2xl text-white">{entry.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{entry.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr,1.3fr]">
        <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-10">
          <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-aurora/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-persona text-3xl uppercase tracking-wider text-white">Character Resonance</h2>
            <p className="mt-3 text-gray-300">
              Core protagonists return with expanded Social Link trees and dual-language performances,
              reshaping the Persona meta for the Legacy era.
            </p>
            <div className="mt-8 space-y-6">
              {characterSpotlight.map((character) => (
                <div key={character.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-persona text-2xl text-white">{character.name}</h3>
                  <span className="text-sm uppercase tracking-[0.35em] text-aurora">
                    {character.tagline}
                  </span>
                  <p className="mt-3 text-sm text-gray-300">{character.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-10">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-aurora/30 via-ember/30 to-gold/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-persona text-3xl uppercase tracking-wider text-white">Pre-Order Editions</h2>
            <p className="mt-3 text-gray-300">
              Choose the collection that resonates with your Persona legacy and unlock exclusive
              Velvet Room content.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {editions.map((edition) => (
                <div
                  key={edition.name}
                  className={`flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 ${
                    edition.highlight ? "shadow-neon ring-2 ring-aurora/60" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-persona text-xl uppercase tracking-wide text-white">
                      {edition.name}
                    </h3>
                    <span className="font-mono text-sm text-aurora">{edition.price}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {edition.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-aurora" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#notify"
                    className="mt-auto inline-flex items-center justify-center rounded-full border border-aurora/60 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10"
                  >
                    Reserve Access
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="notify"
        className="glass relative overflow-hidden rounded-3xl border border-white/10 px-8 py-12 text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-aurora/15 via-transparent to-ember/15 opacity-80" />
        <div className="relative mx-auto max-w-3xl space-y-4">
          <h2 className="font-persona text-3xl uppercase tracking-[0.3em] text-white">
            Enter The Velvet Network
          </h2>
          <p className="text-gray-300">
            Subscribe for Persona Legacy dispatches: monthly developer deep dives, soundtrack reveals,
            and limited-edition merchandise drops.
          </p>
          <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@shadowops.jp"
              className="w-full rounded-full border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:border-aurora focus:outline-none focus:ring-2 focus:ring-aurora/40"
            />
            <button
              type="submit"
              className="rounded-full bg-aurora px-6 py-3 text-sm font-semibold uppercase tracking-widest text-midnight transition hover:bg-ember hover:text-white"
            >
              Initiate Link
            </button>
          </form>
        </div>
      </section>

      <footer className="pb-10 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} ATLUS. Persona Legacy, Persona 1, Persona 2 IS/EP are trademarks of SEGA.</p>
        <p>P1-2L.jp — Persona Legacy Remake Collection.</p>
      </footer>
    </main>
  );
}
