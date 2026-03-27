"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./giant.css";

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

export default function GiantPage() {
  return (
    <SectionShell title="GIANT" subtitle="GIANT" isProjectPage={true}>
      <main className="main giant-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape giant-hero-frame" style={{ height: "500px", background: "var(--MM8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="https://media.meet-works.com/public/playground/giant/gianthero.png"
              className="giant-hero-img"
              alt="GIANT hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text={"German Indian Academic Network for Tomorrow |\nDAAD funding proposal"}
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Project Concept\nObjectives\nOverall Proposal"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="Project proposes shared curricula, research collaboration, and institutional capacity building."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="GIANT" className="big-title" />
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
            text="GIANT is a DAAD funding proposal developed with CEPT University and HTW Berlin to establish a transnational academic network in construction education. The project focuses on digitalization, applied research, and faculty and student exchange. The outcome is a structured framework designed to strengthen long-term academic cooperation and align education with technological transformation in the construction sector."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">Germany / India</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Status:
              </div>
              <div className="value">Shortlisted</div>
            </div>
            <div>
              <div className="label">Universities:</div>
              <AnimatedChars text="HTW Berlin, CEPT University" className="value" />
              <div className="label" style={{ marginTop: "8px" }}>
                Funding Body:
              </div>
              <AnimatedChars text="DAAD" className="value" />
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="Sharon Jacob, Meet Panchal, Papon Kumar Dev, Nicole Reidiger, Sachin Soni, Zubeen, Janki Vaishnav"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="PROJECT CONCEPT" className="sub-title" />
          <AnimatedChars
            text="The GIANT proposal outlines the creation of a transnational academic network between CEPT University and HTW Berlin. It focuses on advancing digitalisation and technological innovation in construction education through structured collaboration and knowledge exchange"
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame giant-showcase">
            <div className="giant-showcase-inner">
              <div className="giant-top-image">
                <img src="https://media.meet-works.com/public/playground/giant/giant1.png" alt="GIANT proposal overview" />
              </div>
            
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The concept positions education as a shared innovation platform, connecting institutions, disciplines, and geographies to address future challenges in the construction sector."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="OBJECTIVES" className="sub-title" />
          <AnimatedChars
            text="The project objectives center on strengthening academic-industry linkages, fostering digital competencies, and enabling cross-cultural collaboration. Emphasis is placed on digital tools, applied research, and capacity building for students and faculty."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame giant-showcase">
            <div className="giant-showcase-inner">
              <div className="giant-top-image">
                <img src="https://media.meet-works.com/public/playground/giant/giant2.png" alt="GIANT academic network" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Academic collaboration framework for GIANT establishing structured partnerships between German and Indian institutions to advance shared research goals and exchange programmes."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="OVERALL PROPOSAL" className="sub-title" />
          <AnimatedChars
            text="The overall proposal presents a structured framework for long-term collaboration, including faculty exchanges, joint research initiatives, and digital learning modules. It aligns educational innovation with real-world technological shifts in construction."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame giant-showcase">
            <div className="giant-showcase-inner">
              <div className="giant-top-image">
                <img src="https://media.meet-works.com/public/playground/giant/giant3.png" alt="GIANT academic network" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Designed for scalability and continuity, the proposal establishes a sustainable model for international cooperation supported by DAAD funding and shared institutional vision."
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
