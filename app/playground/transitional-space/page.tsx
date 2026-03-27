"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./transitional-space.css";

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

export default function TransitionalSpacePage() {
  return (
    <SectionShell title="Transitional Spaces" subtitle="Transitional Spaces" isProjectPage={true}>
      <main className="main transitional-space-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape transitional-space-hero-frame" style={{ background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/transitional-space/tshero.png"
              className="transitional-space-hero-img"
              alt="Transitional Spaces hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Role of Transitional Spaces in Campus Architecture | Design Research"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Proposal\nMethodology\nTransitional Spaces Matrix"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="This research interrogated in-between zones on campuses as active social systems influencing movement and interaction."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="TRANSITIONAL SPACES" className="big-title" />
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
            text="Through empirical observation, photo-syntax sequencing, and a comparative matrix, the study reframed corridors, thresholds and courtyards as designed opportunities rather than leftovers. Findings informed design recommendations and pedagogic tools for campuses. The work culminated in a structured analytical matrix, documented case studies, and a published report proposing tangible design interventions across campuses."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2018</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Ahmedabad, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Published</div>
            </div>
            <div>
              <div className="label">Institution:</div>
              <AnimatedChars text="CEPT University" className="value" />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Thesis Guide:</div>
              <AnimatedChars text="Sachin Soni" className="value" />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Proposal" className="sub-title" />
          <AnimatedChars
            text="This thesis investigates how transitional spaces within campus architecture influence movement, interaction, and social behavior. The research positions these in-between spaces as active spatial systems rather than residual zones, shaping everyday experiences and informal encounters."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame transitional-space-showcase">
            <div className="transitional-space-showcase-inner">
              <div className="transitional-space-top-image">
                <img src="https://media.meet-works.com/public/playground/transitional-space/ts1.png" alt="Transitional Spaces overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The proposal reframes corridors, courtyards, and thresholds as critical social infrastructures, questioning their architectural intent, performance, and impact on campus life."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Methodology" className="sub-title" />
          <AnimatedChars
            text="The research adopts a scientific and empirical framework, combining observational studies, spatial mapping, and photo syntax analysis. Real campus environments were documented to study behavioral patterns and the correlation between spatial configuration and social interaction."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame transitional-space-showcase">
            <div className="transitional-space-showcase-inner">
              <div className="transitional-space-top-image">
                <img src="https://media.meet-works.com/public/playground/transitional-space/ts2.png" alt="Transitional Spaces detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Photographic sequencing and spatial analysis tools were used to objectively decode how users occupy, move through, and appropriate transitional spaces over time."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

         <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Transitional Spaces Matrix" className="sub-title" />
          <AnimatedChars
            text="The Transitional Spaces Matrix was developed as an analytical tool to classify and compare spatial conditions across campuses. It maps variables such as scale, permeability, activity intensity, and duration of use."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame transitional-space-showcase">
            <div className="transitional-space-showcase-inner">
              <div className="transitional-space-top-image">
                <img src="https://media.meet-works.com/public/playground/transitional-space/ts3.png" alt="Transitional Spaces detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="This matrix translates qualitative observations into a structured design reference, enabling architects to consciously design transitional spaces that encourage interaction and social continuity."
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
