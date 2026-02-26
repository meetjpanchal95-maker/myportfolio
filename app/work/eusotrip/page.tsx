"use client";

import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./eusotrip.css";
import Carousel from '../../../components/Carousel';

export default function EusotripPage() {
  return (
    <SectionShell title="EUSOTRIP" subtitle="EUSOTRIP" isProjectPage={true}>
      <main className="main eusotrip-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape eusotrip-hero-frame">
            <video
              src="/projects/eusotrip/eusohero.mp4"
              className="eusotrip-hero-media"
              alt="EUSOTRIP hero"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              autoPlay
              loop
              muted
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          >
            HazMat Logistics | Digital Platform | B2B industrial logistics solution 
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Product Visuals
            <br />
            Investor Pitch
            <br />
            UI Flow
            <br />
            Prototype Design
          </div>
          
          <div className="muted-text">
            Eusotrip is a logistics solution for hazardous materials in the B2B industries for USA. This platforms connects B2B logistics partners for their business operations 
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">EUSOTRIP</div>
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
           
Focused on creating a unified and impactful project experience, developed a cohesive framework integrating visual identity, investor pitch, user flows, and prototypes. Each component was designed to enhance clarity, engagement, and user experience while reflecting the project’s strategic vision.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2022-24</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">USA</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Client:</div>
              <div className="value">Eusorone Technologies</div>
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
          <div className="sub-title">Product Visuals</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The visual identity blends modernity with efficiency, reflecting cutting-edge logistics solutions. Clean lines, bold typography, and a consistent color palette convey trust, innovation, and reliability across digital and print platforms.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
              <div className="eusotrip-top-image" style={{ height: '650px', overflow: 'auto', width: '100%', border: '3px solid var(--svg-border-color)', boxSizing: 'border-box', background: '#000' }}>
                <img src="/projects/eusotrip/1.png" alt="EUSOTRIP overview" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              
              <div className="eusotrip-bottom-image">
                <img src="/projects/eusotrip/euso1.png" alt="EUSOTRIP bottom" className="eusotrip-svg" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
           Designed product visuals for EuroTrip, a hazmat logistics platform focused on compliance and operational control. Created a real-time dashboard, guided shipment workflow, live tracking interface, and documentation module, emphasizing safety-first UX, regulatory clarity, and efficient cross-border hazardous material transport management.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Investor Pitch</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
           The investor pitch emphasizes unique B2B logistics solutions, a scalable business model, and market growth potential. Clear KPIs, revenue projections, and case studies highlight opportunities and strategic investment value.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
             <div className="eusotrip-top-image" style={{ height: '650px', overflow: 'auto', width: '100%', border: '3px solid var(--svg-border-color)', boxSizing: 'border-box', background: '#000' }}>
                <img src="/projects/eusotrip/2.png" alt="EUSOTRIP overview" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The pitch presents scalable logistics solutions, market potential, and ROI, using clear metrics and case studies to demonstrate a compelling and credible investment opportunity.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">UI Flow</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
           Designed and integrated two primary user flows within a bidding-based logistics platform where drivers and service providers compete for jobs. Structured the system so that information between both flows is interdependent, ensuring seamless coordination and decision making.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
            <div className="eusotrip-bottom-image">
                <img src="/projects/eusotrip/3.svg" alt="EUSOTRIP bottom" className="eusotrip-svg" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The user flow ensures seamless onboarding, shipment tracking, and real-time updates, prioritizing efficiency and accuracy for logistics operations and partner interactions.
          </p>
        </section>

         <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">UI Flow</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
           Designed and integrated two primary user flows within a bidding-based logistics platform where drivers and service providers compete for jobs. Structured the system so that information between both flows is interdependent, ensuring seamless coordination and decision making.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame eusotrip-showcase">
            <div className="eusotrip-showcase-inner">
            <div className="wastetoenergy-top-image">
              <Carousel>
                <img src="/projects/eusotrip/d.svg" alt="EUSOTRIP Slide 1" className="eusotrip-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }} />
                <img src="/projects/eusotrip/d2.svg" alt="EUSOTRIP Slide 2" className="eusotrip-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }} />
                <img src="/projects/eusotrip/d3.svg" alt="EUSOTRIP Slide 3" className="eusotrip-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }} />
                <img src="/projects/eusotrip/d4.svg" alt="EUSOTRIP Slide 4" className="eusotrip-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }} />
                <img src="/projects/eusotrip/d5.svg" alt="EUSOTRIP Slide 5" className="eusotrip-svg" style={{ marginTop: '20px', borderRadius: '20px', width: '100%', height: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }} />
              </Carousel>
            </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            The user flow ensures seamless onboarding, shipment tracking, and real-time updates, prioritizing efficiency and accuracy for logistics operations and partner interactions.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
