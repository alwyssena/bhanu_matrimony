import React from "react";

const features = [
  {
    id: 1,
    color: "#3b5bdb",
    title: "100% Verified Profiles",
    desc: "Every profile is manually verified by our team. No fake accounts, only genuine families looking for serious alliances.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b5bdb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 2,
    color: "#20c997",
    title: "Tradition Meets Technology",
    desc: "Modern matchmaking algorithms combined with traditional values that respect culture, community and family preferences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#20c997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: 3,
    color: "#fd7e14",
    title: "Personalised Assistance",
    desc: "Dedicated relationship managers guide you end-to-end — from shortlisting profiles to confirming the perfect match.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fd7e14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 4,
    color: "#cc5de8",
    title: "Lasting Relationships",
    desc: "Over 1000 successful weddings and counting. We build long-term bonds — not just connections — with every family we serve.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#cc5de8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const S = {
  section: {
    background: "#0d1117",
    padding: "72px 40px 80px",
    textAlign: "center",
    fontFamily: "'Nunito', sans-serif",
  },
  badge: {
    display: "inline-block",
    background: "#1e2533",
    color: "#ccc",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    padding: "8px 20px",
    borderRadius: "999px",
    marginBottom: "32px",
    border: "1px solid #2e3a4e",
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "58px",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1.15,
    marginBottom: "60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    maxWidth: "1140px",
    margin: "0 auto",
    paddingTop: "48px",
  },
  card: (color) => ({
    background: color,
    borderRadius: "20px",
    padding: "52px 28px 36px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  }),
  iconCircle: {
    width: "72px",
    height: "72px",
    background: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-36px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#fff",
    marginBottom: "14px",
    marginTop: "44px",
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.88)",
    lineHeight: 1.7,
    flex: 1,
    marginBottom: "28px",
  },
  learnBtn: {
    background: "rgba(255,255,255,0.18)",
    color: "#fff",
    border: "1.5px solid rgba(255,255,255,0.35)",
    padding: "10px 28px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
};

function FeatureCard({ feature }) {
  return (
    <div style={S.card(feature.color)}>
      <div style={S.iconCircle}>{feature.icon}</div>
      <p style={S.cardTitle}>{feature.title}</p>
      <p style={S.cardDesc}>{feature.desc}</p>
      <button style={S.learnBtn}>Learn More</button>
    </div>
  );
}

export default function WhyVenkateswaraMarriageBureau() {
  return (
    <section style={S.section}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={S.badge}>Why Venkateswara Marriage Bureau</div>
      <h2 style={S.heading}>
        Built on Trust.<br />
        Built with Care.<br />
        Built for Forever.
      </h2>
      <div style={S.grid}>
        {features.map((f) => (
          <FeatureCard key={f.id} feature={f} />
        ))}
      </div>
    </section>
  );
}