import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./tifr.css";

export const metadata = {
  title: "TIFR Competition",
  description: "At INI Design Studio, with a skilled and motivated team, developed a winning proposal, combining research, innovative design, and collaboration to outperform top Indian firms.",
  openGraph: {
    title: "TIFR Competition",
    description: "At INI Design Studio, with a skilled and motivated team, developed a winning proposal, combining research, innovative design, and collaboration to outperform top Indian firms.",
    url: "https://meetpanchal.com/playground/tifr",
  },
};

export default function TifrPage() {
  return (
    <SectionShell title="TIFR Competition" subtitle="TIFR Competition" isProjectPage={true}>
      <main className="main tifr-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape tifr-hero-frame" style={{ height: "500px", background: "var(--MM8)" }}>
            <video
              src="https://media.meet-works.com/public/playground/tifr/tifrhero.mp4"
              className="tifr-hero-img"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Tata Institute of Fundamental Research | Competition project | Visual Character and development
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Project Proposal
            <br />
            Visualisation
            
          </div>
          <div className="muted-text">
            The work emphasized thoughtful spatial planning, user-centric design, and aesthetic coherence, delivering environment.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">TIFR Campus</div>
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
            
Selected as the design studio for TIFR (Tata Institute of Fundamental Research), the project focused on creating innovative and functional design solutions aligned with the institute’s research and educational vision. visual of the project support both academic pursuits and collaborative engagement within a cutting-edge scientific setting.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2022</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Won (Ongoing)</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">INI Design Studio</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Shalvi Patel, Mukul Chaturvedi, Meet Panchal, Rakhi Rupani, Saumil Mevada</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Project Proposal</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The proposal combined research insights, design innovation, and strategic planning to deliver a €5 million winning submission. It showcased the team’s ability to outperform leading Indian firms through integrated, evidence-based design solutions.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame tifr-showcase">
            <div className="tifr-showcase-inner">
              <div className="tifr-top-image">
                <video src="https://media.meet-works.com/public/playground/tifr/tifr1.mp4" autoPlay loop muted playsInline />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Clear articulation of objectives, methodology, and expected outcomes ensured the proposal communicated credibility, innovation, and feasibility to funding authorities and project evaluators.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Visualisation</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The visualisation strategy translated complex research and design concepts into clear, compelling graphics. It emphasized narrative clarity, spatial understanding, and innovative representation to communicate the proposal effectively to stakeholders and evaluators.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame tifr-showcase">
            <div className="tifr-showcase-inner">
              <div className="tifr-top-image">
                <img src="https://media.meet-works.com/public/playground/tifr/tifr2.png" alt="TIFR Competition detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Alternative diagrams, infographics, and conceptual visuals were used to highlight innovation, collaboration, and design intent, ensuring the project stood out in a competitive environment.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
