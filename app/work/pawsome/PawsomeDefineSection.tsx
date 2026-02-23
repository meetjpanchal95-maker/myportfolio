"use client";

/**
 * Pawsome – Define & Affinity Mapping section
 * Recreated from Figma HTML with portfolio MM design tokens.
 * Hardcoded `#161B3C` → var(--MM7), `black` text → var(--MM2),
 * `#D1D1D3`/`#C5C5C5` → var(--MM2)/var(--MM3). Orange #FF8647 kept as brand.
 */
export default function PawsomeDefineSection() {
  const stickyStyle: React.CSSProperties = {
    width: 90,
    height: 90,
    position: "absolute",
    background: "var(--MM7)",
    boxShadow:
      "0px 0.4px 3.2px rgba(0,0,0,0.11), 0px 0px 1.2px rgba(0,0,0,0.21)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
    boxSizing: "border-box",
  };

  const stickyLgStyle: React.CSSProperties = {
    ...stickyStyle,
    width: 104,
    height: 104,
  };

  const stickyTextStyle: React.CSSProperties = {
    color: "var(--MM2)",
    fontSize: 10,
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 1.4,
    wordBreak: "break-word",
  };

  const stickyLgTextStyle: React.CSSProperties = {
    ...stickyTextStyle,
    fontSize: 11.55,
  };

  return (
    <div
      style={{
        width: "100%",
        display: "inline-flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 30,
      }}
    >
      {/* ── LEFT: Define ─────────────────────────────── */}
      <div
        style={{
          flex: "1 1 0",
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 30,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            alignSelf: "stretch",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                paddingRight: 10,
                backdropFilter: "blur(15px)",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  color: "var(--MM3)",
                  fontSize: 35,
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                }}
              >
                Define
              </span>
            </div>
          </div>
          <p
            style={{
              color: "var(--MM3)",
              fontSize: 16,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Since this project we were in touch with client remotely, whole UX
            Research Exercises were done using Miro.
          </p>
        </div>

        {/* Circle diagram */}
        <div style={{ alignSelf: "stretch", height: 500, position: "relative" }}>
          {/* Big circle */}
          <div
            style={{
              width: 500,
              height: 500,
              left: 65,
              top: 0,
              position: "absolute",
              borderRadius: 9999,
              border: "3px solid var(--MM2)",
            }}
          />

          {/* Sticky notes */}
          <div style={{ ...stickyStyle, left: 133, top: 138 }}>
            <span style={stickyTextStyle}>Full Compliance Visibility</span>
          </div>
          <div style={{ ...stickyStyle, left: 287, top: 107 }}>
            <span style={stickyTextStyle}>Faster Operations</span>
          </div>
          <div style={{ ...stickyStyle, left: 384, top: -9 }}>
            <span style={stickyTextStyle}>Transparent Pricing</span>
          </div>
          <div style={{ ...stickyStyle, left: 144, top: 272 }}>
            <span style={stickyTextStyle}>Communication Delays</span>
          </div>
          <div style={{ ...stickyLgStyle, left: 235, top: 387 }}>
            <span style={stickyLgTextStyle}>Unclear Shared responsibilities</span>
          </div>
          <div style={{ ...stickyLgStyle, left: 362, top: 342 }}>
            <span style={stickyLgTextStyle}>lack of qualified petmates</span>
          </div>
          <div style={{ ...stickyStyle, left: 399, top: 189 }}>
            <span style={stickyTextStyle}>Track progress</span>
          </div>
          <div style={{ ...stickyStyle, left: 505, top: 77 }}>
            <span style={stickyTextStyle}>Ensure Compliance</span>
          </div>
          <div style={{ ...stickyStyle, left: 533, top: 267 }}>
            <span style={stickyTextStyle}>Book</span>
          </div>

          {/* Dividing lines */}
          <div
            style={{
              width: 218,
              height: 0,
              left: 331,
              top: 223,
              position: "absolute",
              transform: "rotate(-46deg)",
              transformOrigin: "top left",
              outline: "1px solid var(--MM1)",
            }}
          />
          <div
            style={{
              width: 216,
              height: 0,
              left: 342,
              top: 271,
              position: "absolute",
              transform: "rotate(31deg)",
              transformOrigin: "top left",
              outline: "1px solid var(--MM1)",
            }}
          />

          {/* Arrow shape */}
          <div
            style={{
              width: 77,
              height: 80,
              left: 354,
              top: 290,
              position: "absolute",
              transform: "rotate(180deg)",
              transformOrigin: "top left",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 69,
                height: 69,
                left: 4,
                top: 6,
                position: "absolute",
                background: "var(--MM2)",
              }}
            />
            <div
              style={{
                width: 26,
                height: 25,
                left: 6,
                top: 28,
                position: "absolute",
                background: "var(--MM2)",
              }}
            />
          </div>

          {/* "Gain" label + decorative dots */}
          <span
            style={{
              left: 231,
              top: 95,
              position: "absolute",
              color: "var(--MM1)",
              fontSize: 15,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Gain
          </span>
          <div
            style={{
              width: 5,
              height: 5,
              left: 240,
              top: 115,
              position: "absolute",
              background: "var(--MM3)",
              borderRadius: 9999,
              border: "1px solid var(--MM2)",
            }}
          />
          <div
            style={{
              width: 5,
              height: 5,
              left: 248,
              top: 115,
              position: "absolute",
              background: "var(--MM3)",
              borderRadius: 9999,
              border: "1px solid var(--MM2)",
            }}
          />
          <div
            style={{
              width: 15,
              height: 15,
              left: 239,
              top: 112,
              position: "absolute",
              borderRadius: 9999,
              border: "1px solid var(--MM2)",
            }}
          />

          {/* "Pains" label + decorative dots */}
          <span
            style={{
              left: 277,
              top: 303,
              position: "absolute",
              color: "var(--MM1)",
              fontSize: 15,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Pains
          </span>
          <div
            style={{
              width: 5,
              height: 5,
              left: 286,
              top: 290,
              position: "absolute",
              background: "var(--MM3)",
              borderRadius: 9999,
              border: "1px solid var(--MM2)",
            }}
          />
          <div
            style={{
              width: 5,
              height: 5,
              left: 294,
              top: 290,
              position: "absolute",
              background: "var(--MM3)",
              borderRadius: 9999,
              border: "1px solid var(--MM2)",
            }}
          />
          <div
            style={{
              width: 15,
              height: 15,
              left: 285,
              top: 296,
              position: "absolute",
              borderRadius: 9999,
              border: "1px solid var(--MM2)",
            }}
          />

          {/* Hamburger lines */}
          {[224, 228, 232].map((top) => (
            <div
              key={top}
              style={{
                width: 19,
                height: 2,
                left: 507,
                top,
                position: "absolute",
                background: "var(--MM2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── RIGHT: Affinity mapping ───────────────────── */}
      <div
        style={{
          flex: "1 1 0",
          height: 692,
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 30,
        }}
      >
        {/* Title */}
        <div
          style={{
            alignSelf: "stretch",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              flex: "1 1 0",
              color: "var(--MM3)",
              fontSize: 35,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Affinity mapping
          </span>
        </div>

        {/* Two cards row */}
        <div
          style={{
            alignSelf: "stretch",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              flex: "1 1 0",
              height: 383,
              padding: 20,
              background: "var(--MM7)",
              overflow: "hidden",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 12,
              borderRadius: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              {/* Orange icon block */}
              <div
                style={{
                  padding: 10,
                  background: "#FF8647",
                  borderRadius: 10,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 35,
                    height: 35,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 32,
                      left: 6,
                      top: 1,
                      position: "absolute",
                      background: "white",
                    }}
                  />
                  <div
                    style={{
                      width: 7,
                      height: 12,
                      left: 14,
                      top: 8,
                      position: "absolute",
                      background: "white",
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  color: "var(--MM2)",
                  fontSize: 20,
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                }}
              >
                Themes identified
              </span>
            </div>
            <span
              style={{
                color: "var(--MM2)",
                fontSize: 16,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Map ICON
              <br />+ <br />
              Tinder Type swiping
              <br />+ <br />
              Instagram Stories
            </span>
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: "1 1 0",
              height: 383,
              padding: 20,
              background: "var(--MM7)",
              overflow: "hidden",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 12,
              borderRadius: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              {/* Orange icon block */}
              <div
                style={{
                  padding: 10,
                  background: "#FF8647",
                  borderRadius: 10,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 35,
                    height: 35,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      left: 10,
                      top: 12,
                      position: "absolute",
                      background: "white",
                    }}
                  />
                  <div
                    style={{
                      width: 23,
                      height: 23,
                      left: 5,
                      top: 7,
                      position: "absolute",
                      background: "white",
                    }}
                  />
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      left: 14,
                      top: 5,
                      position: "absolute",
                      background: "white",
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  color: "var(--MM2)",
                  fontSize: 20,
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                }}
              >
                Grouped Pain points
              </span>
            </div>
            <span
              style={{
                color: "var(--MM3)",
                fontSize: 14,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Petmate Training
              <br />+<br />
              Progress Petmates success
              <br />+<br />
              Pet happiness indicators
            </span>
          </div>
        </div>

        {/* Value Proposition Canvas */}
        <div
          style={{
            alignSelf: "stretch",
            padding: 30,
            background: "var(--MM7)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 12,
            borderRadius: 4,
          }}
        >
          <span
            style={{
              color: "var(--MM2)",
              fontSize: 32,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
          >
            Value proposition canvas
          </span>
          <p
            style={{
              color: "var(--MM3)",
              fontSize: 16,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Developed the Value Proposition Canvas by mapping user pains, gains,
            and needs against product features, ensuring Pawsome's offerings
            directly addressed core challenges and delivered clear user value.
          </p>
        </div>
      </div>
    </div>
  );
}
