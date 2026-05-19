export interface GettyEmbedBlockProps {
  id: string;
  href: string;
  sig: string;
  item: string;
  width: number;
  height: number;
  caption: boolean;
  tld: string;
  is360: boolean;
  className?: string;
  zoomScale?: number;
  disableLink?: boolean;
  transformOrigin?: string;
}

export default function GettyEmbedBlock({
  id,
  href,
  sig,
  item,
  width,
  height,
  caption,
  tld,
  is360,
  className,
  zoomScale = 1,
  disableLink = false,
  transformOrigin = "center center",
}: GettyEmbedBlockProps) {
  const iframeSrc = `https://embed.gettyimages.com/embed/${item}?et=${id}&tld=${tld}&sig=${sig}&caption=${caption}&ver=2`;
  const aspectRatio = `${width} / ${height}`;
  const innerBackgroundClass = disableLink ? "bg-white" : "bg-transparent";

  return (
    <div className={`flex justify-center overflow-hidden rounded-[18px] border border-[var(--color-text-accent)] bg-[color:color-mix(in_srgb,var(--color-main-bg)_92%,var(--color-page-bg))] p-3 ${className ?? ""}`.trim()}>
      <div
        className={`flex h-full w-full items-center justify-center ${disableLink ? "pointer-events-none" : ""}`.trim()}
        style={{ transform: `scale(${zoomScale})`, transformOrigin }}
      >
        <div className={`w-full ${innerBackgroundClass}`.trim()} style={{ maxWidth: `${width}px` }}>
          {!disableLink ? (
            <div className="mb-2 flex items-center justify-between gap-3 text-left font-montserrat text-[10px] text-[#a7a7a7]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(167,167,167,0.28)] px-2 py-1 leading-none">
                <span aria-hidden="true">©</span>
                <span>Getty Images</span>
              </span>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.14em] text-[#a7a7a7] no-underline transition-colors duration-200 hover:text-theme-text"
              >
                Source / licensing
              </a>
            </div>
          ) : null}
          <div className={`relative w-full overflow-hidden ${innerBackgroundClass}`.trim()} style={{ aspectRatio }}>
            <iframe
              title={`Getty image ${item}`}
              src={iframeSrc}
              scrolling="no"
              allowFullScreen={is360}
              className={`absolute inset-0 h-full w-full border-0 ${innerBackgroundClass}`.trim()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}