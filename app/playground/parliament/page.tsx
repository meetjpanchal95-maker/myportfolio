"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./parliament.css";

const visitSiteLink = "https://inidesignstudio.com/portfolio/development-redevelopment-of-parliament-building-common-central-secretariat-and-central-vista/";

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

export default function ParliamentPage() {
  return (
    <SectionShell title="Parliament of India" subtitle="Parliament of India" isProjectPage={true}>
      <main className="main parliament-main">
        <div className="divider"></div>
        <section className="pad">
          <div
            className="media-frame landscape parliament-hero-frame"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", background: "var(--MM8)" }}
          >
            <VisitSiteButton link={visitSiteLink} />
            <img
              src="https://media.meet-works.com/public/playground/parliament/parliamenthero.png"
              className="parliament-hero-img"
              alt="Parliament of India hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Competition Project | Parliament of India | Unconventional methods to create Visuals"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text="Visualisation strategy"
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="This competition entry experimented with rapid, non-conventional visual methods to articulate civic and spatial narratives under compressed timelines"
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="PARLIAMENT OF INDIA INTERIORS" className="big-title" />
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
            text="The strategy emphasized abstraction, narrative hierarchy, and symbolic clarity to communicate intent efficiently to evaluators and stakeholders. Visual experiments translated programmatic complexity into compelling graphics that supported a persuasive proposal. The output was a concise visual toolkit and diagrammatic system that elevated concept delivery and successfully."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2020</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Submitted (Top 6)</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <AnimatedChars text="INI Design Studio" className="value" />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Work team:</div>
              <AnimatedChars text="Vinisha Thakkar, Meet Panchal" className="value" />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Visualisation strategy" className="sub-title" />
          <AnimatedChars
            text="The visualisation strategy was developed as a last-minute yet deliberate approach to overcome limited time and resources. It relied on abstraction, hierarchy, and storytelling to communicate the core idea without excessive detailing."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame parliament-showcase">
            <div className="parliament-showcase-inner">
              <div className="parliament-top-image">
                <img src="https://media.meet-works.com/public/playground/parliament/parliament1.png" alt="Parliament of India overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="By prioritizing message over realism, the strategy transformed visuals into tools for persuasion, enabling faster decision-making and a distinctive competition identity."
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
