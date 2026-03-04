import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./gcapital.css";
import Carousel from "../../../components/Carousel";

export const metadata = {
  title: "G-CAPITAL",
  description: "Product identity, business analysis, product prototype and dashboard design for G-Capital, a multi-asset investment platform.",
  openGraph: {
    title: "G-CAPITAL",
    description: "Product identity, business analysis, product prototype and dashboard design for G-Capital, a multi-asset investment platform.",
    url: "https://meetpanchal.com/work/gcapital",
  },
};

export default function GcapitalPage() {
  return (
    <SectionShell title="G-CAPITAL" subtitle="G-CAPITAL" isProjectPage={true}>
      <main className="main gcapital-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape gcapital-hero-frame">
          <video
              src="https://media.meet-works.com/public/projects/gcapital/gcapitalhero.mp4"
              className="gcapital-hero-media"
              style={{ width: "auto", height: "100%", objectFit: "contain" }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            Investment Platform |
Cypto - Commodities - Stocks
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Product Identity
            <br />
            Business Analysis
            <br />
            Product Prototype
             <br />
            Dashboard Design
            
          </div>
          <div className="muted-text">
            G Capital is a multi-asset investment platform for trading cryptocurrencies, commodities, and stocks.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">G-CAPITAL</div>
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
            
G Capital is an investment platform enabling access to cryptocurrencies, commodities, and stocks. The project focused on product identity, business analysis, product prototyping, and dashboard design, supporting clear positioning and an intuitive, data-driven user experience.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024- Ongoing</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">United States</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Ongoing</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">G Capital Global</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
               <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Lovish Gangwar, Meet Panchal, Sudama Yadav, Kunal Birade</div>
            </div>
          </div>
        </section>

       

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product identity</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Defined a distinctive product identity for G Capital Global and Digital by establishing visual language, tone, and design principles aligned with fintech credibility. The identity balanced trust, global ambition, and clarity across digital touchpoints to support long-term scalability.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <img src="https://media.meet-works.com/public/projects/gcapital/gcapital1.png" alt="G-Capital dashboard" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Created G Capital’s visual and brand identity, aligning design principles with fintech trust, global positioning, and clarity to ensure consistency across the platform.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">business analysis</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Conducted in-depth business analysis covering market positioning, user segments, revenue logic, and competitive landscape. Insights informed strategic decisions, feature prioritization, and alignment between business goals and the product’s functional direction.
          </p>
        </section>
        

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <div className="pawsome-flow">
                  <img
                    src="https://media.meet-works.com/public/projects/gcapital/gl1.svg"
                    alt="G-Capital flow (light)"
                    className="light-img"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <img
                    src="https://media.meet-works.com/public/projects/gcapital/gd1.svg"
                    alt="G-Capital flow (dark)"
                    className="dark-img"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Analyzed market context, user needs, and business objectives to guide strategic decisions and ensure the product roadmap aligned with G Capital’s financial vision. The analysis is conducted for MVP 1 which is G capital Global a commodities based investment platform
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Product Prototype</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Led product enhancement initiatives across app and web platforms, improving usability, information hierarchy, and workflow efficiency to support faster adoption, reduced friction, and consistent performance across diverse construction project scales.
          </p>
        </section>

        
        

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <div className="gcapital-carousel-bg" style={{ background: 'linear-gradient(135deg, #000103 0%, #000000 100%)', padding: '32px', borderRadius: '24px' }}>
                  <Carousel>
                    {[1,2,3,4,5,6].map(i => (
                      <img
                        key={i}
                        src={`https://media.meet-works.com/public/projects/gcapital/dd${i}.png`}
                        alt={`G-Capital Slide ${i}`}
                        className="gcapital-svg"
                        style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center' }}
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
             
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Enhanced app and web experiences by refining workflows, usability, and information structure, supporting faster adoption and improved operational efficiency.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Dashboard Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Designed the dashboard for G Capital Global as MVP 1, focusing on real-time asset visibility, portfolio insights, and usability. The project remains ongoing, with the dashboard evolving alongside product expansion and future feature rollouts.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame gcapital-showcase">
            <div className="gcapital-showcase-inner">
              <div className="gcapital-top-image">
                <img src="https://media.meet-works.com/public/projects/gcapital/gcapital2.png" alt="G-Capital dashboard" style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Designed MVP 1 dashboard for G Capital Global, enabling clear portfolio and asset insights. The project is ongoing, with continuous iterations planned as the platform scales.
          </p>
        </section>


        

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
