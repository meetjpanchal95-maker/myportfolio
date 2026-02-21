import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./digital-transformation.css";

export const metadata = {
  title: "DIGITAL TRANSFORMATION",
  description: "A research-driven proposal and methodology for digital transformation, developed as a master thesis in management research.",
  openGraph: {
    title: "DIGITAL TRANSFORMATION",
    description: "A research-driven proposal and methodology for digital transformation, developed as a master thesis in management research.",
    url: "https://meetpanchal.com/work/digital-transformation",
  },
};

export default function DigitalTransformationPage() {
  return (
    <SectionShell title="DIGITAL TRANSFORMATION" subtitle="DIGITAL TRANSFORMATION" isProjectPage={true}>
      <main className="main digital-transformation-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape digital-transformation-hero-frame">
          <img
              src="/projects/digital-transformation/tile.png"
              className="digital-transformation-hero-media"
              alt="DIGITAL TRANSFORMATION hero"
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
            Proposal
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Proposal
            <br />
            Methodology
            <br />
            Business Development
          </div>
          <div className="muted-text">
            Master Thesis | Management Research
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">DIGITAL TRANSFORMATION</div>
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
            A research-driven proposal and methodology for digital transformation, developed as a master thesis in management research.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Berlin, Germany</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Scope:</div>
              <div className="value">Research Methodology</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">Business Strategy</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Proposal, Methodology, Business Development Strategy, Management Research</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Research Methodology</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed a rigorous research methodology for the master thesis on digital transformation, combining qualitative and quantitative approaches to analyse transformation processes across organisations. The methodology drew on management consulting frameworks and academic literature to propose a structured model for digital transformation implementation.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame digital-transformation-showcase">
            <div className="digital-transformation-showcase-inner">
              <div className="digital-transformation-top-image">
                <img src="/projects/digital-transformation/tile.png" alt="DIGITAL TRANSFORMATION overview" />
              </div>
              <div className="digital-transformation-bottom-image">
                <video src="/projects/digital-transformation/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Developed a rigorous research methodology for the master thesis on digital transformation, combining qualitative and quantitative approaches to analyse transformation processes across organisations. The methodology drew on management consulting frameworks and academic literature to propose a structured model for digital transformation implementation.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Business Development Strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Applied the research findings to develop a practical business development strategy for digital transformation consulting. The strategy synthesised thesis insights into an actionable framework for organisations navigating digital transition, addressing change management, technology adoption, and capability building across organisational functions.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame digital-transformation-showcase">
            <div className="digital-transformation-showcase-inner">
              <div className="digital-transformation-top-image">
                <video src="/projects/digital-transformation/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Applied the research findings to develop a practical business development strategy for digital transformation consulting. The strategy synthesised thesis insights into an actionable framework for organisations navigating digital transition, addressing change management, technology adoption, and capability building across organisational functions.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
