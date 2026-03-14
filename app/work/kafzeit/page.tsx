import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import SpendoNavButtons from "../../../components/SpendoNavButtons";
import VisitSiteButton from "../../../components/VisitSiteButton";
import "./kafzeit.css";

export const metadata = {
  title: "KAFZEIT",
  description: "Market research, experience design, brand consulting and digital store for Kafzeit, a coffee house concept in Berlin.",
  openGraph: {
    title: "KAFZEIT",
    description: "Market research, experience design, brand consulting and digital store for Kafzeit, a coffee house concept in Berlin.",
    url: "https://meetpanchal.com/work/kafzeit",
  },
};

export default function KafzeitPage() {
  return (
    <SectionShell title="KAFZEIT" subtitle="KAFZEIT" isProjectPage={true}>
      <main className="main kafzeit-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape spendo-hero-frame" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent' }}>
            {/* Visit Site button moved to Client Component */}
            <VisitSiteButton link="https://www.spendo.com" />
              <video
                src="https://media.meet-works.com/public/projects/kafzeit/kafzeithero.mp4"
                className="spendo-hero-media"
                autoPlay muted loop playsInline preload="auto"
                style={{ width: "auto", height: "500px", objectFit: "contain" }}
              />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
           Coffee House in Berlin | 
Business Consulting
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Market Research
            <br />
            Experience Design
            <br />
            Brand Consulting
            <br />
            Digital Store
          </div>
          <div className="muted-text">
            Kafzeit is immersive UX project for young founder in Berlin. The client vision is to create a brand that gives feeling of community
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">KAFZEIT</div>
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
            
Kafzeit, a coffee house in Berlin, involved business consulting to support market positioning and customer engagement. The scope covered market research, experience design, brand consulting, and the development of a digital store, contributing to informed decision-making, cohesive brand identity, and an enhanced customer journey across physical and online touchpoints.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2024</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Berlin, Germany</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">MVP 1 Delivered</div>
            </div>
            <div>
              <div className="label">Company:</div>
              <div className="value">Stackbuilder</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Meet Panchal, Sharon Jacobe</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Market research</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Researched Berlin’s specialty coffee landscape, consumer behavior, and operational models to identify gaps and opportunities. Findings supported a scalable café ecosystem concept tailored to local culture while remaining adaptable for future expansion.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame kafzeit-showcase">
            <div className="kafzeit-showcase-inner">
              <div className="kafzeit-top-image">
                <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit1.svg" alt="kafzeit" style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="kafzeit-bottom-image">
                <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit2.svg" alt="kafzeit" className="svg-theme" style={{ width: "100%", height: "auto" }} />
              </div>
                <div className="kafzeit-bottom-image">
                <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit3.svg" alt="kafzeit" className="svg-theme" style={{ width: "100%", height: "auto" }} />
              </div>
               <div className="construct360-side-by-side">
                  <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit4.svg" alt="CONSTRUCT360 data overview" className="c360-theme-svg" />
                  <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit5.png" alt="CONSTRUCT360 dashboard detail" />
                </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Analyzed Berlin’s coffee market, customer expectations, and existing models to inform a scalable and locally relevant business foundation for Kafzeit.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Experience Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            For the Kafzeit project, experience design shaped a warm, community-centered café environment. Customer journeys were mapped, key touchpoints were defined, and interactions were designed to balance digital convenience with in-store comfort.
          </p>
        </section>

       <div className="divider"></div>
        <section className="pad">
          <div className="media-frame digital-transformation-showcase" style={{ padding: "10px", height: "fit-content" }}>
            <div className="digital-transformation-showcase-inner" style={{ borderRadius: "20px", overflow: "hidden" }}>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit6.png" alt="Digital Transformation" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            By aligning spatial flow, service moments, and menu presentation with user needs, the experience framework influenced how guests moved, felt, and connected within the space, creating a cohesive and memorable atmosphere.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Brand Consulting</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Provided brand consulting to define positioning, values, and tone for Kafzeit. The approach established a clear identity that connects community, quality coffee, and long-term scalability within Berlin’s startup ecosystem.
          </p>
        </section>

       <div className="divider"></div>
        <section className="pad">
          <div className="media-frame digital-transformation-showcase" style={{ padding: "10px", height: "fit-content" }}>
            <div className="digital-transformation-showcase-inner" style={{ borderRadius: "20px", overflow: "hidden" }}>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit7.png" alt="Digital Transformation" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Defined Kafzeit’positioning and values by integrating community, quality, and rituals into a clear identity. The approach shapes brand voice and connection locally while supporting a scalable, sustainable coffee business.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Digital Strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            Conceptualized a digital store to support ordering, discovery, and future integrations. The platform was designed to extend the physical café experience while enabling operational flexibility and scalable digital growth.
          </p>
        </section>

       <div className="divider"></div>
        <section className="pad">
          <div className="media-frame digital-transformation-showcase" style={{ padding: "10px", height: "fit-content" }}>
            <div className="digital-transformation-showcase-inner" style={{ borderRadius: "20px", overflow: "hidden" }}>
              <div className="digital-transformation-top-image">
                <img src="https://media.meet-works.com/public/projects/kafzeit/kafzeit8.png" alt="Digital Transformation" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Designed a digital store concept to complement physical cafés, supporting ordering, discovery, and scalable digital expansion.
          </p>
        </section>

        <div className="divider"></div>
        <SpendoNavButtons previousLink="/work/unesco-chair" nextLink="/work/digital-transformation" />
      </main>
      <ContactUs />
    </SectionShell>
  );
}
