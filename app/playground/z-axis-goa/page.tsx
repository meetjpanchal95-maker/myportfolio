"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./z-axis-goa.css";

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

export default function ZAxisGoaPage() {
  return (
    <SectionShell title="Z-Axis Goa" subtitle="Z-Axis Goa" isProjectPage={true}>
      <main className="main z-axis-goa-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape z-axis-goa-hero-frame" style={{ height: "500px", background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/z-axis-goa/ZHERO.png"
              className="z-axis-goa-hero-img"
              alt="Z-Axis Goa hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Z-Axis, Goa | Event Management | Charles Correa Foundation | Volunteering"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Event content\nCuration\nDelegation Management"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="Z-Axis was a three-day event produced in collaboration with the Charles Correa Foundation, engaging a thousand student participants and a roster of guest practitioners"
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="Z-AXIS GOA" className="big-title" />
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
            text="The volunteering included operational planning, session curation, and coordination of guest logistics to ensure programmatic coherence. The approach emphasized immersive learning, knowledge exchange, and smooth on-site execution. Deliverables comprised event schedules, curated session flows, and operational frameworks supporting a consistent participant experience across Goa."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2016</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Goa, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Organisers:</div>
              <AnimatedChars text="Charles Correa Foundation" className="value" />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <AnimatedChars text="Cultural Programming" className="value" />
            </div>
            <div>
              <div className="label">Team:</div>
              <AnimatedChars text="Charles Correa Foundation Team" className="value" />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Event content" className="sub-title" />
          <AnimatedChars
            text="As part of the event management team, I supported the planning and coordination of a three-day architectural event in Goa. The process involved scheduling, logistics, and aligning multiple stakeholders to ensure a smooth experience for over 1,000 student participants."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame z-axis-goa-showcase">
            <div className="z-axis-goa-showcase-inner">
              <div className="z-axis-goa-top-image">
                <img src="https://media.meet-works.com/public/playground/z-axis-goa/z1.png" alt="Z-Axis Goa overview" />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Timelines, venue coordination, and on-ground logistics were managed collaboratively to maintain flow, clarity, and operational efficiency throughout the event."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Curation" className="sub-title" />
          <AnimatedChars
            text="The event curation focused on structuring meaningful exchanges between students and professionals. Sessions were designed to balance talks, discussions, and informal interactions, fostering learning beyond formal presentations."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame z-axis-goa-showcase">
            <div className="z-axis-goa-showcase-inner">
              <div className="z-axis-goa-top-image">
                <img src="https://media.meet-works.com/public/playground/z-axis-goa/z2.png" alt="Z-Axis Goa detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Careful sequencing of sessions and speakers helped maintain engagement while reflecting the intellectual and cultural ethos of the Charles Correa Foundation."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Delegation Mangement" className="sub-title" />
          <AnimatedChars
            text="Delegation management involved coordinating with 15 guest speakers and facilitators, supporting travel, schedules, and on-site requirements. The role required responsiveness, clarity, and adaptability in a fast-paced event environment."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame z-axis-goa-showcase">
            <div className="z-axis-goa-showcase-inner">
              <div className="z-axis-goa-top-image">
                <img src="https://media.meet-works.com/public/playground/z-axis-goa/z3.png" alt="Z-Axis Goa detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Clear communication and real-time problem-solving ensured guests and participants experienced a well-organized, respectful, and professionally managed event."
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
