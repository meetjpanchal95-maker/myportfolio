"use client";
import styles from "./VisitSiteButton.module.css";
import { motion } from "framer-motion";

interface VisitSiteButtonProps {
  link: string;
}

const VisitSiteButton: React.FC<VisitSiteButtonProps> = ({ link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`gcapital-visit-btn ${styles["visit-site-btn"]}`}
    style={{
      fontSize: "16.8px",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: 600,
      padding: "8.4px 12px",
      borderRadius: "10px",
      background: "var(--color-button-bg)",
      border: "1px solid var(--color-text-primary)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      cursor: "pointer",
      transition: "background 0.18s, transform 0.14s",
      textDecoration: "none",
      display: "inline-block",
      position: "absolute",
      bottom: "16px",
      right: "16px",
      zIndex: 10,
    }}
    onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
    onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
    onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 320, damping: 24, duration: 0.9 }}
    viewport={{ once: false, amount: 0.5 }}
  >
    <span className="gcapital-visit-btn-text" style={{ fontSize: "11.76px", display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', fontFamily: 'Source Code Pro, monospace' }}>
      Visit Site
      <svg className={styles["visit-site-arrow"]} width="19.6" height="12.6" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', color: 'currentColor' }}>
        <line x1="7" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth="2" />
        <path d="M18 4L23 9L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </motion.a>
);

export default VisitSiteButton;
