"use client";
import SectionShell from "../../../components/SectionShell";
import { motion } from "framer-motion";
import ContactUs from "../../../components/ContactUs";
import "./construct360.css";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";


export default function Construct360Page() {
  return (
    <SectionShell title="CONSTRUCT360" subtitle="CONSTRUCT360" isProjectPage={true}>
      <main className="main construct360-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape spendo-hero-frame theme-bg" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Visit Site button moved to Client Component */}
            
            <img
              src="https://media.meet-works.com/public/projects/construct360/360hero.png"
              className="spendo-hero-media"
              style={{ width: "auto", height: "500px", objectFit: "contain" }}
              alt="Construct360 hero"
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <motion.span
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px", display: "block" }}
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
            {"Business Intelligence | Internal Construction Project Management Software | Data Analytics".split("").map((char, i) => (
              char === "\n"
                ? <br key={i} />
                : <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <motion.span
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px", display: "block" }}
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
            {"Dashboard Design\nUser Experience\nProject Collaboration".split("").map((char, i) => (
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
            {"Construct 360 is a comprehensive in-house construction project management platform designed to streamline workflows and enhance team collaboration.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">CONSTRUCT360</div>
          <div className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            SCOPE
          </div>
          <div className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            ABOUT
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span
            className="muted-text"
            style={{ display: "block" }}
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
            {"The project focused on translating complex project data into intuitive dashboards, creating seamless user experiences, and structuring collaborative processes. By integrating design, UX, and dashboarding, the platform empowers teams to monitor progress, make informed decisions, and improve operational efficiency, supporting digital transformation within construction project management.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Remote</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
            
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Kishan Solanki, Meet Panchal, Sudama Yadav, Kunal Birade</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Project Collaboration</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
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
            {"Facilitated project collaboration by structuring shared workflows, information exchange, and coordination between internal teams. The approach supported transparency, accountability, and smoother communication across design, planning, and execution stages.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame construct360-showcase">
            <div className="construct360-showcase-inner">
                 <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/3601.svg" alt="CONSTRUCT360 collaboration" style={{ width: "100%", height: "auto" }} />
              </div>
                <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/3602.svg" alt="CONSTRUCT360 collaboration" style={{ width: "100%", height: "auto" }} />
              </div>
                
               
              <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/3603.png" alt="CONSTRUCT360 collaboration" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
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
            {"Dashboard design for an in-house construction management platform, structuring data into clear, role-specific views that support monitoring, decision-making, and operational clarity.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">User Experience</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
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
            {"Led the user experience design by mapping workflows specific to construction project management. The work focused on reducing friction, aligning digital tools with on-site and managerial processes, and ensuring usability across roles, timelines, and project phases.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame construct360-showcase">
            <div className="construct360-showcase-inner">
              <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/3604.png" alt="CONSTRUCT360 overview" />
              </div>
              
              <div className="construct360-bottom-image">
                <div className="construct360-side-by-side">
                  <img src="https://media.meet-works.com/public/projects/construct360/3605.svg" alt="CONSTRUCT360 data overview" className="c360-theme-svg" />
                  <img src="https://media.meet-works.com/public/projects/construct360/3606.png" alt="CONSTRUCT360 dashboard detail" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
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
            {"User experience design for a construction management system, aligning digital workflows with real-world project processes to improve usability, adoption, and operational efficiency.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Project Collaboration</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
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
            {"Facilitated project collaboration by structuring shared workflows, information exchange, and coordination between internal teams. The approach supported transparency, accountability, and smoother communication across design, planning, and execution stages.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame construct360-showcase">
            <div className="construct360-showcase-inner">
                 <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/3607.svg" alt="CONSTRUCT360 collaboration" className="c360-theme-svg" style={{ width: "100%", height: "auto" }} />
              </div>
                <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/36081.svg" alt="CONSTRUCT360 collaboration" className="c360-theme-svg" style={{ width: "100%", height: "auto" }} />
              </div>
                <div className="construct360-top-image">
                <video autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }}>
                  <source src="https://media.meet-works.com/public/projects/construct360/3608.mp4" type="video/mp4" />
                </video>
              </div>
               <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/3609.svg" alt="CONSTRUCT360 collaboration" className="c360-theme-svg" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="construct360-top-image">
                <img src="https://media.meet-works.com/public/projects/construct360/36010.png" alt="CONSTRUCT360 collaboration" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
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
            {"Collaboration design for an in-house construction platform, enabling structured coordination, shared visibility, and clear information flow across multidisciplinary project teams.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <SpendoNavButtons previousLink="/work/pawsome" nextLink="/work/unesco-chair" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
