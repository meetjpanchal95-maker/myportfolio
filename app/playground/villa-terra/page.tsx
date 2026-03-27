"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./villa-terra.css";

const visitSiteLink = "https://www.instagram.com/villaterravivagoa/";

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

export default function VillaTerraPage() {
  return (
    <SectionShell title="Villa Terra Viva" subtitle="Villa Terra Viva" isProjectPage={true}>
      <main className="main villa-terra-main">
        <div className="divider"></div>
        <section className="pad">
          <div
            className="media-frame landscape villa-terra-hero-frame"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <VisitSiteButton link={visitSiteLink} />
            <img
              src="https://media.meet-works.com/public/playground/villa-terra/vivahero.png"
              className="villa-terra-hero-img"
              alt="Villa Terra Viva hero"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Villa Terra Viva | Conservation architecture project | Real Estate revamp"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Visual Identity\nReal Estate Strategy\nMarketing Campaigns"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="Villa Terra Viva is a conservation-led real estate project focused on transforming a heritage property into a market-ready luxury offering."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="VILLA TERRA VIVA" className="big-title" />
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
            text="Collaborating with the principal architect, developer, and creative team, I supported visual identity development, 3D design options, and branding content. The project aligned architectural intent with real estate strategy, producing visual assets and narratives that positioned the property effectively for high-end buyers while respecting its conservation value."
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
          <AnimatedChars text="Visual Identity" className="sub-title" />
          <AnimatedChars
            text="Developed a cohesive visual identity for Villa Terra Viva, integrating architectural aesthetics with branding strategy. The identity communicated the property’s heritage, design excellence, and lifestyle appeal across digital and print platforms."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame villa-terra-showcase">
            <div className="villa-terra-showcase-inner">
              <div className="villa-terra-top-image">
                <video src="https://media.meet-works.com/public/playground/villa-terra/viva1.mp4" autoPlay loop muted playsInline />
              </div>
              <div className="villa-terra-top-image">
                <video src="https://media.meet-works.com/public/playground/villa-terra/viva2.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="3D Modelling Design, color palette, and visual tone were carefully curated to reflect the villa’s elegance, heritage, and modern livability, establishing a strong and recognizable brand presence."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Real Estate Strategy" className="sub-title" />
          <AnimatedChars
            text="Collaborated with the principal architect and developer to define a real estate strategy aligning design, market positioning, and investment potential. The approach translated architectural vision into a commercially viable offering."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame villa-terra-showcase">
            <div className="villa-terra-showcase-inner">
              <div className="villa-terra-top-image">
                <video src="https://media.meet-works.com/public/playground/villa-terra/viva3.mp4" autoPlay loop muted playsInline />
              </div>

        
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Market analysis, target positioning, and value proposition guided design decisions, ensuring the property appealed to potential buyers while respecting its conservation ethos."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Marketing campaigns" className="sub-title" />
          <AnimatedChars
            text="Worked within the constraints and opportunities of conservation architecture to develop design options that sensitively revived the villa while meeting contemporary standards for luxury real estate. The project balanced heritage preservation with the requirements of a commercially attractive residential product."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame villa-terra-showcase">
            <div className="villa-terra-showcase-inner">
              <div className="villa-terra-top-image">
                <img src="https://media.meet-works.com/public/playground/villa-terra/viva4.png" alt="Villa Terra Viva detail" />
              </div>
              <div className="villa-terra-top-image">
                <video src="https://media.meet-works.com/public/playground/villa-terra/viva5.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Integrated visual content and narrative messaging ensured campaigns were engaging, informative, and aligned with the villa’s premium positioning, generating market interest effectively."
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
