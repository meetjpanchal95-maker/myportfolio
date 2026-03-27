
"use client";
import SectionShell from "../../../components/SectionShell";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import ContactUs from "../../../components/ContactUs";
import "./stackbuilder.css";
import { motion } from "framer-motion";


export default function StackbuilderPage() {
  return (
    <SectionShell title="Stackbuilder" subtitle="Stackbuilder" isProjectPage={true}>
      <main className="main stackbuilder-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape spendo-hero-frame theme-bg" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Visit Site button moved to Client Component */}
            <VisitSiteButton link="https://www.stackbuilder.in" />
            <img
              src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilderhero.png"
              className="stackbuilder-hero-media"
              style={{ width: "auto", height: "500px", objectFit: "contain" }}
              alt="Stackbuilder hero"
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
            {typeof window !== "undefined" && "Content & Marketing | Creative Consulting".split("").map((char, i) => (
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
            {"Website Design\nBrand Identity\nUX Lead".split("").map((char, i) => (
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
            {"StackBuilder was developed as a holistic brand and digital product rather than a standalone static website.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <motion.span className="big-title"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"STACK BUILDER".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
          <motion.span className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"SCOPE".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
          <motion.span className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"ABOUT".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span className="muted-text"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"The project focused on shaping how the company communicates its value, structures its services, and guides users through its offerings. By aligning branding, website design, and user experience, the work established a coherent foundation that supports credibility, usability, and long-term growth across digital touchpoints.".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
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
              <div className="value">Kishan Solanki, Meet Panchal, Sudama Yadav</div>
            </div>
          </div>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Website Design</div>
          <motion.span className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }
          } variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"Designed the StackBuilder website as a clear, scalable digital presence, translating complex services into a structured narrative. The focus was on clarity, hierarchy, and flow, ensuring the website functions as both a marketing and credibility asset.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame stackbuilder-showcase">
            <div className="stackbuilder-showcase-inner">
             
              <div className="stackbuilder-bottom-image">
                <img src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder1.png" alt="STACK BUILDER brand identity" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="stackbuilder-bottom-image">
                <img src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder2.png" alt="STACK BUILDER brand identity" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="stackbuilder-bottom-image">
                <img src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder3.png" alt="STACK BUILDER brand identity" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="stackbuilder-bottom-image">
                <img src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder4.png" alt="STACK BUILDER brand identity" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"Website design for StackBuilder focused on clear structure, strong visual hierarchy, and a narrative-driven layout that communicates services effectively while supporting future scalability.".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Brand Identity</div>
          <motion.span className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"Led the branding for StackBuilder by defining visual language, tone, and identity principles. The work established consistency across touchpoints, positioning the brand as structured, reliable, and forward-looking within a technology-driven professional context.".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
        </section>

        

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame stackbuilder-showcase">
            <div className="stackbuilder-showcase-inner">
             
              <div className="stackbuilder-bottom-image">
                <img src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder5.png" alt="STACK BUILDER brand identity" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="stackbuilder-bottom-image">
                <img src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder6.png" alt="STACK BUILDER brand identity" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"Brand identity development for StackBuilder, defining visual language and tone to create a consistent, professional, and scalable brand presence across digital and communication platforms.".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">UX Lead</div>
          <motion.span className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"As UX Lead, shaped user journeys and interaction logic to align business goals with user needs. The role focused on decision-making clarity, intuitive flows, and translating strategy into usable, experience-driven digital outcomes.".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame stackbuilder-showcase">
            <div className="stackbuilder-showcase-inner">
               <div className="stackbuilder-top-image">
                <video src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder7.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="stackbuilder-top-image">
                <img src="https://media.meet-works.com/public/projects/stackbuilder/stackbuilder8.png" alt="StackBuilder UX Lead overview" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <motion.span className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"UX leadership for StackBuilder, defining user flows, interaction logic, and experience principles to ensure clarity, usability, and alignment between business intent and user behavior.".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <SpendoNavButtons previousLink="/work/wastetoenergy" nextLink="/work/eusotrip" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
