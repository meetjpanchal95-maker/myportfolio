"use client";

import React from "react";
import PersonalDetails from "../app/about/detailedPage/details";
import Tabs from "../app/about/tabs";
import TitleBlock from "./shared/titleBlock";
import CareerTimeline from "./CareerTimeline";

export interface AboutDetailProps {}

function AboutDetail(props: AboutDetailProps) {
  React.useEffect(() => {
    const scrollTarget = sessionStorage.getItem("about-scroll-target");
    if (!scrollTarget) return;

    const frame = requestAnimationFrame(() => {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      sessionStorage.removeItem("about-scroll-target");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative">
      <TitleBlock
        title="About"
        subtitle="Curriculum Vitae"
        detailedMode={true}
        link="/about"
      />
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex flex-col sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom py-8">
        <PersonalDetails />
        <hr className="border-border-custom border-b-[3px] sm:hidden block" />
        <CareerTimeline />
        <Tabs />
        
      </div>
    </div>
  );
}

export default AboutDetail;
