import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./stackbuilder.css";

export const metadata = {
  title: "STACK BUILDER",
  description: "Website design, branding, and UX lead for Stackbuilder, a content and marketing creative consulting firm.",
  openGraph: {
    title: "STACK BUILDER",
    description: "Website design, branding, and UX lead for Stackbuilder, a content and marketing creative consulting firm.",
    url: "https://meetpanchal.com/work/stackbuilder",
  },
};

export default function StackbuilderPage() {
  return (
    <SectionShell title="STACK BUILDER" subtitle="STACK BUILDER" isProjectPage={true}>
      <main className="main stackbuilder-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape stackbuilder-hero-frame">
          <img
              src="/projects/stackbuilder/tile.png"
              className="stackbuilder-hero-media"
              alt="STACK BUILDER hero"
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
            Website Design
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Website Design
            <br />
            Branding
            <br />
            UX Lead
          </div>
          <div className="muted-text">
            Content & Marketing | Creative Consulting
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">STACK BUILDER</div>
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
            Website design, branding, and UX lead for Stackbuilder, a content and marketing creative consulting firm.
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
              <div className="value">Website Design</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">Brand Identity</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Website Design, Branding, UX Lead, Creative Consulting</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Website Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Led the website design for Stackbuilder, developing a digital presence that communicates the firm's creative consulting and content marketing capabilities. The design process prioritised clarity, brand alignment, and an engaging user experience across all device types.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame stackbuilder-showcase">
            <div className="stackbuilder-showcase-inner">
              <div className="stackbuilder-top-image">
                <img src="/projects/stackbuilder/tile.png" alt="STACK BUILDER overview" />
              </div>
              <div className="stackbuilder-bottom-image">
                <video src="/projects/stackbuilder/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Led the website design for Stackbuilder, developing a digital presence that communicates the firm's creative consulting and content marketing capabilities. The design process prioritised clarity, brand alignment, and an engaging user experience across all device types.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Brand Identity</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed the brand identity and visual language for Stackbuilder, establishing a cohesive system covering typography, colour, and graphic elements. The identity was designed to convey creativity, strategic rigour, and a strong digital-native character consistent with the firm's positioning.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame stackbuilder-showcase">
            <div className="stackbuilder-showcase-inner">
              <div className="stackbuilder-top-image">
                <video src="/projects/stackbuilder/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Developed the brand identity and visual language for Stackbuilder, establishing a cohesive system covering typography, colour, and graphic elements. The identity was designed to convey creativity, strategic rigour, and a strong digital-native character consistent with the firm's positioning.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
