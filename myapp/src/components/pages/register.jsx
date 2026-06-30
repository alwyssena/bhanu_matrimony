// import React, { useState } from "react";
// import axios from "axios";

// export default function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/auth/register", form);
//     alert("Registered successfully");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
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
//       <button type="submit">Register</button>
//     </form>
//   );
// }



import React, { useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";

/* ============================================================
   VIKSHANA MATRIMONY — Animated Register Page
   ✅ Multi-step registration form
   ✅ Axios POST to /api/auth/register
   ✅ navigate("/login") after success
   ✅ Full animations: particles, rings, step progress, glows
   ============================================================ */

// ── Floating particles ────────────────────────────────────────
function Particles() {
  const colors = ["#f5c030", "#e8855a", "#d4547a", "#f472b6", "#fde080", "#c084fc", "#fb7185"];
  const particles = Array.from({ length: 38 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    color: colors[i % colors.length],
    dur: Math.random() * 14 + 8,
    delay: Math.random() * 12,
    dx: (Math.random() - 0.5) * 150,
    dy: -(Math.random() * 180 + 60),
    op: Math.random() * 0.55 + 0.3,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute",
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          borderRadius: "50%",
          background: p.color,
          boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          opacity: 0,
          animation: `floatP ${p.dur}s ${p.delay}s ease-in-out infinite`,
          "--dx": `${p.dx}px`, "--dy": `${p.dy}px`, "--op": p.op,
        }} />
      ))}
    </div>
  );
}

// ── Sparkle ───────────────────────────────────────────────────
function Sparkle({ size = 16, color = "#f5c030" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z"
        fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    </svg>
  );
}

// ── Step indicator ────────────────────────────────────────────
function StepBar({ step, total }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: "2rem" }}>
      {Array.from({ length: total }, (_, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <React.Fragment key={i}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: done
                ? "linear-gradient(135deg,#8b1a3a,#d97706)"
                : active
                  ? "linear-gradient(135deg,#c43060,#f5c030)"
                  : "rgba(255,255,255,0.08)",
              border: active ? "2px solid #f5c030" : done ? "2px solid #d97706" : "2px solid rgba(212,146,42,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Cinzel',serif", fontSize: "0.72rem", fontWeight: 700,
              color: done || active ? "#fff" : "rgba(255,255,255,0.35)",
              boxShadow: active ? "0 0 16px rgba(245,192,48,0.5)" : done ? "0 0 10px rgba(212,146,42,0.3)" : "none",
              transition: "all 0.4s ease",
              zIndex: 1, flexShrink: 0,
            }}>
              {done ? "✓" : i + 1}
            </div>
            {i < total - 1 && (
              <div style={{
                height: 2, width: 48,
                background: i < step
                  ? "linear-gradient(to right,#8b1a3a,#d97706)"
                  : "rgba(212,146,42,0.15)",
                transition: "background 0.4s ease",
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ── Styled Input ──────────────────────────────────────────────
function Field({ label, icon, type = "text", placeholder, value, onChange, required, children }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <label style={{
        display: "block",
        fontFamily: "'Cinzel',serif", fontSize: "0.58rem",
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: focused ? "#f5c030" : "rgba(212,146,42,0.6)",
        marginBottom: "0.4rem", transition: "color 0.3s",
      }}>{label}</label>
      <div style={{
        display: "flex", alignItems: "center", gap: "0.6rem",
        background: focused ? "rgba(212,146,42,0.07)" : "rgba(255,255,255,0.04)",
        border: `1.5px solid ${focused ? "rgba(245,192,48,0.6)" : "rgba(212,146,42,0.22)"}`,
        borderRadius: 10, padding: "0.7rem 1rem",
        transition: "all 0.3s ease",
        boxShadow: focused ? "0 0 0 3px rgba(245,192,48,0.1),0 0 18px rgba(245,192,48,0.12)" : "none",
      }}>
        {icon && <span style={{ fontSize: "1rem", opacity: 0.65, flexShrink: 0 }}>{icon}</span>}
        {children || (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required={required}
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              fontFamily: "'Nunito',sans-serif", fontSize: "0.88rem",
              color: "#fff", letterSpacing: "0.02em",
            }}
          />
        )}
      </div>
    </div>
  );
}

// ── Styled Select ─────────────────────────────────────────────
function SelectField({ label, icon, value, onChange, options, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <label style={{
        display: "block", fontFamily: "'Cinzel',serif", fontSize: "0.58rem",
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: focused ? "#f5c030" : "rgba(212,146,42,0.6)",
        marginBottom: "0.4rem", transition: "color 0.3s",
      }}>{label}</label>
      <div style={{
        display: "flex", alignItems: "center", gap: "0.6rem",
        background: focused ? "rgba(212,146,42,0.07)" : "rgba(255,255,255,0.04)",
        border: `1.5px solid ${focused ? "rgba(245,192,48,0.6)" : "rgba(212,146,42,0.22)"}`,
        borderRadius: 10, padding: "0.7rem 1rem",
        transition: "all 0.3s ease",
        boxShadow: focused ? "0 0 0 3px rgba(245,192,48,0.1)" : "none",
      }}>
        {icon && <span style={{ fontSize: "1rem", opacity: 0.65, flexShrink: 0 }}>{icon}</span>}
        <select
          value={value} onChange={onChange} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            flex: 1, background: "transparent", border: "none", outline: "none",
            fontFamily: "'Nunito',sans-serif", fontSize: "0.88rem",
            color: value ? "#fff" : "rgba(255,255,255,0.4)",
            cursor: "pointer", appearance: "none",
          }}>
          <option value="" style={{ background: "#2a0618" }}>Select</option>
          {options.map(o => <option key={o} value={o} style={{ background: "#2a0618" }}>{o}</option>)}
        </select>
        <span style={{ color: "rgba(212,146,42,0.5)", fontSize: "0.7rem", flexShrink: 0 }}>▼</span>
      </div>
    </div>
  );
}

// ── Main Register Component ───────────────────────────────────
export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    // Step 1 — Personal
    fullName: "", gender: "", dob: "", religion: "", caste: "",
    // Step 2 — Contact
    email: "", phone: "", city: "", state: "", country: "India",
    // Step 3 — Profile
    education: "", occupation: "", income: "", height: "", maritalStatus: "",
    // Step 4 — Account
    password: "", confirmPassword: "",
  });

  const [step, setStep] = useState(0); // 0–3
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const [slideDir, setSlideDir] = useState("right"); // animation direction
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function goNext() {
    setSlideDir("left");
    setAnimKey(k => k + 1);
    setStep(s => s + 1);
    setError("");
  }

  function goBack() {
    setSlideDir("right");
    setAnimKey(k => k + 1);
    setStep(s => s - 1);
    setError("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const STEPS_LABELS = ["Personal", "Contact", "Profile", "Account"];

  // ── Step content ──────────────────────────────────────────
  const stepContent = [
    /* Step 0 — Personal Info */
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
        <Field label="Full Name" icon="👤" placeholder="Your full name" value={form.fullName} onChange={set("fullName")} required />
        <SelectField label="Gender" icon="⚧️" value={form.gender} onChange={set("gender")} required
          options={["Male", "Female", "Other"]} />
        <Field label="Date of Birth" icon="🎂" type="date" value={form.dob} onChange={set("dob")} required />
        <SelectField label="Religion" icon="🕉️" value={form.religion} onChange={set("religion")} required
          options={["Hindu", "Muslim", "Christian", "Sikh", "Jain", "Buddhist", "Other"]} />
        <Field label="Caste / Community" icon="🏡" placeholder="e.g. Brahmin, Reddy..." value={form.caste} onChange={set("caste")} />
      </div>
    </>,

    /* Step 1 — Contact Info */
    <>
      <Field label="Email Address" icon="✉️" type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} required />
      <Field label="Phone Number" icon="📞" type="tel" placeholder="+91 9876543210" value={form.phone} onChange={set("phone")} required />
      <Field label="City" icon="🏙️" placeholder="Your city" value={form.city} onChange={set("city")} required />
      <SelectField label="State" icon="📍" value={form.state} onChange={set("state")} required
        options={["Andhra Pradesh","Telangana","Tamil Nadu","Karnataka","Maharashtra","Delhi","Gujarat","Rajasthan","Kerala","Uttar Pradesh","West Bengal","Other"]} />
      <SelectField label="Country" icon="🌍" value={form.country} onChange={set("country")} required
        options={["India","USA","UK","Canada","Australia","UAE","Singapore","Other"]} />
    </>,

    /* Step 2 — Profile Details */
    <> 
      <SelectField label="Education" icon="🎓" value={form.education} onChange={set("education")} required
        options={["10th / SSC","12th / HSC","Diploma","B.Tech / B.E","B.Sc","B.Com","BA","MBA","M.Tech","MBBS","CA","LLB","PhD","Other"]} />
      <Field label="Occupation" icon="💼" placeholder="e.g. Software Engineer" value={form.occupation} onChange={set("occupation")} required />
      <SelectField label="Annual Income" icon="💰" value={form.income} onChange={set("income")}
        options={["Below ₹2L","₹2L–5L","₹5L–10L","₹10L–20L","₹20L–50L","Above ₹50L","Not disclosed"]} />
      <SelectField label="Height" icon="📏" value={form.height} onChange={set("height")} required
        options={["4'10\"","4'11\"","5'0\"","5'1\"","5'2\"","5'3\"","5'4\"","5'5\"","5'6\"","5'7\"","5'8\"","5'9\"","5'10\"","5'11\"","6'0\"","6'1\"","6'2\""]} />
      <SelectField label="Marital Status" icon="💍" value={form.maritalStatus} onChange={set("maritalStatus")} required
        options={["Never Married","Divorced","Widowed","Awaiting Divorce"]} />
    </>,

    /* Step 3 — Account Setup */
    <>
      <Field label="Password" icon="🔒" placeholder="Create strong password" value={form.password} onChange={set("password")} required>
        <input
          type={showPass ? "text" : "password"}
          placeholder="Create strong password"
          value={form.password}
          onChange={set("password")}
          required
          style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: "'Nunito',sans-serif", fontSize: "0.88rem", color: "#fff" }}
        />
        <button type="button" onClick={() => setShowPass(!showPass)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", opacity: 0.6, padding: 0 }}>
          {showPass ? "🙈" : "👁️"}
        </button>
      </Field>

      <Field label="Confirm Password" icon="🔐" placeholder="Re-enter password" value={form.confirmPassword} onChange={set("confirmPassword")} required>
        <input
          type={showConfirm ? "text" : "password"}
          placeholder="Re-enter password"
          value={form.confirmPassword}
          onChange={set("confirmPassword")}
          required
          style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: "'Nunito',sans-serif", fontSize: "0.88rem", color: "#fff" }}
        />
        <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", opacity: 0.6, padding: 0 }}>
          {showConfirm ? "🙈" : "👁️"}
        </button>
      </Field>

      {/* Password strength */}
      {form.password && (
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", gap: "4px", marginBottom: "0.3rem" }}>
            {[1,2,3,4].map(n => (
              <div key={n} style={{
                flex: 1, height: 4, borderRadius: 2,
                background: form.password.length >= n * 3
                  ? n <= 1 ? "#ef4444" : n === 2 ? "#f97316" : n === 3 ? "#eab308" : "#22c55e"
                  : "rgba(255,255,255,0.1)",
                transition: "background 0.3s",
              }} />
            ))}
          </div>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
            Password strength: {form.password.length < 4 ? "Weak" : form.password.length < 7 ? "Fair" : form.password.length < 10 ? "Good" : "Strong"}
          </p>
        </div>
      )}

      {/* Terms */}
      <label style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem", cursor: "pointer", marginBottom: "0.5rem" }}>
        <input type="checkbox" required style={{ marginTop: 3, accentColor: "#d97706", width: 15, height: 15, cursor: "pointer" }} />
        <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
          I agree to the{" "}
          <Link to="#" style={{ color: "#f5c030", textDecoration: "none" }}>Terms of Service</Link>{" "}
          and{" "}
          <Link to="#" style={{ color: "#f5c030", textDecoration: "none" }}>Privacy Policy</Link  >
          {" "}of Vikshana Matrimony
        </span>
      </label>
    </>,
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900&family=Nunito:wght@400;500;600;700;800&family=Cinzel:wght@400;600&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html, body { min-height:100%; }
        body { overflow-x:hidden; }

        @keyframes floatP {
          0%   { transform:translate(0,0) scale(1); opacity:0; }
          10%  { opacity:var(--op); }
          85%  { opacity:var(--op); }
          100% { transform:translate(var(--dx),var(--dy)) scale(0.3); opacity:0; }
        }
        @keyframes spin { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }
        @keyframes spinR { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(-360deg)} }
        @keyframes bgShimmer {
          0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}
        }
        @keyframes slideUpFade {
          from{opacity:0;transform:translateY(36px) scale(0.97)}
          to{opacity:1;transform:translateY(0) scale(1)}
        }
        @keyframes slideInLeft {
          from{opacity:0;transform:translateX(40px)}
          to{opacity:1;transform:translateX(0)}
        }
        @keyframes slideInRight {
          from{opacity:0;transform:translateX(-40px)}
          to{opacity:1;transform:translateX(0)}
        }
        @keyframes fadeDown {
          from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)}
        }
        @keyframes heartFloat {
          0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-10px) scale(1.15)}
        }
        @keyframes sparkleSpin {
          0%{transform:rotate(0deg) scale(1)} 50%{transform:rotate(180deg) scale(1.4)} 100%{transform:rotate(360deg) scale(1)}
        }
        @keyframes pulseGlow {
          0%,100%{box-shadow:0 24px 80px rgba(0,0,0,0.5),0 0 40px rgba(139,26,58,0.15)}
          50%{box-shadow:0 24px 80px rgba(0,0,0,0.5),0 0 70px rgba(212,146,42,0.2)}
        }
        @keyframes spin360 { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes lineExpand {
          from{transform:scaleX(0);opacity:0} to{transform:scaleX(1);opacity:1}
        }
        input::placeholder, select::placeholder { color:rgba(255,255,255,0.3); }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px rgba(30,4,14,0.98) inset !important;
          -webkit-text-fill-color: #fff !important;
        }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(212,146,42,0.4); border-radius:2px; }
      `}</style>

      {/* Root */}
      <div style={{
        position: "relative", minHeight: "100vh", width: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "2rem 1rem",
        background: "radial-gradient(ellipse 130% 130% at 70% 80%, #3d0a22 0%, #220514 40%, #0d0108 100%)",
        overflow: "hidden",
      }}>

        {/* BG shimmer */}
        <div style={{
          position: "fixed", inset: 0, pointerEvents: "none",
          background: "linear-gradient(135deg,#2a0618,#4a0d20,#1a0310,#3d0a22,#1a0310)",
          backgroundSize: "400% 400%",
          animation: "bgShimmer 14s ease infinite", opacity: 0.55,
        }} />

        <Particles />

        {/* Ambient glows */}
        <div style={{ position: "fixed", left: "5%", top: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,84,122,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "fixed", right: "5%", bottom: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(245,192,48,0.09) 0%,transparent 70%)", pointerEvents: "none" }} />

        {/* Card wrapper */}
        <div style={{
          position: "relative", width: "100%", maxWidth: 520, zIndex: 10,
          animation: mounted ? "slideUpFade 0.8s cubic-bezier(0.22,1,0.36,1) both" : "none",
        }}>
          {/* Orbiting rings */}
          <div style={{ position: "absolute", inset: "-50px", pointerEvents: "none" }}>
            {[
              { s: 620, c: "rgba(212,146,42,0.1)", d: 32 },
              { s: 530, c: "rgba(212,84,122,0.08)", d: 24, r: true },
              { s: 440, c: "rgba(245,192,48,0.07)", d: 45 },
            ].map(({ s, c, d, r }, i) => (
              <div key={i} style={{
                position: "absolute", left: "50%", top: "50%",
                width: s, height: s, borderRadius: "50%",
                border: `1px dashed ${c}`,
                transform: "translate(-50%,-50%)",
                animation: `${r ? "spinR" : "spin"} ${d}s linear infinite`,
              }} />
            ))}
          </div>

          {/* Glass card */}
          <div style={{
            background: "rgba(22,3,12,0.85)",
            backdropFilter: "blur(28px)",
            border: "1px solid rgba(212,146,42,0.28)",
            borderRadius: 22,
            padding: "2.5rem 2.5rem",
            boxShadow: "0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
            animation: "pulseGlow 5s ease-in-out infinite",
            maxHeight: "90vh", overflowY: "auto",
          }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "1.8rem", animation: "fadeDown 0.7s ease 0.2s both" }}>
              <div style={{
                width: 62, height: 62, borderRadius: "50%",
                background: "linear-gradient(135deg,#8b1a3a,#c43060,#d97706)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1rem", fontSize: "1.7rem",
                boxShadow: "0 0 0 3px rgba(212,146,42,0.22),0 0 28px rgba(212,146,42,0.28)",
                animation: "heartFloat 3s ease-in-out infinite",
              }}>💍</div>

              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.55rem", fontWeight: 900, marginBottom: "0.2rem" }}>
                <span style={{ color: "#f5c030" }}>Vikshana</span>{" "}
                <span style={{ color: "#fff" }}>Matrimony</span>
              </h1>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", margin: "0.5rem 0" }}>
                <div style={{ height: 1, width: 44, background: "linear-gradient(to right,transparent,#d4922a)", animation: "lineExpand 0.8s ease 0.5s both", transformOrigin: "right" }} />
                <div style={{ animation: "sparkleSpin 5s linear infinite" }}><Sparkle size={13} color="#f5c030" /></div>
                <div style={{ height: 1, width: 44, background: "linear-gradient(to left,transparent,#d4922a)", animation: "lineExpand 0.8s ease 0.5s both", transformOrigin: "left" }} />
              </div>

              <p style={{ fontFamily: "'Cinzel',serif", fontSize: "0.6rem", letterSpacing: "0.25em", color: "rgba(212,146,42,0.65)", textTransform: "uppercase" }}>
                Create Your Free Profile
              </p>
            </div>

            {/* Step bar */}
            <StepBar step={step} total={4} />

            {/* Step label */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <span style={{
                fontFamily: "'Playfair Display',serif", fontSize: "1.1rem",
                color: "#f5c030", fontWeight: 700,
              }}>
                Step {step + 1}: {STEPS_LABELS[step]}
              </span>
              <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: "0.2rem" }}>
                {["Tell us about yourself", "How can we reach you?", "Your profile details", "Secure your account"][step]}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); goNext(); }}>

              {/* Animated step content */}
              <div
                key={animKey}
                style={{ animation: `${slideDir === "left" ? "slideInLeft" : "slideInRight"} 0.4s ease both` }}
              >
                {stepContent[step]}
              </div>

              {/* Error */}
              {error && (
                <div style={{
                  background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)",
                  borderRadius: 8, padding: "0.7rem 1rem", marginBottom: "1rem",
                  fontFamily: "'Nunito',sans-serif", fontSize: "0.82rem", color: "#fca5a5",
                  display: "flex", alignItems: "center", gap: "0.5rem",
                }}>
                  ⚠️ {error}
                </div>
              )}

              {/* Navigation buttons */}
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "0.5rem" }}>
                {step > 0 && (
                  <button type="button" onClick={goBack} style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.05)",
                    border: "1.5px solid rgba(212,146,42,0.3)",
                    color: "rgba(255,255,255,0.7)", borderRadius: 12,
                    padding: "0.85rem",
                    fontFamily: "'Cinzel',serif", fontSize: "0.78rem",
                    letterSpacing: "0.12em", cursor: "pointer",
                    transition: "all 0.25s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,146,42,0.6)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(212,146,42,0.3)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                  >← BACK</button>
                )}

                <button type="submit" disabled={loading} style={{
                  flex: 2,
                  background: loading ? "rgba(139,26,58,0.5)" : "linear-gradient(135deg,#8b1a3a 0%,#c43060 50%,#d97706 100%)",
                  backgroundSize: "200% auto",
                  border: "none", color: "#fff", borderRadius: 12,
                  padding: "0.85rem",
                  fontFamily: "'Cinzel',serif", fontSize: "0.82rem",
                  fontWeight: 600, letterSpacing: "0.15em",
                  cursor: loading ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                  boxShadow: "0 4px 24px rgba(139,26,58,0.4)",
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(139,26,58,0.6)"; } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(139,26,58,0.4)"; }}
                >
                  {loading ? (
                    <>
                      <span style={{ width: 15, height: 15, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin360 0.7s linear infinite", display: "inline-block" }} />
                      Creating...
                    </>
                  ) : step < 3 ? (
                    <>NEXT STEP →</>
                  ) : (
                    <><span style={{ animation: "heartFloat 1.8s ease infinite" }}>❤️</span> CREATE PROFILE</>
                  )}
                </button>
              </div>
            </form>

            {/* Progress bar */}
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>Profile completion</span>
                <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: "0.68rem", color: "#f5c030" }}>{(step + 1) * 25}%</span>
              </div>
              <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: 2,
                  background: "linear-gradient(to right,#8b1a3a,#d97706)",
                  width: `${(step + 1) * 25}%`,
                  transition: "width 0.5s ease",
                  boxShadow: "0 0 8px rgba(217,119,6,0.5)",
                }} />
              </div>
            </div>

            {/* Login link */}
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                <div style={{ flex: 1, height: 1, background: "rgba(212,146,42,0.15)" }} />
                <span style={{ fontFamily: "'Nunito',sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>Already a member?</span>
                <div style={{ flex: 1, height: 1, background: "rgba(212,146,42,0.15)" }} />
              </div>
              <Link to="/login" style={{
                fontFamily: "'Cinzel',serif", fontSize: "0.75rem", letterSpacing: "0.12em",
                color: "#f5c030", textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#f5c030"}
              >SIGN IN TO YOUR ACCOUNT →</Link  >
            </div>

            {/* Bottom hearts */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.4rem", marginTop: "1.5rem" }}>
              <div style={{ height: 1, width: 36, background: "linear-gradient(to right,transparent,rgba(212,146,42,0.45))" }} />
              {["❤️","❤️","❤️"].map((h, i) => (
                <span key={i} style={{ fontSize: "0.7rem", display: "inline-block", animation: `heartFloat ${1.6 + i * 0.2}s ease ${i * 0.2}s infinite` }}>{h}</span>
              ))}
              <div style={{ height: 1, width: 36, background: "linear-gradient(to left,transparent,rgba(212,146,42,0.45))" }} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}