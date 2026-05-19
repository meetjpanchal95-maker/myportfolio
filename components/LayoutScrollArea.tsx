"use client";

import React, { useRef } from "react";
import Header from "./Header";
import { ScrollProvider } from "./ScrollContext";

export interface LayoutScrollAreaProps {
  children: React.ReactNode;
}

export default function LayoutScrollArea({ children }: LayoutScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollProvider scrollRef={scrollRef}>
      <div className="h-full p-4">
        <div className="frame-shell h-full w-full rounded-[30px] border-2 border-theme-text bg-theme-main text-theme-text">
          <div
            ref={scrollRef}
            className="frame-scroll-area h-full w-full overscroll-y-contain touch-pan-y scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch", borderRadius: "inherit" }}
          >
            <div className="space-y-4">
              <Header />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </ScrollProvider>
  );
}
