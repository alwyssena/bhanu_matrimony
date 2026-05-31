import React from "react";

const features = [
  {
    id: 1,
    title: "Dedicated Relationship Manager",
    desc: "A personal advisor to guide you through your search",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b1a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Handpicked Matches",
    desc: "Carefully selected profiles matching your criteria",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b1a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Priority Support",
    desc: "24/7 dedicated support for all your queries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b1a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 7.09 7.09l1.86-1.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const S = {
  page: {
    background: "#ede8e8",
    padding: "60px 40px",
    fontFamily: "'Nunito', sans-serif",
  },
  card: {
    background: "#f5eeee",
    borderRadius: "20px",
    padding: "50px 56px",
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "60px",
  },
  left: {
    flex: 1,
    minWidth: 0,
  },
  h2: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "34px",
    fontWeight: 800,
    color: "#1a1a1a",
    marginBottom: "18px",
  },
  intro: {
    fontSize: "15px",
    color: "#555",
    lineHeight: 1.7,
    marginBottom: "30px",
    maxWidth: "500px",
  },
  features: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "36px",
  },
  feat: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },
  featIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    background: "#ede0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  featTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "3px",
  },
  featDesc: {
    fontSize: "13px",
    color: "#777",
    lineHeight: 1.5,
    margin: 0,
  },
  btns: {
    display: "flex",
    gap: "14px",
  },
  btnKnow: {
    background: "#8b1a3a",
    color: "#fff",
    border: "none",
    padding: "13px 26px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  btnContact: {
    background: "transparent",
    color: "#8b1a3a",
    border: "2px solid #8b1a3a",
    padding: "13px 26px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
  right: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgWrap: {
    position: "relative",
    width: "280px",
    height: "320px",
  },
  circleOrange: {
    position: "absolute",
    width: "200px",
    height: "200px",
    background: "#fd7e14",
    borderRadius: "50%",
    bottom: "20px",
    left: "10px",
    zIndex: 0,
  },
  circleTeal: {
    position: "absolute",
    width: "160px",
    height: "160px",
    background: "#20c997",
    borderRadius: "50%",
    bottom: "0px",
    right: "0px",
    zIndex: 0,
  },
  img: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
  },
};

export default function AssistedService() {
  return (
    <div style={S.page}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={S.card}>
        {/* LEFT */}
        <div style={S.left}>
          <h2 style={S.h2}>Assisted Matrimony Service</h2>
          <p style={S.intro}>
            Let our expert relationship managers help you find your perfect life partner. We
            understand that finding the right match takes time and effort, and we're here to help.
          </p>

          <div style={S.features}>
            {features.map((f) => (
              <div key={f.id} style={S.feat}>
                <div style={S.featIcon}>{f.icon}</div>
                <div>
                  <p style={S.featTitle}>{f.title}</p>
                  <p style={S.featDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={S.btns}>
            <button style={S.btnKnow}>Know More &nbsp;→</button>
            <button style={S.btnContact}>Contact Us</button>
          </div>
        </div>

        {/* RIGHT */}
        <div style={S.right}>
          <div style={S.imgWrap}>
            <div style={S.circleOrange} />
            <div style={S.circleTeal} />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
              alt="Relationship Manager"
              style={S.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}