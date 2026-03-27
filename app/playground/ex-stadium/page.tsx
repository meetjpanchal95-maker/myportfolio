"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./ex-stadium.css";

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

export default function ExStadiumPage() {
  return (
    <SectionShell title="Excelsior Stadium" subtitle="Excelsior Stadium" isProjectPage={true}>
      <main className="main ex-stadium-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape ex-stadium-hero-frame">
            <img
              src="https://media.meet-works.com/public/playground/ex-stadium/stadiumhero.png"
              className="ex-stadium-hero-img"
              alt="Excelsior Stadium hero"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text="Excelsior Stadium, Rotterdam Redevelopment Project | International Property Week | Industry-Academia Collaboration"
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Project Overview\nBenchmarking and Proposal\nReal-Estate Pitch"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="Experience of how branding, positioning, and storytelling play a critical role in shaping successful international property developments."
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="EXCELSIOR STADIUM" className="big-title" />
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
            text="International Property Week provided a comprehensive view into the global real estate ecosystem, bringing together developers, investors, designers, and strategists from diverse markets.T Exposure to global benchmarks, emerging market trends, and cross-cultural perspectives reinforced the importance of strategic communication, visual clarity, and market-driven design in real estate projects operating at an international scale."
            className="muted-text"
          />
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Program: </div>
              <div className="value">Rotterdam, Apr 2024</div>
              
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Host Organisations:</div>
              <AnimatedChars
                text={"Stebru\nHTW Berlin Uniersity, Rotterdam University"}
                className="value"
              />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Role:</div>
              <AnimatedChars
                text="Real Estate Strategy, Urban Redevelopment, Team Collaboration"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Project Overview" className="sub-title" />
          <AnimatedChars
            text="The project overview articulated the vision, scale, and positioning of the development within its international context. Design intent, lifestyle narrative, and market relevance were clearly defined to establish a strong foundation for branding, strategy, and communication."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame ex-stadium-showcase">
            <div className="ex-stadium-showcase-inner">
              <div className="ex-stadium-top-image">
                <img src="https://media.meet-works.com/public/playground/ex-stadium/stadium1.png" alt="Excelsior Stadium overview" />
              </div>
              <div className="ex-stadium-bottom-image">
                <img src="https://media.meet-works.com/public/playground/ex-stadium/Stadium2.png" alt="Excelsior Stadium detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="A concise overview aligned architectural ambition with market positioning, creating clarity for stakeholders and setting the direction for all downstream communication."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Benchmarking and proposal" className="sub-title" />
          <AnimatedChars
            text="A focused real estate strategy was shaped by understanding the target audience, market context, and project vision. Positioning, storytelling, and visual hierarchy were defined to strengthen the project’s value proposition and enhance its market appeal."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame ex-stadium-showcase">
            <div className="ex-stadium-showcase-inner">
              <div className="ex-stadium-top-image">
                <img src="https://media.meet-works.com/public/playground/ex-stadium/stadium3.png" alt="Excelsior Stadium detail" />
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
          <AnimatedChars text="Benchmarking and proposal" className="sub-title" />
          <AnimatedChars
            text="The real estate pitch translated the project vision into a compelling narrative for investors, developers, and sales teams. Visual storytelling, renders, and structured messaging communicated value, lifestyle, and long-term potential across international markets."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame ex-stadium-showcase">
            <div className="ex-stadium-showcase-inner">
              <div className="ex-stadium-top-image">
                <img src="https://media.meet-works.com/public/playground/ex-stadium/stadium4.png" alt="Excelsior Stadium detail" />
              </div>
              <div className="ex-stadium-top-image">
                <img src="https://media.meet-works.com/public/playground/ex-stadium/stadium5.png" alt="Excelsior Stadium detail" />
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
