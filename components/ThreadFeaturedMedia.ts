export type ThreadGettyEmbed = {
  id: string;
  href: string;
  sig: string;
  item: string;
  width: number;
  height: number;
  caption: boolean;
  tld: string;
  is360: boolean;
  zoomScale?: number;
  transformOrigin?: string;
  className?: string;
};

export type ThreadFeaturedMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "getty";
      alt: string;
      embed: ThreadGettyEmbed;
    }
  | {
      type: "gallery";
      items: Array<
        | {
            type: "image";
            src: string;
            alt: string;
          }
        | {
            type: "getty";
            alt: string;
            embed: ThreadGettyEmbed;
          }
      >;
    }
  | {
      type: "pair";
      primary:
        | {
            type: "image";
            src: string;
            alt: string;
          }
        | {
            type: "getty";
            alt: string;
            embed: ThreadGettyEmbed;
          };
      secondary:
        | {
            type: "image";
            src: string;
            alt: string;
          }
        | {
            type: "getty";
            alt: string;
            embed: ThreadGettyEmbed;
          };
    };