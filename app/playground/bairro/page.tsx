"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./bairro.css";

const visitSiteLink = "https://bairro-alto.in";

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

export default function BairroPage() {
  return (
    <SectionShell title="Bairro Alto" subtitle="Bairro Alto" isProjectPage={true}>
      <main className="main bairro-main">
        <div className="divider"></div>
        <section className="pad">
          <div
            className="media-frame landscape bairro-hero-frame"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", background: "var(--MM8)" }}
          >
            <VisitSiteButton link={visitSiteLink} />
            <video
              src="https://media.meet-works.com/public/playground/bairro/hover.mp4"
              className="bairro-hero-img"
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
            text={"Project Visualisation using creative marketing methods \n| Collaborative work with developers"}
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Visual Identity\nReal Estate Strategy\nMarketing Campaigns"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="Real estate branding and creative direction for marketing content, including 3D modelling and rendering, to develop a strong project identity."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="BAIRRO ALTO" className="big-title" />
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
            text="Bairro Alto Goa is a luxury villa in Goa. The client’s existing marketing strategy was revised and elevated, with visual identity, creative direction, and architectural design defined to reflect the villa’s luxury appeal. The project vision was translated into clear, cohesive presentations highlighting key outcomes and design decisions."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2017</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Goa, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">Shusheela Homes</div>
              <div className="label">Project Scope:</div>
              <div className="value">Design and Real Estate Marketing</div>
              <div className="label">Company:</div>
              <div className="value">A+AR Assosciates</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="Meet Panchal, Priyanka Kumari, Arminio Ribeiro"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Visual Identity" className="sub-title" />
          <AnimatedChars
            text="A refined visual identity was developed to express the project’s luxury positioning. Typography, color palette, material language, and spatial narratives were aligned to create a consistent brand system across architectural visuals, presentations, and marketing assets."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame bairro-showcase">
            <div className="bairro-showcase-inner">
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro1.png" alt="Bairro overview" />
              </div>
              <div className="bairro-bottom-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro2.png" alt="Bairro detail" />
              </div>
              <div className="bairro-bottom-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro3.png" alt="Bairro detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The visual language translated architectural intent into a cohesive brand presence, ensuring clarity, elegance, and recognisability across all touchpoints."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Real Estate Strategy" className="sub-title" />
          <AnimatedChars
            text="A focused real estate strategy was shaped by understanding the target audience, market context, and project vision. Positioning, storytelling, and visual hierarchy were defined to strengthen the project’s value proposition and enhance its market appeal."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame bairro-showcase">
            <div className="bairro-showcase-inner">
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro4.png" alt="Bairro detail" />
              </div>
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro5.png" alt="Bairro detail" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Strategic positioning connected design intent with market expectations, enabling clear communication of value and differentiation within a competitive real estate landscape"
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

         <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Marketing Campaigns" className="sub-title" />
          <AnimatedChars
            text="Marketing campaigns were designed to communicate the project narrative through curated visuals, renders, and presentations. Each asset supported a unified story, guiding potential buyers through the lifestyle, architecture, and investment value of the development."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame bairro-showcase">
            <div className="bairro-showcase-inner">
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro6.png" alt="Bairro detail" />
              </div>
              <div className="bairro-top-image">
                <video src="https://media.meet-works.com/public/playground/bairro/bairro7.mp4" autoPlay loop muted playsInline />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Campaigns translated the project vision into engaging visual content, strengthening brand recall and supporting sales-driven communication."
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
