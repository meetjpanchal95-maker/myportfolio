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
              src="/projects/waste-to-energy/Wtehero.mp4"
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
          <div className="sub-title">Project Management Consulting</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Executed master plans for five WTE plants, coordinating teams, implementing standardized protocols, and ensuring operational efficiency, design consistency, and sustainability compliance.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
              <div className="wastetoenergy-top-image">
                <img src="/projects/waste-to-energy/Wte1.png" alt="Waste to Energy 1" />
              </div>

              <div className="wastetoenergy-flow">
                <img
                  src="/projects/waste-to-energy/wte2.svg"
                  alt="Waste to Energy flow model"
                  className="wastetoenergy-svg-model"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

            
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
           Provided strategic oversight for five WTE plants, coordinating stakeholders, managing parallel execution, and aligning design and operations for efficient, sustainable project outcomes.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Design concept and master planning</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
           Developed integrated design concepts and master planning frameworks for five WTE plants, combining site analysis, scalable systems, and operational workflows to enhance efficiency, environmental performance, and coherent design identity.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
            
              

              <div className="wastetoenergy-bottom-image">
                <img src="/projects/waste-to-energy/wte4.gif" alt="Waste to Energy design detail" />
              </div>
              <div className="wastetoenergy-bottom-image">
                <img src="/projects/waste-to-energy/wte5.svg" alt="Waste to Energy design detail" className="wte5-theme-svg" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
             Created master planning frameworks for five WTE plants, integrating site analysis, operational workflows, and sustainability principles while allowing flexibility for future expansion.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">DESIGN system execution</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
           Oversaw the translation of master plans into operational WTE plants, coordinating multidisciplinary teams, maintaining design integrity, and implementing standards to ensure quality, efficiency, and sustainable operations across all sites.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">
            
              

              <div className="wastetoenergy-bottom-image">
                <img src="/projects/waste-to-energy/wte6.png" alt="Waste to Energy design detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Executed master plans for five WTE plants, coordinating teams, implementing standardized protocols, and ensuring operational efficiency, design consistency, and sustainability compliance.
          </p>
        </section>
        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
