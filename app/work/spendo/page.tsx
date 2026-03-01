import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./spendo.css";


export const metadata = {
  title: "About",
  description: "Meet Panchal's Curriculum Vitae.",
  openGraph: {
    title: "Spendo",
    description: "Meet Panchal's Curriculum Vitae",
    url: "https://meetpanchal.com/about",
  },
};

export default function AboutPage() {
  return (
    <SectionShell title="Spendo" subtitle="Spendo" isProjectPage={true}>
      <main className="main giant-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape spendo-hero-frame">
            <video
                src="https://media.meet-works.com/public/projects/spendo/Spendo Hero.mp4"
              className="spendo-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Spendo hero video"
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="font-montserrat" style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}>
            Corporate Petty Cash
            <br />
            Management Solution
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Website Design
            <br />
            Product UX
          </div>
          <div className="muted-text">
            Spendo is a web-based petty cash management platform designed to
            simplify expense tracking and approvals for teams.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">SPENDO</div>
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
            Spendo is a petty cash management solution designed to streamline
            expense tracking and financial oversight. The project focused on
            developing the website and shaping the product UX, ensuring
            intuitive navigation, clear workflows, and a user-centred interface
            that supports efficient cash management.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">UAE</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Status:
              </div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
            </div>
            <div>
              <div className="label">Project team:</div>
              <div className="value">
                Kishan Solanki, Meet Panchal, Sudama Yadav{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">WEBSITE DESIGN</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed the Spendo website to clearly communicate product value,
            simplify a finance-heavy narrative, and build trust with users. The
            focus was on clarity, structured layouts, and positioning the
            platform as an efficient, transparent financial tool.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame spendo-showcase">
            <div className="spendo-showcase-inner">
              <div className="spendo-top-image">
                <img src="https://media.meet-works.com/public/projects/spendo/Spendo 1.png" alt="Spendo 1" />
              </div>

              <div className="spendo-flow">
                <img
                  src="https://media.meet-works.com/public/projects/spendo/l1.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/spendo/d1.svg"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="spendo-bottom-image">
                <img src="https://media.meet-works.com/public/projects/spendo/Spendo 2.png" alt="Spendo product screen" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Website design for Spendo focused on clear messaging, structured
            content, and a professional visual language to communicate value and
            build trust around petty cash management.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">PRODUCT UX</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Led the product UX for Spendo by defining user flows for expense
            tracking, approvals, and reporting. The work emphasized simplicity,
            reduced cognitive load, and usability, enabling teams to manage
            petty cash with accuracy and minimal friction.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame spendo-showcase">
            <div className="spendo-showcase-inner">
              <div className="spendo-top-image">
                <img src="https://media.meet-works.com/public/projects/spendo/Spendo 3.png" alt="Spendo product UX" />
              </div>

              <div className="spendo-flow">
                <img
                  src="https://media.meet-works.com/public/projects/spendo/Diagram.svg"
                  alt="Spendo UX diagram"
                  className="spendo-svg-diagram"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div className="spendo-bottom-image">
                <img src="https://media.meet-works.com/public/projects/spendo/Spendo 4.png" alt="Spendo product screen" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Product UX design for Spendo, shaping intuitive workflows for
            expense tracking and approvals to ensure clarity, ease of use, and
            reliable petty cash management.
          </p>
        </section>
        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
