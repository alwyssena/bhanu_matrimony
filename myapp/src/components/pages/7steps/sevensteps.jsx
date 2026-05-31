import React from "react";

const steps = [
  {
    num: 1,
    color: "#e74c3c",
    title: "To nourish each other",
    desc: "The first vow promises to provide for and nourish each other through life's journey.",
  },
  {
    num: 2,
    color: "#e67e22",
    title: "To grow together in strength",
    desc: "The couple vows to develop physical, mental, and spiritual strength together.",
  },
  {
    num: 3,
    color: "#f0b429",
    title: "To preserve our wealth",
    desc: "They promise to earn, save, and grow their prosperity through righteous means.",
  },
  {
    num: 4,
    color: "#27ae60",
    title: "To share our joys & sorrows",
    desc: "A vow to share happiness and sorrow equally, supporting each other.",
  },
  {
    num: 5,
    color: "#2980b9",
    title: "To care for our children",
    desc: "They promise to nurture and raise their children with love and good values.",
  },
  {
    num: 6,
    color: "#2471a3",
    title: "To be together forever",
    desc: "A sacred promise to remain together in every season of life.",
  },
  {
    num: 7,
    color: "#8e44ad",
    title: "To remain friends lifelong",
    desc: "The final vow — to be best friends, confidants, and soulmates forever.",
  },
];

const S = {
  saptapadi: {
    background: "#111",
    padding: "70px 40px 80px",
    textAlign: "center",
  },
  h2: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "42px",
    fontWeight: 800,
    color: "#fff",
    marginBottom: "24px",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    color: "#c5943a",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.7,
    maxWidth: "680px",
    margin: "0 auto 50px",
  },
  cardsRow: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "nowrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    padding: "28px 18px 24px",
    flex: 1,
    minWidth: 0,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  stepNum: (color) => ({
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    background: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "22px",
    fontWeight: 700,
    fontFamily: "'Playfair Display', serif",
    marginBottom: "4px",
  }),
  stepTitle: (color) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: "15px",
    fontWeight: 700,
    color: color,
    lineHeight: 1.35,
  }),
  stepDesc: {
    fontSize: "12.5px",
    color: "#555",
    lineHeight: 1.6,
  },
  // MANGALYAM
  mangalyam: {
    background: "#fff",
    padding: "60px 40px 0",
    textAlign: "center",
  },
  sacredLabel: {
    letterSpacing: "4px",
    fontSize: "12px",
    fontWeight: 700,
    color: "#888",
    marginBottom: "12px",
    textTransform: "uppercase",
  },
  mangalyamH2: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "52px",
    fontWeight: 800,
    color: "#1a1a1a",
    marginBottom: "18px",
  },
  mangalyamSpan: { color: "#c0392b" },
  mangalyamSub: {
    fontStyle: "italic",
    fontSize: "16px",
    color: "#666",
    maxWidth: "560px",
    margin: "0 auto 40px",
  },
  bottomCards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  botImg: {
    background: "linear-gradient(135deg,#c8860a,#d4a96a)",
    height: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "60px",
  },
  botText: {
    background: "#f9f9f9",
    height: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
};

export default function SaptapadiSection() {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Nunito:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* SAPTAPADI */}
      <section style={S.saptapadi}>
        <h2 style={S.h2}>Saptapadi — The Seven Sacred Steps</h2>
        <p style={S.subtitle}>
          <strong>In Hindu tradition, the bride and groom take seven steps</strong>{" "}
          together around the sacred fire, each step signifying a lifelong vow to one another.
        </p>

        <div style={S.cardsRow}>
          {steps.map((step) => (
            <div key={step.num} style={S.card}>
              <div style={S.stepNum(step.color)}>{step.num}</div>
              <p style={S.stepTitle(step.color)}>{step.title}</p>
              <p style={S.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MANGALYAM */}
      <section style={S.mangalyam}>
        <p style={S.sacredLabel}>Sacred Vows</p>
        <h2 style={S.mangalyamH2}>
          The <span style={S.mangalyamSpan}>Mangalyam Mantra</span>
        </h2>
        <p style={S.mangalyamSub}>
          The eternal hymn chanted as the sacred thread is tied — uniting two souls for a lifetime
        </p>
        <div style={S.bottomCards}>
          <div style={S.botImg}>🪔</div>
          <div style={S.botText}>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.8, fontStyle: "italic" }}>
              "Mangalyam tantunanena mama jeevana hetuna..."
              <br />
              <span style={{ fontSize: "12px", color: "#aaa" }}>
                The sacred mantra that binds two souls together
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}