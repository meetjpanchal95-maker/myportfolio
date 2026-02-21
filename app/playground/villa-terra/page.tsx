import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./villa-terra.css";

export const metadata = {
  title: "Villa Terra Viva",
  description: "Developed real estate vision with principal architect and developer. Worked with creative team for branding content, 3D modelling developing design options and making it market ready.",
  openGraph: {
    title: "Villa Terra Viva",
    description: "Developed real estate vision with principal architect and developer. Worked with creative team for branding content, 3D modelling developing design options and making it market ready.",
    url: "https://meetpanchal.com/playground/villa-terra",
  },
};

export default function VillaTerraPage() {
  return (
    <SectionShell title="Villa Terra Viva" subtitle="Villa Terra Viva" isProjectPage={true}>
      <main className="main villa-terra-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape villa-terra-hero-frame">
            <img
              src="/playground/villa-terra/vivahero.png"
              className="villa-terra-hero-img"
              alt="Villa Terra Viva hero"
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
            Villa Terra Viva | Conservation architecture project | Real Estate revamp
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Visual Identity
            <br />
            Real Estate Strategy
            <br />
            Marketing Campaigns
          </div>
          <div className="muted-text">
            Villa Terra Viva is a conservation-led real estate project focused on transforming a heritage property into a market-ready luxury offering. 
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">VILLA TERRA VIVA</div>
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
            Collaborating with the principal architect, developer, and creative team, I supported visual identity development, 3D design options, and branding content. The project aligned architectural intent with real estate strategy, producing visual assets and narratives that positioned the property effectively for high-end buyers while respecting its conservation value.
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
              <div className="label">Design Agency:</div>
              <div className="value">Ar+A Associates</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
             
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Arminio Ribeiro, Meet Panchal, Priyanka Kumari</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Visual Identity</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed a cohesive visual identity for Villa Terra Viva, integrating architectural aesthetics with branding strategy. The identity communicated the property’s heritage, design excellence, and lifestyle appeal across digital and print platforms.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame villa-terra-showcase">
            <div className="villa-terra-showcase-inner">
              <div className="villa-terra-top-image">
                <video src="/playground/villa-terra/viva1.mp4" autoPlay loop muted playsInline />
              </div>
              <div className="villa-terra-top-image">
                <video src="/playground/villa-terra/viva2.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            3D Modelling Design, color palette, and visual tone were carefully curated to reflect the villa’s elegance, heritage, and modern livability, establishing a strong and recognizable brand presence.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Real Estate Strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Collaborated with the principal architect and developer to define a real estate strategy aligning design, market positioning, and investment potential. The approach translated architectural vision into a commercially viable offering.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame villa-terra-showcase">
            <div className="villa-terra-showcase-inner">
              <div className="villa-terra-top-image">
                <video src="/playground/villa-terra/viva3.mp4" autoPlay loop muted playsInline />
              </div>

        
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
           Market analysis, target positioning, and value proposition guided design decisions, ensuring the property appealed to potential buyers while respecting its conservation ethos.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Marketing campaigns</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Worked within the constraints and opportunities of conservation architecture to develop design options that sensitively revived the villa while meeting contemporary standards for luxury real estate. The project balanced heritage preservation with the requirements of a commercially attractive residential product.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame villa-terra-showcase">
            <div className="villa-terra-showcase-inner">
              <div className="villa-terra-top-image">
                <img src="/playground/villa-terra/viva4.png" alt="Villa Terra Viva detail" />
              </div>
              <div className="villa-terra-top-image">
                <video src="/playground/villa-terra/viva5.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Integrated visual content and narrative messaging ensured campaigns were engaging, informative, and aligned with the villa’s premium positioning, generating market interest effectively.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
