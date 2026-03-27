"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./goa-heritage.css";

const visitSiteLink = "https://www.amastaysandtrails.com/en-in/villa-siolim-goa";

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

export default function GoaHeritagePage() {
  return (
    <SectionShell title="Goa Heritage Villa" subtitle="Goa Heritage Villa" isProjectPage={true}>
      <main className="main goa-heritage-main">
        <div className="divider"></div>
        <section className="pad">
          <div
            className="media-frame landscape goa-heritage-hero-frame"
            style={{ height: "500px", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--MM8)" }}
          >
            <VisitSiteButton link={visitSiteLink} />
            <img
              src="https://media.meet-works.com/public/playground/goa-heritage/goahero.png"
              className="goa-heritage-hero-img"
              alt="Goa Heritage Villa hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Heritage Architecture | Real Estate pitch | Conservation project at cultural heart of Goa"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Visual Identity\nConservation Strategy\nMarketing Pitch"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="This project involved converting an abandoned heritage property in Goa into a luxury villa and pitching it to AMA Stays and Trails."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="Villa SIOLIM" className="big-title" />
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
            text="Working closely with the client, architect, and conservation specialist, the focus was on adaptive reuse, market positioning, and brand communication. Visual identity, real estate strategy, and marketing content were developed to balance cultural authenticity with commercial viability for the hospitality and luxury travel market."
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
              <div className="value">Ar+A Associates</div>
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
            text="Developed a visual identity that reflected the heritage and luxury of the restored villa. The design language conveyed cultural authenticity, elegance, and modern comfort, forming the foundation for branding and marketing communications."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame goa-heritage-showcase">
            <div className="goa-heritage-showcase-inner">
              <div className="goa-heritage-top-image">
                <img src="https://media.meet-works.com/public/playground/goa-heritage/goa1.png" alt="Goa Heritage Villa overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Typography, color palette, and imagery were curated to highlight the property’s historical significance while appealing to high-end clientele, creating a strong and memorable brand presence."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

         <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Conservation Strategy" className="sub-title" />
          <AnimatedChars
            text="Collaborated with the client, architect, and conservation specialist to define a real estate strategy that positioned the villa as a premium offering. The strategy aligned design, heritage conservation, and market viability for potential investors."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame goa-heritage-showcase">
            <div className="goa-heritage-showcase-inner">
              <div className="goa-heritage-top-image">
                <img src="https://media.meet-works.com/public/playground/goa-heritage/goa2.png" alt="Goa Heritage Villa detail" />
              </div>
              <div className="goa-heritage-top-image">
                <img src="https://media.meet-works.com/public/playground/goa-heritage/goa3.gif" alt="Goa Heritage Villa detail" />
              </div>
              <div className="goa-heritage-top-image">
                <img src="https://media.meet-works.com/public/playground/goa-heritage/goa4.png" alt="Goa Heritage Villa detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Market research, competitive analysis, and value proposition guided decision-making, ensuring the property’s heritage and luxury appeal were effectively leveraged to attract AMA Stays and Trails."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>


        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Marketing campaigns" className="sub-title" />
          <AnimatedChars
            text="Designed a comprehensive marketing pitch for partnership with AMA Stays & Trails, showcasing the villa’s transformation, heritage character, and luxury features. The campaign combined curated visuals, refined storytelling, and targeted digital and offline channels to attract discerning traveler and investors."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame goa-heritage-showcase">
            <div className="goa-heritage-showcase-inner">
              <div className="goa-heritage-top-image">
                <img src="https://media.meet-works.com/public/playground/goa-heritage/goa5.png" alt="Goa Heritage Villa detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Integrated content highlighted heritage conservation, design excellence, and an experiential lifestyle, positioning the villa as a distinctive, market-ready luxury property in Goa."
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
