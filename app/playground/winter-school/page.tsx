import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./winter-school.css";

export const metadata = {
  title: "Winter School",
  description: "Social Mapping exercise with community members to understand urban landscapes through daily practices, networks, and resources, connecting spatial patterns to lived community experiences.",
  openGraph: {
    title: "Winter School",
    description: "Social Mapping exercise with community members to understand urban landscapes through daily practices, networks, and resources, connecting spatial patterns to lived community experiences.",
    url: "https://meetpanchal.com/playground/winter-school",
  },
};

export default function WinterSchoolPage() {
  return (
    <SectionShell title="Winter School" subtitle="Winter School" isProjectPage={true}>
      <main className="main winter-school-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape winter-school-hero-frame" style={{ background: "var(--MM8)" }}>
            <img
              src="/playground/winter-school/propshero.png"
              className="winter-school-hero-img"
              alt="Winter School hero"
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
            Decoding Public affairs | Think tank | 
Social Urban relationship | Post Occupancy Research
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Props Catalogue
            <br />
            Wall Panel and Showreel
            <br />
            Street Section and Conclusion
          </div>
          <div className="muted-text">
            This Project is collaborative research under CEPT University and Politechnico Milano for developing Urban Research Methodologies
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">PROPS</div>
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
            
HYPOTHESIS: “The props used in traditional way of living personalises the space fabricating collective activities
<br />
PERSONALISATION: Lakhudi co Housing witnesses people living in a traditional way in a modern scenario, which gives a collective space that is influenced by the traditional way of living and is hence personalised.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2018</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Gujarat, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Supervisors:</div>
              <div className="value">Sachin Soni, Giulia Setti, Arian Afshari, Vaidehi Kanada</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Diba Oncel, Meet Panchal, Maria Monacelli, Akanksha Balpande, Kanisha Panchal</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Props Catalogue</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            A development analysis was conducted through deep engagement with the community’s daily lives, almost in the manner of creating a documentary. Profound questions were explored regarding the government-imposed transformation underway, alongside close observation of the difficult living conditions experienced by the community.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame winter-school-showcase">
            <div className="winter-school-showcase-inner">
              <div className="winter-school-top-image">
                <img src="/playground/winter-school/props1.png" alt="Winter School overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The municipality struggled to provide basic necessities such as waste management, adequate public spaces, and sufficient lighting at night, among other challenges.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">wall panel and showreel</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            A development analysis was conducted through deep engagement with the community’s daily lives, almost like creating a documentary. A showreel into the lives of the Rabari community revealed how horizontal living once nurtured shared spaces.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame winter-school-showcase">
            <div className="winter-school-showcase-inner">
              <div className="winter-school-top-image">
                <img src="/playground/winter-school/props2.png" alt="Winter School detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
             The collective identity, now replaced by vertical structures redefining belonging, this shift reveals the nuances of social reconstruction, as people navigate imposed change, reclaiming space through personal adaptation and resilience.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">street section and conclusion</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
           Through documentation, it was observed how the Rabari community personalized their new spaces using simple props, turning subtle elements into courtyards, corridors into gathering spots, and thresholds into shared zones.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame winter-school-showcase">
            <div className="winter-school-showcase-inner">
              <div className="winter-school-top-image">
                <img src="/playground/winter-school/props3.png" alt="Winter School detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
             Each object and activity became a quiet act of reclaiming identity, bridging the gap between the lost horizontality and the imposed verticality of their transformed lives.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
