"use client";

import React, {
  createContext,
  useContext,
  useRef,
  type RefObject,
} from "react";

const ScrollContext = createContext<RefObject<HTMLDivElement | null> | null>(
  null,
);


export interface ScrollProviderProps {
  children: React.ReactNode;
  scrollRef: RefObject<HTMLDivElement | null>;
}

export function ScrollProvider({ children, scrollRef }: ScrollProviderProps) {
  return (
    <ScrollContext.Provider value={scrollRef}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContainer() {
  return useContext(ScrollContext);
}
