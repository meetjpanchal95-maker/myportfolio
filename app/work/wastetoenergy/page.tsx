import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./wastetoenergy.css";

export const metadata = {
  title: "Waste to Energy",
  description: "Waste to Energy — Meet Panchal's project case study.",
  openGraph: {
    title: "Waste to Energy",
    description: "Waste to Energy — Meet Panchal's project case study.",
    url: "https://meetpanchal.com/work/wastetoenergy",
  },
};

export default function WasteToEnergyPage() {
  return (
    <SectionShell title="Waste to Energy" subtitle="Waste to Energy" isProjectPage={true}>
      <main className="main giant-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape wastetoenergy-hero-frame">
            <video
              src="/projects/wastetoenergy/WasteToEnergy Hero.mp4"
              className="wastetoenergy-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Waste to Energy hero video"
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="font-montserrat" style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}>
            Waste to Energy
            <br />
            Project
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Research
            <br />
            Design
          </div>
          <div className="muted-text">
            Waste to Energy is a project focused on sustainable energy solutions
            through innovative waste management and conversion technologies.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">WASTE TO ENERGY</div>
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
            This project explores the intersection of waste management and
            sustainable energy production. The work focused on research,
            process design, and creating clear visual communication around
            waste-to-energy conversion systems and their impact on communities
            and the environment.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">India</div>
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
                Meet Panchal{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">RESEARCH</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Conducted in-depth research into waste-to-energy technologies,
            processes, and their implications on urban sustainability. The focus
            was on understanding conversion methods, stakeholder needs, and
            environmental outcomes.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
              <div className="wastetoenergy-top-image">
                <img src="/projects/wastetoenergy/WasteToEnergy 1.png" alt="Waste to Energy 1" />
              </div>

              <div className="wastetoenergy-flow">
                <img
                  src="/projects/wastetoenergy/WasteToEnergy Model.svg"
                  alt="Waste to Energy flow model"
                  className="wastetoenergy-svg-model"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div className="wastetoenergy-bottom-image">
                <img src="/projects/wastetoenergy/WasteToEnergy 2.png" alt="Waste to Energy screen" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Research and process mapping for the Waste to Energy project,
            visualising conversion pathways and system flows to communicate
            sustainability outcomes effectively.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">DESIGN</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Developed design outputs for the Waste to Energy project including
            process diagrams, visual communication assets, and interface
            mockups. The work emphasised clarity, accessibility, and effective
            communication of complex technical systems.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
              <div className="wastetoenergy-top-image">
                <img src="/projects/wastetoenergy/WasteToEnergy 3.png" alt="Waste to Energy design" />
              </div>

              <div className="wastetoenergy-flow">
                <img
                  src="/projects/wastetoenergy/Diagram.svg"
                  alt="Waste to Energy diagram"
                  className="wastetoenergy-svg-diagram"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div className="wastetoenergy-bottom-image">
                <img src="/projects/wastetoenergy/WasteToEnergy 4.png" alt="Waste to Energy design detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Design work for the Waste to Energy project, shaping intuitive
            visual systems and process communication to ensure clarity and
            engagement around sustainable energy solutions.
          </p>
        </section>
        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
