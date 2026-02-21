import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./vida.css";

export const metadata = {
  title: "VIDA Bistro",
  description: "Collaborated closely with the client and branding team to develop a unique culinary destination, handling interior design, detailing, and brand identity to create a cohesive experience.",
  openGraph: {
    title: "VIDA Bistro",
    description: "Collaborated closely with the client and branding team to develop a unique culinary destination, handling interior design, detailing, and brand identity to create a cohesive experience.",
    url: "https://meetpanchal.com/playground/vida",
  },
};

export default function VidaPage() {
  return (
    <SectionShell title="VIDA Bistro" subtitle="VIDA Bistro" isProjectPage={true}>
      <main className="main vida-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape vida-hero-frame" style={{ height: "500px", background: "var(--MM8)" }}>
            <img
              src="/playground/vida/vidahero.png"
              className="vida-hero-img"
              alt="VIDA Bistro hero"
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
            Bistro and Fine Dine Restaurant | Design visualisation of the project | Interiors and branded environments 
          </div>
          <div style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}>
            Branding
            <br />
           Interior Design
            <br />
            Social Media Strategy
          </div>
          <div className="muted-text">
            VIDA is a bistro fine-dining concept developed through an integrated approach combining branding, interior design, and social media strategy.
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <div className="big-title">VIDA by Tatos'</div>
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
            The project focused on creating a cohesive dining experience that balances approachability with refinement. Visual identity, spatial atmosphere, and digital communication were aligned to reflect the restaurant’s positioning. The work resulted in a unified brand language, interior direction, and content strategy designed to support long-term recall and experiential consistency.
          </p>
          <div className="row-3" style={{ marginTop: "20px" }}>
            <div>
              <div className="label">Year:</div>
              <div className="value">2017</div>
              <div className="label" style={{ marginTop: "8px" }}>Location:</div>
              <div className="value">Goa, India</div>
              <div className="label" style={{ marginTop: "8px" }}>Status:</div>
              <div className="value">Completed</div>
            </div>
            <div>
              <div className="label">Design Agency:</div>
              <div className="value">Ar+A Associates</div>
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <div className="value">Arminio Ribeiro, Meet Panchal, Priyanka Kumari</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Branding</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            VIDA’s brand identity was designed to balance warmth and refinement, blending the relaxed spirit of a bistro with the elegance of fine dining. The visual language reflects sensory dining, human connection, and understated luxury.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame vida-showcase">
            <div className="vida-showcase-inner">
              <div className="vida-top-image">
                <img src="/playground/vida/vida1.png" alt="VIDA Bistro overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Typography, color, and tone were crafted to feel inviting yet premium, ensuring VIDA communicates sophistication without distance and comfort without losing its fine-dine character.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Interior Design</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            The interior design for VIDA translates the brand into space, using materiality, lighting, and spatial rhythm to create an immersive dining atmosphere. The environment supports slow dining, intimacy, and a seamless transition from casual to refined moments.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame vida-showcase">
            <div className="vida-showcase-inner">
              <div className="vida-row-pair">
                <div className="vida-top-image">
                  <video src="/playground/vida/vida2.1.mp4" autoPlay loop muted playsInline />
                </div>
                <div className="vida-top-image">
                  <video src="/playground/vida/vida2.2.mp4" autoPlay loop muted playsInline />
                </div>
              </div>
              <div className="vida-top-image">
                <img src="/playground/vida/vida3.png" alt="VIDA Bistro full" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Natural textures, controlled lighting, and thoughtful layouts were used to enhance mood, acoustics, and comfort, aligning the physical space with VIDA’s experiential dining philosophy.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="sub-title">Social Media Strategy</div>
          <p className="muted-text" style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}>
            VIDA’s social media strategy focuses on storytelling rather than promotion, highlighting food craftsmanship, ambience, and moments of experience. The content builds emotional recall, positioning VIDA as a destination rather than just a restaurant.
          </p>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame vida-showcase">
            <div className="vida-showcase-inner">
              <div className="vida-top-image">
                <video src="/playground/vida/vida4.mp4" autoPlay loop muted playsInline />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <p className="muted-text right" style={{ maxWidth: "50%", marginLeft: "auto" }}>
            Visual consistency, short-form videos, and narrative captions were used to communicate lifestyle, evoke appetite, and build a refined yet approachable digital presence.
          </p>
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
