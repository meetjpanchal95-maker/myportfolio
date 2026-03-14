"use client";
import React from "react";

interface VisitSiteButtonProps {
  link: string;
}

const VisitSiteButton: React.FC<VisitSiteButtonProps> = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="gcapital-visit-btn"
    style={{
      fontSize: "16.8px",
      fontFamily: "Montserrat, Roboto, sans-serif",
      fontWeight: 600,
      padding: "8.4px 22.4px",
      borderRadius: "8px",
      background: "var(--color-button-bg)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      border: "none",
      cursor: "pointer",
      transition: "background 0.18s, transform 0.14s",
      textDecoration: "none",
      display: "inline-block",
      position: "absolute",
      bottom: "16px",
      right: "16px",
      zIndex: 10,
    }}
    onMouseOver={e => { e.currentTarget.style.background = 'var(--color-button-bg-hover)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
    onMouseOut={e => { e.currentTarget.style.background = 'var(--color-button-bg)'; e.currentTarget.style.transform = 'scale(1)'; }}
    onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
    onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
  >
    <span className="gcapital-visit-btn-text" style={{ fontSize: "16.8px" }}>Visit Site</span>
  </a>
);

export default VisitSiteButton;
