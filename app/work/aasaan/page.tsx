"use client";
import SectionShell from "../../../components/SectionShell";
import { motion } from "framer-motion";
const m: any = motion;
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
          <div className="media-frame landscape aasaan-hero-frame" style={{ minHeight: 500, background: '#18191b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <video
              src="/projects/aasaan/ahero.mp4"
              className="aasaan-hero-media"
              autoPlay muted loop playsInline preload="auto"
              style={{ maxHeight: 500, width: 'auto', height: '100%', objectFit: 'contain', background: '#18191b' }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <m.div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Construction Management Platform | <br />
            Digital Transformation Consulting | Product Research
          </m.div>
          <m.div
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Brand Strategy
            <br />
            Product Feature Design
            <br />
            Product Enhancement
          </m.div>
          <m.div
            className="muted-text"
            style={{ fontSize: "14px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Aasaan is a pocket construction manager designed to prioritize digital transformation in the Indian AEC landscape for SMEs.
          </m.div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <m.div
            className="big-title"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            AASAAN
          </m.div>
          <m.div
            className="font-montserrat"
            style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            SCOPE
          </m.div>
          <m.div
            className="font-montserrat"
            style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            ABOUT
          </m.div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <m.p
            className="muted-text"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Focused on defining a clear product direction, the scope covered brand strategy, feature concepts, and product enhancements for Aasaan, a pocket construction management app. The work aligned on-site workflows and decision-making tools into a cohesive, practical product vision that supports efficient construction management.
          </m.p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <m.div
                className="label"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Year:</m.div>
              <m.div
                className="value"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >2017- Ongoing</m.div>
              <m.div
                className="label"
                style={{ marginTop: "8px" }}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Location:</m.div>
              <m.div
                className="value"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Pan India</m.div>
              <m.div
                className="label"
                style={{ marginTop: "8px" }}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Status:</m.div>
              <m.div
                className="value"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Ongoing</m.div>
            </div>
            <div>
              <m.div
                className="label"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Client:</m.div>
              <m.div
                className="value"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Aasaan Tech Pvt. Ltd</m.div>
              <m.div
                className="label"
                style={{ marginTop: "8px" }}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >&nbsp;</m.div>
              <m.div
                className="label"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Company:</m.div>
              <m.div
                className="value"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Stackbuilder</m.div>
            </div>
            <div>
              <m.div
                className="label"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Project Team:</m.div>
              <m.div
                className="value"
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >Lovish Gangwar, Meet Panchal, Sudama Yadav, Kunal Birade, Hemil Parekh</m.div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <m.div
            className="sub-title"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Brand Strategy
          </m.div>
          <m.p
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Developed a clear brand strategy for Aasaan Tech, positioning Aasaan as an accessible, reliable, and efficient digital tool for construction professionals. Refined brand visuals using design thinking to better connect with customers.
          </m.p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
               <div className="pawsome-flow">
                <img
                  src="/projects/aasaan/al3.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="/projects/aasaan/ad3.svg"
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
                  src="/projects/aasaan/al2.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="/projects/aasaan/ad2.svg"
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
          <m.p
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Established a brand position focused on accessibility, reliability, and operational clarity, with mobile first design, aligning the product with the daily needs of construction teams and project stakeholders.
          </m.p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <m.div
            className="sub-title"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Product Feature Design
          </m.div>
          <m.p
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Conceptualized core product features addressing real-time site management, task tracking, documentation, and communication, ensuring seamless coordination between field teams and management while reducing complexity and improving on-site productivity.
          </m.p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
              <div className="aasaan-top-image">
                {/* Dark mode carousel */}
                <div className="dark-img">
                  <Carousel>
                    <img src="/projects/aasaan/dd1.svg" alt="AASAAN Slide 1" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd2.svg" alt="AASAAN Slide 3" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd3.svg" alt="AASAAN Slide 5" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd4.svg" alt="AASAAN Slide 6" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd5.svg" alt="AASAAN Slide 7" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd6.svg" alt="AASAAN Slide 8" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd7.svg" alt="AASAAN Slide 9" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd8.svg" alt="AASAAN Slide 10" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd9.svg" alt="AASAAN Slide 11" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/dd10.svg" alt="AASAAN Slide 12" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                  </Carousel>
                </div>
                {/* Light mode carousel */}
                <div className="light-img">
                  <Carousel>
                    <img src="/projects/aasaan/ll1.svg" alt="AASAAN Slide 1" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll2.svg" alt="AASAAN Slide 3" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll3.svg" alt="AASAAN Slide 5" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll4.svg" alt="AASAAN Slide 6" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll5.svg" alt="AASAAN Slide 7" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll6.svg" alt="AASAAN Slide 8" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll7.svg" alt="AASAAN Slide 9" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll8.svg" alt="AASAAN Slide 10" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll9.svg" alt="AASAAN Slide 11" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                    <img src="/projects/aasaan/ll10.svg" alt="AASAAN Slide 12" className="aasaan-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                
                  </Carousel>
                </div>
              </div>
              <div className="pawsome-flow">
                <img
                  src="/projects/aasaan/al4.svg"
                  alt="AASAAN flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="/projects/aasaan/ad4.svg"
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
          <m.p
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Defined feature concepts enabling real-time coordination, task tracking, and centralized documentation, designed to streamline communication between site teams and management while improving visibility, accountability, and decision-making across construction workflows.
          </m.p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <m.div
            className="sub-title"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Product enhancement
          </m.div>
          <m.p
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Led product enhancement initiatives across app and web platforms, improving usability, information hierarchy, and workflow efficiency to support faster adoption, reduced friction, and consistent performance across diverse construction project scales.
          </m.p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
              <div className="pawsome-flow">
                <img
                  src="/projects/aasaan/al1.svg"
                  alt="AASAAN flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="/projects/aasaan/ad1.svg"
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
          <m.p
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Enhanced app and web experiences by refining workflows, usability, and information structure, supporting faster adoption and improved operational efficiency.
          </m.p>
        </section>
        <div className="divider"></div>

      </main>
      <ContactUs />
    </SectionShell>
    
  );
}