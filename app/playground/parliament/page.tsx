import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./parliament.css";

export const metadata = {
  title: "Parliament of India",
  description: "Used alternative visual methods to convey narratives in a competition proposal for the Parliament of India, developed rapidly as a last-minute strategy for an unconventional solution.",
  openGraph: {
    title: "Parliament of India",
    description: "Used alternative visual methods to convey narratives in a competition proposal for the Parliament of India, developed rapidly as a last-minute strategy for an unconventional solution.",
    url: "https://meetpanchal.com/playground/parliament",
  },
};

export default function ParliamentPage() {
  return (
    <SectionShell title="Parliament of India" subtitle="Parliament of India" isProjectPage={true}>
      <main className="main parliament-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape parliament-hero-frame" style={{ background: "var(--MM8)" }}>
            <img
              src="/playground/parliament/parliamenthero.png"
              className="parliament-hero-img"
              alt="Parliament of India hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Competition Project | Parliament of India | Unconventional methods to create Visuals
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Visualisation strategy
           
          </div>
          <div className="muted-text">
            This competition entry experimented with rapid, non-conventional visual methods to articulate civic and spatial narratives under compressed timelines
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">PARLIAMENT OF INDIA INTERIORS</div>
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
            
The strategy emphasized abstraction, narrative hierarchy, and symbolic clarity to communicate intent efficiently to evaluators and stakeholders. Visual experiments translated programmatic complexity into compelling graphics that supported a persuasive proposal. The output was a concise visual toolkit and diagrammatic system that elevated concept delivery and successfully.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2020</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Submitted (Top 6)</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">INI Design Studio</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Work team:</div>
              <div className="value">Vinisha Thakkar, Meet Panchal</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Visualisation strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The visualisation strategy was developed as a last-minute yet deliberate approach to overcome limited time and resources. It relied on abstraction, hierarchy, and storytelling to communicate the core idea without excessive detailing.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame parliament-showcase">
            <div className="parliament-showcase-inner">
              <div className="parliament-top-image">
                <img src="/playground/parliament/parliament1.png" alt="Parliament of India overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            By prioritizing message over realism, the strategy transformed visuals into tools for persuasion, enabling faster decision-making and a distinctive competition identity.
          </p>
        </section>

        
    

      

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
