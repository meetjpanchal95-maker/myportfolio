"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./hmda.css";

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

export default function HmdaPage() {
  return (
    <SectionShell title="HMDA IT Park" subtitle="HMDA IT Park" isProjectPage={true}>
      <main className="main hmda-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape hmda-hero-frame">
            <img
              src="https://media.meet-works.com/public/playground/hmda/hmdahero.png"
              className="hmda-hero-img"
              alt="HMDA IT Park hero"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="IT Park Centre for Excellence for HMDA  | Visual Character Development | 3D Modelling"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Master Planning\nExternal Environment\nDesign Character Visualisation"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="The project articulates a strong design character through an integrated approach to master planning, external environment design, and visualisation."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="HMDA IT PARK" className="big-title" />
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
            text="Built forms are organized to respond to landscape, water bodies, and pedestrian movement, creating a cohesive spatial experience. The external environment enhances comfort and usability through shaded public realms, green buffers, and visual permeability. High-quality 3D modelling and rendering translate these intentions into immersive visuals, clearly communicating spatial hierarchy, materiality, and the overall architectural identity."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2021</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Hyderabad, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">INI Design Studio</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="Saumil Mevada, Mukul Chaturvedi, Meet Panchal"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Master Planning" className="sub-title" />
          <AnimatedChars
            text="The master planning establishes a coherent spatial framework that balances built massing, landscape, and movement networks. It organizes the campus around water bodies and green spines, ensuring visual continuity, climatic responsiveness, and a legible hierarchy of public and semi-public spaces."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame hmda-showcase">
            <div className="hmda-showcase-inner">
              <div className="hmda-top-image">
                <img src="https://media.meet-works.com/public/playground/hmda/hmda1.png" alt="HMDA IT Park overview" />
              </div>
            
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The master plan structures the campus through clear zoning, landscape integration, and pedestrian-oriented circulation, creating a cohesive and adaptable framework for long-term institutional growth."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

         <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="External Environment" className="sub-title" />
          <AnimatedChars
            text="The external environment is shaped through layered landscapes, water elements, and shaded public realms that soften the built form. These spaces enhance microclimate performance while encouraging social interaction, visual openness, and seamless transitions between architecture and nature."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame hmda-showcase">
            <div className="hmda-showcase-inner">
              <div className="hmda-top-image">
                <img src="https://media.meet-works.com/public/playground/hmda/hmda2.png" alt="HMDA IT Park detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The external environment integrates water, vegetation, and walkable edges to improve comfort, activate public spaces, and strengthen the relationship between buildings and the surrounding landscape."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Design character visualisation" className="sub-title" />
          <AnimatedChars
            text="Design character visualisation translates the architectural intent into immersive spatial narratives through detailed 3D modelling and digital rendering. The visual language highlights materiality, facade articulation, and landscape integration, supporting a unified identity aligned with the project’s vision."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame hmda-showcase">
            <div className="hmda-showcase-inner">
              <div className="hmda-top-image">
                <img src="https://media.meet-works.com/public/playground/hmda/hmda3.png" alt="HMDA IT Park detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The visualisation communicates design intent through realistic rendering, emphasizing form, material, and landscape integration to establish a consistent and recognisable architectural character."
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
