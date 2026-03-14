"use client";
import { useRouter } from "next/navigation";
import React from "react";


interface SpendoNavButtonsProps {
  previousLink: string;
  nextLink: string;
}

const SpendoNavButtons: React.FC<SpendoNavButtonsProps> = ({ previousLink, nextLink }) => {
  const router = useRouter();
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', margin: '32px 0 0 0', position: 'relative' }}>
      <button
        className="gcapital-visit-btn"
        style={{
          fontSize: '16.8px',
          fontFamily: 'Montserrat, Roboto, sans-serif',
          fontWeight: 600,
          padding: '8.4px 22.4px',
          borderRadius: '8px',
          background: 'var(--color-button-bg)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: 'none',
          outline: '1px solid currentColor',
          outlineOffset: '2px',
          cursor: 'pointer',
          transition: 'background 0.18s, transform 0.14s',
          textDecoration: 'none',
          display: 'inline-block',
          zIndex: 10,
          marginLeft: '100px',
        }}
        onClick={() => router.push(previousLink)}
        onMouseOver={e => { e.currentTarget.style.background = 'var(--color-button-bg-hover)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
        onMouseOut={e => { e.currentTarget.style.background = 'var(--color-button-bg)'; e.currentTarget.style.transform = 'scale(1)'; }}
        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
        onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
      >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Left arrow icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', color: 'inherit' }}>
              <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="gcapital-visit-btn-text" style={{ fontSize: '16.8px' }}>Previous</span>
          </span>
      </button>
      <button
        className="gcapital-visit-btn"
        style={{
          fontSize: '16.8px',
          fontFamily: 'Montserrat, Roboto, sans-serif',
          fontWeight: 600,
          padding: '8.4px 22.4px',
          borderRadius: '8px',
          background: 'var(--color-button-bg)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          border: 'none',
          outline: '1px solid currentColor',
          outlineOffset: '2px',
          cursor: 'pointer',
          transition: 'background 0.18s, transform 0.14s',
          textDecoration: 'none',
          display: 'inline-block',
          zIndex: 10,
          marginRight: '100px',
        }}
        onClick={() => router.push(nextLink)}
        onMouseOver={e => { e.currentTarget.style.background = 'var(--color-button-bg-hover)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
        onMouseOut={e => { e.currentTarget.style.background = 'var(--color-button-bg)'; e.currentTarget.style.transform = 'scale(1)'; }}
        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
        onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
      >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="gcapital-visit-btn-text" style={{ fontSize: '16.8px' }}>Next</span>
            {/* Right arrow icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', color: 'inherit' }}>
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
      </button>
    </div>
  );
};

export default SpendoNavButtons;
