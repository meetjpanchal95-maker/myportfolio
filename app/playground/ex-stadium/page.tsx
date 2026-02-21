import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./ex-stadium.css";

export const metadata = {
  title: "Excelsior Stadium",
  description: "Selected for a week long Real Estate Pitch event at International Property Week, collaboratively redeveloping strategies for Excelsior Stadium with peers from diverse backgrounds.",
  openGraph: {
    title: "Excelsior Stadium",
    description: "Selected for a week long Real Estate Pitch event at International Property Week, collaboratively redeveloping strategies for Excelsior Stadium with peers from diverse backgrounds.",
    url: "https://meetpanchal.com/playground/ex-stadium",
  },
};

export default function ExStadiumPage() {
  return (
    <SectionShell title="Excelsior Stadium" subtitle="Excelsior Stadium" isProjectPage={true}>
      <main className="main ex-stadium-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape ex-stadium-hero-frame">
            <img
              src="/playground/ex-stadium/stadiumhero.png"
              className="ex-stadium-hero-img"
              alt="Excelsior Stadium hero"
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
            Excelsior Stadium, Rotterdam Redevelopment Project | International Property Week | Industry-Academia Collaboration
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Project Overview
            <br />
           Benchmarking and Proposal
            <br />
            Real-Estate Pitch
          </div>
          <div className="muted-text">
            Experience of how branding, positioning, and storytelling play a critical role in shaping successful international property developments.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">EXCELSIOR STADIUM</div>
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
            International Property Week provided a comprehensive view into the global real estate ecosystem, bringing together developers, investors, designers, and strategists from diverse markets.T Exposure to global benchmarks, emerging market trends, and cross-cultural perspectives reinforced the importance of strategic communication, visual clarity, and market-driven design in real estate projects operating at an international scale.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Program: </div>
              <div className="value">Rotterdam, Apr 2024</div>
              
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Host Organisations:</div>
              <div className="value">Stebru
HTW Berlin Uniersity, Rotterdam University</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Role:</div>
              <div className="value">Real Estate Strategy, Urban Redevelopment, Team Collaboration</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Project Overview</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The project overview articulated the vision, scale, and positioning of the development within its international context. Design intent, lifestyle narrative, and market relevance were clearly defined to establish a strong foundation for branding, strategy, and communication.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame ex-stadium-showcase">
            <div className="ex-stadium-showcase-inner">
              <div className="ex-stadium-top-image">
                <img src="/playground/ex-stadium/stadium1.png" alt="Excelsior Stadium overview" />
              </div>
              <div className="ex-stadium-bottom-image">
                <img src="/playground/ex-stadium/stadium2.png" alt="Excelsior Stadium detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            A concise overview aligned architectural ambition with market positioning, creating clarity for stakeholders and setting the direction for all downstream communication.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Benchmarking and proposal</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            A focused real estate strategy was shaped by understanding the target audience, market context, and project vision. Positioning, storytelling, and visual hierarchy were defined to strengthen the project’s value proposition and enhance its market appeal.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame ex-stadium-showcase">
            <div className="ex-stadium-showcase-inner">
              <div className="ex-stadium-top-image">
                <img src="/playground/ex-stadium/stadium3.png" alt="Excelsior Stadium detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Strategic positioning connected design intent with market expectations, enabling clear communication of value and differentiation within a competitive real estate landscape
          </p>
        </section>
        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Benchmarking and proposal</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The real estate pitch translated the project vision into a compelling narrative for investors, developers, and sales teams. Visual storytelling, renders, and structured messaging communicated value, lifestyle, and long-term potential across international markets.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame ex-stadium-showcase">
            <div className="ex-stadium-showcase-inner">
              <div className="ex-stadium-top-image">
                <img src="/playground/ex-stadium/stadium4.png" alt="Excelsior Stadium detail" />
              </div>
              <div className="ex-stadium-top-image">
                <img src="/playground/ex-stadium/stadium5.png" alt="Excelsior Stadium detail" />
              </div>
              
            </div>
          </div>
          
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
           Campaigns translated the project vision into engaging visual content, strengthening brand recall and supporting sales-driven communication.
          </p>
        </section>

      

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
