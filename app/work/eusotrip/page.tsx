import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./eusotrip.css";

export const metadata = {
  title: "EUSOTRIP",
  description: "Visual identity, investor pitch, UI flow and prototype design for Eusotrip, a B2B HazMat logistics digital platform.",
  openGraph: {
    title: "EUSOTRIP",
    description: "Visual identity, investor pitch, UI flow and prototype design for Eusotrip, a B2B HazMat logistics digital platform.",
    url: "https://meetpanchal.com/work/eusotrip",
  },
};

export default function EusotripPage() {
  return (
    <SectionShell title="EUSOTRIP" subtitle="EUSOTRIP" isProjectPage={true}>
      <main className="main eusotrip-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape eusotrip-hero-frame">
          <img
              src="/projects/eusotrip/tile.jpg"
              className="eusotrip-hero-media"
              alt="EUSOTRIP hero"
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
            Visual Identity
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Visual Identity
            <br />
            Investor Pitch
            <br />
            Prototype Design
          </div>
          <div className="muted-text">
            HazMat Logistics | Digital Platform | B2B Industrial Logistics Solution
          </div>
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
          <p className="muted-text">
            Visual identity, investor pitch, UI flow and prototype design for Eusotrip, a B2B HazMat logistics digital platform.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Europe</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Scope:</div>
              <div className="value">Visual Identity</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">Prototype Design</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Visual Identity, Investor Pitch, UI Flow, Prototype Design</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Visual Identity & Investor Pitch</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed the visual identity for Eusotrip, a B2B industrial logistics platform specialising in hazardous materials transport. The work included creating pitch materials for investor engagement, translating the platform's technical offering into a compelling investment narrative with clear visual communication.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
              <div className="eusotrip-top-image">
                <img src="/projects/eusotrip/tile.jpg" alt="EUSOTRIP overview" />
              </div>
              <div className="eusotrip-bottom-image">
                <video src="/projects/eusotrip/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Developed the visual identity for Eusotrip, a B2B industrial logistics platform specialising in hazardous materials transport. The work included creating pitch materials for investor engagement, translating the platform's technical offering into a compelling investment narrative with clear visual communication.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">UI Flow & Prototype</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed the UI flow and interactive prototype for the Eusotrip digital platform, mapping the end-to-end logistics management experience for B2B industrial users. The prototype demonstrated core workflows including shipment tracking, compliance documentation, and route optimisation for HazMat freight.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
              <div className="eusotrip-top-image">
                <video src="/projects/eusotrip/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Designed the UI flow and interactive prototype for the Eusotrip digital platform, mapping the end-to-end logistics management experience for B2B industrial users. The prototype demonstrated core workflows including shipment tracking, compliance documentation, and route optimisation for HazMat freight.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
