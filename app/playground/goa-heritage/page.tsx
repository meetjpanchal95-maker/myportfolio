import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./goa-heritage.css";

export const metadata = {
  title: "Goa Heritage Villa",
  description: "Worked closely with client, principal architect and conservation specialist for converting this abandoned property into a luxury villa and pitching it to AMA Stays and Trails.",
  openGraph: {
    title: "Goa Heritage Villa",
    description: "Worked closely with client, principal architect and conservation specialist for converting this abandoned property into a luxury villa and pitching it to AMA Stays and Trails.",
    url: "https://meetpanchal.com/playground/goa-heritage",
  },
};

export default function GoaHeritagePage() {
  return (
    <SectionShell title="Goa Heritage Villa" subtitle="Goa Heritage Villa" isProjectPage={true}>
      <main className="main goa-heritage-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape goa-heritage-hero-frame" style={{ height: "500px", background: "var(--MM8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/playground/goa-heritage/goahero.png"
              className="goa-heritage-hero-img"
              alt="Goa Heritage Villa hero"
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
            Heritage Architecture | Real Estate pitch | Conservation project at cultural heart of Goa 
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Visual Identity
            <br />
            Conservation Strategy
            <br />
            Marketing Pitch
          </div>
          <div className="muted-text">
            This project involved converting an abandoned heritage property in Goa into a luxury villa and pitching it to AMA Stays and Trails. 
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">Villa SIOLIM</div>
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
            Working closely with the client, architect, and conservation specialist, the focus was on adaptive reuse, market positioning, and brand communication. Visual identity, real estate strategy, and marketing content were developed to balance cultural authenticity with commercial viability for the hospitality and luxury travel market.
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
            Developed a visual identity that reflected the heritage and luxury of the restored villa. The design language conveyed cultural authenticity, elegance, and modern comfort, forming the foundation for branding and marketing communications.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame goa-heritage-showcase">
            <div className="goa-heritage-showcase-inner">
              <div className="goa-heritage-top-image">
                <img src="/playground/goa-heritage/goa1.png" alt="Goa Heritage Villa overview" />
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
          <div className="sub-title">Conservation Strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Collaborated with the client, architect, and conservation specialist to define a real estate strategy that positioned the villa as a premium offering. The strategy aligned design, heritage conservation, and market viability for potential investors.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame goa-heritage-showcase">
            <div className="goa-heritage-showcase-inner">
              <div className="goa-heritage-top-image">
                <img src="/playground/goa-heritage/goa2.png" alt="Goa Heritage Villa detail" />
              </div>
              <div className="goa-heritage-top-image">
                <img src="/playground/goa-heritage/goa3.gif" alt="Goa Heritage Villa detail" />
              </div>
              <div className="goa-heritage-top-image">
                <img src="/playground/goa-heritage/goa4.png" alt="Goa Heritage Villa detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Market research, competitive analysis, and value proposition guided decision-making, ensuring the property’s heritage and luxury appeal were effectively leveraged to attract AMA Stays and Trails.
          </p>
        </section>


        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Marketing campaigns</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed a comprehensive marketing pitch for partnership with AMA Stays & Trails, showcasing the villa’s transformation, heritage character, and luxury features. The campaign combined curated visuals, refined storytelling, and targeted digital and offline channels to attract discerning traveler and investors.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame goa-heritage-showcase">
            <div className="goa-heritage-showcase-inner">
              <div className="goa-heritage-top-image">
                <img src="/playground/goa-heritage/goa5.png" alt="Goa Heritage Villa detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Integrated content highlighted heritage conservation, design excellence, and an experiential lifestyle, positioning the villa as a distinctive, market-ready luxury property in Goa.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
