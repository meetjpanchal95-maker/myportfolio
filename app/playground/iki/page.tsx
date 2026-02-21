import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./iki.css";

export const metadata = {
  title: "IKI Medium Grant",
  description: "Closely collaborated with two universities and NGOs to develop the IKI Medium Grant proposal, gaining valuable experience in governance and policy-making.",
  openGraph: {
    title: "IKI Medium Grant",
    description: "Closely collaborated with two universities and NGOs to develop the IKI Medium Grant proposal, gaining valuable experience in governance and policy-making.",
    url: "https://meetpanchal.com/playground/iki",
  },
};

export default function IkiPage() {
  return (
    <SectionShell title="IKI Medium Grant" subtitle="IKI Medium Grant" isProjectPage={true}>
      <main className="main iki-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape iki-hero-frame" style={{ background: "var(--MM8)" }}>
            <img
              src="/playground/iki/ikihero.png"
              className="iki-hero-img"
              alt="IKI Medium Grant hero"
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
            Proposal for IKI Medium Grant | Funding for capacity building | Project proposal | Think Tank
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Project Overview
            <br />
            Design Elements
            <br />
            Site Execution
          </div>
          <div className="muted-text">
            This proposal for the IKI Medium Grant focused on capacity building through collaboration between universities and NGOs.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">IKI GRANT</div>
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
            The project addressed governance and policy implementation challenges through structured training, stakeholder engagement, and institutional strengthening. Contributed to framing objectives, coordination strategies, and implementation logic. The proposal emphasized scalability, monitoring, and long-term impact, and was shortlisted for recognition, highlighting its relevance and alignment with international funding priorities.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2025</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Germany + India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Shortlisted</div>
            </div>
            <div>
              <div className="label">Organisations:</div>
              <div className="value">HTW Berlin, NIT Raipur, Vasudha Foundation</div>
              
            </div>
            <div>
              <div className="label">Team:</div>
              <div className="value">Sharon Jacob, Meet Panchal, Papon Kumar Dev</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">PROJECT CONCEPT</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The proposal focused on building institutional capacity through collaborative engagement with universities and NGOs. It aimed to address governance challenges and policy implementation gaps while fostering knowledge exchange and practical solutions for sustainable development.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame iki-showcase">
            <div className="iki-showcase-inner">
              
              <div className="iki-bottom-image">
                <img src="/playground/iki/iki1.png" alt="IKI Medium Grant detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The concept positioned capacity building as a systemic approach, connecting academic expertise, civil society, and policy frameworks to enhance impact and scalability.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Objectives</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Objectives centered on strengthening institutional capabilities, improving governance practices, and promoting cross-sector collaboration. The project emphasized measurable outcomes in knowledge transfer, training, and strategic support for local and regional initiatives.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame iki-showcase">
            <div className="iki-showcase-inner">
              <div className="iki-top-image">
                <img src="/playground/iki/iki2.png" alt="IKI Medium Grant detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Clear objectives guided actionable steps, ensuring the project contributed to long-term capacity development and practical policy solutions aligned with IKI funding priorities.
          </p>
        </section>
        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">OVERALL PROPOSAL</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The overall proposal presented a structured plan for collaboration, including stakeholder engagement, workshops, and monitoring frameworks. It highlighted the replicability and scalability of capacity-building interventions within governance and policy-making contexts.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame iki-showcase">
            <div className="iki-showcase-inner">
              <div className="iki-top-image">
                <img src="/playground/iki/iki3.png" alt="IKI Medium Grant detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Designed for recognition and impact, the proposal balances strategic planning, academic rigor, and practical implementation to deliver sustainable outcomes for institutional capacity enhancement.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
