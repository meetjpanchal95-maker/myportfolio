"use client";

import Image from "next/image";
import React, { useState } from "react";
import workProjects from "../app/work/projectList";
import TitleBlock from "./shared/titleBlock";
import { useRouter } from "next/navigation";

function Work({
  projects = workProjects.slice(0, 6),
  detailedMode = false,
}: {
  projects?: {
    id: number;
    src: string;
    hoverSrc?: string;
    col: string;
    row: string;
    className: string;
    height?: number;
    width?: number;
    title?: string;
    description?: string[];
    subtitle?: string;
    defaultMedia: "image" | "video" | string;
    hoverMedia: "image" | "video" | string;
    hoverClass: string;
    hoverBgClass?: string;
    hoverTitleClass?: string;
    hoverSubtitleClass?: string;
    hoverClassExtra?: string;
    hoverListClass?: string;
    titleClass?: string;
    link?: string;
  }[];
  detailedMode?: boolean;
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const router = useRouter();
  const getMediaBlock = (item: {
    id: number;
    src: string;
    hoverSrc?: string;
    defaultMedia: "image" | "video" | string;
    hoverMedia: "image" | "video" | string;
    hoverClass: string;
    hoverClassExtra?: string;
    hoverListClass?: string;
  }) => {
    const isHovered = hoveredId === item.id;

    const renderMedia = (
      src: string,
      type: "image" | "video" | string,
      visible: boolean,
      key: string
    ) => {
      const opacity = visible ? 1 : 0;
      const style: React.CSSProperties = {
        opacity,
        transition: "opacity 0.15s ease",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      };
      if (type === "video") {
        return (
          <video
            key={key}
            src={src}
            autoPlay={visible}
            loop
            muted
            playsInline
            preload="auto"
            style={style}
            className="rounded-[18px] bg-cover object-cover bg-center"
          />
        );
      }
      return (
        <Image
          key={key}
          unoptimized={true}
          src={src}
          alt="work"
          width={500}
          height={500}
          style={style}
          className="rounded-[18px] object-cover"
        />
      );
    };

    return (
      <div className="absolute inset-0 rounded-[18px] overflow-hidden">
        {renderMedia(item.src, item.defaultMedia, !isHovered, `default-${item.id}`)}
        {item.hoverSrc && renderMedia(item.hoverSrc, item.hoverMedia, isHovered, `hover-${item.id}`)}
      </div>
    );
  };

  return (
    <div className="relative">
      <TitleBlock
        title="Work"
        subtitle="A selection of recent projects"
        detailedMode={detailedMode}
        link="/work"
      />
      {detailedMode && (
        <div className="relative">
          <hr className="border-border-custom border-b-[3px]" />
          <div className="flex px-4 py-6 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom text-xl font-montserrat text-light-gray min-h-[200px] relative">
            A selection of recent professional work informed by strategic
            thinking, where process, context, and execution come together to
            deliver considered outcomes. The work reflects an integrated
            approach that brings together design sensibility, business
            understanding, and technological awareness to navigate complexity,
            align intent with impact, and shape solutions that are both
            thoughtful and effective.
            {/* <span className="absolute top-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute top-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" /> */}
            <span className="absolute bottom-[-0.35rem] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-0.35rem] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          </div>
        </div>
      )}
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex py-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom">
        <div className=" px-1 sm:px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[23vw] sm:gap-3 gap-1">
          {projects.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className={`${item.col} ${item.row} rounded-current relative hover:border-[--color-hover-bg] border-2 border-border-custom cursor-pointer`}
                onClick={() => {
                  if (item.link) {
                    router.push(item.link);
                  }
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {getMediaBlock(item)}

                {isHovered && (
                  <div
                    className={`flex flex-col justify-between px-2 py-4 ${item.hoverClass} ${item.hoverBgClass ?? ""}`}
                  >
                    <div
                      className={`flex justify-between w-full ${item.hoverClassExtra ?? ""}`}
                    >
                      <div
                        className={`text-[2.75em] font-bebasNeue whitespace-nowrap ${item.hoverClassExtra ? "w-full" : "w-[35%]"} ${item.titleClass ?? ""} ${item.hoverTitleClass ?? "text-theme-overlay-text"}`}
                      >
                        {item.title}
                      </div>

                    </div>
                    <div className={`pt-3 font-montserrat text-base font-medium ${item.hoverSubtitleClass ?? "text-theme-overlay-text opacity-80"}`}>
                      {item.subtitle}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {!detailedMode && <hr className="border-border-custom border-t-[3px]" />}
    </div>
  );
}

export default Work;
