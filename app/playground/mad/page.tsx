import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./mad.css";

export const metadata = {
  title: "MAD Studio",
  description: "Supported a team of young Berlin founders advancing sustainability by developing marketing campaigns for MAD, an alternative materials studio manufacturing with mycelium.",
  openGraph: {
    title: "MAD Studio",
    description: "Supported a team of young Berlin founders advancing sustainability by developing marketing campaigns for MAD, an alternative materials studio manufacturing with mycelium.",
    url: "https://meetpanchal.com/playground/mad",
  },
};

export default function MadPage() {
  return (
    <SectionShell title="MAD Studio" subtitle="MAD Studio" isProjectPage={true}>
      <main className="main mad-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape mad-hero-frame" style={{ background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/mad/madhero.png"
              className="mad-hero-img"
              alt="MAD Studio hero"
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
            MAD- Alternative material design studio | Marketing Campaigns (Upcomng)
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Campaign Concept
            <br />
            Marketing Events
            
          </div>
          <div className="muted-text">
            Supported a team of young Berlin foundes advancing sustainability by developing marketing campaigns for MAD an alternative material studio by manufacturing with mycellium.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">MAD</div>
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
           The work was carried out through close collaboration, crafting a narrative centered on positioning the brand as a sustainability leader. Campaign concepts have been finalized, with an experiential event planned to follow. The idea is to create a brand-experience setting where audiences can interact with the brand and visualize the product portfolio in an engaging, immersive format.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Berlin, Germany</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Scope:</div>
              <div className="value">Marketing Strategy</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Sharon Jacob, Meet Panchal, Paulo Gomez, Marta and Manuala</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Campaigns Concepts</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Campaign The concert conceptualisation phase involved creating the overarching vision and theme of the performance, ensuring it resonated with the target audience. Programming decisions were made to balance artistic innovation with audience engagement.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame mad-showcase">
            <div className="mad-showcase-inner">
              <div className="mad-top-image">
                <img src="https://media.meet-works.com/public/playground/mad/mad1.png" alt="MAD Studio overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Each concept balanced sustainability, innovation, and design credibility, ensuring the campaigns resonated with designers, partners, and conscious consumers without feeling overly technical or academic.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Marketing Event</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The marketing event was designed as an experiential touchpoint, allowing audiences to engage directly with MAD’s materials and vision. The format emphasized interaction, education, and conversation rather than traditional product showcasing.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame mad-showcase">
            <div className="mad-showcase-inner">
              <div className="mad-top-image">
                <video src="https://media.meet-works.com/public/playground/mad/mad2.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Spatial storytelling, tactile displays, and guided narratives helped communicate material value, production logic, and sustainability impact in an engaging, human-centered way.
          </p>
        </section>

        

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
