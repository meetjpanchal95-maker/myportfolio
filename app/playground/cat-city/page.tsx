"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./cat-city.css";

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

export default function CatCityPage() {
  return (
    <SectionShell title="CAT CityAllTech" subtitle="CAT CityAllTech" isProjectPage={true}>
      <main className="main cat-city-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape cat-city-hero-frame">
            <img
              src="https://media.meet-works.com/public/playground/cat-city/cathero.png"
              className="cat-city-hero-img"
              alt="CAT CityAllTech hero"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="CAT- CityAllTech | Music project | Concert Live in Berlin | Music Production performing arts | Curiosive Launch"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Concert Conceptualisation\nMain Concert\nCuriosive Launch"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="Music project focused on live concerts and performing arts in Berlin, blending creative music production with immersive audience experiences."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="CAT — CUriosive" className="big-title" />
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
            text="The work focused on developing a scalable business model for artistic musical career and the initiative aims to deliver innovative live performances while supporting artistic engagement and cultural outreach."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Berlin, Germany</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Passion Project:</div>
              <AnimatedChars
                text={"Music Production\nLive Performance"}
                className="value"
              />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
            
            </div>
            <div>
              <div className="label">Team:</div>
              <AnimatedChars
                text="Sharon Jacob, Paulo Gomez, Meet Panchal"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Concert Conceptualisation" className="sub-title" />
          <AnimatedChars
            text="The concert conceptualisation phase involved creating the overarching vision and theme of the performance, ensuring it resonated with the target audience. Programming decisions were made to balance artistic innovation with audience engagement."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame cat-city-showcase">
            <div className="cat-city-showcase-inner">
              <div className="cat-city-top-image">
                <img src="https://media.meet-works.com/public/playground/cat-city/cat1.png" alt="CAT CityAllTech overview" />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Stage and set design concepts were mapped to reflect the music and performance style. The planning also included designing the flow of the concert to create a cohesive and immersive experience."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Main Concert" className="sub-title" />
          <AnimatedChars
            text="The main concert execution focused on delivering a seamless live performance. Production logistics, including sound, lighting, and stage management, were coordinated to meet professional standards."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame cat-city-showcase">
            <div className="cat-city-showcase-inner">
              <div className="cat-city-top-image">
                <img src="https://media.meet-works.com/public/playground/cat-city/cat2.png" alt="CAT CityAllTech detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Performers were guided through rehearsals and live execution to ensure artistic quality. Audience engagement was closely monitored to refine the timing and energy of the performance for maximum impact."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

         <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="curiosive Launch" className="sub-title" />
          <AnimatedChars
            text="The Curiosive Launch involved introducing the project and its digital/physical platform to the public. Marketing strategies, including social media and promotional content, were developed to maximize reach."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame cat-city-showcase">
            <div className="cat-city-showcase-inner">
              <div className="cat-city-top-image">
                <img src="https://media.meet-works.com/public/playground/cat-city/cat3.png" alt="CAT CityAllTech detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Audience interaction was encouraged through both online engagement and live participation. The launch integrated creative storytelling with music production to create lasting impressions and build a community around the project."
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
