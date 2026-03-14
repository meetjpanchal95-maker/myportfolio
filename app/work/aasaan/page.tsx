
"use client";
import SectionShell from "../../../components/SectionShell";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import { motion } from "framer-motion";
import ContactUs from "../../../components/ContactUs";
import "./aasaan.css";
import LogoAnimation from "./LogoAnimation";
import Carousel from "../../../components/Carousel";

export default function AasaanPage() {
  return (
    <SectionShell title="AASAAN" subtitle="AASAAN" isProjectPage={true}>
      <main className="main aasaan-main">
        <div className="divider"></div>
        <section className="pad">
         <div className="media-frame landscape spendo-hero-frame" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <VisitSiteButton link="https://www.aasaan.co" />
            <video
              src="https://media.meet-works.com/public/projects/aasaan/ahero.mp4"
              className="aasaan-hero-media"
              autoPlay muted loop playsInline preload="auto"
              style={{ width: "auto", height: "500px", objectFit: "contain" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          {/* Animated text block */}
          <motion.span
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px", display: "block" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Construction Management Platform |\nDigital Transformation Consulting | Product Research".split("").map((char, i) => (
              char === "\n"
                ? <br key={i} />
                : <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          {/* Animated text block */}
          <motion.span
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px", display: "block" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Brand Strategy\nProduct Feature Design\nProduct Enhancement".split("").map((char, i) => (
              char === "\n"
                ? <br key={i} />
                : <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          {/* Animated muted text */}
          <motion.span
            className="muted-text"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Aasaan is a pocket construction manager designed to prioritize digital transformation in the Indian AEC landscape for SMEs.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">AASAAN</div>
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
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Focused on defining a clear product direction, the scope covered brand strategy, feature concepts, and product enhancements for Aasaan, a pocket construction management app. The work aligned on-site workflows and decision-making tools into a cohesive, practical product vision that supports efficient construction management.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2017- Ongoing</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Pan India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">Aasaan Tech Pvt. Ltd</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Lovish Gangwar, Meet Panchal, Sudama Yadav, Kunal Birade, Hemil Parekh</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Brand Strategy</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Developed a clear brand strategy for Aasaan Tech, positioning Aasaan as an accessible, reliable, and efficient digital tool for construction professionals. Refined brand visuals using design thinking to better connect with customers.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
               <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/al3.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/ad3.svg"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="aasaan-bottom-image">
                <LogoAnimation />
              </div>
              <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/al2.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/ad2.svg"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Established a brand position focused on accessibility, reliability, and operational clarity, with mobile first design, aligning the product with the daily needs of construction teams and project stakeholders.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product Feature Design</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Conceptualized core product features addressing real-time site management, task tracking, documentation, and communication, ensuring seamless coordination between field teams and management while reducing complexity and improving on-site productivity.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
              <div className="aasaan-top-image">
                {/* Dark mode carousel */}
                <div className="dark-img">
                  <Carousel>
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd1.svg" alt="AASAAN Slide 1" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd2.svg" alt="AASAAN Slide 3" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd3.svg" alt="AASAAN Slide 5" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd4.svg" alt="AASAAN Slide 6" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd5.svg" alt="AASAAN Slide 7" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd6.svg" alt="AASAAN Slide 8" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd7.svg" alt="AASAAN Slide 9" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd8.svg" alt="AASAAN Slide 10" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd9.svg" alt="AASAAN Slide 11" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/dd10.svg" alt="AASAAN Slide 12" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                  </Carousel>
                </div>
                {/* Light mode carousel */}
                <div className="light-img">
                  <Carousel>
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll1.svg" alt="AASAAN Slide 1" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll2.svg" alt="AASAAN Slide 3" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll3.svg" alt="AASAAN Slide 5" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll4.svg" alt="AASAAN Slide 6" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll5.svg" alt="AASAAN Slide 7" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll6.svg" alt="AASAAN Slide 8" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll7.svg" alt="AASAAN Slide 9" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll8.svg" alt="AASAAN Slide 10" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll9.svg" alt="AASAAN Slide 11" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="https://media.meet-works.com/public/projects/aasaan/ll10.svg" alt="AASAAN Slide 12" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                
                  </Carousel>
                </div>
              </div>
              <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/al4.svg"
                  alt="AASAAN flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/ad4.svg"
                  alt="AASAAN flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Defined feature concepts enabling real-time coordination, task tracking, and centralized documentation, designed to streamline communication between site teams and management while improving visibility, accountability, and decision-making across construction workflows.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product enhancement</div>
          <motion.span
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Led product enhancement initiatives across app and web platforms, improving usability, information hierarchy, and workflow efficiency to support faster adoption, reduced friction, and consistent performance across diverse construction project scales.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
              <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/al1.svg"
                  alt="AASAAN flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/aasaan/ad1.svg"
                  alt="AASAAN flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Enhanced app and web experiences by refining workflows, usability, and information structure, supporting faster adoption and improved operational efficiency.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>
        <div className="divider"></div>

      <SpendoNavButtons previousLink="/work/mitmut-studio" nextLink="/work/wastetoenergy" />
      </main>
      <ContactUs />
    </SectionShell>
    
  );
}