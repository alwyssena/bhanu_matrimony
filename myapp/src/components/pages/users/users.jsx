import React, { useState } from "react";

const brides = [
  {
    id: 1,
    name: "Bindh Madhuri Janupally",
    // age: 27,
    // city: "Tirupati",
    // profession: "Software Engineer",
    img: "photos/female_1.jpeg",
  },
  {
    id: 2,
    name: "C Susmitha",
    // age: 24,
    // city: "Hyderabad",
    // profession: "Teacher",
    img: "photos/female_2.jpeg",
  },
  {
    id: 3,
    name: "Indhumathi P",
    // age: 25,
    // city: "Bangalore",
    // profession: "Doctor",
    img: "photos/female_4.jpeg",
  },
  {
    id: 4,
    name: "Indhu Bhattula",
    // age: 25,
    // city: "Chennai",
    // profession: "MBA",
    img: "photos/female_7.jpeg",
  },
  {
    id: 5,
    name: "Chathuraya Sri.",
    // age: 28,
    // city: "Vijayawada",
    // profession: "Nurse",
    img: "photos/female_8.jpeg",
  },
  {
    id: 6,
    name: "Swetha Naidu",
    // age: 23,
    // city: "Nellore",
    // profession: "Designer",
    img: "photos/female_9.jpeg",
  },
];

const grooms = [
  {
    id: 1,
    name: "Yeswanth Reddy",
    // age: 29,
    // city: "Tirupati",
    // profession: "Engineer",
    img: "photos/male_1.jpeg",
  },
  {
    id: 2,
    name: "Prassana Kumar Reddy",
    // age: 33,
    // city: "Hyderabad",
    // profession: "Doctor",
    img: "photos/male_2.jpeg",
  },
  {
    id: 3,
    name: "Dinesh Kumar Kamatham.",
    // age: 33,
    // city: "Bangalore",
    // profession: "MBA",
    img: "photos/male_4.jpeg",
  },
  {
    id: 4,
    name: "Koushik Varma",
    // age: 31,
    // city: "Chennai",
    // profession: "IT Professional",
    img: "photos/male_5.jpeg",
  },
  {
    id: 5,
    name: "Srinivas Nethara Padala",
    // age: 27,
    // city: "Guntur",
    // profession: "Govt Job",
    img: "photos/male_6.jpeg",
  },
  {
    id: 6,
    name: " Dhanasuryaprakash Natarajan",
    // age: 32,
    // city: "Vizag",
    // profession: "Business",
    img: "photos/male_7.jpeg",
  },
];

const S = {
  page: {
    background: "#f9f5f0",
    minHeight: "100vh",
    fontFamily: "'Nunito', sans-serif",
    padding: "40px 40px",
  },
  sectionLabel: {
    fontSize: "12px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: "6px",
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
    gap: "16px",
    marginBottom: "48px",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    cursor: "pointer",
    transition: "transform 0.15s, box-shadow 0.15s",
  },
  img: {
    width: "100%",
    aspectRatio: "3/4",
    objectFit: "cover",
    display: "block",
    background: "#e9e0d8",
  },
  cardBody: {
    padding: "12px 14px",
  },
  cardName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "15px",
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: "3px",
  },
  cardMeta: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "8px",
  },
  tagBride: {
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "999px",
    background: "#fce4ec",
    color: "#c2185b",
    fontWeight: 600,
    display: "inline-block",
  },
  tagGroom: {
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "999px",
    background: "#e3f2fd",
    color: "#1565c0",
    fontWeight: 600,
    display: "inline-block",
  },
  divider: {
    height: "1px",
    background: "#e8e0d8",
    marginBottom: "40px",
  },
  viewBtn: {
    width: "100%",
    marginTop: "8px",
    background: "transparent",
    border: "1px solid #e0d5cc",
    borderRadius: "7px",
    padding: "6px",
    fontSize: "12px",
    color: "#888",
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
};

function ProfileCard({ person, type }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...S.card,
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.13)"
          : "0 2px 12px rgba(0,0,0,0.07)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={person.img}
        alt={`${person.name}, ${person.age}, ${person.profession}`}
        style={S.img}
        loading="lazy"
      />
      <div style={S.cardBody}>
        <p style={S.cardName}>{person.name}</p>
        <p style={S.cardMeta}>
          {person.age} · {person.city}
        </p>
        <p style={{ ...S.cardMeta, marginBottom: "8px" }}>{person.profession}</p>
        <span style={type === "bride" ? S.tagBride : S.tagGroom}>
          {type === "bride" ? "Bride" : "Groom"}
        </span>
        <button style={S.viewBtn}>View Profile →</button>
      </div>
    </div>
  );
}

export default function ProfilesGallery() {
  return (
    <div style={S.page}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* BRIDES */}
      <p style={S.sectionLabel}>Browse Profiles</p>
      <h2 style={{ ...S.sectionTitle, color: "#b5294e" }}>
        🌸 Brides
      </h2>
      <div style={S.grid}>
        {brides.map((bride) => (
          <ProfileCard key={bride.id} person={bride} type="bride" />
        ))}
      </div>

      <div style={S.divider} />

      {/* GROOMS */}
      <h2 style={{ ...S.sectionTitle, color: "#1565c0" }}>
        👔 Grooms
      </h2>
      <div style={S.grid}>
        {grooms.map((groom) => (
          <ProfileCard key={groom.id} person={groom} type="groom" />
        ))}
      </div>
    </div>
  );
}