import React from "react";

export type ThreadArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ThreadArticleContent = {
  lead?: string;
  sections: ThreadArticleSection[];
  closing?: string;
};

export interface ThreadArticleBodyProps {
  content: ThreadArticleContent;
}

export function ThreadArticleBody({ content }: ThreadArticleBodyProps) {
  return (
    <div className="flex flex-col gap-8 text-left">
      {content.lead ? (
        <p className="text-left font-montserrat text-base leading-7 text-theme-text/85 sm:text-lg">
          {content.lead}
        </p>
      ) : null}

      {content.sections.map((section, sectionIndex) => (
        <section key={`${section.title}-${sectionIndex}`} className="flex flex-col gap-4 text-left">
          <h3 className="text-left font-bebasNeue text-3xl text-theme-text sm:text-4xl">
            {section.title}
          </h3>
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={`${section.title}-paragraph-${paragraphIndex}`}
              className="text-left font-montserrat text-base leading-7 text-theme-text/85"
            >
              {paragraph}
            </p>
          ))}
          {section.bullets?.length ? (
            <ul className="flex list-disc flex-col gap-2 pl-5 text-left font-montserrat text-base leading-7 text-theme-text/85 marker:text-[var(--color-hover-bg)]">
              {section.bullets.map((bullet, bulletIndex) => (
                <li key={`${section.title}-bullet-${bulletIndex}`} className="text-left">{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {content.closing ? (
        <p className="text-left font-montserrat text-base leading-7 text-theme-text/85">
          {content.closing}
        </p>
      ) : null}
    </div>
  );
}