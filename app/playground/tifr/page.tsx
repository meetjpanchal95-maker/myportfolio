"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./tifr.css";

const visitSiteLink = "https://inidesignstudio.com/portfolio/tata-institute-of-fundamental-research-tifr-campus/";

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

export default function TifrPage() {
  return (
    <SectionShell title="TIFR Competition" subtitle="TIFR Competition" isProjectPage={true}>
      <main className="main tifr-main">
        <div className="divider"></div>
        <section className="pad">
          <div
            className="media-frame landscape tifr-hero-frame"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", height: "500px", background: "var(--MM8)" }}
          >
            <VisitSiteButton link={visitSiteLink} />
            <video
              src="https://media.meet-works.com/public/playground/tifr/tifrhero.mp4"
              className="tifr-hero-img"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Tata Institute of Fundamental Research | Competition project | Visual Character and development"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Project Proposal\nVisualisation"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="The work emphasized thoughtful spatial planning, user-centric design, and aesthetic coherence, delivering environment."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="TIFR Campus" className="big-title" />
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
            text="Selected as the design studio for TIFR (Tata Institute of Fundamental Research), the project focused on creating innovative and functional design solutions aligned with the institute’s research and educational vision. visual of the project support both academic pursuits and collaborative engagement within a cutting-edge scientific setting."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2022</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Won (Ongoing)</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <AnimatedChars text="INI Design Studio" className="value" />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="Shalvi Patel, Mukul Chaturvedi, Meet Panchal, Rakhi Rupani, Saumil Mevada"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Project Proposal" className="sub-title" />
          <AnimatedChars
            text="The proposal combined research insights, design innovation, and strategic planning to deliver a 5 million winning submission. It showcased the team’s ability to outperform leading Indian firms through integrated, evidence-based design solutions."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame tifr-showcase">
            <div className="tifr-showcase-inner">
              <div className="tifr-top-image">
                <video src="https://media.meet-works.com/public/playground/tifr/tifr1.mp4" autoPlay loop muted playsInline />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Clear articulation of objectives, methodology, and expected outcomes ensured the proposal communicated credibility, innovation, and feasibility to funding authorities and project evaluators."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Visualisation" className="sub-title" />
          <AnimatedChars
            text="The visualisation strategy translated complex research and design concepts into clear, compelling graphics. It emphasized narrative clarity, spatial understanding, and innovative representation to communicate the proposal effectively to stakeholders and evaluators."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame tifr-showcase">
            <div className="tifr-showcase-inner">
              <div className="tifr-top-image">
                <img src="https://media.meet-works.com/public/playground/tifr/tifr2.png" alt="TIFR Competition detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Alternative diagrams, infographics, and conceptual visuals were used to highlight innovation, collaboration, and design intent, ensuring the project stood out in a competitive environment."
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
