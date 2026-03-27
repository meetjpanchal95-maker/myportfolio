"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./thinking-hand.css";

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

export default function ThinkingHandPage() {
  return (
    <SectionShell title="Thinking Hand" subtitle="Thinking Hand" isProjectPage={true}>
      <main className="main thinking-hand-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape thinking-hand-hero-frame" style={{ height: "500px", background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/thinking-hand/thhero.png"
              className="thinking-hand-hero-img"
              alt="Thinking Hand hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Thinking Hand Summer School |Building Eco-San for a Rural Kindergarten"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Design Concept\nFinal Outcome\nSite Execution"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="A two-week design-build workshop focused on delivering an ecological sanitation solution for a rural kindergarten."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="THINKING HANDS" className="big-title" />
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
            text="The workshop combined participatory design, material sensitivity, and hands-on construction with local builders and students. Emphasis was on durable, low-tech solutions that respond to local resources and maintenance capacities. The project produced built infrastructure, documented construction sequences, and a teaching module that amplifies skill transfer and created a replicable community-built model."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2019</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Organizers:</div>
              <AnimatedChars text="CEPT University" className="value" />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="CEPT Student Team, Saptarishi Mishra, Sangita Kapoor, Laurent Fournier"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Design Concept" className="sub-title" />
          <AnimatedChars
            text="The design prioritized simplicity, durability, and environmental performance. Material choices and construction details were informed by local availability, climate response, and ease of maintenance, ensuring the solution remained both sustainable and practical."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame thinking-hand-showcase">
            <div className="thinking-hand-showcase-inner">
              <div className="thinking-hand-top-image">
                <img src="https://media.meet-works.com/public/playground/thinking-hand/th1.png" alt="Thinking Hand overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Passive ventilation, water efficiency, and modular construction formed the core design elements, supporting hygiene, longevity, and ecological responsibility."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Final Outcome" className="sub-title" />
          <AnimatedChars
            text="This two-week summer school focused on designing and constructing an eco-san toilet for a rural kindergarten. Working with students and local builders, the project emphasized hands-on learning, sustainable construction, and socially responsible design."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame thinking-hand-showcase">
            <div className="thinking-hand-showcase-inner">
              <div className="thinking-hand-top-image">
                <img src="https://media.meet-works.com/public/playground/thinking-hand/th2.png" alt="Thinking Hand detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The workshop bridged design thinking and on-site making, translating ecological principles into a functional, community-oriented sanitation solution."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Site execution" className="sub-title" />
          <AnimatedChars
            text="Site execution involved collaborative construction with local craftsmen, translating drawings into real-time decisions on site. The process encouraged adaptability, skill-sharing, and an understanding of construction constraints."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame thinking-hand-showcase">
            <div className="thinking-hand-showcase-inner">
              <div className="thinking-hand-top-image">
                <img src="https://media.meet-works.com/public/playground/thinking-hand/th3.png" alt="Thinking Hand detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Hands-on building reinforced material knowledge, construction sequencing, and the value of collective effort in delivering sustainable architecture at a human scale."
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
