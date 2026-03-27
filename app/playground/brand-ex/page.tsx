"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./brand-ex.css";

const charContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.012 },
  },
};

const charItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0 } },
};

function AnimatedChars({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.span
      className={className}
      style={{ ...style, display: "block", willChange: "opacity" }}
      variants={charContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      aria-hidden={false}
    >
      {text.split("").map((char, index) => (
        char === "\n" ? (
          <br key={index} />
        ) : (
          <motion.span key={index} variants={charItem}>
            {char}
          </motion.span>
        )
      ))}
    </motion.span>
  );
}

export default function BrandExPage() {
  return (
    <SectionShell title="Branded Environments" subtitle="Branded Environments" isProjectPage={true}>
      <main className="main brand-ex-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape brand-ex-hero-frame" style={{ height: "500px", background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/brand-ex/brandhero.png"
              className="brand-ex-hero-img"
              alt="Branded Environments hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Explorations in Branded Environments | Collaborative Workshops"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Ahmedabad Heritage Walk\nCoffee Branding"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="Workshop for branded environments, exploring how spatial design and branding create immersive experiences."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="Visual Branding" className="big-title" />
          <AnimatedChars
            text="SCOPE"
            className="font-montserrat"
            style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="ABOUT"
            className="font-montserrat"
            style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The work focused on developing a scalable business model, crafting an investor pitch, and designing product visuals to communicate value and engagement. By integrating strategy, storytelling, and visual design, the project positions MitMut Studio as an innovative platform for creative ownership, experiential learning, and measurable skill development across diverse audiences."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2018</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">University:</div>
              <div className="value">CEPT University</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
             
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="Collaborative workshop with 15 people from different disciplines"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Ahmedabad Heritage Walk" className="sub-title" />
          <AnimatedChars
            text="Designed an interactive heritage walk in Ahmedabad, integrating storytelling, spatial cues, and branding elements. The project aimed to create an immersive experience that engaged participants with the city’s architectural and cultural history."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame brand-ex-showcase">
            <div className="brand-ex-showcase-inner">
              <div className="brand-ex-top-image">
                <img src="https://media.meet-works.com/public/playground/brand-ex/brand1.png" alt="Branded Environments overview" />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Typography, color palette, and imagery were curated to highlight the property’s historical significance while appealing to high-end clientele, creating a strong and memorable brand presence."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Coffee branding" className="sub-title" />
          <AnimatedChars
            text="Prepared a comprehensive comparative analysis of branding strategies of CCD and Starbucks. Developed in-depth presentations to derive insights that help brand designers respond effectively to market needs."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame brand-ex-showcase">
            <div className="brand-ex-showcase-inner">
              <div className="brand-ex-top-image">
                <video src="https://media.meet-works.com/public/playground/brand-ex/brand2.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Insights from a comparative study highlight the importance of adopting a minimalistic approach while leveraging deep customer understanding to create meaningful and lasting brand experiences."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
