import { Children } from "react";
import ThreadPageShell from "../../../../components/ThreadPageShell";
import GettyEmbedBlock from "../../../../components/GettyEmbedBlock";
import type { ThreadFeaturedMedia } from "../../../../components/ThreadFeaturedMedia";

type C1CSidebarItem =
  | {
      type: "youtube";
      title: string;
      href: string;
      embedId: string;
      eyebrow: string;
      description: string;
      isShort?: boolean;
    }
  | {
      type: "link";
      title: string;
      href: string;
      eyebrow: string;
      description: string;
      imageSrc?: string;
      compact?: boolean;
    };

const c1cSidebarSections: Array<{
  title: string;
  items: C1CSidebarItem[];
}> = [
  {
    title: "Watch",
    items: [
      {
        type: "youtube",
        title: "Basu Shanker | Varun Chakravarthy | Mystery Spinner",
        href: "https://www.youtube.com/watch?v=uq9gyVkl2qg",
        embedId: "uq9gyVkl2qg",
        eyebrow: "YouTube · Basu TV",
        description: "Interview focused on his mystery-spin craft and cricket journey.",
      },
      {
        type: "youtube",
        title: "Breakfast with Champions ft. Varun Chakaravarthy",
        href: "https://www.youtube.com/watch?v=bqNrCXxhEz0",
        embedId: "bqNrCXxhEz0",
        eyebrow: "YouTube · Oaktree Sports",
        description: "Long-form conversation on his career arc and life beyond the pitch.",
      },
      {
        type: "youtube",
        title: "Varun Chakravarthy Interview: Team India Snub, KKR days, Filmmaking Aspirations, and IPL 2024 Goals",
        href: "https://www.youtube.com/watch?v=xw38Hqw6tjg",
        embedId: "xw38Hqw6tjg",
        eyebrow: "YouTube · CricXtasy",
        description: "Detailed sit-down on setbacks, KKR, India ambitions, and his filmmaking interests away from cricket.",
      },
      {
        type: "youtube",
        title: "From Street Cricket to Stadiums: The Inspiring Story of Varun Chakravarthy | Life Lessons | Gobinath",
        href: "https://www.youtube.com/watch?v=gVpMYaJK9j4",
        embedId: "gVpMYaJK9j4",
        eyebrow: "YouTube · Gobinath",
        description: "Story-driven video that leans into his background, mindset, and personal journey beyond match footage.",
      },
      {
        type: "youtube",
        title: "Varun Chakravarthy Bowling Grip and Release #shorts #cricket #technique",
        href: "https://www.youtube.com/watch?v=KBd1eBYE-Bk",
        embedId: "KBd1eBYE-Bk",
        eyebrow: "YouTube Short · Gully Cricket Gamer",
        description: "Short breakdown of his grip and release, useful for the bowling-mechanics angle.",
        isShort: true,
      },
      {
        type: "youtube",
        title: "Varun Chakravarthy Bowling Class #shorts #cricket #trending",
        href: "https://www.youtube.com/shorts/scYoGeVtn3Q",
        embedId: "scYoGeVtn3Q",
        eyebrow: "YouTube Short · Sports Lovers",
        description: "Quick action-heavy short that adds one more compact bowling clip to the stack.",
        isShort: true,
      },
    ],
  },
  {
    title: "Read & Follow",
    items: [
      {
        type: "link",
        title: "WION: Architect-turned-cricketer after India call-up",
        href: "https://www.wionews.com/sports/wasnt-expecting-it-architect-turned-cricketer-varun-chakravarthy-after-being-awarded-india-call-up-338245",
        imageSrc: "https://cdn.wionews.com/sites/default/files/2020/10/27/166852-elgn7bouuaigvao.jpg",
        eyebrow: "WION",
        description: "Report on his India selection and comments on moving from architecture to cricket.",
      },
     
      {
        type: "link",
        title: "Free Press Journal: How a CSK net-bowling stint paved his IPL entry",
        href: "https://www.freepressjournal.in/sports/varun-chakravarthy-shares-story-of-how-net-bowling-stint-with-csk-paved-way-for-ipl-entry-video",
        eyebrow: "Free Press Journal",
        description: "Recent feature on the Ashwin interview where he recounts chasing the CSK bus and earning his first real break.",
        compact: true,
      },
      {
        type: "link",
        title: "BCCI player videos page",
        href: "https://www.bcci.tv/international/men/videos/players/varun-chakravarthy/140",
        eyebrow: "BCCI",
        description: "Official player video hub with interviews, wicket clips, and recent India highlights featuring Varun.",
        compact: true,
      },
     
      {
        type: "link",
        title: "Instagram profile",
        href: "https://www.instagram.com/chakaravarthyvarun/",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        eyebrow: "Instagram",
        description: "Social profile link for public posts and updates.",
        compact: true,
      },
    ],
  },
];

export const threadSidebarContent = (
  <div className="flex h-full flex-col gap-5">
    {Children.toArray(
      c1cSidebarSections.map((section) => (
        <section key={section.title} className="flex flex-col gap-3 text-left">
          <h3 className="font-bebasNeue text-2xl text-theme-text">{section.title}</h3>
          <div className="flex flex-col gap-2.5">
            {Children.toArray(
              section.items.map((item) => {
                if (item.type === "youtube") {
                  return (
                    <div
                      key={item.href}
                      className="overflow-hidden rounded-[16px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_90%,var(--color-page-bg))] p-2.5"
                    >
                      <div className="flex flex-col gap-1.5">
                        <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                          {item.eyebrow}
                        </p>
                        <h4 className="font-montserrat text-[13px] font-semibold leading-5 text-theme-text">
                          {item.title}
                        </h4>
                        <p className="font-montserrat text-[11px] leading-[1.35rem] text-theme-text/72">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-2.5 rounded-[12px] border border-[var(--color-text-accent)] bg-black p-0">
                        {item.isShort ? (
                          <div className="mx-auto h-[220px] w-[124px] overflow-hidden rounded-[10px] sm:h-[236px] sm:w-[132px]">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${item.embedId}`}
                              title={item.title}
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="h-full w-full border-0"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[16/8.6] overflow-hidden rounded-[10px]">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${item.embedId}`}
                              title={item.title}
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="h-full w-full border-0"
                            />
                          </div>
                        )}
                      </div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex font-source-code text-[10px] uppercase tracking-[0.14em] text-[var(--color-hover-bg)] transition-colors duration-200 hover:text-theme-text"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-[16px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_90%,var(--color-page-bg))] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--color-hover-bg)] hover:bg-[color:color-mix(in_srgb,var(--color-main-bg)_82%,var(--color-page-bg))] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]"
                  >
                    {item.compact ? (
                      <div className="flex items-start gap-3 p-3">
                        {item.imageSrc ? (
                          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] border border-[var(--color-text-accent)] bg-[var(--color-page-bg)] p-2">
                            <img
                              src={item.imageSrc}
                              alt={item.title}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                          </div>
                        ) : (
                          <div className="flex h-[52px] w-[52px] shrink-0 items-end rounded-[12px] bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--color-hover-bg)_38%,transparent),transparent_55%),linear-gradient(135deg,color-mix(in_srgb,var(--color-main-bg)_78%,var(--color-page-bg)),color-mix(in_srgb,var(--color-main-bg)_92%,black))] p-2">
                            <p className="font-bebasNeue text-lg leading-none text-theme-text/90">
                              {item.eyebrow}
                            </p>
                          </div>
                        )}
                        <div className="flex min-w-0 flex-col gap-1">
                          <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                            {item.eyebrow}
                          </p>
                          <h4 className="font-montserrat text-[13px] font-semibold leading-5 text-theme-text transition-colors duration-200 group-hover:text-[var(--color-hover-bg)]">
                            {item.title}
                          </h4>
                          <p className="font-montserrat text-[11px] leading-[1.35rem] text-theme-text/72">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        {item.imageSrc ? (
                          <div className="aspect-[16/9] overflow-hidden bg-[var(--color-page-bg)]">
                            <img
                              src={item.imageSrc}
                              alt={item.title}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                          </div>
                        ) : (
                          <div className="flex aspect-[16/9] items-end bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--color-hover-bg)_38%,transparent),transparent_55%),linear-gradient(135deg,color-mix(in_srgb,var(--color-main-bg)_78%,var(--color-page-bg)),color-mix(in_srgb,var(--color-main-bg)_92%,black))] p-4">
                            <p className="font-bebasNeue text-3xl leading-none text-theme-text/90">
                              {item.eyebrow}
                            </p>
                          </div>
                        )}
                        <div className="flex flex-col gap-1.5 p-3">
                          <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                            {item.eyebrow}
                          </p>
                          <h4 className="font-montserrat text-[13px] font-semibold leading-5 text-theme-text transition-colors duration-200 group-hover:text-[var(--color-hover-bg)]">
                            {item.title}
                          </h4>
                          <p className="font-montserrat text-[11px] leading-[1.35rem] text-theme-text/72">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </a>
                );
              })
            )}
          </div>
        </section>
      ))
    )}
  </div>
);

function C1CArticleContent() {
  return (
    <div className="flex flex-col gap-8 text-left">
      {Children.toArray([
        <div key="badge" className="inline-flex w-fit rounded-full border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-3 py-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-[var(--color-hover-bg)]">
          Cricket + Career
        </div>,

        <section key="intro" className="flex flex-col gap-4 text-left">
          <h2 className="text-left font-bebasNeue text-[1.8rem] leading-tight text-theme-text sm:text-[2.25rem]">
            The Man Who Designed His Own Path - On Paper, Then On a Pitch
          </h2>
          <p className="border-l-[3px] border-[var(--color-text-accent)] pl-4 text-left font-montserrat text-base leading-8 text-theme-text/85 sm:text-lg">
            I&apos;m an architect. I obsess over blueprints, structure, and the unseen logic that holds things together. So when I first heard about Varun Chakravarthy - an architect who became IPL&apos;s most dangerous mystery spinner - I didn&apos;t just feel curious. I felt seen.
          </p>
          <div className="flex flex-wrap gap-4 border-b border-[var(--color-text-accent)] pb-4 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">
            <span>Thread: 5 parts</span>
            <span>~4 min read</span>
            <span>Cricket · Career · Life</span>
          </div>
        </section>,

    <section key="part-1" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        1
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">The hook - a story you didn&apos;t know you needed</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          Imagine this: a 28-year-old architect, degree in hand, decent career ahead - walks away from it all to bowl off-spin in the Indian Premier League. No BCCI age-group record. No Under-19 cap. Just raw obsession, a backyard, and a grip he invented himself.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          That&apos;s Varun Chakravarthy. And for me - a fellow blueprint-chaser - his story hits different.
        </p>
        <div className="rounded-[18px] border-l-[3px] border-[var(--color-hover-bg)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
          <p className="font-montserrat text-base italic leading-7 text-theme-text">
            &quot;He didn&apos;t just change careers. He redesigned himself from scratch.&quot;
          </p>
        </div>
      </div>
    </section>,

    <section key="part-2" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        2
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">The architecture years</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          Varun studied architecture at MEASI Academy, Chennai. He was genuinely good at it - spatial reasoning, structural thinking, the patience to work through long technical problems. Skills that, it turns out, translate remarkably well to bowling.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          But cricket kept pulling at him. He played club cricket on weekends while completing his degree, never quite letting go of the dream. The T-square and the cricket ball coexisted for years.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          As someone who spends hours obsessing over section cuts and load paths, I recognise that dual life. The project you&apos;re supposed to be doing and the one that won&apos;t leave your head.
        </p>
      </div>
    </section>,

    <section key="part-3" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        3
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">The switch - and the audacity it takes</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          At 25, Varun made the call. He quit his architecture job to pursue professional cricket full-time. By most rational calculations, this was absurd. The average Indian domestic cricketer gets his first Ranji cap before 22. He was starting properly at 25.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          What he had, though, was a completely self-invented bowling action - a carrom ball, a mystery googly, a top-spinner disguised as a legbreak. Variations that batsmen had never faced because he&apos;d never been in a system that might have coached them out of him.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
            <div className="font-bebasNeue text-3xl text-theme-text">25</div>
            <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Age of career switch</div>
          </div>
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
            <div className="font-bebasNeue text-3xl text-theme-text">7+</div>
            <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Distinct deliveries</div>
          </div>
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
            <div className="font-bebasNeue text-3xl text-theme-text">2019</div>
            <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">TNPL breakthrough</div>
          </div>
        </div>
      </div>
    </section>,

    <section key="part-4" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        4
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">IPL success - the numbers that shocked everyone</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          KKR picked him up for Rs 8.4 crore in the 2020 IPL auction. Overnight, Twitter was full of &quot;Who?&quot; and then just as quickly, full of replays of batsmen looking completely bewildered.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          He went on to represent India in T20Is. An architect who had never played a single Ranji Trophy match, earning the India cap. In a system as hierarchical and credential-obsessed as Indian cricket, that remains extraordinary.
        </p>
        <div className="rounded-[18px] border-l-[3px] border-[var(--color-hover-bg)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
          <p className="font-montserrat text-base italic leading-7 text-theme-text">
            &quot;The same eyes trained to read a structural drawing can read a batsman&apos;s weight distribution.&quot;
          </p>
        </div>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          His economy, his wicket-taking ability in the powerplay, his comfort in pressure overs - all of it looked like someone had run precise calculations and found the exact angles that would work.
        </p>
      </div>
    </section>,

    <section key="part-5" className="relative flex gap-4 text-left">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        5
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">What his story actually teaches</h3>
        <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">Late starts are not disqualifications.</strong> Every system tells you the window closes at 21. Varun proves windows are a design choice, not a law of physics.
          </p>
        </div>
        <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">Your other skills are load-bearing.</strong> His architectural training - precision, spatial analysis, iterative problem solving - almost certainly shaped how he thinks about bowling. Your background is never wasted.
          </p>
        </div>
        <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">Staying outside the system has asymmetric upside.</strong> Because no coach told him to bowl correctly, he built variations nobody had mapped. Unconventional paths create genuinely new things.
          </p>
        </div>
        <div className="flex items-start gap-3 py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">Obsession is the only real prerequisite.</strong> Not age, not pedigree, not timing. Just whether you care enough to show up after the rational case for doing so has collapsed.
          </p>
        </div>
      </div>
    </section>,

        <div key="closer" className="rounded-[18px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-5 font-montserrat text-base italic leading-8 text-theme-text">
          As an architect who sometimes wonders what path I didn&apos;t take, Varun&apos;s story doesn&apos;t make me want to switch careers. It makes me want to be as precise and fearless in the one I&apos;m already building. That&apos;s probably the best thing a good story can do.
        </div>,

    <section key="faq" className="flex flex-col gap-4 text-left">
      <h3 className="text-left font-bebasNeue text-3xl text-theme-text sm:text-4xl">
        FAQ
      </h3>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">What did Varun Chakravarthy do before cricket?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Varun Chakravarthy worked as an architect after graduating from MEASI Academy of Architecture in Chennai before switching to professional cricket at age 25.</p>
      </div>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">When did Varun Chakravarthy start playing professional cricket?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Varun Chakravarthy began pursuing professional cricket seriously around 2017-2018 and had his IPL breakthrough in 2020 with KKR.</p>
      </div>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">How many variations does Varun Chakravarthy bowl?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Varun Chakravarthy is known for bowling seven or more distinct deliveries, including a carrom ball, mystery googly, and a disguised top-spinner.</p>
      </div>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">Has Varun Chakravarthy played for India?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Yes. Varun Chakravarthy has represented India in T20 International cricket, a rare achievement for a player who never played Under-19 or Ranji-level cricket before entering the IPL.</p>
      </div>
    </section>,

    <section key="post-faq-media" className="flex flex-col gap-4 text-left">
      <GettyEmbedBlock
        id="Bm9J0MbvTOh8IIeEySRyTA"
        href="https://www.gettyimages.com/detail/2243744853"
        sig="lJD1wIoaETMgrgcIXfyGy6cmUqqn0Zol_VV8WoP6ns4="
        item="2243744853"
        width={594}
        height={396}
        caption={true}
        tld="com"
        is360={false}
        className="p-0"
        zoomScale={1}
        transformOrigin="center center"
      />
    </section>,

      ])}
    </div>
  );
}

export const threadArticleBody = <C1CArticleContent />;

export const threadFeaturedMedia: ThreadFeaturedMedia = {
  type: "pair",
  primary: {
    type: "getty",
    alt: "Varun Chakravarthy in match action",
    embed: {
      id: "CORPtbGYSpB8SQIrdrDh1Q",
      href: "https://www.gettyimages.com/detail/2196531637",
      sig: "dSP1ynXLkqLr_u6N1HoE4STvVe2naYs3SX5mv6bRo-Q=",
      item: "2196531637",
      width: 594,
      height: 396,
      caption: true,
      tld: "com",
      is360: false,
      className: "p-0",
      zoomScale: 1,
      transformOrigin: "center center",
    },
  },
  secondary: {
    type: "getty",
    alt: "Varun Chakravarthy bowling for KKR",
    embed: {
      id: "ZsBjC760T0J4_RHNdIuzdg",
      href: "https://www.gettyimages.com/detail/2151952085",
      sig: "_AsaOCtPdGt0--VhgB9vV1oKHPitx-CgNMIsymxol54=",
      item: "2151952085",
      width: 594,
      height: 396,
      caption: true,
      tld: "com",
      is360: false,
      className: "p-0",
      zoomScale: 1,
      transformOrigin: "center center",
    },
  },
};

export default function C1CPage() {
  return <ThreadPageShell threadSlug="C5C" articleBody={threadArticleBody} featuredMedia={threadFeaturedMedia} sidebarContent={threadSidebarContent} />;
}
