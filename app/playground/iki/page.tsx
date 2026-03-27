"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./iki.css";

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

export default function IkiPage() {
  return (
    <SectionShell title="IKI Medium Grant" subtitle="IKI Medium Grant" isProjectPage={true}>
      <main className="main iki-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape iki-hero-frame" style={{ background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/iki/ikihero.png"
              className="iki-hero-img"
              alt="IKI Medium Grant hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Proposal for IKI Medium Grant | Funding for capacity building | Project proposal | Think Tank"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Project Overview\nDesign Elements\nSite Execution"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="This proposal for the IKI Medium Grant focused on capacity building through collaboration between universities and NGOs."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="IKI GRANT" className="big-title" />
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
            text="The project addressed governance and policy implementation challenges through structured training, stakeholder engagement, and institutional strengthening. Contributed to framing objectives, coordination strategies, and implementation logic. The proposal emphasized scalability, monitoring, and long-term impact, and was shortlisted for recognition, highlighting its relevance and alignment with international funding priorities."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Germany + India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Shortlisted</div>
            </div>
            <div>
              <div className="label">Organisations:</div>
              <AnimatedChars
                text="HTW Berlin, NIT Raipur, Vasudha Foundation"
                className="value"
              />
              
            </div>
            <div>
              <div className="label">Team:</div>
              <AnimatedChars
                text="Sharon Jacob, Meet Panchal, Papon Kumar Dev"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="PROJECT CONCEPT" className="sub-title" />
          <AnimatedChars
            text="The proposal focused on building institutional capacity through collaborative engagement with universities and NGOs. It aimed to address governance challenges and policy implementation gaps while fostering knowledge exchange and practical solutions for sustainable development."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame iki-showcase">
            <div className="iki-showcase-inner">
              
              <div className="iki-bottom-image">
                <img src="https://media.meet-works.com/public/playground/iki/iki1.png" alt="IKI Medium Grant detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The concept positioned capacity building as a systemic approach, connecting academic expertise, civil society, and policy frameworks to enhance impact and scalability."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Objectives" className="sub-title" />
          <AnimatedChars
            text="Objectives centered on strengthening institutional capabilities, improving governance practices, and promoting cross-sector collaboration. The project emphasized measurable outcomes in knowledge transfer, training, and strategic support for local and regional initiatives."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame iki-showcase">
            <div className="iki-showcase-inner">
              <div className="iki-top-image">
                <img src="https://media.meet-works.com/public/playground/iki/iki2.png" alt="IKI Medium Grant detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Clear objectives guided actionable steps, ensuring the project contributed to long-term capacity development and practical policy solutions aligned with IKI funding priorities."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>
        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="OVERALL PROPOSAL" className="sub-title" />
          <AnimatedChars
            text="The overall proposal presented a structured plan for collaboration, including stakeholder engagement, workshops, and monitoring frameworks. It highlighted the replicability and scalability of capacity-building interventions within governance and policy-making contexts."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame iki-showcase">
            <div className="iki-showcase-inner">
              <div className="iki-top-image">
                <img src="https://media.meet-works.com/public/playground/iki/iki3.png" alt="IKI Medium Grant detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Designed for recognition and impact, the proposal balances strategic planning, academic rigor, and practical implementation to deliver sustainable outcomes for institutional capacity enhancement."
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
