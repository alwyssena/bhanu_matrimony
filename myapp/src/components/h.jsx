// import React from "react";
// import "./h.css";

// export default function Home() {
//   return (
//     <div className="home">

//       {/* 🔝 Navbar */}
//       <nav className="navbar">
//         <h2 className="logo">Vikshana Matrimony</h2>

//         <ul className="nav-links">
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//         </ul>

//         <div className="nav-buttons">
//           <button className="register">Register Now</button>
//           <button className="admin">Admin Login</button>
//           <button className="login">Log In</button>
//         </div>
//       </nav>

//       {/* 🎯 Hero Section */}
//       <div className="hero">
//         <div className="overlay">
//           <h1>
//             Waiting for <span className="yellow">Someone</span>
//             <br />
//             <span className="pink">Special...!</span>
//           </h1>

//           <p>
//             Join thousands of families who have found their perfect match
//             through Vikshana Matrimony.
//           </p>

//           {/* 🔐 Login Box */}
//           <div className="login-box">
//             <input type="text" placeholder="Email or Phone number" />
//             <input type="password" placeholder="Password" />
//             <button>Sign In ❤️</button>
//           </div>

//           <div className="extra-links">
//             <span>Forgot Password?</span>
//             <span>
//               Don’t have an account? <b>Register Free</b>
//             </span>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }





import { useState, useEffect, useRef } from "react";
import  ContactUs  from "./pages/contact/contact";
import PricingPackages from "./pages/membership/membership";
import SaptapadiSection from "./pages/7steps/sevensteps";
import ProfilesGallery from "./pages/users/users";
import  WhyVikshana  from "./pages/why/why";

/* ============================================================
   VIKSHANA MATRIMONY — Exact Homepage Recreation
   Matches screenshot exactly:
   - White navbar: Logo | Home About Us Contact Us | Register Now | Admin Login | Log In
   - Full-screen hero with wedding couple photo (CSS background)
   - "Waiting for Someone Special...!" headline (white + golden + pink)
   - Subtitle paragraph
   - Login form card: Email/Phone | Password | Sign In ❤
   - Forgot Password / Register Free links
   - Slider dots (7 dots, first active)
   - WhatsApp floating button
   ============================================================ */

// ── Wedding background images (Unsplash free) ───────────────
const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=80",
    headline1: "Waiting for",
    headline2: "Someone",
    headline3: "Special...!",
  },
  {
    bg: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=1600&q=80",
    headline1: "Your Perfect",
    headline2: "Life Partner",
    headline3: "Awaits You...!",
  },
  {
    bg: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80",
    headline1: "Where Hearts",
    headline2: "Find Their",
    headline3: "True Home...!",
  },
  {
    bg: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600&q=80",
    headline1: "Begin Your",
    headline2: "Beautiful",
    headline3: "Journey...!",
  },
  {
    bg: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=80",
    headline1: "Rooted in",
    headline2: "Tradition &",
    headline3: "Trust...!",
  },
  {
    bg: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&q=80",
    headline1: "Thousands of",
    headline2: "Happy",
    headline3: "Couples...!",
  },
  {
    bg: "https://images.unsplash.com/photo-1524275539700-cf51138f679b?w=1600&q=80",
    headline1: "Find Your",
    headline2: "Soulmate",
    headline3: "Today...!",
  },
];

// ── Navbar ────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "#fff",
      boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
      display: "flex", alignItems: "center",
      justifyContent: "space-between",
      padding: "0 2rem",
      height: 64,
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          border: "2px solid #d4922a",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1rem",
        }}>💍</div>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700 }}>
          <span style={{ color: "#8b1a3a" }}>Bhanu</span>
          <span style={{ color: "#1a1a1a" }}> Matrimony</span>
        </span>
      </div>

      {/* Nav links */}
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {["Home", "About Us", "Contact Us"].map((l, i) => (
          <li key={l}>
            <a href="#" style={{
              fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem",
              fontWeight: i === 0 ? 700 : 500,
              color: i === 0 ? "#8b1a3a" : "#333",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#8b1a3a"}
              onMouseLeave={e => e.target.style.color = i === 0 ? "#8b1a3a" : "#333"}
            >{l}</a>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
        <button style={{
          background: "#16a34a", color: "#fff",
          border: "none", borderRadius: 6,
          padding: "0.55rem 1.2rem",
          fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700,
          cursor: "pointer", transition: "all 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#15803d"}
          onMouseLeave={e => e.currentTarget.style.background = "#16a34a"}
        >Register Now</button>

        <button style={{
          background: "#d97706", color: "#fff",
          border: "none", borderRadius: 6,
          padding: "0.55rem 1.2rem",
          fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700,
          cursor: "pointer", transition: "all 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#b45309"}
          onMouseLeave={e => e.currentTarget.style.background = "#d97706"}
        >Admin Login</button>

        <button style={{
          background: "#2563eb", color: "#fff",
          border: "none", borderRadius: 6,
          padding: "0.55rem 1.2rem",
          fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", fontWeight: 700,
          cursor: "pointer", transition: "all 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
          onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
        >Log In</button>
      </div>
    </nav>
  );
}

// ── Hero Slider ───────────────────────────────────────────────
function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const timerRef = useRef(null);

  // Auto-advance slider
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  function goTo(idxOrFn) {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(typeof idxOrFn === "function" ? idxOrFn(current) : idxOrFn);
      setAnimating(false);
    }, 400);
  }

  function dotClick(i) {
    clearInterval(timerRef.current);
    goTo(i);
    timerRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
  }

  const slide = SLIDES[current];

  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      minHeight: 600,
      overflow: "hidden",
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${slide.bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        transition: "opacity 0.6s ease",
        opacity: animating ? 0 : 1,
        filter: "brightness(0.52)",
      }} />

      {/* Subtle dark gradient overlay — stronger at bottom */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.72) 100%)",
        pointerEvents: "none",
      }} />

      {/* Centre content */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        height: "100%",
        padding: "80px 1.5rem 0",
        textAlign: "center",
      }}>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.4rem, 6.5vw, 5rem)",
          lineHeight: 1.15,
          fontWeight: 700,
          marginBottom: "1.2rem",
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(20px)" : "translateY(0)",
          transition: "all 0.5s ease",
        }}>
          <span style={{ color: "#fff" }}>{slide.headline1} </span>
          <span style={{ color: "#f5c030" }}>{slide.headline2}</span>
          <br />
          <span style={{ color: "#f472b6" }}>{slide.headline3}</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
          color: "rgba(255,255,255,0.88)",
          maxWidth: 600,
          lineHeight: 1.75,
          marginBottom: "2.5rem",
          opacity: animating ? 0 : 1,
          transition: "opacity 0.5s ease 0.1s",
        }}>
          Join thousands of families who have found their perfect match through Vikshana
          Matrimony. Your journey to a beautiful marriage begins here, rooted in tradition and trust.
        </p>

        {/* ── Login Card ── */}
        <div style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: 12,
          padding: "1.6rem 2rem 1.3rem",
          width: "100%",
          maxWidth: 700,
          boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
          opacity: animating ? 0 : 1,
          transition: "opacity 0.5s ease 0.15s",
        }}>
          <div style={{ display: "flex", gap: "0.8rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>

            {/* Email / Phone */}
            <div style={{
              flex: "1 1 220px",
              display: "flex", alignItems: "center", gap: "0.6rem",
              border: "1.5px solid #e5e7eb", borderRadius: 8,
              padding: "0.7rem 1rem", background: "#fff",
            }}>
              <span style={{ fontSize: "1rem", color: "#6b7280" }}>📞</span>
              <input
                type="text"
                placeholder="Email or Phone number"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  border: "none", outline: "none", flex: 1,
                  fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem",
                  color: "#374151", background: "transparent",
                }}
              />
            </div>

            {/* Password */}
            <div style={{
              flex: "1 1 200px",
              display: "flex", alignItems: "center", gap: "0.6rem",
              border: "1.5px solid #e5e7eb", borderRadius: 8,
              padding: "0.7rem 1rem", background: "#fff",
            }}>
              <span style={{ fontSize: "1rem", color: "#6b7280" }}>🔒</span>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  border: "none", outline: "none", flex: 1,
                  fontFamily: "'Nunito', sans-serif", fontSize: "0.92rem",
                  color: "#374151", background: "transparent",
                }}
              />
              <button onClick={() => setShowPass(!showPass)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "1rem", color: "#9ca3af", padding: 0, lineHeight: 1,
              }}>{showPass ? "🙈" : "👁️"}</button>
            </div>

            {/* Sign In button */}
            <button style={{
              flex: "0 0 auto",
              background: "#d97706",
              color: "#fff", border: "none", borderRadius: 8,
              padding: "0.7rem 2rem",
              fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", fontWeight: 700,
              cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#b45309"; e.currentTarget.style.transform = "scale(1.02)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#d97706"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Sign In <span style={{ animation: "heartBeat 1.5s ease infinite" }}>❤️</span>
            </button>
          </div>

          {/* Footer links */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <a href="#" style={{
              fontFamily: "'Nunito', sans-serif", fontSize: "0.82rem",
              color: "#d97706", textDecoration: "none", fontWeight: 600,
            }}
              onMouseEnter={e => e.target.style.textDecoration = "underline"}
              onMouseLeave={e => e.target.style.textDecoration = "none"}
            >Forgot Password?</a>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.82rem", color: "#6b7280" }}>
              Don't have an account?{" "}
              <a href="#" style={{ color: "#16a34a", fontWeight: 700, textDecoration: "none" }}
                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                onMouseLeave={e => e.target.style.textDecoration = "none"}
              >Register Free</a>
            </span>
          </div>
        </div>

        {/* Slider dots */}
        <div style={{
          display: "flex", gap: "0.5rem", marginTop: "1.8rem",
          position: "absolute", bottom: "2rem",
        }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => dotClick(i)} style={{
              width: i === current ? 28 : 10,
              height: 10,
              borderRadius: 5,
              background: i === current ? "#f5c030" : "rgba(255,255,255,0.45)",
              border: "none", cursor: "pointer",
              transition: "all 0.35s ease",
              padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────
function StatsBar() {
  const items = [
    { icon: "👫", val: "5,00,000+", label: "Registered Members" },
    { icon: "💍", val: "50,000+", label: "Successful Matches" },
    { icon: "⭐", val: "98%", label: "Satisfaction Rate" },
    { icon: "🏆", val: "15+ Years", label: "Trusted Service" },
  ];
  return (
    <section style={{
      background: "#8b1a3a",
      padding: "1.8rem 2rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "1rem",
    }}>
      {items.map(it => (
        <div key={it.label} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.6rem", marginBottom: "0.2rem" }}>{it.icon}</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#f5c030", fontWeight: 700 }}>{it.val}</div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{it.label}</div>
        </div>
      ))}
    </section>
  );
}

// ── useInView ─────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, vis];
}

// ── Section Header ────────────────────────────────────────────
function SectionHeader({ tag, title, light = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#d97706", marginBottom: "0.4rem", fontWeight: 700 }}>{tag}</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", color: light ? "#fff" : "#1a1a1a", fontWeight: 700, margin: 0 }}>{title}</h2>
      <div style={{ width: 60, height: 3, background: "linear-gradient(to right, #8b1a3a, #d97706)", margin: "0.8rem auto 0", borderRadius: 2 }} />
    </div>
  );
}

// ── How It Works ──────────────────────────────────────────────
function HowItWorks() {
  const [ref, vis] = useInView(0.1);
  const steps = [
    { icon: "📝", step: "01", title: "Create Profile", desc: "Register for free and build your detailed matrimony profile with photos and preferences." },
    { icon: "🔍", step: "02", title: "Search Matches", desc: "Explore thousands of verified profiles filtered by religion, caste, location and more." },
    { icon: "💬", step: "03", title: "Express Interest", desc: "Send interest and chat securely with profiles you like. Connect with your matches." },
    { icon: "💍", step: "04", title: "Get Married", desc: "Meet your soulmate, get families involved and begin your beautiful life together." },
  ];
  return (
    <section ref={ref} style={{ background: "#fff9f5", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader tag="Simple Process" title="How It Works" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {steps.map((s, i) => (
            <div key={s.step} style={{
              background: "#fff", borderRadius: 12,
              padding: "2rem 1.5rem", textAlign: "center",
              border: "1px solid #f0e0d0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              position: "relative",
              opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${i * 0.1}s`,
            }}>
              <div style={{
                position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)",
                width: 32, height: 32, borderRadius: "50%",
                background: "linear-gradient(135deg, #8b1a3a, #d97706)",
                color: "#fff", fontFamily: "'Nunito', sans-serif",
                fontSize: "0.72rem", fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{s.step}</div>
              <div style={{ fontSize: "2.8rem", marginTop: "0.5rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#1a1a1a", fontWeight: 700, marginBottom: "0.6rem" }}>{s.title}</h4>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Profiles ─────────────────────────────────────────
const PROFILES = [
  { name: "Priya Sharma", age: 26, city: "Hyderabad", edu: "MBA Finance", height: "5'4\"", avatar: "👩‍🦱", tag: "New", tagColor: "#8b1a3a" },
  { name: "Arjun Reddy", age: 29, city: "Bangalore", edu: "B.Tech IT", height: "5'11\"", avatar: "👨", tag: "Verified", tagColor: "#16a34a" },
  { name: "Sneha Patel", age: 24, city: "Mumbai", edu: "MBBS Doctor", height: "5'3\"", avatar: "👩", tag: "Premium", tagColor: "#d97706" },
  { name: "Karthik Nair", age: 31, city: "Chennai", edu: "CA", height: "5'9\"", avatar: "🧑", tag: "New", tagColor: "#8b1a3a" },
  { name: "Divya Rao", age: 27, city: "Pune", edu: "M.Tech CSE", height: "5'5\"", avatar: "👩‍🦰", tag: "Verified", tagColor: "#16a34a" },
  { name: "Rahul Gupta", age: 28, city: "Delhi", edu: "LLB Lawyer", height: "5'10\"", avatar: "👨‍💼", tag: "Premium", tagColor: "#d97706" },
];

function ProfileCard({ p, delay }) {
  const [ref, vis] = useInView(0.05);
  const [liked, setLiked] = useState(false);
  return (
    <div ref={ref} style={{
      background: "#fff", borderRadius: 12,
      border: "1px solid #f0e0d0", overflow: "hidden",
      boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
      transition: `all 0.6s ease ${delay}s`,
      cursor: "pointer",
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,26,58,0.2)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{
        height: 160, background: "linear-gradient(135deg, #8b1a3a 0%, #c43060 50%, #d97706 100%)",
        display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
      }}>
        <span style={{ fontSize: "4.5rem" }}>{p.avatar}</span>
        <span style={{
          position: "absolute", top: 10, right: 10,
          background: p.tagColor, color: "#fff",
          fontFamily: "'Nunito', sans-serif", fontSize: "0.65rem", fontWeight: 800,
          padding: "0.2rem 0.6rem", borderRadius: 4, letterSpacing: "0.05em",
        }}>{p.tag}</span>
        <button onClick={() => setLiked(!liked)} style={{
          position: "absolute", top: 8, left: 8,
          background: "rgba(255,255,255,0.2)", border: "none",
          borderRadius: "50%", width: 30, height: 30,
          fontSize: "0.85rem", cursor: "pointer",
        }}>{liked ? "❤️" : "🤍"}</button>
      </div>
      <div style={{ padding: "1rem 1.1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#1a1a1a" }}>{p.name}</h4>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.82rem", color: "#6b7280" }}>{p.age} yrs</span>
        </div>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.7rem" }}>
          📍 {p.city} &nbsp;·&nbsp; 📏 {p.height}
        </p>
        <span style={{
          display: "inline-block",
          background: "#fff5e8", border: "1px solid #f0c080",
          color: "#b45309", fontFamily: "'Nunito', sans-serif",
          fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.04em",
          padding: "0.2rem 0.6rem", borderRadius: 4, marginBottom: "0.8rem",
        }}>{p.edu}</span>
        <button style={{
          width: "100%",
          background: "linear-gradient(135deg, #8b1a3a, #c43060)",
          color: "#fff", border: "none", borderRadius: 6,
          padding: "0.55rem", fontFamily: "'Nunito', sans-serif",
          fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >View Profile →</button>
      </div>
    </div>
  );
}

function FeaturedProfiles() {
  return (
    <section style={{ background: "#fff", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader tag="Find Your Match" title="Featured Profiles" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {PROFILES.map((p, i) => <ProfileCard key={p.name} p={p} delay={i * 0.08} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button style={{
            background: "transparent", border: "2px solid #8b1a3a",
            color: "#8b1a3a", padding: "0.75rem 2.5rem", borderRadius: 6,
            fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", fontWeight: 700,
            cursor: "pointer", transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#8b1a3a"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#8b1a3a"; }}
          >View All Profiles →</button>
        </div>
      </div>
    </section>
  );
}

// ── Success Stories ───────────────────────────────────────────
const STORIES = [
  { names: "Rahul & Anjali", city: "Hyderabad", year: "2024", quote: "We matched on Vikshana and knew instantly. Our families met and it was absolutely perfect!", img: "💑" },
  { names: "Vikram & Pooja", city: "Bangalore", year: "2024", quote: "After 3 months of chatting we finally met in person. Best decision of our entire lives!", img: "👫" },
  { names: "Arun & Meena", city: "Chennai", year: "2023", quote: "Vikshana's algorithm found us — we share so many values and traditions. Forever grateful!", img: "💏" },
];

function SuccessStories() {
  const [ref, vis] = useInView(0.1);
  return (
    <section style={{ background: "linear-gradient(135deg, #3d0818 0%, #6b0f2a 50%, #3d0818 100%)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <SectionHeader tag="Love Stories" title="Happy Couples" light />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {STORIES.map((s, i) => (
            <div key={s.names} style={{
              background: "rgba(255,255,255,0.07)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(245,192,48,0.25)", borderRadius: 12,
              padding: "2rem", textAlign: "center",
              opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.7s ease ${i * 0.12}s`,
            }}>
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{s.img}</div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#f5c030", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.3rem" }}>{s.names}</h4>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>{s.city} · {s.year}</p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>"{s.quote}"</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "2px", marginTop: "1rem" }}>
                {[1,2,3,4,5].map(n => <span key={n} style={{ color: "#f5c030" }}>★</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────
function CTABanner() {
  const [ref, vis] = useInView(0.2);
  return (
    <section ref={ref} style={{
      background: "linear-gradient(135deg, #8b1a3a 0%, #c43060 50%, #d97706 100%)",
      padding: "5rem 2rem", textAlign: "center",
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.8s ease",
    }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff", fontWeight: 700, marginBottom: "0.8rem" }}>
        Find Your Perfect Life Partner
      </h2>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.85)", maxWidth: 500, margin: "0 auto 2rem", lineHeight: 1.7 }}>
        Register for free today and begin your journey towards a beautiful marriage with Vikshana Matrimony.
      </p>
      <button style={{
        background: "#fff", color: "#8b1a3a", border: "none", borderRadius: 8,
        padding: "0.9rem 3rem", fontFamily: "'Nunito', sans-serif",
        fontSize: "1rem", fontWeight: 800, cursor: "pointer",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)", transition: "all 0.25s",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)"; }}
      >💍 Register For Free</button>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#1a0008", padding: "3.5rem 2rem 1.5rem", borderTop: "3px solid #8b1a3a" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.2rem" }}>💍</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#f5c030" }}>Vikshana Matrimony</span>
            </div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              Where hearts find home. Trusted matrimony platform connecting families since 2009.
            </p>
          </div>
          {[
            { title: "Quick Links", links: ["Home", "About Us", "Search Profiles", "Register Free", "Login"] },
            { title: "Support", links: ["Contact Us", "Help Center", "Privacy Policy", "Terms of Use", "FAQ"] },
            { title: "Community", links: ["Success Stories", "Blog", "Events", "Forum", "Testimonials"] },
          ].map(col => (
            <div key={col.title}>
              <h5 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.15em", color: "#d97706", textTransform: "uppercase", marginBottom: "1rem" }}>{col.title}</h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map(l => (
                  <li key={l} style={{ marginBottom: "0.45rem" }}>
                    <a href="#" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#f5c030"}
                      onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.8rem" }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
            © 2026 Vikshana Matrimony. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {["❤️","❤️","❤️"].map((h,i) => (
              <span key={i} style={{ fontSize: "0.85rem", display: "inline-block", animation: `heartBeat 1.8s ease ${i*0.25}s infinite` }}>{h}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── WhatsApp FAB ──────────────────────────────────────────────
function WhatsAppBtn() {
  return (
    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{
      position: "fixed", bottom: "1.8rem", right: "1.8rem", zIndex: 999,
      width: 52, height: 52, borderRadius: "50%",
      background: "#25d366",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
      fontSize: "1.6rem", textDecoration: "none",
      animation: "waPulse 2s ease infinite",
    }}>📱</a>
  );
}

// ── Root App ──────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,600&family=Nunito:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { background:#fff; overflow-x:hidden; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#1a0008; }
        ::-webkit-scrollbar-thumb { background:#d97706; border-radius:3px; }
        @keyframes heartBeat {
          0%,100% { transform:scale(1); }
          30%     { transform:scale(1.35); }
          60%     { transform:scale(0.92); }
        }
        @keyframes waPulse {
          0%,100% { box-shadow:0 4px 20px rgba(37,211,102,0.5); }
          50%     { box-shadow:0 4px 32px rgba(37,211,102,0.85); transform:scale(1.08); }
        }
        @media (max-width:768px) {
          nav ul { display:none !important; }
        }
        input::placeholder { color:#9ca3af; }
        input:focus { outline:none; }
        select { appearance:none; }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <SaptapadiSection/>
        <FeaturedProfiles />
        <SuccessStories />
        <ProfilesGallery />
        <CTABanner />
      </main>
      <PricingPackages />
<ContactUs />
<WhyVikshana />
      <Footer />
      <WhatsAppBtn />
    </>
  );
}