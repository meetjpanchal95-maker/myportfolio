"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "antd/es/typography/Link";
import { motion, useInView } from "framer-motion";

function TitleBlock({
  title,
  subtitle,
  detailedMode = false,
  link = "/work",
}: {
  title: string;
  subtitle: string;
  detailedMode?: boolean;
  link?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);       // ← key fix
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    setMounted(true);                                  // ← runs only on client
  }, []);

  return (
    <div
      ref={ref}
      className="flex py-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full relative overflow-hidden"
    >
      <span className="absolute top-[-0.35rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute top-[-0.35rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute bottom-[-0.35rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute bottom-[-0.35rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />

      <div className="flex w-full h-full p-2 flex-col gap-3">

        {/* Title — slides in from top */}
        <motion.div
          className="flex w-full h-full font-bebasNeue text-5xl"
          initial={{ opacity: 0, y: -60 }}
          animate={
            !mounted                                   // ← stays invisible until client mounts
              ? { opacity: 0, y: -60 }
              : isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -60 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {title}
        </motion.div>

        {/* Subtitle — slides in from right */}
        <motion.div
          className="flex w-full h-full text-[40px] font-bebasNeue text-light-gray"
          initial={{ opacity: 0, x: 100 }}
          animate={
            !mounted
              ? { opacity: 0, x: 100 }
              : isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        >
          {subtitle}
        </motion.div>

        {/* Button — slides in from bottom */}
        {!detailedMode && (
          <motion.div
            className="relative h-[52px] max-w-[240px] py-2"
            initial={{ opacity: 0, y: 60 }}
            animate={
              !mounted
                ? { opacity: 0, y: 60 }
                : isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 60 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              unoptimized={true}
              src={"/projects/explore-button.png"}
              alt="explore-work"
              width={50}
              height={50}
              className={`absolute left-0 top-0 transition-all duration-800 ease-out ${
                isHovered
                  ? "opacity-0 translate-x-full rotate-45 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
            />
            <Link
              href={link}
              className={`absolute left-0 top-0 flex h-[50px] items-center overflow-hidden transition-all duration-800 ease-out ${
                isHovered
                  ? "max-w-[240px] opacity-100"
                  : "max-w-[50px] opacity-0 pointer-events-none"
              }`}
            >
              <span className="flex items-center gap-4 pl-2.5 pr-4 py-[10px] text-base font-medium font-montserrat whitespace-nowrap rounded-full text-theme-text border-2 border-theme-text">
                Click for more
                <Image
                  unoptimized={true}
                  src="/projects/explore-button-hover.png"
                  alt="explore-work"
                  width={30}
                  height={29}
                />
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default TitleBlock;