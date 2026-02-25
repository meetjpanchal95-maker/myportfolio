import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "7+", label: "Years of Industry Experience", icon: "◈" },
  { value: "5+", label: "Domains of Expertise", icon: "◉" },
  { value: "50+", label: "Projects Delivered", icon: "◆" },
  { value: "100+", label: "Happy Clients", icon: "◎" },
  { value: "99%", label: "Client Satisfaction Rate", icon: "◐" },
];

function useCountUp(target, duration = 1800, start = false) {
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

function StatItem({ value, label, icon, delay, visible }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(t);
    }
  }, [visible, delay]);
  const display = useCountUp(value, 1600, show);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "36px 20px",
        position: "relative",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        background: hovered ? "rgba(232,255,71,0.04)" : "transparent",
        cursor: "default",
      }}
    >
      <span style={{ fontSize: 13, color: "#e8ff47", marginBottom: 8, opacity: 0.75 }}>{icon}</span>
      <span style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(36px, 3.5vw, 56px)",
        color: hovered ? "#e8ff47" : "#f0f0f0",
        lineHeight: 1,
        marginBottom: 8,
        letterSpacing: 1,
        transition: "color 0.3s ease",
        textShadow: hovered ? "0 0 30px rgba(232,255,71,0.4)" : "none",
      }}>{display}</span>
      <span style={{
        fontSize: 11,
        color: "#777",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
        lineHeight: 1.5,
        maxWidth: 110,
      }}>{label}</span>
    </div>
  );
}

export default function StatsStrip() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');`}</style>



      {/* Stats Strip */}
      <div
        ref={ref}
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "#111",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "repeating-linear-gradient(90deg, transparent, transparent 16.6%, rgba(255,255,255,0.03) 16.6%, rgba(255,255,255,0.03) 16.65%, transparent 16.65%, transparent 33.3%, rgba(255,255,255,0.03) 33.3%, rgba(255,255,255,0.03) 33.35%, transparent 33.35%, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 50.05%, transparent 50.05%)",
        }} />

        <div style={{ display: "flex", alignItems: "stretch", maxWidth: 1300, margin: "0 auto" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ flex: 1, borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <StatItem {...s} delay={i * 100} visible={visible} />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
