import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./bairro.css";

export const metadata = {
  title: "Bairro",
  description: "Developed marketing vision with principal architect and developer. Worked with creative team for video content, 3D modelling, rendering and branding for project sales.",
  openGraph: {
    title: "Bairro",
    description: "Developed marketing vision with principal architect and developer. Worked with creative team for video content, 3D modelling, rendering and branding for project sales.",
    url: "https://meetpanchal.com/playground/bairro",
  },
};

export default function BairroPage() {
  return (
    <SectionShell title="Bairro Alto" subtitle="Bairro Alto" isProjectPage={true}>
      <main className="main bairro-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape bairro-hero-frame" style={{ background: "var(--MM8)" }}>
            <video
              src="https://media.meet-works.com/public/playground/bairro/hover.mp4"
              className="bairro-hero-img"
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
            Project Visualisation using creative marketing methods 
            <br />
            | Collaborative work with developers
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Visual Identity
            <br />
            Real Estate Strategy
            <br />
            Marketing Campaigns
          </div>
          <div className="muted-text">
            Real estate branding and creative direction for marketing content, including 3D modelling and rendering, to develop a strong project identity.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">BAIRRO ALTO</div>
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
            Bairro Alto Goa is a luxury villa in Goa. The client’s existing marketing strategy was revised and elevated, with visual identity, creative direction, and architectural design defined to reflect the villa’s luxury appeal. The project vision was translated into clear, cohesive presentations highlighting key outcomes and design decisions.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2017</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Goa, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">Shusheela Homes</div>
              <div className="label">Project Scope:</div>
              <div className="value">Design and Real Estate Marketing</div>
              <div className="label">Company:</div>
              <div className="value">A+AR Assosciates</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Meet Panchal, Priyanka Kumari, Arminio Ribeiro </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Visual Identity</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            A refined visual identity was developed to express the project’s luxury positioning. Typography, color palette, material language, and spatial narratives were aligned to create a consistent brand system across architectural visuals, presentations, and marketing assets.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame bairro-showcase">
            <div className="bairro-showcase-inner">
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro1.png" alt="Bairro overview" />
              </div>
              <div className="bairro-bottom-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro2.png" alt="Bairro detail" />
              </div>
              <div className="bairro-bottom-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro3.png" alt="Bairro detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The visual language translated architectural intent into a cohesive brand presence, ensuring clarity, elegance, and recognisability across all touchpoints.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Real Estate Strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            A focused real estate strategy was shaped by understanding the target audience, market context, and project vision. Positioning, storytelling, and visual hierarchy were defined to strengthen the project’s value proposition and enhance its market appeal.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame bairro-showcase">
            <div className="bairro-showcase-inner">
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro4.png" alt="Bairro detail" />
              </div>
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro5.png" alt="Bairro detail" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Strategic positioning connected design intent with market expectations, enabling clear communication of value and differentiation within a competitive real estate landscape
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Marketing Campaigns</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Marketing campaigns were designed to communicate the project narrative through curated visuals, renders, and presentations. Each asset supported a unified story, guiding potential buyers through the lifestyle, architecture, and investment value of the development.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame bairro-showcase">
            <div className="bairro-showcase-inner">
              <div className="bairro-top-image">
                <img src="https://media.meet-works.com/public/playground/bairro/bairro6.png" alt="Bairro detail" />
              </div>
              <div className="bairro-top-image">
                <video src="https://media.meet-works.com/public/playground/bairro/bairro7.mp4" autoPlay loop muted playsInline />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Campaigns translated the project vision into engaging visual content, strengthening brand recall and supporting sales-driven communication.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
