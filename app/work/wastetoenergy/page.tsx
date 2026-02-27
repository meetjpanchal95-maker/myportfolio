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
              src="/projects/waste-to-energy/wtehero.mp4"
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
            Clean India Mission | Energy Transition |
Project Management
            
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
             Project Management Consulting
            <br />
            Design concept and master planning
            <br />
            Design system execution
          </div>
          <div className="muted-text">
            WTE projects supporting sustainable urban infrastructure development through technology-driven circular economy solutions.
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
           Project management consulting to support planning and implementation within a sustainability-focused initiative. The scope covered project management consulting, design concept and master planning, and design system execution, contributing to structured coordination, strategic planning, and cohesive design delivery across project phases.rence, and long-term project delivery.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2019-22</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">Gujarat, India</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Status:
              </div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">Abellon Clean Energy</div>
               <div className="label">Company:</div>
              <div className="value">INI Design Studio</div>
            </div>
            <div>
              <div className="label">Project team:</div>
              <div className="value">
               Jigar Thakkar, Meet Panchal, Ani Agarkar, Bhargav Bhavsar, Rakhi Rupani{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Project Management Consulting</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Delivered strategic guidance for the development of five waste-to-energy plants, ensuring parallel execution, stakeholder alignment, risk mitigation, and seamless integration of operations and design to maximize efficiency and long-term sustainability.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame wastetoenergy-showcase">
            <div className="wastetoenergy-showcase-inner">

               </div>
               <div className="wastetoenergy-top-image">
                <img src="/projects/waste-to-energy/wte1.png" alt="Waste to Energy 1" style={{ marginBottom: '10px' }} />
              </div>
              <div style={{ flex: 1, height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 24px' }}>
                    <img src="/projects/waste-to-energy/wte88.svg" alt="Center Diagram" className="wte22-theme-svg" style={{ width: '70%', height: '70%', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                  </div>
              <div className="wastetoenergy-top-image">
                <div style={{ display: 'flex', flexDirection: 'row', gap: 0, width: '100%', height: '340px', alignItems: 'center' }}>
                  <div style={{ width: '240px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                    <img src="/projects/waste-to-energy/wte33.png" alt="Left" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '32px', display: 'block' }} />
                  </div>
                  <div style={{ flex: 1, height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 24px' }}>
                    <img src="/projects/waste-to-energy/wte22.svg" alt="Center Diagram" className="wte22-theme-svg" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                  </div>
                  <div style={{ width: '240px', height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                    <img src="/projects/waste-to-energy/wte44.png" alt="Right" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '32px', display: 'block' }} />
                  </div>
                </div>
                <div className="wastetoenergy-top-image">
                  <img src="/projects/waste-to-energy/wte55.png" alt="Waste to Energy 1" style={{ marginTop: '20px', borderRadius: '20px' }} />
                </div>
                <div className="wastetoenergy-top-image">
                  <img src="/projects/waste-to-energy/a.svg" alt="Waste to Energy 1" className="wte66-theme-svg theme-svg-color" style={{ marginTop: '20px', borderRadius: '20px' }} />
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
                  <div style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                    <img src="/projects/waste-to-energy/b.svg" alt="Waste to Energy design detail" className="wte5-theme-svg theme-svg-color" />
                  </div>
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
