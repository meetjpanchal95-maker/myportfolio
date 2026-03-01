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
              src="https://media.meet-works.com/public/projects/digital-transformation/dthero.png"
              className="digital-transformation-hero-media"
              alt="DIGITAL TRANSFORMATION hero"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Master's Thesis | Management Research
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Proposal
            <br />
            Methodology
            <br />
            Business Development Strategies
          </div>
          <div className="muted-text">
            This thesis explores business development strategies for driving widespread digital transformation within the SMES od European AEC industry.
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
            
Focusing on evolving business models, the research combines structured analysis and methodological insights to identify opportunities for growth, efficiency, and innovation. By linking academic research with industry practice, the project provides actionable recommendations that help AEC firms adapt to digital trends, optimize processes, and strengthen competitiveness in a changing market.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2023-24</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Helsinki, Berlin</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">University:</div>
              <div className="value"> HTW Berlin,
Metropolia University of Applied Sciences</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Thesis Guide:</div>
              <div className="value">Markus Kramer, Martin Meyer</div>
            </div>
          </div>
        </section>

     

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Business Development Strategies</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Concluded with actionable business development strategies for AEC firms to embrace digital transformation effectively. Recommendations included adapting business models, integrating emerging technologies, and fostering collaboration to drive growth, competitiveness, and sustainable industry practices.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame digital-transformation-showcase">
            <div className="digital-transformation-showcase-inner">
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/digital-transformation/dt1.png" alt="Digital Transformation" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/digital-transformation/dt2.png" alt="Digital Transformation" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/digital-transformation/dt3.png" alt="Digital Transformation" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/digital-transformation/dt4.png" alt="Digital Transformation" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/digital-transformation/dt5.png" alt="Digital Transformation" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/digital-transformation/dt6.png" alt="Digital Transformation" style={{ width: "100%", height: "auto" }} />
              </div>
              
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
           Final thesis conclusions presenting business development strategies for European AEC firms to implement digital transformation, optimize models, and enhance collaboration, innovation, and competitiveness.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
