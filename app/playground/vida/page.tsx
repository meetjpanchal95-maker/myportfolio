"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./vida.css";

const visitSiteLink = "https://www.instagram.com/vida_goa/";

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

export default function VidaPage() {
  return (
    <SectionShell title="VIDA Bistro" subtitle="VIDA Bistro" isProjectPage={true}>
      <main className="main vida-main">
        <div className="divider"></div>
        <section className="pad">
          <div
            className="media-frame landscape vida-hero-frame"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", height: "500px", background: "var(--MM8)" }}
          >
            <VisitSiteButton link={visitSiteLink} />
            <img
              src="https://media.meet-works.com/public/playground/vida/vidahero.png"
              className="vida-hero-img"
              alt="VIDA Bistro hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Bistro and Fine Dine Restaurant | Design visualisation of the project | Interiors and branded environments"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Branding\nInterior Design\nSocial Media Strategy"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="VIDA is a bistro fine-dining concept developed through an integrated approach combining branding, interior design, and social media strategy."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="VIDA by Tatos'" className="big-title" />
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
            text="The project focused on creating a cohesive dining experience that balances approachability with refinement. Visual identity, spatial atmosphere, and digital communication were aligned to reflect the restaurant’s positioning. The work resulted in a unified brand language, interior direction, and content strategy designed to support long-term recall and experiential consistency."
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
              <div className="label">Design Agency:</div>
              <AnimatedChars text="Ar+A Associates" className="value" />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="Arminio Ribeiro, Meet Panchal, Priyanka Kumari"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Branding" className="sub-title" />
          <AnimatedChars
            text="VIDA’s brand identity was designed to balance warmth and refinement, blending the relaxed spirit of a bistro with the elegance of fine dining. The visual language reflects sensory dining, human connection, and understated luxury."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame vida-showcase">
            <div className="vida-showcase-inner">
              <div className="vida-top-image">
                <img src="https://media.meet-works.com/public/playground/vida/vida1.png" alt="VIDA Bistro overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Typography, color, and tone were crafted to feel inviting yet premium, ensuring VIDA communicates sophistication without distance and comfort without losing its fine-dine character."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Interior Design" className="sub-title" />
          <AnimatedChars
            text="The interior design for VIDA translates the brand into space, using materiality, lighting, and spatial rhythm to create an immersive dining atmosphere. The environment supports slow dining, intimacy, and a seamless transition from casual to refined moments."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame vida-showcase">
            <div className="vida-showcase-inner">
              <div className="vida-row-pair">
                <div className="vida-top-image">
                  <video src="https://media.meet-works.com/public/playground/vida/vida2.1.mp4" autoPlay loop muted playsInline />
                </div>
                <div className="vida-top-image">
                  <video src="https://media.meet-works.com/public/playground/vida/vida2.2.mp4" autoPlay loop muted playsInline />
                </div>
              </div>
              <div className="vida-top-image">
                <img src="https://media.meet-works.com/public/playground/vida/vida3.png" alt="VIDA Bistro full" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Natural textures, controlled lighting, and thoughtful layouts were used to enhance mood, acoustics, and comfort, aligning the physical space with VIDA’s experiential dining philosophy."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Social Media Strategy" className="sub-title" />
          <AnimatedChars
            text="VIDA’s social media strategy focuses on storytelling rather than promotion, highlighting food craftsmanship, ambience, and moments of experience. The content builds emotional recall, positioning VIDA as a destination rather than just a restaurant."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame vida-showcase">
            <div className="vida-showcase-inner">
              <div className="vida-top-image">
                <video src="https://media.meet-works.com/public/playground/vida/vida4.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Visual consistency, short-form videos, and narrative captions were used to communicate lifestyle, evoke appetite, and build a refined yet approachable digital presence."
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
