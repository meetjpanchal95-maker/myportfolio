import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./unesco-chair.css";

export const metadata = {
  title: "UNESCO CHAIR",
  description: "Proposal development, content curation and digital media strategy for the UNESCO Chair initiative at the University of Hyderabad.",
  openGraph: {
    title: "UNESCO CHAIR",
    description: "Proposal development, content curation and digital media strategy for the UNESCO Chair initiative at the University of Hyderabad.",
    url: "https://meetpanchal.com/work/unesco-chair",
  },
};

export default function UnescoChairPage() {
  return (
    <SectionShell title="UNESCO CHAIR" subtitle="UNESCO CHAIR" isProjectPage={true}>
      <main className="main unesco-chair-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape spendo-hero-frame" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent' }}>
               {/* Visit Site button moved to Client Component */}
            <VisitSiteButton link="https://www.spendo.com" />
            <img
              src="https://media.meet-works.com/public/projects/unesco-chair/heros.png"
              className="spendo-hero-media"
              style={{ width: "auto", height: "500px", objectFit: "contain" }}
              alt="UNESCO Chair hero"
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Proposal
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Proposal
            <br />
            Content Strategy
            <br />
            Digital Media
          </div>
          <div className="muted-text">
            International Academic Association | University of Hyderabad
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">UNESCO CHAIR</div>
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
            Proposal development, content curation and digital media strategy for the UNESCO Chair initiative at the University of Hyderabad.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2023</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Hyderabad, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Scope:</div>
              <div className="value">Proposal Development</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">Digital Media</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Proposal, Curating, Content Strategy, Digital Media</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Proposal & Curation</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed the proposal and curatorial framework for the UNESCO Chair initiative at the University of Hyderabad. The work involved researching international academic association models, structuring the proposal narrative for UNESCO recognition, and aligning the initiative with the university's research and community engagement priorities.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame unesco-chair-showcase">
            <div className="unesco-chair-showcase-inner">
              <div className="unesco-chair-top-image">
                <img src="https://media.meet-works.com/public/projects/unesco-chair/tile.png" alt="UNESCO CHAIR overview" />
              </div>
              <div className="unesco-chair-bottom-image">
                <video src="https://media.meet-works.com/public/projects/unesco-chair/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Developed the proposal and curatorial framework for the UNESCO Chair initiative at the University of Hyderabad. The work involved researching international academic association models, structuring the proposal narrative for UNESCO recognition, and aligning the initiative with the university's research and community engagement priorities.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Content & Digital Strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed the content strategy and digital media approach for the UNESCO Chair programme, establishing communication frameworks for academic and public-facing channels. The strategy supported the Chair's visibility within international academic networks and strengthened its positioning as a centre for interdisciplinary research.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame unesco-chair-showcase">
            <div className="unesco-chair-showcase-inner">
              <div className="unesco-chair-top-image">
                <video src="https://media.meet-works.com/public/projects/unesco-chair/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Developed the content strategy and digital media approach for the UNESCO Chair programme, establishing communication frameworks for academic and public-facing channels. The strategy supported the Chair's visibility within international academic networks and strengthened its positioning as a centre for interdisciplinary research.
          </p>
        </section>

        <div className="divider"></div>
        <SpendoNavButtons previousLink="/work/construct360" nextLink="/work/kafzeit" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
