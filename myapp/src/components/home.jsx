import { useEffect, useState } from "react";

/*
  Vikshana Matrimony — Animated Welcome Page
  ============================================
  Exact recreation of the screenshot/video:
  - Deep maroon/dark-burgundy radial gradient background
  - Large softly-glowing translucent circle in centre
  - Floating coloured particles (dots) drifting across the screen
  - Sparkle / 4-pointed star icon at top-centre
  - "WELCOME TO" small caps text
  - "Vikshana Matrimony" large golden serif heading
  - "Waiting for Someone Special...!" italic gold subtext
  - "WHERE HEARTS FIND HOME 💝" spaced-letter tagline
  - Three heart ornament divider at bottom
  - Golden horizontal rule lines flanking the star & hearts
  - Staggered entrance animations for all text elements
  - Fully responsive (mobile + desktop)
*/

// ─── Particle data ───────────────────────────────────────────────────────────
function randomBetween(a, b) { return a + Math.random() * (b - a); }

const PARTICLE_COLORS = [
  "#f5a623", "#e8855a", "#d4547a", "#c94080",
  "#f0c040", "#e06080", "#b03060", "#e8a040",
];

function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: randomBetween(0, 100),          // vw %
    y: randomBetween(0, 100),          // vh %
    size: randomBetween(3, 9),
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    duration: randomBetween(8, 22),    // animation duration seconds
    delay: randomBetween(0, 10),       // animation delay seconds
    driftX: randomBetween(-120, 120),  // px horizontal drift
    driftY: randomBetween(-100, -200), // px upward drift (negative = up)
    opacity: randomBetween(0.5, 1),
  }));
}

const PARTICLES = generateParticles(45);

// ─── Single floating particle ────────────────────────────────────────────────
function Particle({ p }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${p.x}%`,
        top: `${p.y}%`,
        width: p.size,
        height: p.size,
        borderRadius: "50%",
        background: p.color,
        boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
        opacity: 0,
        animation: `floatParticle ${p.duration}s ${p.delay}s ease-in-out infinite`,
        "--drift-x": `${p.driftX}px`,
        "--drift-y": `${p.driftY}px`,
        "--start-opacity": p.opacity,
        pointerEvents: "none",
      }}
    />
  );
}

// ─── 4-pointed sparkle star SVG ──────────────────────────────────────────────
function Sparkle({ size = 24, color = "#f5a623" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill={color}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function VikshanaMatrimony() {
  const [phase, setPhase] = useState(0);
  // Staggered text reveal: phase 0=hidden, increments to reveal each element

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),   // star + lines
      setTimeout(() => setPhase(2), 700),   // WELCOME TO
      setTimeout(() => setPhase(3), 1100),  // Vikshana Matrimony
      setTimeout(() => setPhase(4), 1600),  // italic subtitle
      setTimeout(() => setPhase(5), 2000),  // tagline
      setTimeout(() => setPhase(6), 2400),  // heart divider
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* ── Global styles & keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Cinzel:wght@400;600&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        body, html {
          width: 100%; height: 100%;
          overflow: hidden;
          background: #1a0010;
        }

        /* Floating particle animation */
        @keyframes floatParticle {
          0%   { transform: translate(0, 0) scale(1);   opacity: 0; }
          10%  { opacity: var(--start-opacity); }
          80%  { opacity: var(--start-opacity); }
          100% {
            transform: translate(var(--drift-x), var(--drift-y)) scale(0.4);
            opacity: 0;
          }
        }

        /* Pulsing glow ring */
        @keyframes pulseRing {
          0%, 100% { opacity: 0.18; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.28; transform: translate(-50%, -50%) scale(1.03); }
        }

        /* Sparkle spin */
        @keyframes sparkleSpin {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.3); }
          100% { transform: rotate(360deg) scale(1); }
        }

        /* Heart beat */
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          30%      { transform: scale(1.25); }
          60%      { transform: scale(0.95); }
        }

        /* Shimmer on the golden title */
        @keyframes shimmerGold {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* Fade + rise entrance */
        @keyframes fadeRise {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Fade in only */
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Line expand */
        @keyframes expandLine {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        .fade-rise { animation: fadeRise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .fade-in   { animation: fadeIn  0.8s ease both; }
      `}</style>

      {/* ── Root container ── */}
      <div style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, #3d0a22 0%, #2a0618 30%, #180310 60%, #0d0108 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Cinzel', serif",
      }}>

        {/* ── Particles layer ── */}
        {PARTICLES.map(p => <Particle key={p.id} p={p} />)}

        {/* ── Large glowing circle (the soft ring behind content) ── */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "min(70vw, 620px)",
          height: "min(70vw, 620px)",
          borderRadius: "50%",
          border: "1px solid rgba(200, 120, 60, 0.25)",
          boxShadow: "inset 0 0 120px rgba(180, 60, 80, 0.12), 0 0 80px rgba(180, 60, 80, 0.08)",
          background: "radial-gradient(circle, rgba(120,20,50,0.18) 0%, transparent 70%)",
          animation: "pulseRing 5s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* ── Secondary inner glow ── */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(45vw, 400px)",
          height: "min(45vw, 400px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,80,80,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* ── Centre content ── */}
        <div style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
          width: "100%",
          maxWidth: 900,
        }}>

          {/* Star + horizontal lines */}
          {phase >= 1 && (
            <div className="fade-in" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}>
              <div style={{
                height: 1,
                width: "clamp(40px, 8vw, 90px)",
                background: "linear-gradient(to right, transparent, #c8862a)",
                animation: "expandLine 0.6s ease both",
              }} />
              <div style={{ animation: "sparkleSpin 6s linear infinite" }}>
                <Sparkle size={22} color="#f5c040" />
              </div>
              <div style={{
                height: 1,
                width: "clamp(40px, 8vw, 90px)",
                background: "linear-gradient(to left, transparent, #c8862a)",
                animation: "expandLine 0.6s ease both",
              }} />
            </div>
          )}
           <img
      src="/photos/logo.png"
      alt="Sri Lakshmi Venkateswara Matrimony"
      style={{
        width: "10%",
        height: "10%",
        objectFit: "contain",
      }}
    />

          {/* WELCOME TO */}
          {phase >= 2 && (
            <p className="fade-rise" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.75rem, 2.2vw, 1.05rem)",
              letterSpacing: "0.35em",
              color: "rgba(220, 180, 130, 0.85)",
              textTransform: "uppercase",
              marginBottom: "0.4rem",
              fontWeight: 400,
            }}>
              WELCOME TO
            </p>
          )}

          {/* Vikshana Matrimony — main golden title */}
          {phase >= 3 && (
            <h1 className="fade-rise" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 9vw, 6.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "0.6rem",
              letterSpacing: "-0.01em",
              background: "linear-gradient(135deg, #f5c842 0%, #e8a020 25%, #fde080 50%, #c87820 75%, #f5c842 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmerGold 4s linear infinite",
              textShadow: "none",
              filter: "drop-shadow(0 0 30px rgba(240,160,30,0.35))",
            }}>
              S L V Matrimony
            </h1>
          )}

          {/* Waiting for Someone Special */}
          {phase >= 4 && (
            <p className="fade-rise" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 3vw, 1.45rem)",
              color: "#e8b060",
              marginBottom: "0.5rem",
              letterSpacing: "0.04em",
              fontWeight: 400,
            }}>
              Waiting for Someone Special...!
            </p>
          )}

          {/* WHERE HEARTS FIND HOME */}
          {phase >= 5 && (
            <p className="fade-rise" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.6rem, 1.8vw, 0.82rem)",
              letterSpacing: "0.4em",
              color: "rgba(210, 160, 110, 0.75)",
              textTransform: "uppercase",
              marginBottom: "1.4rem",
            }}>
              WHERE HEARTS FIND HOME&nbsp;&nbsp;💝
            </p>
          )}

          {/* Heart ornament divider */}
          {phase >= 6 && (
            <div className="fade-in" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
            }}>
              <div style={{
                height: 1,
                width: "clamp(30px, 6vw, 70px)",
                background: "linear-gradient(to right, transparent, #c8862a)",
              }} />
              {["❤️", "❤️", "❤️"].map((h, i) => (
                <span key={i} style={{
                  fontSize: "clamp(0.8rem, 2vw, 1rem)",
                  animation: `heartBeat 1.8s ease-in-out ${i * 0.25}s infinite`,
                  display: "inline-block",
                  filter: "hue-rotate(310deg) saturate(1.4)",
                }}>
                  {h}
                </span>
              ))}
              <div style={{
                height: 1,
                width: "clamp(30px, 6vw, 70px)",
                background: "linear-gradient(to left, transparent, #c8862a)",
              }} />
            </div>
          )}

        </div>{/* end centre content */}

        {/* ── Bottom-right subtle vignette ── */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5,0,8,0.55) 100%)",
          pointerEvents: "none",
        }} />

      </div>
    </>
  );
}