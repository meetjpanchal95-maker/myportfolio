import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./cat-city.css";

export const metadata = {
  title: "CAT-Curiosive",
  description: "Worked closely with the Artist putting a live concert together, assisting with music production and performing live as a DJ. Also contributed to overall concert styling and costumes.",
  openGraph: {
    title: "CAT CityAllTech",
    description: "Worked closely with the Artist putting a live concert together, assisting with music production and performing live as a DJ. Also contributed to overall concert styling and costumes.",
    url: "https://meetpanchal.com/playground/cat-city",
  },
};

export default function CatCityPage() {
  return (
    <SectionShell title="CAT CityAllTech" subtitle="CAT CityAllTech" isProjectPage={true}>
      <main className="main cat-city-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape cat-city-hero-frame">
            <img
              src="https://media.meet-works.com/public/playground/cat-city/cathero.png"
              className="cat-city-hero-img"
              alt="CAT CityAllTech hero"
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
           CAT- CityAllTech | Music project | Concert Live in Berlin | Music Production performing arts | Curiosive Launch


          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Concert Conceptualisation
            <br />
            Main Concert
            <br />
            Curiosive Launch
          </div>
          <div className="muted-text">
           Music project focused on live concerts and performing arts in Berlin, blending creative music production with immersive audience experiences.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">CAT — CITYALLTECH</div>
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
            
The work focused on developing a scalable business model for artistic musical career and the initiative aims to deliver innovative live performances while supporting artistic engagement and cultural outreach.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Berlin, Germany</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Passion Project:</div>
              <div className="value">Music Production
                <br />
                Live Performance
              </div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
            
            </div>
            <div>
              <div className="label">Team:</div>
              <div className="value">Sharon Jacob, Paulo Gomez, Meet Panchal</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Concert Conceptualisation</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The concert conceptualisation phase involved creating the overarching vision and theme of the performance, ensuring it resonated with the target audience. Programming decisions were made to balance artistic innovation with audience engagement.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame cat-city-showcase">
            <div className="cat-city-showcase-inner">
              <div className="cat-city-top-image">
                <img src="https://media.meet-works.com/public/playground/cat-city/cat1.png" alt="CAT CityAllTech overview" />
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Stage and set design concepts were mapped to reflect the music and performance style. The planning also included designing the flow of the concert to create a cohesive and immersive experience.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Main Concert</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The main concert execution focused on delivering a seamless live performance. Production logistics, including sound, lighting, and stage management, were coordinated to meet professional standards. 
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame cat-city-showcase">
            <div className="cat-city-showcase-inner">
              <div className="cat-city-top-image">
                <img src="https://media.meet-works.com/public/playground/cat-city/cat2.png" alt="CAT CityAllTech detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Performers were guided through rehearsals and live execution to ensure artistic quality. Audience engagement was closely monitored to refine the timing and energy of the performance for maximum impact.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">curiosive Launch</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The Curiosive Launch involved introducing the project and its digital/physical platform to the public. Marketing strategies, including social media and promotional content, were developed to maximize reach.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame cat-city-showcase">
            <div className="cat-city-showcase-inner">
              <div className="cat-city-top-image">
                <img src="https://media.meet-works.com/public/playground/cat-city/cat3.png" alt="CAT CityAllTech detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Audience interaction was encouraged through both online engagement and live participation. The launch integrated creative storytelling with music production to create lasting impressions and build a community around the project.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
