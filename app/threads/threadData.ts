export const threadCategories = ["All"] as const;

export const threadCategoryDefinitions = [
  {
    key: "archipreneurs",
    code: "C1",
    label: "Archipreneurs",
    subtitle: "When architecture training meets everything else",
    tags: ["Architecture", "Strategy", "Intersections"],
  },
  {
    key: "sustainable-futures",
    code: "C2",
    label: "Sustainable Futures",
    subtitle: "Case studies of people, companies, and systems quietly building a better world",
    tags: ["Sustainability", "Case Studies", "Systems"],
  },
  {
    key: "beyond-spaces",
    code: "C3",
    label: "Beyond Spaces",
    subtitle: "The stories behind buildings, rooms, and projects that actually matter",
    tags: ["Buildings", "Projects", "Spatial Stories"],
  },
  {
    key: "user-experience",
    code: "C4",
    label: "User Experience",
    subtitle: "Unpacking the invisible forces that shape how people interact with products",
    tags: ["UX", "Behavior", "Products"],
  },
  {
    key: "artlook",
    code: "C5",
    label: "Artlook",
    subtitle: "How to look at art, film, culture, and artists with intention",
    tags: ["Art", "Film", "Culture"],
  },
  {
    key: "research",
    code: "C6",
    label: "Research",
    subtitle: "Where rigorous ideas meet questions worth actually asking",
    tags: ["Research", "Inquiry", "Ideas"],
  },
] as const;

export const threadCategoryKeys = threadCategoryDefinitions.map((category) => category.key);

export type ThreadCategory = (typeof threadCategoryDefinitions)[number]["key"];

export type ThreadPost = {
  id: string;
  slug: string;
  legacySlug: string;
  title: string;
  category: ThreadCategory;
  categoryCode: string;
  categoryLabel: string;
  categorySubtitle: string;
  publishDate: string;
  subtitle: string;
  tags: string[];
  image: string;
  gettyEmbed?: GettyEmbed;
};

export type GettyEmbed = {
  id: string;
  href: string;
  sig: string;
  item: string;
  width: number;
  height: number;
  caption: boolean;
  tld: string;
  is360: boolean;
};

type ThreadContentOverride = {
  title: string;
  subtitle: string;
  image: string;
  publishDate?: string;
  tags?: string[];
  gettyEmbed?: GettyEmbed;
  slugOverride?: string;
};

export const threads: ThreadPost[] = threadCategoryDefinitions.flatMap((category) =>
  ["A", "B", "C", "D"].flatMap((suffix, index) => {
    const defaultTitle = `${category.code}${suffix}`;
    const tags = Array.from(
      new Set([category.label, ...category.tags.slice(0, 2 + (index % 2))])
    );

    const threadContentOverrides: Record<string, ThreadContentOverride> = {
      C1A: {
        title: "Pink Floyd Architecture Story: How they Built the Greatest Rock Band",
        subtitle:
          "Discover the untold Pink Floyd architecture story, how Roger Waters, Nick Mason, and Richard Wright met as architecture students in London and turned spatial thinking into rock history. A must read for architects and music lovers.",
        image: "/threads/archipreneurs/C1A/title.jpg",
        gettyEmbed: {
          id: "_35PcSdFQENwHxa0YakBVQ",
          href: "https://www.gettyimages.com/detail/73909163",
          sig: "OKwewQBhqti6d6NqjKcXCiiUB5LH42PhYHQAxP0G9uE=",
          item: "73909163",
          width: 594,
          height: 402,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-05-12",
        tags: [
          ,
          "Classic Rock",
          "Nick Mason architecture school",
          "architects who became musicians",
          "career change story architecture",
          
        ],
        slugOverride: "three-of-pink-floyd-s-founding-members-met-in-architecture-school",
      },
      C1B: {
        title: "Ratan Tata Architecture Story: The Architect Who Built a $100 Billion Empire",
        subtitle:
          "Discover the untold Ratan Tata architecture story, how a Cornell trained architect chose a factory floor over a corner office and redesigned an entire nation&apos;s industrial identity. A must read for architects, entrepreneurs, and anyone who believes in building from the ground up.",
        image: "/threads/archipreneurs/C1B/title.jpg",
        gettyEmbed: {
          id: "vk9i9MpWQFJ56BO9VrCKwQ",
          href: "https://www.gettyimages.com/detail/1610622996",
          sig: "Ihmc2tSKBJcchlo7BTfztHmEPUzJFXoB2HO6JeVkvDw=",
          item: "1610622996",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-07-03",
        tags: [
          "Business story",
          "Ratan Tata Cornell architect",
          "Leadership",
          "Life lessons",
          "architect turned businessman",
          
        ],
        slugOverride: "ratan-tata-architecture-story-the-architect-who-built-a-100-billion-empire",
      },
      C1C: {
        title: "Varun Chakravarthy Story: The Architect Who Became IPL's Mystery Spinner",
        subtitle:
          "Discover the inspiring career change story of Varun Chakravarthy, an architect from Chennai who quit his job at 25 and became one of IPL's most feared mystery spinners. Lessons for anyone considering a bold pivot.",
        image: "/threads/archipreneurs/C1C/title.jpg",
        gettyEmbed: {
          id: "fh0Dq24CTOlC51Gxsib-OQ",
          href: "https://www.gettyimages.com/detail/2212057410",
          sig: "YzHRPFLwS1O33cbyS_iOChAuMClSzjaZk1V79yVTXmM=",
          item: "2212057410",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "Career story",
          "architect to cricketer",
          "varun chakravarthy IPL",
          "mystery spinner IPL",
          "late career switch cricket",
         
        ],
        slugOverride:
          "varun-chakravarthy-finished-his-b-arch-worked-as-an-architect-then-quit-at-25-to-bowl-mystery-spin",
      },
      C2A: {
        title: "The Grass That Outbuilds Steel: How Bamboo Became Construction's Most Radical Upgrade",
        subtitle:
          "A 5,000 year old material is getting a second life, not as a craft supply, but as a high performance composite that rivals synthetics, sequesters carbon at scale, and is quietly disrupting how we think about what buildings, cars, and packaging are made of.",
        image: "/threads/sustainable-futures/C2A/title.jpg",
        gettyEmbed: {
          id: "pbBsoJAkRepxy7jMSxgZJQ",
          href: "https://www.gettyimages.com/detail/2060889388",
          sig: "gh3FQJIaRORKm4ZHnxBRoKVuoN0aKSdGbHixNpc__wY=",
          item: "2060889388",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-05-12",
        tags: [
          "Bamboo Composites",
          "Sustainable Materials",
          "Bio-Based Innovation",
          "Circular Economy",
          "Materials Science",
        ],
        slugOverride:
          "the-grass-that-outbuilds-steel-how-bamboo-became-constructions-most-radical-upgrade",
      },
      C2B: {
        title: "Permaculture: The Quiet Revolution Growing in Backyards Worldwide",
        subtitle:
          "A case study in designing with nature instead of against it, and why this 50 year old idea is becoming the world's most practical answer to ecological collapse.",
        image: "/threads/sustainable-futures/C2B/title.svg",
        gettyEmbed: {
          id: "peqRza1NS_tdx7RhN5eNkg",
          href: "https://www.gettyimages.com/detail/2171814870",
          sig: "DotpKzudRukVWmc-BKYhyXthPlURWOw77TCqematfs4=",
          item: "2171814870",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-06",
        tags: [
          "Permaculture",
          "Regenerative Design",
          "Food Systems",
          "Case Study",
        ],
        slugOverride: "permaculture-the-quiet-revolution-growing-in-backyards-worldwide",
      },
      C2C: {
        title: "Copenhagen's Carbon Zero Playbook: The City That Decided to Mean It",
        subtitle:
          "A case study in how one city rewired its infrastructure, culture, and politics to become the world's first carbon neutral capital, and what every other city can steal from it.",
        image: "/threads/sustainable-futures/C2C/title.jpg",
        gettyEmbed: {
          id: "ZODUzYbkQkp1gMDLybEiwA",
          href: "https://www.gettyimages.com/detail/1975889084",
          sig: "4N05ffXnoRx3z64tiX1xbTFyxWQVSWBLXP43dXuUyQA=",
          item: "1975889084",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "Copenhagen",
          "Carbon Neutral",
          "Urban Planning",
          "Climate Action",
          "City Case Study",
        ],
      },
      C3A: {
        title: "The High Line Was Called an Eyesore: How a Rusting Railway Became the World's Most Copied Public Space",
        subtitle:
          "When it opened in 2009, critics called it a tourist trap and a gentrification machine. Today it has inspired urban renewal projects in over 50 cities. The real story of what happens when you dare to turn industrial wreckage into a living room for the city.",
        image: "/threads/beyond-spaces/C3A/title.jpg",
        gettyEmbed: {
          id: "_35PcSdFQENwHxa0YakBVQ",
          href: "https://www.gettyimages.com/detail/73909163",
          sig: "OKwewQBhqti6d6NqjKcXCiiUB5LH42PhYHQAxP0G9uE=",
          item: "73909163",
          width: 594,
          height: 402,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "High Line",
          "New York",
          "Public Space",
          "Urban Renewal",
          "Radical Design",
        ],
      },
      C3B: {
        title: "The Nakagin Capsule Tower Was Called Uninhabitable: What We Only Understood After We Tore It Down",
        subtitle:
          "When it was built in 1972, residents complained it was cramped, leaking, and laced with asbestos. In 2022, a crane removed the last capsule and the world wept. The real story of what happens when a radical idea about how we live is only recognized as genius once it is gone.",
        image: "/threads/beyond-spaces/C3B/title.jpg",
        gettyEmbed: {
          id: "vk9i9MpWQFJ56BO9VrCKwQ",
          href: "https://www.gettyimages.com/detail/1610622996",
          sig: "Ihmc2tSKBJcchlo7BTfztHmEPUzJFXoB2HO6JeVkvDw=",
          item: "1610622996",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "Nakagin Capsule Tower",
          "Tokyo",
          "Radical Design",
          "Architecture History",
          "Public Perception",
        ],
      },
      C3C: {
        title: "The Flatiron Building Was Called a Monstrosity: What the World Gets Wrong About Radical Design",
        subtitle:
          "When it opened in 1902, newspapers called it ugly and predicted it would collapse. Today it is the most photographed building in New York. The real story of what happens when architecture breaks the rules first.",
        image: "/threads/beyond-spaces/C3C/title.jpg",
        gettyEmbed: {
          id: "iAKI1P3JQ85p8_oGGT_9bQ",
          href: "https://www.gettyimages.com/detail/173468556",
          sig: "423v0Ue0wOv8_sayKvDWB8kTx7CpxWPd00uTXBKpzbM=",
          item: "173468556",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "Flatiron Building",
          "New York",
          "Radical Design",
          "Architecture History",
          "Public Perception",
        ],
      },
      C4A: {
        title: "The $2.5 Billion Button: Why the Way You Can't Cancel Amazon Prime Is a Design Crime",
        subtitle:
          "The FTC's record breaking fine against Amazon isn't just a legal story, it's a UX story. How one company weaponised button placement, confusing copy, and deliberate friction to trap millions of users, and why dark patterns are now a boardroom level financial risk.",
        image: "/threads/user-experience/C4A/title.jpg",
        gettyEmbed: {
          id: "_35PcSdFQENwHxa0YakBVQ",
          href: "https://www.gettyimages.com/detail/73909163",
          sig: "OKwewQBhqti6d6NqjKcXCiiUB5LH42PhYHQAxP0G9uE=",
          item: "73909163",
          width: 594,
          height: 402,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-05-12",
        tags: [
          "Dark Patterns",
          "Ethical Design",
          "Deceptive UX",
          "Digital Rights",
          "Product Design",
        ],
      },
      C4B: {
        title: "Your App Is Making You Anxious on Purpose. Here's What Calm Design Looks Like Instead.",
        subtitle:
          "A growing movement in UX is asking a question the industry has long avoided: what if success wasn't measured in engagement spikes, but in how peaceful a user feels after closing the app? An introduction to calm technology and why designing for human bandwidth might be the most radical product decision of this decade.",
        image: "/threads/user-experience/C4B/title.jpg",
        gettyEmbed: {
          id: "vk9i9MpWQFJ56BO9VrCKwQ",
          href: "https://www.gettyimages.com/detail/1610622996",
          sig: "Ihmc2tSKBJcchlo7BTfztHmEPUzJFXoB2HO6JeVkvDw=",
          item: "1610622996",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-07-03",
        tags: [
          "Calm Technology",
          "Digital Wellbeing",
          "Humane Design",
          "UX Philosophy",
          "Attention Economy",
        ],
      },
      C4C: {
        title: "Why \"Only 3 Rooms Left\" Makes You Book a Hotel You Weren't Sure About",
        subtitle:
          "Loss aversion, the decoy effect, social proof, a deep dive into the invisible psychology woven into every product you use, and how the best designers weaponise your cognitive biases before you even notice.",
        image: "/threads/user-experience/C4C/title.jpg",
        gettyEmbed: {
          id: "fh0Dq24CTOlC51Gxsib-OQ",
          href: "https://www.gettyimages.com/detail/2212057410",
          sig: "YzHRPFLwS1O33cbyS_iOChAuMClSzjaZk1V79yVTXmM=",
          item: "2212057410",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "Cognitive Bias",
          "Loss Aversion",
          "UX Psychology",
          "Booking.com",
          "Behavioral Design",
          "Product Design",
        ],
      },
      C5A: {
        title: "You Spend 27 Seconds Looking at Art. Here's Why That's a Problem, and a Practice That Fixes It.",
        subtitle:
          "Studies at the Met and the Art Institute of Chicago confirm it: the average museum visitor spends under 30 seconds in front of any single work. The Slow Art movement, now active across 1,500 venues on all seven continents, makes the case that the quality of attention is the only thing standing between you and a genuinely transformative cultural experience.",
        image: "/threads/artlook/C5A/title.jpg",
        gettyEmbed: {
          id: "_35PcSdFQENwHxa0YakBVQ",
          href: "https://www.gettyimages.com/detail/73909163",
          sig: "OKwewQBhqti6d6NqjKcXCiiUB5LH42PhYHQAxP0G9uE=",
          item: "73909163",
          width: 594,
          height: 402,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-05-12",
        tags: [
          "Slow Looking",
          "Intentional Culture",
          "Art Education",
          "Museum Experience",
          "Attention and Art",
        ],
      },
      C5B: {
        title: "The History of Art Is Full of Brilliant People Nobody Told You About. That's Finally Changing.",
        subtitle:
          "From Mavis Pusey, a Jamaican born abstract painter working in New York for decades, largely ignored, to Arpita Singh, celebrated across India but invisible to Western institutions until age 88: the art world is mid correction, and the canon is being rewritten in real time. Here's how to look at that shift with intention.",
        image: "/threads/artlook/C5B/title.jpg",
        gettyEmbed: {
          id: "vk9i9MpWQFJ56BO9VrCKwQ",
          href: "https://www.gettyimages.com/detail/1610622996",
          sig: "Ihmc2tSKBJcchlo7BTfztHmEPUzJFXoB2HO6JeVkvDw=",
          item: "1610622996",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-07-03",
        tags: [
          "Art Canon",
          "Overlooked Artists",
          "Art History Revisited",
          "Global Art",
          "Cultural Equity",
        ],
      },
      C5C: {
        title: "Everything Is a Text. How to Read Culture the Way Anthropologists Do.",
        subtitle:
          "Roland Barthes analysed wrestling matches and soap powder advertisements with the same rigour he brought to literature. Clifford Geertz spent months watching cockfights in Bali to understand power. Their method, reading everyday things as dense, layered cultural symbols, is a skill anyone can learn, and it changes how you watch films, visit galleries, and move through cities entirely.",
        image: "/threads/artlook/C5C/title.jpg",
        gettyEmbed: {
          id: "fh0Dq24CTOlC51Gxsib-OQ",
          href: "https://www.gettyimages.com/detail/2212057410",
          sig: "YzHRPFLwS1O33cbyS_iOChAuMClSzjaZk1V79yVTXmM=",
          item: "2212057410",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "Cultural Literacy",
          "Semiotics",
          "How to Read Culture",
          "Anthropology",
          "Intentional Living",
        ],
      },
      C6A: {
          title: "The Gestalt Principles Were Published in 1923. Why Is Every UX Designer Still Talking About Them?",
          subtitle:
            "A century old framework for how the human brain constructs pattern from chaos, and a research inquiry into why it remains the most reliable lens for explaining what makes a digital interface feel intuitive or broken.",
        image: "/threads/research/C6A/title.jpg",
        gettyEmbed: {
          id: "Ljzc93hAS71SEVFCzv0RyA",
          href: "https://www.gettyimages.com/detail/143170228",
          sig: "S5rab_q_-vYOA5VjQE0HJksKEf4gb0uk68eegmzC8k0=",
          item: "143170228",
          width: 594,
          height: 466,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-05-12",
        tags: [
            "Gestalt Psychology",
            "UX Research",
            "Visual Perception",
            "Cognitive Science",
            "Design Theory",
        ],
      },
      C6B: {
        title: "Ratan Tata Architecture Story: The Architect Who Built a $100 Billion Empire",
        subtitle:
          "Discover the untold Ratan Tata architecture story, how a Cornell trained architect chose a factory floor over a corner office and redesigned an entire nation&apos;s industrial identity. A must read for architects, entrepreneurs, and anyone who believes in building from the ground up.",
        image: "/threads/research/C6B/title.jpg",
        gettyEmbed: {
          id: "vk9i9MpWQFJ56BO9VrCKwQ",
          href: "https://www.gettyimages.com/detail/1610622996",
          sig: "Ihmc2tSKBJcchlo7BTfztHmEPUzJFXoB2HO6JeVkvDw=",
          item: "1610622996",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-07-03",
        tags: [
          "Business story",
          "Ratan Tata Cornell architect",
          "Leadership",
          "Life lessons",
          "architect turned businessman",
          
        ],
      },
      C6C: {
        title: "Varun Chakravarthy Story: The Architect Who Became IPL's Mystery Spinner",
        subtitle:
          "Discover the inspiring career change story of Varun Chakravarthy, an architect from Chennai who quit his job at 25 and became one of IPL's most feared mystery spinners. Lessons for anyone considering a bold pivot.",
        image: "/threads/research/C6C/title.jpg",
        gettyEmbed: {
          id: "fh0Dq24CTOlC51Gxsib-OQ",
          href: "https://www.gettyimages.com/detail/2212057410",
          sig: "YzHRPFLwS1O33cbyS_iOChAuMClSzjaZk1V79yVTXmM=",
          item: "2212057410",
          width: 594,
          height: 396,
          caption: true,
          tld: "com",
          is360: false,
        },
        publishDate: "2026-04-18",
        tags: [
          "Career story",
          "architect to cricketer",
          "varun chakravarthy IPL",
          "mystery spinner IPL",
          "late career switch cricket",
         
        ],
      },
    };

    const threadContent = threadContentOverrides[defaultTitle];
    if (!threadContent) {
      return [];
    }

    const hasDuplicateTitle = Object.entries(threadContentOverrides).some(
      ([threadId, content]) => threadId !== defaultTitle && content.title === threadContent.title
    );

    const slugSource =
      threadContent.title === defaultTitle
        ? `${category.label} ${defaultTitle}`
        : hasDuplicateTitle
          ? `${category.label} ${threadContent.title}`
          : threadContent.title;
    const slug = threadContent.slugOverride ?? slugifyThreadTitle(slugSource);

    return [
      {
        id: defaultTitle,
        slug,
        legacySlug: defaultTitle,
        title: threadContent.title,
        category: category.key,
        categoryCode: category.code,
        categoryLabel: category.label,
        categorySubtitle: category.subtitle,
        publishDate: threadContent.publishDate ?? "2026-04-06",
        subtitle: threadContent.subtitle,
        tags: threadContent.tags ?? tags,
        image: threadContent.image,
        gettyEmbed: threadContent.gettyEmbed,
      },
    ];
  })
);

export function getThreadCategory(categoryKey: ThreadCategory) {
  return threadCategoryDefinitions.find((category) => category.key === categoryKey);
}

export function getThreadBySlug(slug: string) {
  if (!slug) {
    return undefined;
  }

  const normalizedSlug = slug.toLowerCase();

  return threads.find(
    (thread) =>
      thread.slug.toLowerCase() === normalizedSlug ||
      thread.legacySlug.toLowerCase() === normalizedSlug ||
      thread.id.toLowerCase() === normalizedSlug
  );
}

export function getThreadPath(thread: ThreadPost) {
  return `/threads/${thread.slug}`;
}

export function getLegacyThreadPath(thread: ThreadPost) {
  return `/threads/${thread.category}/${thread.legacySlug}`;
}

export function getRelatedThreads(thread: ThreadPost, limit = 3) {
  return [...threads]
    .filter(
      (candidate) =>
        candidate.id !== thread.id && candidate.category === thread.category
    )
    .sort(sortThreadsByDateDesc)
    .slice(0, limit);
}

export function getThreadDateValue(dateString: string) {
  return Number(dateString.replaceAll("-", ""));
}

export function sortThreadsByDateDesc(left: ThreadPost, right: ThreadPost) {
  return getThreadDateValue(right.publishDate) - getThreadDateValue(left.publishDate);
}

export function formatThreadDate(dateString: string) {
  const [year, month, day] = dateString.split("-");
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthLabel = monthLabels[Number(month) - 1];

  return `${day} ${monthLabel} ${year}`;
}

function slugifyThreadTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
