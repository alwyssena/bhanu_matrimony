// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
// const navigate = useNavigate();

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post("http://localhost:5000/api/auth/login", form);
//     localStorage.setItem("token", res.data.token);
//     navigate("/home");
//     alert("Login successful");
    
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./login.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post("http://localhost:5000/api/auth/login", form);
//     localStorage.setItem("token", res.data.token);
//     navigate("/home");
//     alert("Login successful");
//   };

//   return (
//     <div className="login-page">

//       {/* Overlay */}
//       <div className="overlay">

//         <div className="login-card">
//           <h2>Welcome Back 💖</h2>
//           <p>Find your perfect life partner</p>

//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Email or Phone number"
//               onChange={(e) =>
//                 setForm({ ...form, email: e.target.value })
//               }
//               required
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) =>
//                 setForm({ ...form, password: e.target.value })
//               }
//               required
//             />

//             <button type="submit">Sign In ❤️</button>
//           </form>

//           <div className="links">
//             <span>Forgot Password?</span>
//             <span onClick={() => navigate("/register")}>
//               Don’t have an account? <b>Register</b>
//             </span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

/* ============================================================
   VIKSHANA MATRIMONY — Animated Login Page
   ✅ ALL original logic preserved exactly:
      - form state { email, password }
      - axios.post to /api/auth/login
      - localStorage.setItem("token")
      - navigate("/home")
      - alert("Login successful")
   ✅ Added: stunning animations, particles, glassmorphism UI
   ============================================================ */

// ── Floating particles background ────────────────────────────
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    color: ["#f5c030", "#e8855a", "#d4547a", "#f472b6", "#fde080"][i % 5],
    dur: Math.random() * 14 + 8,
    delay: Math.random() * 10,
    dx: (Math.random() - 0.5) * 140,
    dy: -(Math.random() * 160 + 60),
    op: Math.random() * 0.6 + 0.3,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute",
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: p.color,
          boxShadow: `0 0 ${p.size * 2.5}px ${p.color}`,
          opacity: 0,
          animation: `floatP ${p.dur}s ${p.delay}s ease-in-out infinite`,
          "--dx": `${p.dx}px`,
          "--dy": `${p.dy}px`,
          "--op": p.op,
        }} />
      ))}
    </div>
  );
}

// ── Sparkle SVG ───────────────────────────────────────────────
function Sparkle({ size = 18, color = "#f5c030" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z"
        fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    </svg>
  );
}

// ── Rotating ring decoration ──────────────────────────────────
function RingDecor({ size, borderColor, duration, reverse = false }) {
  return (
    <div style={{
      position: "absolute", left: "50%", top: "50%",
      width: size, height: size,
      borderRadius: "50%",
      border: `1px dashed ${borderColor}`,
      transform: "translate(-50%, -50%)",
      animation: `${reverse ? "spinReverse" : "spin"} ${duration}s linear infinite`,
      pointerEvents: "none",
    }} />
  );
}

// ── Main Login Component ──────────────────────────────────────
export default function Login() {
  // ── ORIGINAL STATE — untouched ──
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // ── UI state (additions only) ──
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [shake, setShake] = useState(false);
  const [ripple, setRipple] = useState(false);

  useEffect(() => {
    // Staggered mount animation
    setTimeout(() => setMounted(true), 80);
  }, []);

  // ── ORIGINAL SUBMIT — untouched logic, added loading/error UI ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRipple(true);
    setTimeout(() => setRipple(false), 600);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
      alert("Login successful");
    } catch (err) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Global CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,600&family=Nunito:wght@400;500;600;700;800&family=Cinzel:wght@400;600&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { height: 100%; }
        body { overflow: hidden; }

        @keyframes floatP {
          0%   { transform: translate(0,0) scale(1); opacity: 0; }
          10%  { opacity: var(--op); }
          85%  { opacity: var(--op); }
          100% { transform: translate(var(--dx), var(--dy)) scale(0.3); opacity: 0; }
        }
        @keyframes spin        { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(360deg);  } }
        @keyframes spinReverse { from { transform: translate(-50%,-50%) rotate(0deg);   } to { transform: translate(-50%,-50%) rotate(-360deg); } }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 30px rgba(212,146,42,0.2), 0 0 80px rgba(139,26,58,0.15); }
          50%     { box-shadow: 0 0 50px rgba(212,146,42,0.4), 0 0 120px rgba(139,26,58,0.3); }
        }
        @keyframes heartFloat {
          0%   { transform: translateY(0) scale(1); opacity: 0.7; }
          50%  { transform: translateY(-12px) scale(1.15); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
        @keyframes sparkleSpin {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.4); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%     { transform: translateX(-8px); }
          40%     { transform: translateX(8px); }
          60%     { transform: translateX(-5px); }
          80%     { transform: translateX(5px); }
        }
        @keyframes rippleOut {
          0%   { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes spin360 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes bgShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px rgba(61,8,24,0.95) inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      `}</style>

      {/* ── Root wrapper ── */}
      <div style={{
        position: "relative",
        width: "100vw", height: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse 120% 120% at 30% 20%, #3d0a22 0%, #220514 40%, #0d0108 100%)",
      }}>

        {/* Animated gradient shimmer layer */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #2a0618, #4a0d20, #1a0310, #3d0a22, #1a0310)",
          backgroundSize: "400% 400%",
          animation: "bgShimmer 12s ease infinite",
          opacity: 0.6,
          pointerEvents: "none",
        }} />

        {/* Floating particles */}
        <Particles />

        {/* Big ambient glow circles */}
        <div style={{ position: "absolute", left: "10%", top: "15%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,84,122,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "8%", bottom: "10%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,192,48,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* ── Main card ── */}
        <div style={{
          position: "relative",
          width: "100%", maxWidth: 440,
          margin: "0 1.5rem",
          animation: mounted ? "slideUp 0.75s cubic-bezier(0.22,1,0.36,1) both" : "none",
          animationDelay: "0.1s",
        }}>

          {/* Rotating decorative rings behind card */}
          <div style={{ position: "absolute", inset: "-40px", pointerEvents: "none" }}>
            <RingDecor size={520} borderColor="rgba(212,146,42,0.12)" duration={30} />
            <RingDecor size={440} borderColor="rgba(212,84,122,0.1)" duration={22} reverse />
            <RingDecor size={360} borderColor="rgba(245,192,48,0.08)" duration={40} />
          </div>

          {/* Glass card */}
          <div style={{
            position: "relative",
            background: "rgba(30,4,14,0.82)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(212,146,42,0.3)",
            borderRadius: 20,
            padding: "2.8rem 2.5rem",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
            animation: "pulseGlow 4s ease-in-out infinite",
            animationDelay: shake ? "0s" : undefined,
            ...(shake ? { animation: "shake 0.5s ease both" } : {}),
          }}>

            {/* ── Card top decoration ── */}
            <div style={{
              textAlign: "center", marginBottom: "2rem",
              animation: mounted ? "fadeInDown 0.7s ease 0.3s both" : "none",
            }}>
              {/* Logo icon */}
              <div style={{
                width: 68, height: 68, borderRadius: "50%",
                background: "linear-gradient(135deg, #8b1a3a, #c43060, #d97706)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1rem",
                boxShadow: "0 0 0 3px rgba(212,146,42,0.25), 0 0 30px rgba(212,146,42,0.3)",
                animation: "heartFloat 3s ease-in-out infinite",
                fontSize: "1.9rem",
              }}>💍</div>

              {/* Brand name */}
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.6rem", fontWeight: 900,
                lineHeight: 1.1, marginBottom: "0.3rem",
              }}>
                <span style={{ color: "#f5c030" }}>S L V</span>{" "}
                <span style={{ color: "#fff" }}>Matrimony</span>
              </h1>

              {/* Divider with sparkle */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <div style={{ height: 1, width: 50, background: "linear-gradient(to right, transparent, #d4922a)", animation: "lineExpand 0.8s ease 0.6s both", transformOrigin: "right" }} />
                <div style={{ animation: "sparkleSpin 5s linear infinite" }}>
                  <Sparkle size={14} color="#f5c030" />
                </div>
                <div style={{ height: 1, width: 50, background: "linear-gradient(to left, transparent, #d4922a)", animation: "lineExpand 0.8s ease 0.6s both", transformOrigin: "left" }} />
              </div>

              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.62rem", letterSpacing: "0.25em",
                color: "rgba(212,146,42,0.7)", textTransform: "uppercase",
              }}>Welcome Back</p>
            </div>

            {/* ── FORM — original logic, beautiful UI ── */}
            <form onSubmit={handleSubmit}>

              {/* Email input */}
              <div style={{
                marginBottom: "1rem",
                animation: mounted ? "slideUp 0.6s ease 0.45s both" : "none",
              }}>
                <label style={{
                  display: "block",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem", letterSpacing: "0.18em",
                  color: emailFocus ? "#f5c030" : "rgba(212,146,42,0.65)",
                  textTransform: "uppercase", marginBottom: "0.5rem",
                  transition: "color 0.3s",
                }}>Email Address</label>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.7rem",
                  background: emailFocus ? "rgba(212,146,42,0.08)" : "rgba(255,255,255,0.04)",
                  border: `1.5px solid ${emailFocus ? "rgba(245,192,48,0.6)" : "rgba(212,146,42,0.25)"}`,
                  borderRadius: 10, padding: "0.75rem 1rem",
                  transition: "all 0.3s ease",
                  boxShadow: emailFocus ? "0 0 0 3px rgba(245,192,48,0.1), 0 0 20px rgba(245,192,48,0.15)" : "none",
                }}>
                  <span style={{ fontSize: "1rem", opacity: 0.7 }}>✉️</span>
                  {/* ORIGINAL INPUT — only added styling props */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    required
                    style={{
                      flex: 1, background: "transparent", border: "none", outline: "none",
                      fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem",
                      color: "#fff", letterSpacing: "0.02em",
                    }}
                  />
                </div>
              </div>

              {/* Password input */}
              <div style={{
                marginBottom: "1.5rem",
                animation: mounted ? "slideUp 0.6s ease 0.55s both" : "none",
              }}>
                <label style={{
                  display: "block",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem", letterSpacing: "0.18em",
                  color: passFocus ? "#f5c030" : "rgba(212,146,42,0.65)",
                  textTransform: "uppercase", marginBottom: "0.5rem",
                  transition: "color 0.3s",
                }}>Password</label>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.7rem",
                  background: passFocus ? "rgba(212,146,42,0.08)" : "rgba(255,255,255,0.04)",
                  border: `1.5px solid ${passFocus ? "rgba(245,192,48,0.6)" : "rgba(212,146,42,0.25)"}`,
                  borderRadius: 10, padding: "0.75rem 1rem",
                  transition: "all 0.3s ease",
                  boxShadow: passFocus ? "0 0 0 3px rgba(245,192,48,0.1), 0 0 20px rgba(245,192,48,0.15)" : "none",
                }}>
                  <span style={{ fontSize: "1rem", opacity: 0.7 }}>🔒</span>
                  {/* ORIGINAL INPUT — only added styling props */}
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    onFocus={() => setPassFocus(true)}
                    onBlur={() => setPassFocus(false)}
                    required
                    style={{
                      flex: 1, background: "transparent", border: "none", outline: "none",
                      fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem",
                      color: "#fff", letterSpacing: "0.04em",
                    }}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: "0.9rem", opacity: 0.6, padding: 0, lineHeight: 1,
                    transition: "opacity 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "0.6"}
                  >{showPass ? "🙈" : "👁️"}</button>
                </div>
              </div>

              {/* Forgot password */}
              <div style={{
                textAlign: "right", marginBottom: "1.5rem",
                animation: mounted ? "fadeInDown 0.6s ease 0.6s both" : "none",
              }}>
                <Link to="/forgot-password" style={{
                  fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem",
                  color: "#d97706", textDecoration: "none", fontWeight: 600,
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.target.style.color = "#f5c030"}
                  onMouseLeave={e => e.target.style.color = "#d97706"}
                >Forgot Password?</Link>
              </div>

              {/* ── Submit button — ORIGINAL type="submit" preserved ── */}
              <div style={{
                position: "relative",
                animation: mounted ? "slideUp 0.6s ease 0.65s both" : "none",
              }}>
                {/* Ripple effect */}
                {ripple && (
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: 12,
                    border: "2px solid rgba(245,192,48,0.6)",
                    animation: "rippleOut 0.6s ease both",
                    pointerEvents: "none",
                  }} />
                )}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    background: loading
                      ? "rgba(139,26,58,0.6)"
                      : "linear-gradient(135deg, #8b1a3a 0%, #c43060 50%, #d97706 100%)",
                    backgroundSize: "200% auto",
                    color: "#fff", border: "none", borderRadius: 12,
                    padding: "0.9rem",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em",
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                    boxShadow: "0 4px 24px rgba(139,26,58,0.4)",
                    transition: "all 0.3s ease",
                    position: "relative", overflow: "hidden",
                  }}
                  onMouseEnter={e => {
                    if (!loading) {
                      e.currentTarget.style.backgroundPosition = "right center";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 32px rgba(139,26,58,0.6)";
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundPosition = "left center";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(139,26,58,0.4)";
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin360 0.7s linear infinite", display: "inline-block" }} />
                      Signing In...
                    </>
                  ) : (
                    <>
                      <span style={{ animation: "heartFloat 2s ease-in-out infinite" }}>❤️</span>
                      SIGN IN
                    </>
                  )}
                </button>
              </div>

              {/* Divider */}
              <div style={{
                display: "flex", alignItems: "center", gap: "0.8rem",
                margin: "1.5rem 0",
                animation: mounted ? "fadeInDown 0.6s ease 0.75s both" : "none",
              }}>
                <div style={{ flex: 1, height: 1, background: "rgba(212,146,42,0.2)" }} />
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>
                  New to SLV?
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(212,146,42,0.2)" }} />
              </div>

              {/* Register link */}
              <div style={{
                textAlign: "center",
                animation: mounted ? "slideUp 0.6s ease 0.8s both" : "none",
              }}>
                <Link to="/register" style={{
                  display: "block", width: "100%",
                  background: "transparent",
                  border: "1.5px solid rgba(212,146,42,0.4)",
                  color: "#f5c030", borderRadius: 12,
                  padding: "0.75rem",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em",
                  textDecoration: "none", textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(212,146,42,0.1)";
                    e.currentTarget.style.borderColor = "rgba(245,192,48,0.7)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(245,192,48,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(212,146,42,0.4)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >💍 CREATE FREE ACCOUNT</Link>
              </div>
            </form>

            {/* ── Bottom hearts ── */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              gap: "0.4rem", marginTop: "2rem",
              animation: mounted ? "fadeInDown 0.6s ease 0.9s both" : "none",
            }}>
              <div style={{ height: 1, width: 40, background: "linear-gradient(to right, transparent, rgba(212,146,42,0.5))" }} />
              {["❤️","❤️","❤️"].map((h,i)=>(
                <span key={i} style={{
                  fontSize: "0.72rem", display: "inline-block",
                  animation: `heartFloat ${1.6 + i * 0.2}s ease ${i * 0.2}s infinite`,
                }}>{h}</span>
              ))}
              <div style={{ height: 1, width: 40, background: "linear-gradient(to left, transparent, rgba(212,146,42,0.5))" }} />
            </div>

          </div>{/* end glass card */}
        </div>{/* end card wrapper */}
      </div>
    </>
  );
}