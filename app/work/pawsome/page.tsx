import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./pawsome.css";

export const metadata = {
  title: "Pawsome",
  description: "Pawsome — Community-driven pet platform connecting pet parents, PetMates, and pet services in Berlin.",
  openGraph: {
    title: "Pawsome",
    description: "Pawsome — Community-driven pet platform connecting pet parents, PetMates, and pet services in Berlin.",
    url: "https://meetpanchal.com/work/pawsome",
  },
};

export default function AboutPage() {
  return (
    <SectionShell title="Pawsome" subtitle="Pawsome" isProjectPage={true}>
      <main className="main giant-main">
        <div className="divider"></div>
        <section className="pad">
            <div className="media-frame landscape spendo-hero-frame theme-bg" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Visit Site button moved to Client Component */}
            <VisitSiteButton link="https://www.spendo.com" />
            <img
              src="https://media.meet-works.com/public/projects/pawsome/pawsomehero.png"
              className="spendo-hero-media"
              style={{ width: "auto", height: "500px", objectFit: "contain" }}
              alt="Pawsome hero"
            />
          </div>
          
        </section>

      

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Community-Driven
            <br />
            Pet Platform
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            User Mapping
            <br />
            Product Research
            <br />
            Design Mockups
          </div>
          <div className="muted-text">
            Pawsome is a community-driven platform in Berlin connecting pet parents, PetMates, and commercial pet services.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">PAWSOME</div>
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
            The project focused on understanding user needs, designing intuitive experiences, and creating visual mockups that bring the ecosystem to life. By combining research, UX, and design, PAWSOME enables seamless collaboration, trusted local assistance, and a vibrant network for pet care, fostering engagement and strengthening community connections across multiple user types.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>
                Location:
              </div>
              <div className="value">Berlin, Germany</div>
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
                Kishan Solanki, Sudama Yadav, Meet Panchal, Sharon Jacob{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">User Mapping</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed user experiences to streamline interactions between pet parents, PetMates, and service providers. The focus was on intuitive navigation, role-based flows, and engagement mechanics to enhance usability and community participation across the platform.
          </p>
        </section>
        

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame pawsome-showcase">
            <div className="pawsome-showcase-inner">
             <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pl1.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pd1.svg"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
      
              
            </div>
              <div className="pawsome-showcase-inner">
             <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pl2.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pd2.svg"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
      
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            UX design for PAWSOME, optimizing interactions and flows for multiple user types to ensure clarity, ease of use, and engagement within the pet community platform.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product Research</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Conducted in-depth product research for PAWSOME, analyzing user needs, community behaviors, and service gaps in the pet care ecosystem. Insights informed platform features, ensuring relevance for pet parents, PetMates, and commercial service providers.
          </p>
        </section>

        

      <div className="divider"></div>
        <section className="pad">
          <div className="media-frame pawsome-showcase">
            <div className="pawsome-showcase-inner">
             <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pl3.svg"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pd3.svg"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
      
              
            
      
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Product research for PAWSOME identifying user needs, community patterns, and service gaps to guide feature prioritization and platform development for pets and their owners in Berlin.
          </p>
        </section>
        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product Research</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Conducted in-depth product research for PAWSOME, analyzing user needs, community behaviors, and service gaps in the pet care ecosystem. Insights informed platform features, ensuring relevance for pet parents, PetMates, and commercial service providers.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame pawsome-showcase">
            <div className="pawsome-showcase-inner">
              
               <div className="pawsome-flow">
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pl4.png"
                  alt="Spendo flow model"
                  className="light-img"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  src="https://media.meet-works.com/public/projects/pawsome/pd4.png"
                  alt="Spendo flow model"
                  className="dark-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Product research for PAWSOME identifying user needs, community patterns, and service gaps to guide feature prioritization and platform development for pets and their owners in Berlin.
          </p>
        </section>
         <div className="divider"></div>
         <SpendoNavButtons previousLink="/work/spendo" nextLink="/work/construct360" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
