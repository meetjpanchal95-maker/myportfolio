"use client";

import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./eusotrip.css";
import Carousel from '../../../components/Carousel';
import { motion } from "framer-motion";

export default function EusotripPage() {
  return (
    <SectionShell title="EUSOTRIP" subtitle="EUSOTRIP" isProjectPage={true}>
      <main className="main eusotrip-main">
        <div className="divider"></div>
         <section className="pad">
         <div className="media-frame landscape spendo-hero-frame" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Visit Site button moved to Client Component */}
            <VisitSiteButton link="https://eusotrip.com/register" />
            <video
              src="https://media.meet-works.com/public/projects/eusotrip/eusohero.mp4"
              className="eusotrip-hero-media"
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"HazMat Logistics | Digital Platform | B2B industrial logistics solution ".split("").map((char, i) => (
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Product Visuals\nInvestor Pitch\nUI Flow\nPrototype Design".split("").map((char, i) => (
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Eusotrip is a logistics solution for hazardous materials in the B2B industries for USA. This platforms connects B2B logistics partners for their business operations ".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">EUSOTRIP</div>
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"Focused on creating a unified and impactful project experience, developed a cohesive framework integrating visual identity, investor pitch, user flows, and prototypes. Each component was designed to enhance clarity, engagement, and user experience while reflecting the project’s strategic vision.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2022-24</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">USA</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">Eusorone Technologies</div>
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
          <div className="sub-title">Product Visuals</div>
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
            {"The visual identity blends modernity with efficiency, reflecting cutting-edge logistics solutions. Clean lines, bold typography, and a consistent color palette convey trust, innovation, and reliability across digital and print platforms.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
              <div className="eusotrip-top-image" style={{ height: '650px', overflow: 'auto', width: '100%', border: '3px solid var(--svg-border-color)', boxSizing: 'border-box', background: '#000' }}>
                <img className="light-img" src="https://media.meet-works.com/public/projects/eusotrip/1.png" alt="EUSOTRIP overview (light)" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img className="dark-img" src="https://media.meet-works.com/public/projects/eusotrip/1-dark.png" alt="EUSOTRIP overview (dark)" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              
              <div className="eusotrip-bottom-image">
                <img className="light-img eusotrip-svg" src="https://media.meet-works.com/public/projects/eusotrip/euso1.png" alt="EUSOTRIP bottom (light)" />
               
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
            {"Designed product visuals for EuroTrip, a hazmat logistics platform focused on compliance and operational control. Created a real-time dashboard, guided shipment workflow, live tracking interface, and documentation module, emphasizing safety-first UX, regulatory clarity, and efficient cross-border hazardous material transport management.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Investor Pitch</div>
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
            {"The investor pitch emphasizes unique B2B logistics solutions, a scalable business model, and market growth potential. Clear KPIs, revenue projections, and case studies highlight opportunities and strategic investment value.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
              <div className="eusotrip-top-image" style={{ height: '650px', overflow: 'auto', width: '100%', border: '3px solid var(--svg-border-color)', boxSizing: 'border-box', background: '#000' }}>
                <img className="light-img" src="https://media.meet-works.com/public/projects/eusotrip/2.png" alt="EUSOTRIP overview (light)" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <img className="dark-img" src="https://media.meet-works.com/public/projects/eusotrip/2-dark.png" alt="EUSOTRIP overview (dark)" style={{ width: '100%', height: 'auto', display: 'block' }} />
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
            {"The pitch presents scalable logistics solutions, market potential, and ROI, using clear metrics and case studies to demonstrate a compelling and credible investment opportunity.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">UI Flow</div>
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
            {"Designed and integrated two primary user flows within a bidding-based logistics platform where drivers and service providers compete for jobs. Structured the system so that information between both flows is interdependent, ensuring seamless coordination and decision making.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
            <div className="eusotrip-bottom-image">
                <img className="light-img eusotrip-svg" src="https://media.meet-works.com/public/projects/eusotrip/3.svg" alt="EUSOTRIP bottom (light)" />
                
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
            {"The user flow ensures seamless onboarding, shipment tracking, and real-time updates, prioritizing efficiency and accuracy for logistics operations and partner interactions.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Prototype Design</div>
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
            {"Built the prototype to support both user flows within a single, unified application across mobile platforms. Integrated real-time data handling to manage live bid updates, shipment tracking, and driver coordination simultaneously. ".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
            <div className="wastetoenergy-top-image">
              <div style={{ height: '800px', width: '100%', marginTop: '-150px' }}>
                <Carousel>
                  <img src="https://media.meet-works.com/public/projects/eusotrip/d.svg" alt="EUSOTRIP Slide 1" className="eusotrip-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }} />
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
                transition: { staggerChildren: 0.018 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            aria-hidden={false}
          >
            {"A structured database maintained the interdependent information across driver profiles, shipment records, and bid histories, while a live bidding engine and dynamic map tracking ensured seamless communication and decision-making across both flows.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <SpendoNavButtons previousLink="/work/stackbuilder" nextLink="/work/gcapital" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
