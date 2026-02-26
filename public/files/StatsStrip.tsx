import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "6+", label: "Years of Experience", icon: "◈" },
  { value: "8+", label: "Domains of Expertise", icon: "◉" },
  { value: "25+", label: "Projects Delivered", icon: "◆" },
  { value: "30+", label: "Crossdisciplinary collaboration", icon: "◎" },
  { value: "99%", label: "Client Satisfaction Rate", icon: "◐" },
];

function useCountUp(target: string, duration = 1800, start = false) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    if (isNaN(num)) { setDisplay(target); return; }
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const val = Math.round((num * current) / steps);
      setDisplay(`${val}${suffix}`);
      if (current >= steps) { setDisplay(target); clearInterval(timer); }
    }, stepTime);
    return () => clearInterval(timer);
  }, [start, target, duration]);

  return display;
}

function StatItem({ value, label, icon, delay, visible }: { value: string; label: string; icon: string; delay: number; visible: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(t);
    }
  }, [visible, delay]);
  const display = useCountUp(value, 1600, show);

  return (
    <div className={`stat-item ${show ? "visible" : ""}`}>
      <span className="stat-icon">{icon}</span>
      <span className="stat-value">{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --bg: var(--color-main-bg, #18191b);
          --surface: transparent;
          --border: var(--color-border, #272727);
          --accent: var(--color-text-primary, #f9fafb);
          --accent2: var(--color-text-accent, #565656);
          --text: var(--color-text-primary, #f9fafb);
          --muted: var(--color-text-muted, #777b84);
        }
        [data-theme="light"] {
          --bg: var(--color-main-bg, #eeeeee);
          --surface: transparent;
          --border: var(--color-border, #aeadb2);
          --accent: var(--color-text-primary, #32323e);
          --accent2: var(--color-text-accent, #aeadb2);
          --text: var(--color-text-primary, #32323e);
          --muted: var(--color-text-muted, #5b5b63);
        }

        .stats-strip {
          background: transparent;
          border: none;
          padding: 0;
          overflow: hidden;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        /* Removed ::before pseudo-element to eliminate background strip effect */

        .stats-inner {
          display: flex;
          align-items: stretch;
          max-width: 1400px;
          margin: 0 auto;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 20px;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          cursor: default;
        }

        /* Removed vertical separator between stat items for clarity */

        .stat-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-item:hover {
          background: var(--color-card-bg, #272727);
        }

        .stat-item:hover .stat-value {
          color: var(--color-text-primary, #f9fafb);
          text-shadow: none;
        }

        .stat-icon {
          font-size: 14px;
          color: var(--color-text-accent, #565656);
          margin-bottom: 6px;
          opacity: 0.7;
          letter-spacing: 0;
        }

        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 3.5vw, 52px);
          color: var(--color-text-primary, #f9fafb);
          line-height: 1;
          margin-bottom: 6px;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          letter-spacing: 1px;
        }

        .stat-label {
          font-family: var(--font-source-code-pro, 'Source Code Pro', monospace);
          font-size: clamp(10px, 1vw, 12px);
          color: var(--color-text-muted, #777b84);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
          line-height: 1.4;
          max-width: 120px;
        }

        @media (max-width: 768px) {
          .stats-inner {
            flex-wrap: wrap;
          }
          .stat-item {
            flex: 0 0 50%;
            padding: 24px 16px;
          }
          .stat-item:nth-child(2n)::after {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .stat-item {
            flex: 0 0 100%;
          }
          .stat-item::after { display: none !important; }
        }
      `}</style>



      <div className="stats-strip" ref={ref}>
        <div className="stats-inner">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 100} visible={visible} />
          ))}
        </div>
      </div>
    </>
  );
}
