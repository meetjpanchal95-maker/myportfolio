"use client";
import { motion } from "framer-motion";
const m: any = motion;

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import workProjects from "../app/work/projectList";
import TitleBlock from "./shared/titleBlock";
import { useRouter } from "next/navigation";

function WorkVideo({
  src,
  style,
  visible,
}: {
  src: string;
  style: React.CSSProperties;
  visible: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (visible) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [visible]);

  return (
    <video
      ref={ref}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      style={style}
      className="rounded-[18px] bg-cover object-cover bg-center"
    />
  );
}

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
    bgClass?: string;
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
          <WorkVideo
            key={key}
            src={src}
            visible={visible}
            style={style}
          />
        );
      }
      return (
        <Image
          key={key}
          
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
        subtitle="A selection of Recent Projects"
        detailedMode={detailedMode}
        link="/work"
      />
      {detailedMode && (
        <>
          <hr className="border-border-custom border-b-[3px]" />
          <div className="flex px-4 py-2 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom text-xl font-source-code text-light-gray min-h-[80px] relative z-10">
            {(() => {
              const text = "A selection of recent professional work informed by strategic thinking, where process, context, and execution come together to deliver considered outcomes reflecting an integrated approach that brings together design sensibility, business understanding, and technological awareness to navigate complexity";
              const container = {
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.018,
                  },
                },
              };
              const letter = {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0 } },
              };
              return (
                <m.span
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.5 }}
                  aria-hidden={false}
                >
                  {text.split("").map((char, i) => (
                    <m.span key={i} variants={letter}>
                      {char}
                    </m.span>
                  ))}
                </m.span>
              );
            })()}
            <span style={{ position: "absolute", bottom: -4, left: -5.5, width: 8, height: 8, background: "var(--color-light-gray)", borderRadius: "50%" }} />
            <span style={{ position: "absolute", bottom: -4, right: -5.5, width: 8, height: 8, background: "var(--color-light-gray)", borderRadius: "50%" }} />
          </div>
        </>
      )}
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex py-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom">
        <div className=" px-1 sm:px-4 w-full mx-auto grid grid-cols-1 auto-rows-[14rem] gap-1 sm:grid-cols-2 sm:auto-rows-[23vw] sm:gap-3 lg:grid-cols-3">
          {projects.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className={`${item.col} ${item.row} rounded-current relative hover:border-[--color-hover-bg] border-2 border-border-custom cursor-pointer ${item.bgClass ?? ""}`}
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
                      {/* Animated title text (copied from subtitle animation style) */}
                      <m.span
                        className={`text-[2.75em] font-bebasNeue whitespace-nowrap ${item.hoverClassExtra ? "w-full" : "w-[35%]"} ${item.titleClass ?? ""} ${item.hoverTitleClass ?? "text-theme-overlay-text"}`}
                        variants={{
                          hidden: { opacity: 0 },
                          show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.018 },
                          },
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.5 }}
                        aria-hidden={false}
                      >
                        {item.title?.split("").map((char, i) => (
                          char === " "
                            ? <span key={i}>&nbsp;</span>
                            : <m.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</m.span>
                        ))}
                      </m.span>

                    </div>
                    {/* Animated subtitle text (copied from tile.tsx style) */}
                    <m.span
                      className={`pt-3 font-montserrat text-base font-medium break-words ${item.hoverSubtitleClass ?? "text-theme-overlay-text opacity-80"}`}
                      style={{ whiteSpace: "normal" }}
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.018 },
                        },
                      }}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.5 }}
                      aria-hidden={false}
                    >
                      {item.subtitle?.split("").map((char, i) => (
                        char === " "
                          ? <span key={i} style={{ display: "inline" }}>&nbsp;</span>
                          : <m.span key={i} style={{ display: "inline" }} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</m.span>
                      ))}
                    </m.span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Horizontal line after work section removed as requested */}
    </div>
  );
}

export default Work;