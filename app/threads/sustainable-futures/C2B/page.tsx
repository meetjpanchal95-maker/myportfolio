import { Children } from "react";
import ThreadPageShell from "../../../../components/ThreadPageShell";
import type { ThreadFeaturedMedia } from "../../../../components/ThreadFeaturedMedia";

const permacultureResources = [
  {
    title: "Permaculture Research Institute",
    href: "https://permaculturenews.org",
    eyebrow: "Research",
    description: "The largest searchable archive of permaculture articles, techniques, and case studies online.",
  },
  {
    title: "Permaculture Global",
    href: "https://permacultureglobal.org",
    eyebrow: "Projects",
    description: "Interactive worldwide map of active projects and communities for finding local examples.",
  },
  {
    title: "Free Permaculture",
    href: "https://freepermaculture.com",
    eyebrow: "Learning",
    description: "Free courses and community forums built for renters, gardeners, and landowners alike.",
  },
  {
    title: "Permaculture Education Institute",
    href: "https://permacultureeducationinstitute.org",
    eyebrow: "Guides",
    description: "Morag Gamble's practical videos, masterclasses, and podcast on regenerative design.",
  },
  {
    title: "Plants For A Future",
    href: "https://pfaf.org",
    eyebrow: "Database",
    description: "Searchable database of 7,000+ edible and useful plants by climate, soil, and function.",
  },
];

const permacultureActions = [
  {
    title: "Start visible",
    description: "A front-yard food bed, rooftop planter, or shared compost setup normalizes the practice faster than theory.",
  },
  {
    title: "Teach peer-to-peer",
    description: "Farmers trained by other farmers were 45% more likely to adopt permaculture than those who only attended formal workshops.",
  },
  {
    title: "Document the process",
    description: "Photos, short videos, and seasonal journals make long-term land regeneration legible and persuasive.",
  },
  {
    title: "Frame it as design",
    description: "People respond faster to water savings and food resilience than to abstract sustainability language.",
  },
];

export const threadSidebarContent = (
  <div className="flex h-full flex-col gap-5">
    <section className="flex flex-col gap-3 text-left">
      <h3 className="font-bebasNeue text-2xl text-theme-text">Core ethics</h3>
      <div className="grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1">
        {Children.toArray(
          [
            ["Ethic 01", "Care for the earth"],
            ["Ethic 02", "Care for people"],
            ["Ethic 03", "Return the surplus"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[16px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_90%,var(--color-page-bg))] px-4 py-3">
              <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">{label}</p>
              <p className="mt-1 font-montserrat text-[13px] font-semibold leading-5 text-theme-text">{value}</p>
            </div>
          ))
        )}
      </div>
    </section>

    <section className="flex flex-col gap-3 text-left">
      <h3 className="font-bebasNeue text-2xl text-theme-text">Best Resources</h3>
      <div className="flex flex-col gap-2.5">
        {Children.toArray(
          permacultureResources.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-[16px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_90%,var(--color-page-bg))] p-3 transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--color-hover-bg)] hover:bg-[color:color-mix(in_srgb,var(--color-main-bg)_82%,var(--color-page-bg))] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]"
            >
              <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">{item.eyebrow}</p>
              <h4 className="mt-1 font-montserrat text-[13px] font-semibold leading-5 text-theme-text transition-colors duration-200 group-hover:text-[var(--color-hover-bg)]">
                {item.title}
              </h4>
              <p className="mt-1 font-montserrat text-[11px] leading-[1.35rem] text-theme-text/72">{item.description}</p>
            </a>
          ))
        )}
      </div>
    </section>

    <section className="flex flex-col gap-3 text-left">
      <h3 className="font-bebasNeue text-2xl text-theme-text">Promotion Moves</h3>
      <div className="grid gap-2.5">
        {Children.toArray(
          permacultureActions.map((item) => (
            <div key={item.title} className="rounded-[16px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_90%,var(--color-page-bg))] px-4 py-3">
              <h4 className="font-montserrat text-[13px] font-semibold leading-5 text-theme-text">{item.title}</h4>
              <p className="mt-1 font-montserrat text-[11px] leading-[1.35rem] text-theme-text/72">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  </div>
);

function C2BArticleContent() {
  return (
    <div className="flex flex-col gap-8 text-left">
      {Children.toArray([
        <div key="badge" className="inline-flex w-fit rounded-full border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-3 py-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-[var(--color-hover-bg)]">
          Sustainability · Future
        </div>,

        <section key="intro" className="flex flex-col gap-4 text-left">
          <h2 className="text-left font-bebasNeue text-[1.8rem] leading-tight text-theme-text sm:text-[2.25rem]">
            Permanent Culture Is Not a Trend. It&apos;s the Answer We&apos;ve Been Ignoring.
          </h2>
          <p className="border-l-[3px] border-[var(--color-text-accent)] pl-4 text-left font-montserrat text-base leading-8 text-theme-text/85 sm:text-lg">
            The word permaculture was coined in the 1970s. Fifty years later, a landmark 2024 study confirmed it produces three times the biodiversity of industrial farming with comparable yields. The real question is no longer whether it works. It&apos;s why we still treat it like a fringe idea.
          </p>
          <div className="flex flex-wrap gap-4 border-b border-[var(--color-text-accent)] pb-4 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">
            <span>~5 min read</span>
            <span>Sustainability · Food · Future</span>
            <span>Permaculture 2026</span>
          </div>
        </section>,

        <section key="what-is" className="flex flex-col gap-4 text-left">
          <h3 className="font-bebasNeue text-3xl text-theme-text">What permaculture actually is</h3>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            Permaculture is a contraction of permanent agriculture and permanent culture. Coined by Australian ecologists Bill Mollison and David Holmgren in the 1970s, it is a design philosophy for building human systems that work with ecological logic instead of against it.
          </p>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            It is not a gardening trend. It is a framework for organising food, water, energy, shelter, and community around three ethics: care for the earth, care for people, and return the surplus. Food forests, rainwater harvesting, swales, companion planting, and community design all flow from those three sentences.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
              <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Ethic 01</div>
              <div className="mt-1 font-montserrat text-[0.92rem] font-semibold text-theme-text">Care for the earth</div>
            </div>
            <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
              <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Ethic 02</div>
              <div className="mt-1 font-montserrat text-[0.92rem] font-semibold text-theme-text">Care for people</div>
            </div>
            <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
              <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Ethic 03</div>
              <div className="mt-1 font-montserrat text-[0.92rem] font-semibold text-theme-text">Return the surplus</div>
            </div>
          </div>
        </section>,

        <section key="why-now" className="flex flex-col gap-4 text-left">
          <h3 className="font-bebasNeue text-3xl text-theme-text">Why permaculture matters right now</h3>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            Industrial agriculture depletes roughly 24 billion tonnes of topsoil every year, relies heavily on fossil-fuel-derived synthetic fertilizers, and pushes for short-term output at long-term ecological cost. The system is visibly running out of road.
          </p>
          <div className="rounded-[18px] border-l-[3px] border-[var(--color-hover-bg)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
            <p className="font-montserrat text-base italic leading-7 text-theme-text">
              A 2024 study from RPTU University of Kaiserslautern-Landau found permaculture sites had three times the plant species of conventional farms, with yields that remained comparable. Applied at scale, that is not a niche improvement. It is a different design brief for agriculture itself.
            </p>
          </div>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            The numbers keep stacking. The International Water Management Institute found that swales, ponds, and other water-harvesting methods can increase yields by 50 to 70 percent in semi-arid regions. The FAO reported in 2024 that increasing soil organic matter by just one percent allows each hectare to retain around 20,000 extra litres of water. That is drought resilience at civilisation scale.
          </p>
        </section>,

        <section key="future" className="flex flex-col gap-4 text-left">
          <h3 className="font-bebasNeue text-3xl text-theme-text">How permaculture is shaping the future</h3>
          <div className="grid gap-4">
            <div className="rounded-[18px] border border-[var(--color-text-accent)] px-5 py-4">
              <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Food systems are relocalising.</strong> Urban food forests, rooftop growing schemes, and community gardens are moving from fringe to mainstream. When Cyclone Michaung hit South India in 2023, farmers working with natural practices aligned to permaculture reported faster drainage and lower pest rebounds than neighboring conventional plots.
              </p>
            </div>
            <div className="rounded-[18px] border border-[var(--color-text-accent)] px-5 py-4">
              <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Architecture is borrowing the grammar.</strong> Passive cooling, living walls, integrated rainwater systems, and food-producing landscapes are now showing up in mainstream design briefs. As an architect or planner, permaculture is not outside your domain. It has been answering your questions for decades.
              </p>
            </div>
            <div className="rounded-[18px] border border-[var(--color-text-accent)] px-5 py-4">
              <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Policy is finally catching up.</strong> The UN Sustainable Development Goals overlap directly with permaculture ethics across food security, clean water, climate action, and community resilience because the underlying problems are the same.
              </p>
            </div>
          </div>
        </section>,

        <section key="promotion" className="flex flex-col gap-4 text-left">
          <h3 className="font-bebasNeue text-3xl text-theme-text">How to promote permaculture effectively</h3>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            The most effective promotion is demonstration, not argument. A visible food garden, a composting system, or a rainwater setup normalizes the practice faster than a thousand slogans. Research published in 2023 found farmers trained by other farmers were 45 percent more likely to adopt permaculture than those who only attended formal workshops.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {Children.toArray(
              permacultureActions.map((item) => (
                <div key={item.title} className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
                  <h4 className="font-montserrat text-[0.92rem] font-semibold text-theme-text">{item.title}</h4>
                  <p className="mt-1 font-montserrat text-[0.84rem] leading-6 text-theme-text/78">{item.description}</p>
                </div>
              ))
            )}
          </div>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            Documentation is one of the strongest levers. Photographs, short videos, and seasonal journals turn abstract sustainability claims into visible proof. Framing permaculture as design rather than ideology lowers the barrier further. Most people immediately understand better water retention and better yields.
          </p>
        </section>,

        <section key="resources" className="flex flex-col gap-4 text-left">
          <h3 className="font-bebasNeue text-3xl text-theme-text">Best permaculture resources online</h3>
          <div className="grid gap-3">
            {Children.toArray(
              permacultureResources.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[16px] border border-[var(--color-text-accent)] px-4 py-3 transition-colors duration-200 hover:border-[var(--color-hover-bg)]"
                >
                  <div className="flex gap-3">
                    <span className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">{String(index + 1).padStart(2, "0")}</span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-montserrat text-[0.92rem] font-semibold text-theme-text">{item.title}</h4>
                      <p className="font-montserrat text-[0.84rem] leading-6 text-theme-text/78">{item.description}</p>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </section>,

        <section key="start" className="flex flex-col gap-4 text-left">
          <h3 className="font-bebasNeue text-3xl text-theme-text">How to get started with permaculture today</h3>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            You do not need land ownership to begin. Composting kitchen scraps, harvesting rainwater from a downpipe, planting a fruit tree, or joining a local permaculture group are all valid entry points. The recognized design qualification remains the Permaculture Design Certificate, available through online providers and dedicated institutes for people who want to practice professionally.
          </p>
          <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
            The principle is constant at every scale: observe first, then design. Understand what the site, the system, or the community already does naturally, and build with that logic instead of fighting it.
          </p>
        </section>,

        <section key="faq" className="flex flex-col gap-4 text-left">
          <h3 className="text-left font-bebasNeue text-3xl text-theme-text sm:text-4xl">FAQ</h3>
          {Children.toArray(
            [
              [
                "What does permaculture mean?",
                "Permaculture is short for permanent agriculture and permanent culture. It is a design system developed in the 1970s that applies ecological principles to land use, food, housing, and community.",
              ],
              [
                "Is permaculture scientifically proven?",
                "Yes. A 2024 peer-reviewed study found permaculture sites produced three times the biodiversity of conventional farms while maintaining comparable crop yields.",
              ],
              [
                "How is permaculture different from organic farming?",
                "Organic farming mainly focuses on avoiding synthetic inputs in food production. Permaculture is broader: it designs integrated systems for food, water, energy, shelter, and community.",
              ],
              [
                "What are the three ethics of permaculture?",
                "Care for the earth, care for people, and return the surplus. Every permaculture principle and technique flows from those three foundations.",
              ],
              [
                "Where can I learn permaculture for free online?",
                "Start with the Permaculture Research Institute, Free Permaculture, Plants For A Future, and Permaculture Global. Together they cover articles, maps, courses, and plant databases.",
              ],
              [
                "How do I promote permaculture in my community?",
                "Visible practice works best: food gardens, composting systems, rainwater harvesting, and peer-to-peer sharing. People adopt it faster when they can see it working nearby.",
              ],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
                <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">{question}</h4>
                <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">{answer}</p>
              </div>
            ))
          )}
        </section>,

        <div key="closer" className="rounded-[18px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-5 font-montserrat text-base italic leading-8 text-theme-text">
          Permaculture does not ask you to save the world this weekend. It asks a harder and more practical question: can you design this patch of ground, this building, or this community so that it gives back more than it takes? Multiply that question by enough people and you stop talking about a trend. You start talking about a different civilization.
        </div>,
      ])}
    </div>
  );
}

export const threadArticleBody = <C2BArticleContent />;

export const threadFeaturedMedia: ThreadFeaturedMedia = {
  type: "image",
  src: "/threads/sustainable-futures/C2B/title.svg",
  alt: "Illustrated cover for the permaculture future article",
};

export default function C2BPage() {
  return <ThreadPageShell threadSlug="C2B" articleBody={threadArticleBody} featuredMedia={threadFeaturedMedia} sidebarContent={threadSidebarContent} />;
}
