import { Children } from "react";
import GettyEmbedBlock from "../../../../components/GettyEmbedBlock";
import ThreadPageShell from "../../../../components/ThreadPageShell";
import type { ThreadFeaturedMedia } from "../../../../components/ThreadFeaturedMedia";

type C1BSidebarItem =
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

const c1bSidebarSections: Array<{
  title: string;
  items: C1BSidebarItem[];
}> = [
  {
    title: "Watch",
    items: [
      {
        type: "youtube",
        title: "Ratan Tata '59: The Cornell Story",
        href: "https://www.youtube.com/watch?v=qxnHEM0hQrk",
        embedId: "qxnHEM0hQrk",
        eyebrow: "YouTube · Cornell University",
        description: "The strongest source here: Cornell's own documentary on Tata's architecture education, design thinking, and legacy.",
      },
      {
        type: "youtube",
        title: "In conversation with Mr. Ratan N Tata on 'Architecture is a very satisfying profession'",
        href: "https://www.youtube.com/watch?v=PItCInwAaNk",
        embedId: "PItCInwAaNk",
        eyebrow: "YouTube · Corp Gini",
        description: "Direct archival conversation centered on architecture, practice, and why the discipline still mattered to him.",
      },
      {
        type: "youtube",
        title: "Ratan Tata on Following JRD Tata: 'I Was Confused, So I Decided to Be Myself'",
        href: "https://www.youtube.com/watch?v=P0QsCEIkNcU",
        embedId: "P0QsCEIkNcU",
        eyebrow: "YouTube · Financeit TV",
        description: "A useful leadership clip on succession pressure, independence, and how he framed long-term decision making.",
      },
      {
        type: "youtube",
        title: "#RatanTata on his experience studying in the US at Cornell University",
        href: "https://www.youtube.com/watch?v=xVbQ5EkjNjE",
        embedId: "xVbQ5EkjNjE",
        eyebrow: "YouTube · Career Z",
        description: "Shorter clip focused on his Cornell years and how the US education experience shaped his point of view.",
        isShort: true,
      },
    ],
  },
  {
    title: "Read & Follow",
    items: [
      {
        type: "link",
        title: "Harvard Business School interview profile",
        href: "https://www.hbs.edu/creating-emerging-markets/interviews/Pages/profile.aspx?profile=rntata",
        eyebrow: "Harvard Business School",
        description: "Long-form interview summary on restructuring Tata Group, the Jaguar Land Rover acquisition, Nano, ethics, and social impact.",
      },
      {
        type: "link",
        title: "Cornell Entrepreneur of the Year announcement",
        href: "https://news.cornell.edu/stories/2012/08/tata-named-2013-cornell-entrepreneur-year",
        eyebrow: "Cornell Chronicle",
        description: "Cornell's profile of Tata's rise, philanthropy, and the scale he took the group to by the early 2010s.",
        imageSrc: "https://news.cornell.edu/sites/chronicle.cornell/files/RatanTata_0.jpg",
        compact: true,
      },
      {
        type: "link",
        title: "Cornell Tech inaugurates Tata Innovation Center",
        href: "https://news.cornell.edu/stories/2017/12/cornell-tech-inaugurates-tata-innovation-center",
        eyebrow: "Cornell Chronicle",
        description: "Useful for the institution-building side of the story and Tata's relationship with education, research, and public impact.",
        imageSrc: "https://news.cornell.edu/sites/default/files/styles/story_thumbnail_lg/public/2017-12/12-4TIC-TN.jpg?itok=NS7ALQVy",
        compact: true,
      },
      {
        type: "link",
        title: "Britannica biography",
        href: "https://www.britannica.com/biography/Ratan-Tata",
        eyebrow: "Britannica",
        description: "A cleaner broad biography covering Cornell, Tata Group expansion, Nano, philanthropy, and global recognition.",
        imageSrc: "https://cdn.britannica.com/78/263478-050-AC2F19FF/chairman-of-india-tata-motors-ratan-tata-geneva-international-motor-show-march-3-2009.jpg",
        compact: true,
      },
      {
        type: "link",
        title: "Wikipedia profile",
        href: "https://en.wikipedia.org/wiki/Ratan_Tata",
        eyebrow: "Wikipedia",
        description: "Quick reference page with architecture education, Tata Steel floor start, Pritzker jury role, and major acquisitions in one place.",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Shri_Ratan_Naval_Tata.jpg/960px-Shri_Ratan_Naval_Tata.jpg",
        compact: true,
      },
    ],
  },
];

const c1bGettyGallery = [
  {
    key: "c1b-getty-starbucks",
    id: "jvPQcSaqRgpBSj7FBRec6Q",
    href: "https://www.gettyimages.com/detail/154537758",
    sig: "UA6sn-E4JMfbzqicPe5xXSIDEqoSGwyRiVBLmcH2ZFs=",
    item: "154537758",
    width: 594,
    height: 396,
  },
  {
    key: "c1b-getty-uk-india",
    id: "kJRAOOqaSrdf2O1ZBltzxw",
    href: "https://www.gettyimages.com/detail/108793935",
    sig: "RkzSV1TfCI73foeyPEUt1VM_ZKf0GnheVkL6NoGCKuA=",
    item: "108793935",
    width: 594,
    height: 396,
  },
  {
    key: "c1b-getty-singapore-session",
    id: "3TcOK2XtQ6JkopxWw8L5uw",
    href: "https://www.gettyimages.com/detail/517957248",
    sig: "tFqmhjoTvVSxyOcLUyaMMkvCgH2tlQ0KrEkf6adRCCE=",
    item: "517957248",
    width: 594,
    height: 394,
  },
  {
    key: "c1b-getty-fiat",
    id: "cxQ4XPkzQ_VJ4g_Ud6ZU-g",
    href: "https://www.gettyimages.com/detail/1440688207",
    sig: "PUGiARUZWqTOIKb3ycnLq8S9VumjaQ1-vijQP6-82to=",
    item: "1440688207",
    width: 594,
    height: 395,
  },
  {
    key: "c1b-getty-geneva",
    id: "kCKwbA6-Qq5xuq0PsRK_Iw",
    href: "https://www.gettyimages.com/detail/163137581",
    sig: "4pBZWcVMhcAYFWbgRRd9qj3iH8LGrVBScABg9mXIWDE=",
    item: "163137581",
    width: 594,
    height: 396,
  },
  {
    key: "c1b-getty-tata-steel",
    id: "YEA4G9tiSSdCZBWeKH8VcQ",
    href: "https://www.gettyimages.com/detail/150281829",
    sig: "IQxuhWGlfDvIy0KW19xLU4rsP_X6f0N0mv53PJnhxZg=",
    item: "150281829",
    width: 594,
    height: 382,
  },
];

export const threadSidebarContent = (
  <div className="flex h-full flex-col gap-5">
    {Children.toArray(
      c1bSidebarSections.map((section) => (
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
                      item.imageSrc ? (
                        <div className="relative min-h-[118px] overflow-hidden p-3">
                          <img
                            src={item.imageSrc}
                            alt={item.title}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-[color:color-mix(in_srgb,var(--color-main-bg)_82%,var(--color-page-bg))] opacity-90" />
                          <div className="relative z-10 flex min-h-[92px] flex-col justify-end gap-1.5">
                            <p className="font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                              {item.eyebrow}
                            </p>
                            <p className="font-montserrat text-[11px] leading-[1.35rem] text-theme-text/78">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3 p-3">
                          <div className="flex h-[52px] w-[52px] shrink-0 items-end rounded-[12px] bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--color-hover-bg)_38%,transparent),transparent_55%),linear-gradient(135deg,color-mix(in_srgb,var(--color-main-bg)_78%,var(--color-page-bg)),color-mix(in_srgb,var(--color-main-bg)_92%,black))] p-2">
                            <p className="font-bebasNeue text-lg leading-none text-theme-text/90">
                              {item.eyebrow}
                            </p>
                          </div>
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
                      )
                    ) : (
                      <>
                        <div className="flex aspect-[16/9] items-end bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--color-hover-bg)_38%,transparent),transparent_55%),linear-gradient(135deg,color-mix(in_srgb,var(--color-main-bg)_78%,var(--color-page-bg)),color-mix(in_srgb,var(--color-main-bg)_92%,black))] p-4">
                          <p className="font-bebasNeue text-3xl leading-none text-theme-text/90">
                            {item.eyebrow}
                          </p>
                        </div>
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
          c1bGettyGallery.map((item) => (
            <GettyEmbedBlock
              key={item.key}
              id={item.id}
              href={item.href}
              sig={item.sig}
              item={item.item}
              width={item.width}
              height={item.height}
              caption={true}
              tld="com"
              is360={false}
              className="p-0"
            />
          ))
        )}
      </div>
    </section>
  </div>
);

function C1BArticleContent() {
  return (
    <div className="flex flex-col gap-8 text-left">
      {Children.toArray([
        <div key="badge" className="inline-flex w-fit rounded-full border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-3 py-1 font-source-code text-[11px] uppercase tracking-[0.14em] text-[var(--color-hover-bg)]">
          Architecture + Legacy
        </div>,

        <section key="intro" className="flex flex-col gap-4 text-left">
          <h2 className="text-left font-bebasNeue text-[1.8rem] leading-tight text-theme-text sm:text-[2.25rem]">
            The Man Who Never Built a Building - But Redesigned a Nation
          </h2>
          <p className="border-l-[3px] border-[var(--color-text-accent)] pl-4 text-left font-montserrat text-base leading-8 text-theme-text/85 sm:text-lg">
            I became an architect to build things that matter. Ratan Tata became one too - then quietly set down the drafting pencil, walked into a steel plant as an apprentice, and built something on an entirely different scale. This is the story I keep coming back to.
          </p>
          <div className="flex flex-wrap gap-4 border-b border-[var(--color-text-accent)] pb-4 font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">
            <span>Thread: 5 parts</span>
            <span>~4 min read</span>
            <span>Business · Architecture · Legacy</span>
          </div>
        </section>,

        <section key="part-1" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
          <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
            1
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bebasNeue text-3xl text-theme-text">An architect who built a $100 billion empire</h3>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              Ithaca, New York. 1957. A young Indian student, two years into an engineering degree at Cornell, makes a quiet decision - he switches to architecture. Not because of family pressure or a calculated career move. Simply because it was the thing he actually wanted to do.
            </p>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              That student was Ratan Naval Tata. He graduated with a B.Arch from Cornell in 1962, briefly worked at an architecture firm in Los Angeles, then returned to India - and onto a shop floor at Tata Steel, wearing a hard hat, earning a worker&apos;s wage. The heir to one of India&apos;s greatest industrial dynasties, learning a business from its foundation up, the same way an architect learns a site before touching a drawing board.
            </p>
            <div className="rounded-[18px] border-l-[3px] border-[var(--color-hover-bg)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
              <p className="font-montserrat text-base italic leading-7 text-theme-text">
                &quot;The miles of tracing paper that all of us wasted on one concept after another did one thing: it taught us that we didn&apos;t stick with one thing. We tried, and we tried, and we improved, and we reconceived what we had to do. It&apos;s no different in business.&quot;
              </p>
              <p className="mt-2 font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                Ratan Tata · Cornell Reunion Documentary · 2009
              </p>
            </div>
          </div>
        </section>,

        <section key="part-2" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
          <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
            2
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bebasNeue text-3xl text-theme-text">The architecture years - Cornell and the tracing paper method</h3>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              Ratan Tata enrolled at Cornell in 1955, initially in engineering, before transferring to the College of Architecture, Art and Planning. He spent years in the architecture studio doing what every architecture student knows intimately: sketching a concept, having it torn apart in critique, discarding it, and beginning again.
            </p>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              He spoke about those years with unusual warmth throughout his life. In a 2009 Cornell reunion documentary, he credited architectural training directly for his business instincts, describing the iterative studio process as teaching him not to cling to a single idea. The miles of tracing paper, the endless reconception - that was the method.
            </p>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              After graduating, he worked at Jones and Emmons, an architecture firm in Los Angeles, before his grandmother called him back to India.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
                <div className="font-bebasNeue text-3xl text-theme-text">1955</div>
                <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Enrolled at Cornell</div>
              </div>
              <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
                <div className="font-bebasNeue text-3xl text-theme-text">1962</div>
                <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">B.Arch graduation</div>
              </div>
              <div className="rounded-[16px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-4 py-3">
                <div className="font-bebasNeue text-3xl text-theme-text">LA</div>
                <div className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">Jones and Emmons</div>
              </div>
            </div>
          </div>
        </section>,

        <section key="part-3" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
          <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
            3
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bebasNeue text-3xl text-theme-text">The switch - from studio to steel plant</h3>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              Most heirs arrive at the top. Ratan Tata arrived at the bottom - by choice. He began at Tata Steel&apos;s plant in Jamshedpur, working on the shop floor alongside labourers. The man who had studied at Cornell and worked in a Los Angeles architecture studio was now shovelling limestone and learning what an empire actually ran on at its foundation.
            </p>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              It was the architectural approach applied to business: understand the site before you touch the drawing board. It took decades of patient, unglamorous work before he became Chairman of Tata Sons in 1991. He found a group that was powerful but fragmented - companies operating under the Tata name without a unified identity or shared vision.
            </p>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-2.5">
                <span className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">1962</span>
                <p className="font-montserrat text-[0.92rem] leading-7 text-theme-text/85">Returns to India and joins Tata Steel on the shop floor.</p>
              </div>
              <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-2.5">
                <span className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">1975</span>
                <p className="font-montserrat text-[0.92rem] leading-7 text-theme-text/85">Completes the Advanced Management Program at Harvard Business School.</p>
              </div>
              <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-2.5">
                <span className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">1991</span>
                <p className="font-montserrat text-[0.92rem] leading-7 text-theme-text/85">Becomes Chairman of Tata Sons.</p>
              </div>
              <div className="flex items-start gap-3 py-2.5">
                <span className="font-source-code text-[11px] uppercase tracking-[0.14em] text-light-gray">1998</span>
                <p className="font-montserrat text-[0.92rem] leading-7 text-theme-text/85">Launches Tata Indica, India&apos;s first indigenous passenger car.</p>
              </div>
            </div>
          </div>
        </section>,

        <section key="part-4" className="relative flex gap-4 pb-8 text-left before:absolute before:left-[18px] before:top-[42px] before:bottom-0 before:w-px before:bg-[var(--color-text-accent)] before:content-['']">
          <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
            4
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bebasNeue text-3xl text-theme-text">The empire - architecture thinking at national scale</h3>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              In 1999, Ratan Tata flew to Detroit to explore selling Tata&apos;s struggling passenger car division to Ford. Ford&apos;s representatives reportedly dismissed him, suggesting that buying his plant would be doing him a favour. He returned to India without a word, went back to work, and quietly reimagined the brief.
            </p>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              Nine years later, in 2008, he acquired Jaguar and Land Rover from that same Ford for $2.3 billion. In the same year, he launched the Tata Nano - the world&apos;s most affordable production car - conceived after watching Indian families of four travelling on a single motorcycle in the rain. The Nano was an act of pure design thinking: identify the real problem, strip the solution to its essentials, and build for the actual user.
            </p>
            <div className="rounded-[18px] border-l-[3px] border-[var(--color-hover-bg)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
              <p className="font-montserrat text-base italic leading-7 text-theme-text">
                &quot;There is no reason to tinker with the brands. Our challenge is to make them grow.&quot;
              </p>
              <p className="mt-2 font-source-code text-[10px] uppercase tracking-[0.14em] text-light-gray">
                Ratan Tata · Geneva Motor Show · 2008
              </p>
            </div>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              His approach to JLR was equally architectural: understand the existing structure, preserve what is load-bearing, remove what is redundant. Under his stewardship, JLR grew from a struggling Ford subsidiary to a business generating over GBP 25 billion in annual revenues by 2018. He also served for five years on the jury of the Pritzker Architecture Prize, never fully leaving the discipline he studied. He simply applied it at a different scale.
            </p>
            <p className="font-montserrat text-[0.96rem] leading-8 text-theme-text/85">
              At the time of his death in October 2024, over 65% of Tata Sons was owned by charitable trusts. He didn&apos;t just build an empire - he designed one in which the ownership structure itself was philanthropic.
            </p>
          </div>
        </section>,

        <section key="part-5" className="relative flex gap-4 text-left">
          <div className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[var(--color-text-accent)] bg-[var(--color-main-bg)] font-source-code text-sm text-theme-text">
            5
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bebasNeue text-3xl text-theme-text">Lessons - what one architect accidentally proved about everything</h3>
            <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
              <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
              <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Iteration is not failure - it is the method.</strong> Architecture school taught Tata to try, discard, and reconceive. He ran a global conglomerate the same way. The Tata Nano failed commercially. The lesson became the next design brief.
              </p>
            </div>
            <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
              <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
              <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Start from the ground up, even when you don&apos;t have to.</strong> He could have walked into a chairman&apos;s office at 25. He chose a factory floor. Understanding the foundation is not optional - it is the whole discipline.
              </p>
            </div>
            <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
              <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
              <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Humiliation is a design constraint, not a stop condition.</strong> Ford told him he had no business making cars. He went back to the drawing board, strengthened the structure, and returned nine years later as the buyer.
              </p>
            </div>
            <div className="flex items-start gap-3 border-b border-[var(--color-text-accent)] py-3">
              <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
              <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Scale is just a unit of measurement - the thinking stays the same.</strong> Whether designing a building or restructuring a conglomerate, the core question is identical: what is this structure actually for, who does it serve, and what is the most honest way to build it?
              </p>
            </div>
            <div className="flex items-start gap-3 py-3">
              <span className="pt-1 font-source-code text-base text-theme-text">▸</span>
              <p className="font-montserrat text-[0.94rem] leading-7 text-theme-text/85">
                <strong className="font-semibold text-theme-text">Design the ownership structure, not just the product.</strong> Over 65% of Tata Sons belonging to charitable trusts was not an afterthought. It was one of the most architectural decisions he made.
              </p>
            </div>
          </div>
        </section>,

        <div key="closer" className="rounded-[18px] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-5 font-montserrat text-base italic leading-8 text-theme-text">
          When Ratan Tata passed away in October 2024, Cornell posthumously named its most prestigious architecture alumni award after him. Not after a building he designed. After a life he designed - iteratively, humbly, from the shop floor up. As someone who still spends mornings at a drafting table, I find that more instructive than any building I have ever studied.
        </div>,

        <section key="faq" className="flex flex-col gap-4 text-left">
          <h3 className="text-left font-bebasNeue text-3xl text-theme-text sm:text-4xl">
            FAQ
          </h3>
          <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
            <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">Did Ratan Tata study architecture?</h4>
            <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Yes. Ratan Tata earned a Bachelor of Architecture degree from Cornell University&apos;s College of Architecture, Art and Planning in 1962 after transferring from an engineering programme he initially enrolled in.</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
            <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">Did Ratan Tata ever work as an architect?</h4>
            <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Briefly, yes. After graduating from Cornell, Ratan Tata worked at Jones and Emmons in Los Angeles before returning to India in late 1962 to join the Tata Group.</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
            <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">How did architecture influence Ratan Tata&apos;s business leadership?</h4>
            <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Tata credited his Cornell architectural training with teaching him iterative problem-solving - the practice of trying, discarding, and reconceiving ideas rather than committing to a single approach. He described this directly as foundational to his business thinking.</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
            <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">What award did Cornell name after Ratan Tata?</h4>
            <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">In 2024, Cornell&apos;s College of Architecture, Art and Planning established the Ratan N. Tata Distinguished Alumni Award, posthumously honouring him as its inaugural recipient for using his Cornell education to create positive change in the world.</p>
          </div>
          <div className="rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_88%,var(--color-page-bg))] px-5 py-4">
            <h4 className="font-montserrat text-base font-semibold leading-7 text-theme-text">What is the connection between Ratan Tata and the Pritzker Architecture Prize?</h4>
            <p className="mt-2 font-montserrat text-[0.96rem] leading-7 text-theme-text/85">Ratan Tata served on the jury of the Pritzker Architecture Prize from 2014 to 2019, maintaining a lifelong connection to the discipline he studied.</p>
          </div>
        </section>,
      ])}
    </div>
  );
}

export const threadArticleBody = <C1BArticleContent />;

export const threadFeaturedMedia: ThreadFeaturedMedia = {
  type: "pair",
  primary: {
    type: "getty",
    alt: "Ratan Tata featured image at a business event",
    embed: {
      id: "bfpm4zWcQpprCeD9ZL7WaA",
      href: "https://www.gettyimages.com/detail/1402101295",
      sig: "HrmRznJLgMuGUURCJ-VZJnjcluvubmarUq2EBs1lvOQ=",
      item: "1402101295",
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
    alt: "Ratan Tata featured portrait",
    embed: {
      id: "iK5vmngDT7l6Ms0k4fhehA",
      href: "https://www.gettyimages.com/detail/2220390535",
      sig: "dKXXBYqUz4WLue8j3mqOT6tvmdjw0w5UeX70b2HDO2E=",
      item: "2220390535",
      width: 594,
      height: 395,
      caption: true,
      tld: "com",
      is360: false,
      className: "p-0",
      zoomScale: 1,
      transformOrigin: "center center",
    },
  },
};

export default function C1BPage() {
  return <ThreadPageShell threadSlug="C4B" articleBody={threadArticleBody} featuredMedia={threadFeaturedMedia} sidebarContent={threadSidebarContent} />;
}
