import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./karigarshala.css";

export const metadata = {
  title: "Kaarigarshala",
  description: "Final Year Academic project featured on the University's Faculty of Architecture Website, inspired by the core philosophies of space making in architecture.",
  openGraph: {
    title: "Kaarigarshala",
    description: "Final Year Academic project featured on the University's Faculty of Architecture Website, inspired by the core philosophies of space making in architecture.",
    url: "https://meetpanchal.com/playground/karigarshala",
  },
};

export default function KarigarshalaPage() {
  return (
    <SectionShell title="Kaarigarshala" subtitle="Kaarigarshala" isProjectPage={true}>
      <main className="main karigarshala-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape karigarshala-hero-frame">
            <img
              src="/playground/karigarshala/fhero.png"
              className="karigarshala-hero-img"
              alt="Kaarigarshala hero"
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
            Featured: Kaarigarshala | Architecture Project | Academic Work

          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Project Featured
            <br />
            Kaarigarshala Concept
            <br />
            Final Design
          </div>
          <div className="muted-text">
            A socially driven architectural project that empowers labour communities through dignified, craft-centered spaces and inclusive spatial design..
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">KAARIGARSHALA</div>
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
            Kaarigarshalaa is a socially driven architectural project that repositions labour and craftsmanship at the center of the built environment. Conceived as a space for making, learning, and exchange, the project addresses working conditions, dignity of labour, and community engagement. It demonstrates how architecture can function as an enabling social infrastructure while preserving cultural knowledge through contemporary spatial design.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2018</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Ahmedabad, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Featured</div>
            </div>
            <div>
              <div className="label">Institution:</div>
              <div className="value">CEPT University</div>
              
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Project Featured Individual Final Year Academic Project</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Project Featured</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The project was featured on the cover page for its strong conceptual clarity and social relevance. Kaarigarshalaa positions architecture as an enabler for labour communities, integrating craft, dignity of work, and spatial equity through a thoughtful, contemporary architectural response.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame karigarshala-showcase">
            <div className="karigarshala-showcase-inner">
              <div className="karigarshala-top-image">
                <video src="/playground/karigarshala/f1.mp4" autoPlay loop muted playsInline />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The cover feature acknowledges the project’s architectural merit and its sensitive engagement with labour, craft, and social infrastructure.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Kaarigarshalaa concept</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
           Kaarigarshalaa is conceived as a socio-architectural framework that supports artisans and labour communities through spaces for making, learning, and exchange. The concept addresses working conditions, visibility of labour, and long-term sustainability while embedding craft within everyday architectural life.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame karigarshala-showcase">
            <div className="karigarshala-showcase-inner">
              <div className="karigarshala-top-image">
                <img src="/playground/karigarshala/f2.png" alt="Kaarigarshala detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The concept reimagines architecture as a support system for labour, fostering skill development, community interaction, and cultural continuity.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Final Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The final design translates social intent into spatial organization, material choices, and programmatic clarity. Workshops, shared spaces, and public interfaces are designed to enhance working environments, encourage interaction, and provide dignified, functional spaces for artisans and labourers.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame karigarshala-showcase">
            <div className="karigarshala-showcase-inner">
              <div className="karigarshala-top-image">
                <img src="/playground/karigarshala/f3.png" alt="Kaarigarshala detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The design balances social responsibility with architectural expression, creating inclusive spaces that support labour communities through thoughtful spatial and material strategies.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
