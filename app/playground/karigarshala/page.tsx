"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./karigarshala.css";

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

export default function KarigarshalaPage() {
  return (
    <SectionShell title="Kaarigarshala" subtitle="Kaarigarshala" isProjectPage={true}>
      <main className="main karigarshala-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape karigarshala-hero-frame">
            <img
              src="https://media.meet-works.com/public/playground/karigarshala/fhero.png"
              className="karigarshala-hero-img"
              alt="Kaarigarshala hero"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Featured: Kaarigarshala | Architecture Project | Academic Work"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Project Featured\nKaarigarshala Concept\nFinal Design"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="A socially driven architectural project that empowers labour communities through dignified, craft-centered spaces and inclusive spatial design.."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="KAARIGARSHALA" className="big-title" />
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
            text="Kaarigarshalaa is a socially driven architectural project that repositions labour and craftsmanship at the center of the built environment. Conceived as a space for making, learning, and exchange, the project addresses working conditions, dignity of labour, and community engagement. It demonstrates how architecture can function as an enabling social infrastructure while preserving cultural knowledge through contemporary spatial design."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2018</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Ahmedabad, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Featured</div>
            </div>
            <div>
              <div className="label">Institution:</div>
              <AnimatedChars text="CEPT University" className="value" />
              
            </div>
            <div>
              <div className="label">Role:</div>
              <AnimatedChars
                text="Project Featured Individual Final Year Academic Project"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Project Featured" className="sub-title" />
          <AnimatedChars
            text="The project was featured on the cover page for its strong conceptual clarity and social relevance. Kaarigarshalaa positions architecture as an enabler for labour communities, integrating craft, dignity of work, and spatial equity through a thoughtful, contemporary architectural response."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame karigarshala-showcase">
            <div className="karigarshala-showcase-inner">
              <div className="karigarshala-top-image">
                <video src="https://media.meet-works.com/public/playground/karigarshala/f1.mp4" autoPlay loop muted playsInline />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The cover feature acknowledges the project’s architectural merit and its sensitive engagement with labour, craft, and social infrastructure."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Kaarigarshalaa concept" className="sub-title" />
          <AnimatedChars
            text="Kaarigarshalaa is conceived as a socio-architectural framework that supports artisans and labour communities through spaces for making, learning, and exchange. The concept addresses working conditions, visibility of labour, and long-term sustainability while embedding craft within everyday architectural life."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame karigarshala-showcase">
            <div className="karigarshala-showcase-inner">
              <div className="karigarshala-top-image">
                <img src="https://media.meet-works.com/public/playground/karigarshala/f2.png" alt="Kaarigarshala detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The concept reimagines architecture as a support system for labour, fostering skill development, community interaction, and cultural continuity."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

         <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Final Design" className="sub-title" />
          <AnimatedChars
            text="The final design translates social intent into spatial organization, material choices, and programmatic clarity. Workshops, shared spaces, and public interfaces are designed to enhance working environments, encourage interaction, and provide dignified, functional spaces for artisans and labourers."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame karigarshala-showcase">
            <div className="karigarshala-showcase-inner">
              <div className="karigarshala-top-image">
                <img src="https://media.meet-works.com/public/playground/karigarshala/f3.png" alt="Kaarigarshala detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The design balances social responsibility with architectural expression, creating inclusive spaces that support labour communities through thoughtful spatial and material strategies."
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
