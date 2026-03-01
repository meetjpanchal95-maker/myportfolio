import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./mitmut-studio.css";

export const metadata = {
  title: "MITMUT STUDIO",
  description: "Business model design, investor pitch and product visuals for MitMut Studio's Eduverse gamified learning experience platform.",
  openGraph: {
    title: "MITMUT STUDIO",
    description: "Business model design, investor pitch and product visuals for MitMut Studio's Eduverse gamified learning experience platform.",
    url: "https://meetpanchal.com/work/mitmut-studio",
  },
};

export default function MitmutStudioPage() {
  return (
    <SectionShell title="MITMUT STUDIO" subtitle="MITMUT STUDIO" isProjectPage={true}>
      <main className="main mitmut-studio-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape mitmut-studio-hero-frame">
          <video
              src="https://media.meet-works.com/public/projects/mitmut-studio/tile.mp4"
              className="mitmut-studio-hero-media"
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
            Business Model
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Business Model
            <br />
            Investor Pitch
            <br />
            Product Visuals
          </div>
          <div className="muted-text">
            Funding for Product Development | Eduverse as Gamified Learning Experience
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">MITMUT STUDIO</div>
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
            Business model design, investor pitch and product visuals for MitMut Studio's Eduverse gamified learning experience platform.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Germany</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Scope:</div>
              <div className="value">Business Model</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">Investor Pitch</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Business Model, Investor Pitch, Product Visuals</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Business Model & Investor Pitch</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed the business model and investor pitch for MitMut Studio's funding campaign for Eduverse, a gamified learning experience platform. The pitch articulated the product's market opportunity, revenue model, and competitive positioning for early-stage investors, combining strategic clarity with compelling visual storytelling.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame mitmut-studio-showcase">
            <div className="mitmut-studio-showcase-inner">
              <div className="mitmut-studio-top-image">
                <video src="https://media.meet-works.com/public/projects/mitmut-studio/tile.mp4" autoPlay muted loop playsInline preload="auto" />
              </div>
              <div className="mitmut-studio-bottom-image">
                <video src="https://media.meet-works.com/public/projects/mitmut-studio/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Developed the business model and investor pitch for MitMut Studio's funding campaign for Eduverse, a gamified learning experience platform. The pitch articulated the product's market opportunity, revenue model, and competitive positioning for early-stage investors, combining strategic clarity with compelling visual storytelling.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product Visuals</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Created the product visual assets for Eduverse, communicating the gamified learning experience through interface mockups, concept illustrations, and pitch deck visuals. The product visuals translated MitMut Studio's educational vision into tangible, investable artefacts that brought Eduverse to life for stakeholders and potential users.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame mitmut-studio-showcase">
            <div className="mitmut-studio-showcase-inner">
              <div className="mitmut-studio-top-image">
                <video src="https://media.meet-works.com/public/projects/mitmut-studio/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Created the product visual assets for Eduverse, communicating the gamified learning experience through interface mockups, concept illustrations, and pitch deck visuals. The product visuals translated MitMut Studio's educational vision into tangible, investable artefacts that brought Eduverse to life for stakeholders and potential users.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
