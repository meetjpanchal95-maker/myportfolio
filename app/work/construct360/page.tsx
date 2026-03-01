
"use client";
import SectionShell from "@/components/SectionShell";
import { motion } from "framer-motion";
const m: any = motion;
import ContactUs from "../../../components/ContactUs";
import "./construct360.css";


export default function Construct360Page() {
  return (
    <SectionShell title="CONSTRUCT360" subtitle="CONSTRUCT360" isProjectPage={true}>
      <main className="main construct360-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape construct360-hero-frame">
          <img
              src="https://media.meet-works.com/public/projects/construct360/360hero.png"
              className="construct360-hero-media"
              alt="CONSTRUCT360 hero"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
            Business Intelligence | Internal Construction Project Management Software | Data Analytics
          </m.div>
          <m.div
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Dashboard Design
            <br />
            User Experience
            <br />
            Project Collaboration
          </m.div>
          <m.div
            className="muted-text"
            style={{ fontSize: "14px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Construct 360 is a comprehensive in-house construction project management platform designed to streamline workflows and enhance team collaboration.
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
            CONSTRUCT360
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
            The project focused on translating complex project data into intuitive dashboards, creating seamless user experiences, and structuring collaborative processes. By integrating design, UX, and dashboarding, the platform empowers teams to monitor progress, make informed decisions, and improve operational efficiency, supporting digital transformation within construction project management.
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
              >2025</m.div>
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
              >Remote</m.div>
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
              >Completed</m.div>
            </div>
            <div>
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
              <m.div
                className="label"
                style={{ marginTop: "8px" }}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >&nbsp;</m.div>
            
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
              >Kishan Solanki, Meet Panchal, Sudama Yadav, Kunal Birade</m.div>
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
            Project Collaboration
          </m.div>
          <m.p
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Facilitated project collaboration by structuring shared workflows, information exchange, and coordination between internal teams. The approach supported transparency, accountability, and smoother communication across design, planning, and execution stages.
          </m.p>
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
          <m.p
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Dashboard design for an in-house construction management platform, structuring data into clear, role-specific views that support monitoring, decision-making, and operational clarity.
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
            User Experience
          </m.div>
          <m.p
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
           Led the user experience design by mapping workflows specific to construction project management. The work focused on reducing friction, aligning digital tools with on-site and managerial processes, and ensuring usability across roles, timelines, and project phases.
          </m.p>
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
           User experience design for a construction management system, aligning digital workflows with real-world project processes to improve usability, adoption, and operational efficiency.
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
            Project Collaboration
          </m.div>
          <m.p
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Facilitated project collaboration by structuring shared workflows, information exchange, and coordination between internal teams. The approach supported transparency, accountability, and smoother communication across design, planning, and execution stages.
          </m.p>
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
          <m.p
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Collaboration design for an in-house construction platform, enabling structured coordination, shared visibility, and clear information flow across multidisciplinary project teams.
          </m.p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
