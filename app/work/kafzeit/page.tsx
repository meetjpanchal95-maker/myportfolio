import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./kafzeit.css";

export const metadata = {
  title: "KAFZEIT",
  description: "Market research, experience design, brand consulting and digital store for Kafzeit, a coffee house concept in Berlin.",
  openGraph: {
    title: "KAFZEIT",
    description: "Market research, experience design, brand consulting and digital store for Kafzeit, a coffee house concept in Berlin.",
    url: "https://meetpanchal.com/work/kafzeit",
  },
};

export default function KafzeitPage() {
  return (
    <SectionShell title="KAFZEIT" subtitle="KAFZEIT" isProjectPage={true}>
      <main className="main kafzeit-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape kafzeit-hero-frame">
          <video
              src="/projects/kafzeit/tile.mp4"
              className="kafzeit-hero-media"
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
            Market Research
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Market Research
            <br />
            Experience Design
            <br />
            Brand Consulting
          </div>
          <div className="muted-text">
            Coffee House in Berlin | Business Consulting
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">KAFZEIT</div>
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
            Market research, experience design, brand consulting and digital store for Kafzeit, a coffee house concept in Berlin.
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
              <div className="value">Experience Design</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">Brand Consulting</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Market Research, Experience Design, Brand Consulting, Digital Store</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Experience Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed the customer experience for Kafzeit, a coffee house concept in Berlin. The experience design work covered the physical environment, service touchpoints, and sensory identity — creating a cohesive in-store experience that expressed the brand's personality and differentiated Kafzeit within Berlin's competitive specialty coffee market.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame kafzeit-showcase">
            <div className="kafzeit-showcase-inner">
              <div className="kafzeit-top-image">
                <video src="/projects/kafzeit/tile.mp4" autoPlay muted loop playsInline preload="auto" />
              </div>
              <div className="kafzeit-bottom-image">
                <video src="/projects/kafzeit/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Designed the customer experience for Kafzeit, a coffee house concept in Berlin. The experience design work covered the physical environment, service touchpoints, and sensory identity — creating a cohesive in-store experience that expressed the brand's personality and differentiated Kafzeit within Berlin's competitive specialty coffee market.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Brand Consulting</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Provided brand consulting for Kafzeit across strategy, visual identity, and digital presence. Developed the brand positioning, name strategy, and identity system alongside market research to understand the Berlin cafe landscape and identify the brand's distinctive niche. Also contributed to the digital store setup supporting Kafzeit's online retail offering.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame kafzeit-showcase">
            <div className="kafzeit-showcase-inner">
              <div className="kafzeit-top-image">
                <video src="/projects/kafzeit/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Provided brand consulting for Kafzeit across strategy, visual identity, and digital presence. Developed the brand positioning, name strategy, and identity system alongside market research to understand the Berlin cafe landscape and identify the brand's distinctive niche. Also contributed to the digital store setup supporting Kafzeit's online retail offering.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
