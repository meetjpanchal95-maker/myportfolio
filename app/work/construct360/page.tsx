import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./construct360.css";

export const metadata = {
  title: "CONSTRUCT360",
  description: "Dashboard design, user experience and project collaboration tools for Construct360, a business intelligence construction project management system.",
  openGraph: {
    title: "CONSTRUCT360",
    description: "Dashboard design, user experience and project collaboration tools for Construct360, a business intelligence construction project management system.",
    url: "https://meetpanchal.com/work/construct360",
  },
};

export default function Construct360Page() {
  return (
    <SectionShell title="CONSTRUCT360" subtitle="CONSTRUCT360" isProjectPage={true}>
      <main className="main construct360-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape construct360-hero-frame">
          <img
              src="/projects/construct360/tile.png"
              className="construct360-hero-media"
              alt="CONSTRUCT360 hero"
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
            Dashboard Design
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Dashboard Design
            <br />
            User Experience
            <br />
            Project Collaboration
          </div>
          <div className="muted-text">
            Business Intelligence | Internal Construction Project Management System
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">CONSTRUCT360</div>
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
            Dashboard design, user experience and project collaboration tools for Construct360, a business intelligence construction project management system.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Scope:</div>
              <div className="value">Dashboard Design</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              <div className="value">UX Design</div>
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Dashboard Design, User Experience, Project Collaboration, Business Intelligence</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Dashboard & BI Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed the business intelligence dashboard for Construct360, an internal construction project management system. The dashboard consolidated project metrics, resource allocation, and progress tracking into a single interface, supporting decision-making across multiple concurrent construction projects.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame construct360-showcase">
            <div className="construct360-showcase-inner">
              <div className="construct360-top-image">
                <img src="/projects/construct360/tile.png" alt="CONSTRUCT360 overview" />
              </div>
              <div className="construct360-bottom-image">
                <video src="/projects/construct360/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Designed the business intelligence dashboard for Construct360, an internal construction project management system. The dashboard consolidated project metrics, resource allocation, and progress tracking into a single interface, supporting decision-making across multiple concurrent construction projects.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">User Experience</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Led the user experience design for Construct360, mapping workflows for project managers, site teams, and executive stakeholders. The UX work focused on enabling seamless collaboration across roles, reducing information silos, and improving project visibility from planning through to delivery.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame construct360-showcase">
            <div className="construct360-showcase-inner">
              <div className="construct360-top-image">
                <video src="/projects/construct360/hover.mp4" autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Led the user experience design for Construct360, mapping workflows for project managers, site teams, and executive stakeholders. The UX work focused on enabling seamless collaboration across roles, reducing information silos, and improving project visibility from planning through to delivery.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
