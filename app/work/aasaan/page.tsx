import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./aasaan.css";
import LogoAnimation from "./LogoAnimation";

export const metadata = {
  title: "AASAAN",
  description: "Brand strategy and product feature design for Aasaan, a construction management platform undergoing digital transformation consulting.",
  openGraph: {
    title: "AASAAN",
    description: "Brand strategy and product feature design for Aasaan, a construction management platform undergoing digital transformation consulting.",
    url: "https://meetpanchal.com/work/aasaan",
  },
};

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
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Construction Management Platform | 
Digital Transformation Consulting | Product Research
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Brand Strategy
            <br />
            Product Feature Design
            <br />
            Product Enhancement
          </div>
          <div className="muted-text">
            Aasaan is a pocket construction manager designed to prioritize digital transformation in the Indian AEC landscape for SMEs.
          </div>
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
          <p className="muted-text">
            
Focused on defining a clear product direction, the scope covered brand strategy, feature concepts, and product enhancements for Aasaan, a pocket construction management app. The work aligned on-site workflows and decision-making tools into a cohesive, practical product vision that supports efficient construction management.
          </p>
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
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed a comprehensive brand strategy for Aasaan, aligning the platform's visual identity and communication with its positioning as a modern construction management solution. The strategy addressed product differentiation, user perception, and stakeholder communication across digital channels.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
              <div className="aasaan-top-image">
                <video src="/projects/aasaan/tile.mp4" autoPlay muted loop playsInline preload="auto" />
              </div>
              <div className="aasaan-bottom-image">
                <LogoAnimation />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Developed a comprehensive brand strategy for Aasaan, aligning the platform's visual identity and communication with its positioning as a modern construction management solution. The strategy addressed product differentiation, user perception, and stakeholder communication across digital channels.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product Feature Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed and enhanced key product features to improve user workflows and platform utility for construction professionals. The work involved collaborating with technical and operations teams to translate real-world construction management needs into intuitive digital product experiences.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame aasaan-showcase">
            <div className="aasaan-showcase-inner">
              <div className="aasaan-top-image">
                <video src="/projects/aasaan/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Designed and enhanced key product features to improve user workflows and platform utility for construction professionals. The work involved collaborating with technical and operations teams to translate real-world construction management needs into intuitive digital product experiences.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
