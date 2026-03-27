"use client";
import SectionShell from "../../../components/SectionShell";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import ContactUs from "../../../components/ContactUs";
import "./spendo.css";
import { motion } from "framer-motion";



export default function AboutPage() {
  return (
    <SectionShell title="Spendo" subtitle="Spendo" isProjectPage={true}>
      <main className="main giant-main">
        <div className="divider"></div>
        <section className="pad">
         <div className="media-frame landscape spendo-hero-frame" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Visit Site button moved to Client Component */}
            
            <video
              src="https://media.meet-works.com/public/projects/spendo/spendohero.mp4"
              className="spendo-hero-media"
              style={{ width: "auto", height: "500px", objectFit: "contain" }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <motion.span
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"Corporate Petty Cash\nManagement Solution".split("").map((char, i) => (
              char === "\n"
                ? <br key={i} />
                : <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <motion.span
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"Website Design\nProduct UX".split("").map((char, i) => (
              char === "\n"
                ? <br key={i} />
                : <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
            <motion.span
              className="muted-text"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.012 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              aria-hidden={false}
            >
              {"Spendo is a web-based petty cash management platform designed to simplify expense tracking and approvals for teams.".split("").map((char, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
              ))}
            </motion.span>
          {/* Only keep one instance of each text block, remove duplicates */}
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <motion.span className="big-title"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"SPENDO".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <motion.span className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"SCOPE".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <motion.span className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"ABOUT".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span
            className="muted-text"
            style={{ display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"Spendo is a petty cash management solution designed to streamline expense tracking and financial oversight. The project focused on developing the website and shaping the product UX, ensuring intuitive navigation, clear workflows, and a user-centred interface that supports efficient cash management.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">UAE</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Status:
              </div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
            </div>
            <div>
              <div className="label">Project team:</div>
              <div className="value">
                Kishan Solanki, Meet Panchal, Sudama Yadav{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">WEBSITE DESIGN</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"Designed the Spendo website to clearly communicate product value, simplify a finance-heavy narrative, and build trust with users. The focus was on clarity, structured layouts, and positioning the platform as an efficient, transparent financial tool.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame spendo-showcase">
            <div className="spendo-showcase-inner">
              <div className="spendo-top-image">
                <img src="https://media.meet-works.com/public/projects/spendo/spendo1.png" alt="Spendo 1" />
              </div>

              <div className="spendo-flow">
                <img
                  src="https://media.meet-works.com/public/projects/spendo/l1.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/spendo/d1.svg"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="spendo-bottom-image">
                <img src="https://media.meet-works.com/public/projects/spendo/spendo2.png" alt="Spendo product screen" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"Website design for Spendo focused on clear messaging, structured content, and a professional visual language to communicate value and build trust around petty cash management.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">PRODUCT UX</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"Led the product UX for Spendo by defining user flows for expense tracking, approvals, and reporting. The work emphasized simplicity, reduced cognitive load, and usability, enabling teams to manage petty cash with accuracy and minimal friction.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame spendo-showcase">
            <div className="spendo-showcase-inner">
              <div className="spendo-top-image">
                <img src="https://media.meet-works.com/public/projects/spendo/spendo3.png" alt="Spendo product UX" />
              </div>

              <div className="spendo-flow">
                <img
                  src="https://media.meet-works.com/public/projects/spendo/diagram.svg"
                  alt="Spendo UX diagram"
                  className="spendo-svg-diagram"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div className="spendo-bottom-image">
                <img src="https://media.meet-works.com/public/projects/spendo/spendo4.png" alt="Spendo product screen" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"Product UX design for Spendo, shaping intuitive workflows for expense tracking and approvals to ensure clarity, ease of use, and reliable petty cash management.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>
        <div className="divider"></div>
      <SpendoNavButtons previousLink="/work/gcapital" nextLink="/work/pawsome" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
