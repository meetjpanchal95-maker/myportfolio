import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./brand-ex.css";

export const metadata = {
  title: "Branded Environments",
  description: "Participated in a 2-week workshop for branded environments, exploring how spatial design and branding create immersive experiences through hands-on exercises and collaborative projects.",
  openGraph: {
    title: "Branded Environments",
    description: "Participated in a 2-week workshop for branded environments, exploring how spatial design and branding create immersive experiences through hands-on exercises and collaborative projects.",
    url: "https://meetpanchal.com/playground/brand-ex",
  },
};

export default function BrandExPage() {
  return (
    <SectionShell title="Branded Environments" subtitle="Branded Environments" isProjectPage={true}>
      <main className="main brand-ex-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape brand-ex-hero-frame" style={{ height: "500px", background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/brand-ex/brandhero.png"
              className="brand-ex-hero-img"
              alt="Branded Environments hero"
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
            Explorations in Branded Environments | Collaborative Workshops
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Ahmedabad Heritage Walk
            <br />
            Coffee Branding
            
          </div>
          <div className="muted-text">
            Workshop for branded environments, exploring how spatial design and branding create immersive experiences. 
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">Visual Branding</div>
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
            The work focused on developing a scalable business model, crafting an investor pitch, and designing product visuals to communicate value and engagement. By integrating strategy, storytelling, and visual design, the project positions MitMut Studio as an innovative platform for creative ownership, experiential learning, and measurable skill development across diverse audiences.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2018</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">University:</div>
              <div className="value">CEPT University</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
             
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Collaborative workshop with 15 people from different disciplines</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Ahmedabad Heritage Walk</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
Designed an interactive heritage walk in Ahmedabad, integrating storytelling, spatial cues, and branding elements. The project aimed to create an immersive experience that engaged participants with the city’s architectural and cultural history.          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame brand-ex-showcase">
            <div className="brand-ex-showcase-inner">
              <div className="brand-ex-top-image">
                <img src="https://media.meet-works.com/public/playground/brand-ex/brand1.png" alt="Branded Environments overview" />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Typography, color palette, and imagery were curated to highlight the property’s historical significance while appealing to high-end clientele, creating a strong and memorable brand presence.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Coffee branding</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Prepared a comprehensive comparative analysis of branding strategies of CCD and Starbucks. Developed in-depth presentations to derive insights that help brand designers respond effectively to market needs.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame brand-ex-showcase">
            <div className="brand-ex-showcase-inner">
              <div className="brand-ex-top-image">
                <video src="https://media.meet-works.com/public/playground/brand-ex/brand2.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Insights from a comparative study highlight the importance of adopting a minimalistic approach while leveraging deep customer understanding to create meaningful and lasting brand experiences.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
