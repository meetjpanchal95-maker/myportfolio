import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./aasaan.css";

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
          <div className="media-frame landscape aasaan-hero-frame">
          <video
              src="/projects/aasaan/tile.mp4"
              className="aasaan-hero-media"
              autoPlay muted loop playsInline preload="auto"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Brand Strategy
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Brand Strategy
            <br />
            Product Feature Design
            <br />
            Product Enhancement
          </div>
          <div className="muted-text">
            Construction Management Platform | Digital Transformation Consulting
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
            Brand strategy and product feature design for Aasaan, a construction management platform undergoing digital transformation consulting.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Scope:</div>
              <div className="value">Brand Strategy</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">Product Design</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Brand Strategy, Product Feature Design, Product Enhancement</div>
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
                <video src="/projects/aasaan/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
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
