"use client";
import SectionShell from "../../../components/SectionShell";
import VisitSiteButton from "../../../components/VisitSiteButton";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactUs from "../../../components/ContactUs";
import "./gcapital.css";
import Carousel from "../../../components/Carousel";
import { useEffect } from "react";

export default function GcapitalPage() {
  useEffect(() => {
    document.title = "Meet Panchal | G Capital";
  }, []);
  return (
    <SectionShell title="G-CAPITAL" subtitle="G-CAPITAL" isProjectPage={true}>
      <main className="main gcapital-main">
        <div className="divider"></div>
        <section className="pad">
            <div className="media-frame landscape spendo-hero-frame theme-bg" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <VisitSiteButton link="https://www.gcapitalg.com" />
            <video
              src="https://media.meet-works.com/public/projects/gcapital/gcapitalhero.mp4"
              className="gcapital-hero-media"
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
            {"Investment Platform |\nCypto - Commodities - Stocks".split("").map((char, i) => (
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
            {"Product Identity\nBusiness Analysis\nProduct Prototype\nDashboard Design".split("").map((char, i) => (
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
            {"G Capital is a multi-asset investment platform for trading cryptocurrencies, commodities, and stocks.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">G-CAPITAL</div>
          <div className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            SCOPE
          </div>
          <div className="font-montserrat" style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            ABOUT
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text">
            
G Capital is an investment platform enabling access to cryptocurrencies, commodities, and stocks. The project focused on product identity, business analysis, product prototyping, and dashboard design, supporting clear positioning and an intuitive, data-driven user experience.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024- Ongoing</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">United States</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">G Capital Global</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
               <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Lovish Gangwar, Meet Panchal, Sudama Yadav, Kunal Birade</div>
              
            </div>
          </div>
        </section>

       

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product identity</div>
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
            {"Defined a distinctive product identity for G Capital Global and Digital by establishing visual language, tone, and design principles aligned with fintech credibility. The identity balanced trust, global ambition, and clarity across digital touchpoints to support long-term scalability.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <img src="https://media.meet-works.com/public/projects/gcapital/gcapital1.png" alt="G-Capital dashboard" style={{ width: "100%", height: "auto" }} />
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
            {"Created G Capital’s visual and brand identity, aligning design principles with fintech trust, global positioning, and clarity to ensure consistency across the platform.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">business analysis</div>
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
            {"Conducted in-depth business analysis covering market positioning, user segments, revenue logic, and competitive landscape. Insights informed strategic decisions, feature prioritization, and alignment between business goals and the product’s functional direction.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <div className="pawsome-flow">
                  <img
                    src="https://media.meet-works.com/public/projects/gcapital/gl1.svg"
                    alt="G-Capital flow (light)"
                    className="light-img"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <img
                    src="https://media.meet-works.com/public/projects/gcapital/gd1.svg"
                    alt="G-Capital flow (dark)"
                    className="dark-img"
                    style={{ width: "100%", height: "auto" }}
                  />
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
            {"Analyzed market context, user needs, and business objectives to guide strategic decisions and ensure the product roadmap aligned with G Capital’s financial vision. The analysis is conducted for MVP 1 which is G capital Global a commodities based investment platform".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product Prototype</div>
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
            {"Led product enhancement initiatives across app and web platforms, improving usability, information hierarchy, and workflow efficiency to support faster adoption, reduced friction, and consistent performance across diverse construction project scales.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        
        

        <div className="divider"></div>
        
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <div className="gcapital-carousel-bg" style={{ background: 'linear-gradient(135deg, #000103 0%, #000000 100%)', padding: '32px', borderRadius: '24px' }}>
                  <Carousel>
                    {[1,2,3,4,5,6].map(i => (
                      <img
                        key={i}
                        src={`https://media.meet-works.com/public/projects/gcapital/dd${i}.png`}
                        alt={`G-Capital Slide ${i}`}
                        className="gcapital-svg"
                        style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }}
                      />
                    ))}
                  </Carousel>
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
            {"Enhanced app and web experiences by refining workflows, usability, and information structure, supporting faster adoption and improved operational efficiency.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Dashboard Design</div>
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
            {"Designed the dashboard for G Capital Global as MVP 1, focusing on real-time asset visibility, portfolio insights, and usability. The project remains ongoing, with the dashboard evolving alongside product expansion and future feature rollouts.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        

        <div className="divider"></div>
         <div className="divider"></div>
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <img src="https://media.meet-works.com/public/projects/gcapital/gcapital1.png" alt="G-Capital dashboard" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>
        <div className="divider"></div>
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
            {"Designed MVP 1 dashboard for G Capital Global, enabling clear portfolio and asset insights. The project is ongoing, with continuous iterations planned as the platform scales.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

         


        

        <div className="divider"></div>

         {/* Navigation Buttons */}
          <SpendoNavButtons previousLink="/work/eusotrip" nextLink="/work/spendo" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
