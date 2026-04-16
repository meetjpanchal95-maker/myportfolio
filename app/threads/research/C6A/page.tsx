import { Children } from "react";
import GettyEmbedBlock from "../../../../components/GettyEmbedBlock";
import ThreadPageShell from "../../../../components/ThreadPageShell";
import type { ThreadFeaturedMedia } from "../../../../components/ThreadFeaturedMedia";

type C1ASidebarItem =
  | {
      type: "youtube";
      title: string;
      href: string;
      embedId: string;
      eyebrow: string;
      description: string;
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

const c1aSidebarSections: Array<{
  title: string;
  items: C1ASidebarItem[];
}> = [
  {
    title: "Watch",
    items: [
      {
        type: "youtube",
        title: "NICK MASON : FULL UNCUT INTERVIEW WITH IMPROVED SOUND",
        href: "https://www.youtube.com/watch?v=Px9BGOd1J_w",
        embedId: "Px9BGOd1J_w",
        eyebrow: "YouTube · John Edginton Documentaries",
        description: "Long interview with Nick Mason that helps anchor the Regent Street Polytechnic backstory in his own voice.",
      },
      {
        type: "youtube",
        title: "NICK MASON UNFILTERED: CANDID, WITTY AND RELAXED. FULL 59 MIN INTERVIEW ON SYD BARRETT & PINK FLOYD.",
        href: "https://www.youtube.com/watch?v=rimBBwQ8o0U",
        embedId: "rimBBwQ8o0U",
        eyebrow: "YouTube · John Edginton Documentaries",
        description: "A second deep interview that is useful for the early-band, studio, and design-era context around Floyd's origins.",
      },
      {
        type: "youtube",
        title: "Pink Floyd vs Genesis: The Architecture of Collapse",
        href: "https://www.youtube.com/watch?v=dKzy2BG01UI",
        embedId: "dKzy2BG01UI",
        eyebrow: "YouTube · JUST LISTEN",
        description: "Video essay connecting Pink Floyd's sense of structure, scale, and collapse to a more explicitly architectural reading.",
      },
      {
        type: "youtube",
        title: "Pink Floyd, Roger Waters, Nick Mason, and Richard Wright met as architecture students at London.",
        href: "https://www.youtube.com/watch?v=E-8akpMitbc",
        embedId: "E-8akpMitbc",
        eyebrow: "YouTube · Sound Box Tool",
        description: "Short, direct clip focused on the architecture-school origin story behind the band.",
      },
    ],
  },
  {
    title: "Read & Follow",
    items: [
      {
        type: "link",
        title: "Architectuul: Pink Floyds Concert Stage Design",
        href: "https://architectuul.com/architecture/pink-floyds-concert-stage-design",
        eyebrow: "Architectuul",
        description: "Architecture-focused entry on the 1977 inflatable stage canopy by Frei Otto and Ted Happold for Pink Floyd's live shows.",
      },
      {
        type: "link",
        title: "Floydian Slip: Nick Mason receives honorary degree",
        href: "https://www.floydianslip.com/news/2012/11/nick-mason-receives-honorary-degree/",
        eyebrow: "Floydian Slip",
        description: "Report on Westminster honoring Mason and his remarks about Pink Floyd effectively forming under the Polytechnic roof.",
        compact: true,
      },
      {
        type: "link",
        title: "Pink Floyd profile",
        href: "https://en.wikipedia.org/wiki/Pink_Floyd",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png",
        eyebrow: "Reference",
        description: "Public overview covering Regent Street origins, early lineups, and the band's architecture-school formation story.",
        compact: true,
      },
      {
        type: "link",
        title: "Nick Mason profile",
        href: "https://en.wikipedia.org/wiki/Nick_Mason",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png",
        eyebrow: "Reference",
        description: "Useful companion reference for Mason's architecture studies and his 2012 honorary doctorate from Westminster.",
        compact: true,
      },
      {
        type: "link",
        title: "Pink Floyd official site",
        href: "https://pinkfloyd.com/",
        eyebrow: "Official",
        description: "Official archive hub for albums, tours, exhibition material, and broader band history around the architecture-to-music leap.",
        compact: true,
      },
    ],
  },
];

const c1aPlaceholderCards = [
  {
    title: "Future image slot 01",
    href: "https://www.gettyimages.com/photos/pink-floyd",
    eyebrow: "Placeholder",
  },
  {
    title: "Future image slot 02",
    href: "https://unsplash.com/s/photos/concert-lighting",
    eyebrow: "Placeholder",
  },
];

export const threadSidebarContent = (
  <div className="flex h-full flex-col gap-4">
    {Children.toArray(
      c1aSidebarSections.map((section) => (
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
                        <div className="aspect-[16/8.8] overflow-hidden rounded-[10px]">
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
    <section className="flex flex-col gap-2.5 text-left">
      <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
        Image slots
      </p>
      <div className="flex flex-col gap-2.5">
        {Children.toArray(
          c1aPlaceholderCards.map((item, index) =>
            index === 0 ? (
              <GettyEmbedBlock
                key="placeholder-getty-1"
                id="ZHpnO68RSpR9TEgBXpWE3A"
                href="https://www.gettyimages.com/detail/1442835512"
                sig="zo9jdc9EyG63FjJKMka4Cp_oTfO04kPj0Nxm4gcU_m4="
                item="1442835512"
                width={594}
                height={396}
                caption={true}
                tld="com"
                is360={false}
                className="p-0"
              />
            ) : index === 1 ? (
              <GettyEmbedBlock
                key="placeholder-getty-2"
                id="VWaso48tTCRg5BY6Fks1BA"
                href="https://www.gettyimages.com/detail/79663310"
                sig="bkREGf4l3AgCLrhirMJYcSXFyh4xrK2HMR1T3-IoPyM="
                item="79663310"
                width={594}
                height={378}
                caption={true}
                tld="com"
                is360={false}
                className="p-0"
              />
            ) : (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[84px] flex-col justify-between rounded-[16px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_90%,var(--color-page-bg))] p-3 transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--color-hover-bg)] hover:bg-[color:color-mix(in_srgb,var(--color-main-bg)_82%,var(--color-page-bg))] hover:shadow-[0_16px_34px_rgba(0,0,0,0.18)]"
              >
                <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                  {item.eyebrow}
                </p>
                <div className="rounded-[12px] border border-[var(--color-text-accent)] bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--color-hover-bg)_30%,transparent),transparent_58%),linear-gradient(135deg,color-mix(in_srgb,var(--color-main-bg)_78%,var(--color-page-bg)),color-mix(in_srgb,var(--color-main-bg)_92%,black))] px-3 py-2.5">
                  <h4 className="font-montserrat text-[12px] font-semibold leading-4 text-theme-text transition-colors duration-200 group-hover:text-[var(--color-hover-bg)]">
                    {item.title}
                  </h4>
                </div>
              </a>
            )
          )
        )}
      </div>
    </section>
  </div>
);

export const threadArticleBody = (
  <div className="flex flex-col gap-8 text-left">
    <div className="inline-flex w-fit rounded-full border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-3 py-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-[var(--color-hover-bg)]">
      Architecture + Music
    </div>

    <section className="flex flex-col gap-4 text-left">
      <h2 className="text-left font-bebasNeue text-[1.8rem] leading-tight text-theme-text sm:text-[2.25rem]">
        Another Brick in the Wall - That Was Almost a Building
      </h2>
      <p className="border-l-[3px] border-[var(--color-text-accent)] pl-4 text-left font-montserrat text-base leading-8 text-theme-text/85 sm:text-lg">
        I&apos;ve spent years in architecture studios wondering if I&apos;m in the right room. Then I found out that three of Pink Floyd&apos;s founding members met in an architecture studio - and never quite left it, even after they left it.
      </p>
      <div className="flex flex-wrap gap-4 border-b border-[var(--color-text-accent)] pb-4 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">
        <span>Thread: 5 parts</span>
        <span>~4 min read</span>
        <span>Music · Architecture · Legacy</span>
      </div>
    </section>

    <section className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        1
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">A band born in a drafting room</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          September 1962. Regent Street Polytechnic, London. Two students are stacking their drawing boards in an architecture studio for the first time. Roger Waters looks at Nick Mason. Mason looks back. Neither of them is particularly thinking about chord progressions right now - they&apos;re thinking about load-bearing walls and site analysis.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          Within a few years, they would build something no structural engineer could have calculated: one of the most architecturally conceived bodies of music in rock history.
        </p>
        <div className="rounded-[18px] border-l-[3px] border-[var(--color-hover-bg)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
          <p className="font-montserrat text-base italic leading-7 text-theme-text">
            &quot;The band didn&apos;t escape architecture. They took it with them - into every stage design, every album concept, every wall they built in sound.&quot;
          </p>
        </div>
      </div>
    </section>

    <section className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        2
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">The architecture background - three students, one studio</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          Roger Waters, Nick Mason, and Richard Wright all enrolled at Regent Street Polytechnic - now the University of Westminster - to study architecture. This wasn&apos;t a casual overlap. The studio became their rehearsal room, their social world, their first audience.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3 text-center">
            <div className="font-montserrat text-[0.92rem] font-semibold text-theme-text">Roger Waters</div>
            <div className="mt-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Bass · Lyricist</div>
          </div>
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3 text-center">
            <div className="font-montserrat text-[0.92rem] font-semibold text-theme-text">Nick Mason</div>
            <div className="mt-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Drums · Architect</div>
          </div>
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3 text-center">
            <div className="font-montserrat text-[0.92rem] font-semibold text-theme-text">Richard Wright</div>
            <div className="mt-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Keys · Composer</div>
          </div>
        </div>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          Their earliest band was literally called The Architectural Abdabs - a name so on-the-nose it&apos;s almost funny. They weren&apos;t hiding what they were. They were architecture students who happened to also be a band, not the other way around. Not yet.
        </p>
      </div>
    </section>

    <section className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        3
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">The switch - when Syd Barrett walked through the door</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          The architecture-to-music pivot wasn&apos;t a single dramatic moment. It was gradual erosion - the way a river changes course. Syd Barrett, a childhood friend of Waters from Cambridge, arrived and the band&apos;s identity transformed. He brought psychedelic vision, strange tunings, and a songwriting instinct that made architecture school feel like a previous life.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          Waters later admitted he started taking his exams seriously again at one point - architecture pulling him back. Then Barrett&apos;s influence won. The drafting pencil was set down for good.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
            <div className="font-bebasNeue text-3xl text-theme-text">1962</div>
            <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Met at Regent St Poly</div>
          </div>
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
            <div className="font-bebasNeue text-3xl text-theme-text">1965</div>
            <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Became Pink Floyd</div>
          </div>
          <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
            <div className="font-bebasNeue text-3xl text-theme-text">1969</div>
            <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Music for Architectural Students</div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        4
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">The legacy - architecture never left the room</h3>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          Here&apos;s what makes this story extraordinary to me as an architect: they didn&apos;t abandon their training. They smuggled it into every corner of their work. Their stage designs were spatial experiences - circular projection screens, surround sound systems, inflatable structures - all thinking in three dimensions the way only architects do.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          When Waters and Mason couldn&apos;t read conventional sheet music, they notated the structure of A Saucerful of Secrets in their own invented system. David Gilmour later said it looked like an architectural diagram. Of course it did.
        </p>
        <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
          And then there&apos;s The Wall - a rock opera about isolation, psychological barriers, and self-imprisonment. An architectural metaphor so precise it could have been a thesis. Around the same time, Rem Koolhaas was writing his own architecture school thesis - Exodus, or the Voluntary Prisoners of Architecture - about a wall as a condition of freedom through confinement. The two ideas were orbiting the same thought from different disciplines.
        </p>
        <div className="rounded-[18px] border-l-[3px] border-[var(--color-hover-bg)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
          <p className="font-montserrat text-base italic leading-7 text-theme-text">
            &quot;In 2012, Westminster awarded Nick Mason an Honorary Doctorate - officially completing the architecture degree he never finished. Fifty years late. Entirely deserved.&quot;
          </p>
        </div>
      </div>
    </section>

    <section className="relative flex gap-4 text-left">
      <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
        5
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bebasNeue text-3xl text-theme-text">Lessons - what three architects accidentally proved</h3>
        <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">Your discipline doesn&apos;t disappear when you change fields.</strong> Waters, Mason, and Wright took spatial thinking, structural logic, and scale sensitivity into music. It became their most distinctive quality.
          </p>
        </div>
        <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">Where you meet matters as much as what you study.</strong> The architecture studio didn&apos;t just teach them design - it gave them each other. The environment produced the collaboration.
          </p>
        </div>
        <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">The abandoned degree often becomes the secret engine.</strong> Pink Floyd&apos;s live shows were architectural events. Their concept albums were spatial journeys. They built things - just not in concrete.
          </p>
        </div>
        <div className="flex items-start gap-3 py-3">
          <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
          <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
            <strong className="font-semibold text-theme-text">The best creative work collapses the boundary between disciplines.</strong> The Wall is not a music album. It is not an architecture thesis. It is both, from people trained to think in structures.
          </p>
        </div>
      </div>
    </section>

    <div className="rounded-[18px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-5 font-montserrat text-base italic leading-8 text-theme-text">
      Every time I sit in a studio wondering if architecture is enough, I think about three students at Regent Street Polytechnic who built walls - in music, in light, in space - that outlasted every building they never designed. The drafting table was just the beginning of the brief.
    </div>

    <section className="flex flex-col gap-4 text-left">
      <h3 className="text-left font-bebasNeue text-3xl text-theme-text sm:text-4xl">
        FAQ
      </h3>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">Did Pink Floyd members study architecture?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Yes. Three of Pink Floyd&apos;s five founding members - Roger Waters, Nick Mason, and Richard Wright - met while studying architecture at Regent Street Polytechnic in London, now the University of Westminster, in the early 1960s.</p>
      </div>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">What was Pink Floyd&apos;s original band name?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Their early band went through several names, including Sigma 6 and The Architectural Abdabs - a direct reference to their shared background as architecture students.</p>
      </div>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">How did architecture influence Pink Floyd&apos;s music?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Pink Floyd&apos;s architectural training influenced their elaborate stage designs, their spatial approach to sound, their use of scale and proportion in live shows, and conceptual works like The Wall, which used the metaphor of a wall as a structural and psychological device.</p>
      </div>
      <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
        <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">Did Nick Mason complete his architecture degree?</h4>
        <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">No, but in 2012, the University of Westminster awarded Nick Mason an Honorary Doctor of Letters, effectively recognising the architecture degree he left unfinished over fifty years earlier.</p>
      </div>
    </section>
  </div>
);

export const threadFeaturedMedia: ThreadFeaturedMedia = {
  type: "pair",
  primary: {
    type: "getty",
    alt: "Getty featured media for C1A",
    embed: {
      id: "-YFrQyJbQ8FIm21V5Cx-2w",
      href: "https://www.gettyimages.com/detail/593342717",
      sig: "5FM0Q9e98FoxnVxahSybcI-ETezdIZZYBjbJ2Snkks4=",
      item: "593342717",
      width: 594,
      height: 394,
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
    alt: "Getty secondary media for C1A",
    embed: {
      id: "FqKGRX-vRY1LVx-MuLcEDQ",
      href: "https://www.gettyimages.com/detail/86125901",
      sig: "9T_nLrUexe-MjhUwIpwCHqIxSfk5GlkBGHcsqlYt-QA=",
      item: "86125901",
      width: 594,
      height: 446,
      caption: false,
      tld: "com",
      is360: false,
      className: "p-0",
      zoomScale: 1,
      transformOrigin: "center center",
    },
  },
};

export default function C1APage() {
  return <ThreadPageShell threadSlug="C6A" articleBody={threadArticleBody} featuredMedia={threadFeaturedMedia} sidebarContent={threadSidebarContent} />;
}
