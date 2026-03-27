"use client";
import SectionShell from "../../../components/SectionShell";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import ContactUs from "../../../components/ContactUs";
import "./wastetoenergy.css";
import { motion } from "framer-motion";

export default function WasteToEnergyPage() {
  return (
    <SectionShell title="Waste to Energy" subtitle="Waste to Energy" isProjectPage={true}>
      <main className="main giant-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape spendo-hero-frame theme-bg" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <VisitSiteButton link="https://www.archdaily.com/1012167/waste-to-energy-campus-ini-design-studio?ad_source=search&ad_medium=projects_tab" />
            <video
              src="https://media.meet-works.com/public/projects/waste-to-energy/wtehero.mp4"
              className="wastetoenergy-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: "auto", height: "500px", objectFit: "contain" }}
              aria-label="Waste to Energy hero video"
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
            {"Clean India Mission | Energy Transition | Project Management".split("").map((char, i) => (
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
            {"Project Management Consulting\nDesign concept and master planning\nDesign system execution".split("").map((char, i) => (
              char === "\n"
                ? <br key={i} />
                : <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <motion.span
            className="muted-text"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-hidden={false}
          >
            {"WTE projects supporting sustainable urban infrastructure development through technology-driven circular economy solutions.".split("").map((char, i) => (
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
            {"WASTE TO ENERGY".split("").map((char, i) => (<motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>))}
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
            {"Project management consulting to support planning and implementation within a sustainability-focused initiative. The scope covered project management consulting, design concept and master planning, and design system execution, contributing to structured coordination, strategic planning, and cohesive design delivery across project phases.rence, and long-term project delivery.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2019-22</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">Gujarat, India</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Status:
              </div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">Abellon Clean Energy</div>
               <div className="label">Company:</div>
              <div className="value">INI Design Studio</div>
            </div>
            <div>
              <div className="label">Project team:</div>
              <div className="value">
                {"Jigar Thakkar, Meet Panchal, Ani Agarkar, Bhargav Bhavsar, Rakhi Rupani ".split("").map((char, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Project Management Consulting</div>
          <motion.span className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"Delivered strategic guidance for the development of five waste-to-energy plants, ensuring parallel execution, stakeholder alignment, risk mitigation, and seamless integration of operations and design to maximize efficiency and long-term sustainability.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
              {/* ...existing code... */}
            </div>
            <div className="wastetoenergy-top-image">
              <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte1.png" alt="Waste to Energy 1" style={{ marginBottom: '10px' }} />
            </div>
            <div style={{ flex: 1, height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 24px' }}>
              <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte88.svg" alt="Center Diagram" className="wte22-theme-svg" style={{ width: '70%', height: '70%', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
            </div>
            <div className="wastetoenergy-top-image">
              <div style={{ display: 'flex', flexDirection: 'row', gap: 0, width: '100%', height: '340px', alignItems: 'center' }}>
                <div style={{ width: '240px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte33.png" alt="Left" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '32px', display: 'block' }} />
                </div>
                <div style={{ flex: 1, height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 24px' }}>
                  <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte22.svg" alt="Center Diagram" className="wte22-theme-svg" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ width: '240px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte44.png" alt="Right" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '32px', display: 'block' }} />
                </div>
              </div>
              <div className="wastetoenergy-top-image">
                <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte55.png" alt="Waste to Energy 1" style={{ marginTop: '20px', borderRadius: '20px' }} />
              </div>
              <div className="wastetoenergy-top-image">
                <img src="https://media.meet-works.com/public/projects/waste-to-energy/a.svg" alt="Waste to Energy 1" className="wte66-theme-svg theme-svg-color" style={{ marginTop: '20px', borderRadius: '20px' }} />
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
            {"Provided strategic oversight for five WTE plants, coordinating stakeholders, managing parallel execution, and aligning design and operations for efficient, sustainable project outcomes.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Design concept and master planning</div>
          <motion.span className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"Developed integrated design concepts and master planning frameworks for five WTE plants, combining site analysis, scalable systems, and operational workflows to enhance efficiency, environmental performance, and coherent design identity.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
              {/* ...existing code... */}
              <div className="wastetoenergy-bottom-image">
                <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte4.gif" alt="Waste to Energy design detail" />
              </div>
              <div className="wastetoenergy-bottom-image">
                <div style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                  <img src="https://media.meet-works.com/public/projects/waste-to-energy/b.svg" alt="Waste to Energy design detail" className="wte5-theme-svg theme-svg-color" />
                </div>
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
            {"Created master planning frameworks for five WTE plants, integrating site analysis, operational workflows, and sustainability principles while allowing flexibility for future expansion.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">DESIGN system execution</div>
          <motion.span className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px", display: "block" }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.012 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} aria-hidden={false}
          >
            {"Oversaw the translation of master plans into operational WTE plants, coordinating multidisciplinary teams, maintaining design integrity, and implementing standards to ensure quality, efficiency, and sustainable operations across all sites.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
              {/* ...existing code... */}
              <div className="wastetoenergy-bottom-image">
                <img src="https://media.meet-works.com/public/projects/waste-to-energy/wte6.png" alt="Waste to Energy design detail" />
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
            {"Executed master plans for five WTE plants, coordinating teams, implementing standardized protocols, and ensuring operational efficiency, design consistency, and sustainability compliance.".split("").map((char, i) => (
              <motion.span key={i} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0 } } }}>{char}</motion.span>
            ))}
          </motion.span>
        </section>
        <div className="divider"></div>
        <SpendoNavButtons previousLink="/work/aasaan" nextLink="/work/stackbuilder" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
