"use client";

import { motion } from "framer-motion";
import SectionShell from "../../../components/SectionShell";
import ContactUs from "../../../components/ContactUs";
import "./winter-school.css";

const charContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.012 },
  },
};

const charItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0 } },
};

function AnimatedChars({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.span
      className={className}
      style={{ ...style, display: "block", willChange: "opacity" }}
      variants={charContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      aria-hidden={false}
    >
      {text.split("").map((char, index) => (
        char === "\n" ? (
          <br key={index} />
        ) : (
          <motion.span key={index} variants={charItem}>
            {char}
          </motion.span>
        )
      ))}
    </motion.span>
  );
}

export default function WinterSchoolPage() {
  return (
    <SectionShell title="Winter School" subtitle="Winter School" isProjectPage={true}>
      <main className="main winter-school-main">
        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame landscape winter-school-hero-frame" style={{ background: "var(--MM8)" }}>
            <img
              src="https://media.meet-works.com/public/playground/winter-school/propshero.png"
              className="winter-school-hero-img"
              alt="Winter School hero"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars
            text={"Decoding Public affairs | Think tank |\nSocial Urban relationship | Post Occupancy Research"}
            className="font-montserrat"
            style={{ color: "var(--MM1)", fontSize: "14px", fontWeight: 500, lineHeight: "25px" }}
          />
          <AnimatedChars
            text={"Props Catalogue\nWall Panel and Showreel\nStreet Section and Conclusion"}
            style={{ color: "var(--MM3)", fontFamily: '"Source Code Pro", monospace', fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="This Project is collaborative research under CEPT University and Politechnico Milano for developing Urban Research Methodologies"
            className="muted-text"
          />
        </section>

        <div className="divider"></div>
        <section className="pad row-3">
          <AnimatedChars text="PROPS" className="big-title" />
          <AnimatedChars
            text="SCOPE"
            className="font-montserrat"
            style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
          <AnimatedChars
            text="ABOUT"
            className="font-montserrat"
            style={{ color: "var(--MM2)", fontSize: "16px", fontWeight: 700, lineHeight: "20px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text={"HYPOTHESIS: The props used in traditional way of living personalises the space fabricating collective activities\nPERSONALISATION: Lakhudi co Housing witnesses people living in a traditional way in a modern scenario, which gives a collective space that is influenced by the traditional way of living and is hence personalised."}
            className="muted-text"
          />
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
              <AnimatedChars
                text="Sachin Soni, Giulia Setti, Arian Afshari, Vaidehi Kanada"
                className="value"
              />
              <div className="label" style={{ marginTop: "8px" }}>&nbsp;</div>
              
            </div>
            <div>
              <div className="label">Project Team:</div>
              <AnimatedChars
                text="Diba Oncel, Meet Panchal, Maria Monacelli, Akanksha Balpande, Kanisha Panchal"
                className="value"
              />
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="Props Catalogue" className="sub-title" />
          <AnimatedChars
            text="A development analysis was conducted through deep engagement with the community’s daily lives, almost in the manner of creating a documentary. Profound questions were explored regarding the government-imposed transformation underway, alongside close observation of the difficult living conditions experienced by the community."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame winter-school-showcase">
            <div className="winter-school-showcase-inner">
              <div className="winter-school-top-image">
                <img src="https://media.meet-works.com/public/playground/winter-school/props1.png" alt="Winter School overview" />
              </div>
              
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The municipality struggled to provide basic necessities such as waste management, adequate public spaces, and sufficient lighting at night, among other challenges."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="wall panel and showreel" className="sub-title" />
          <AnimatedChars
            text="A development analysis was conducted through deep engagement with the community’s daily lives, almost like creating a documentary. A showreel into the lives of the Rabari community revealed how horizontal living once nurtured shared spaces."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame winter-school-showcase">
            <div className="winter-school-showcase-inner">
              <div className="winter-school-top-image">
                <img src="https://media.meet-works.com/public/playground/winter-school/props2.png" alt="Winter School detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="The collective identity, now replaced by vertical structures redefining belonging, this shift reveals the nuances of social reconstruction, as people navigate imposed change, reclaiming space through personal adaptation and resilience."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

         <div className="divider"></div>
        <section className="pad">
          <AnimatedChars text="street section and conclusion" className="sub-title" />
          <AnimatedChars
            text="Through documentation, it was observed how the Rabari community personalized their new spaces using simple props, turning subtle elements into courtyards, corridors into gathering spots, and thresholds into shared zones."
            className="muted-text"
            style={{ maxWidth: "50%", textAlign: "left", marginTop: "10px" }}
          />
        </section>

        <div className="divider"></div>
        <section className="pad">
          <div className="media-frame winter-school-showcase">
            <div className="winter-school-showcase-inner">
              <div className="winter-school-top-image">
                <img src="https://media.meet-works.com/public/playground/winter-school/props3.png" alt="Winter School detail" />
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>
        <section className="pad">
          <AnimatedChars
            text="Each object and activity became a quiet act of reclaiming identity, bridging the gap between the lost horizontality and the imposed verticality of their transformed lives."
            className="muted-text right"
            style={{ maxWidth: "50%", marginLeft: "auto" }}
          />
        </section>

        <div className="divider"></div>
      </main>
      <ContactUs />
    </SectionShell>
  );
}
