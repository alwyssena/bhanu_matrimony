import React, { useState } from "react";

const brides = [
  {
    id: 1,
    name: "Priya S.",
    age: 26,
    city: "Tirupati",
    profession: "Software Engineer",
    img: "https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=300&q=80",
  },
  {
    id: 2,
    name: "Ananya R.",
    age: 24,
    city: "Hyderabad",
    profession: "Teacher",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
  },
  {
    id: 3,
    name: "Kavya M.",
    age: 27,
    city: "Bangalore",
    profession: "Doctor",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  },
  {
    id: 4,
    name: "Deepika K.",
    age: 25,
    city: "Chennai",
    profession: "MBA",
    img: "https://images.unsplash.com/photo-1591491653056-4e9c2fde8e22?w=300&q=80",
  },
  {
    id: 5,
    name: "Meera V.",
    age: 28,
    city: "Vijayawada",
    profession: "Nurse",
    img: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=300&q=80",
  },
  {
    id: 6,
    name: "Nandini P.",
    age: 23,
    city: "Nellore",
    profession: "Designer",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&q=80",
  },
];

const grooms = [
  {
    id: 1,
    name: "Arjun N.",
    age: 29,
    city: "Tirupati",
    profession: "Engineer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    id: 2,
    name: "Rahul K.",
    age: 30,
    city: "Hyderabad",
    profession: "Doctor",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    id: 3,
    name: "Vikram S.",
    age: 28,
    city: "Bangalore",
    profession: "MBA",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    id: 4,
    name: "Karthik R.",
    age: 31,
    city: "Chennai",
    profession: "IT Professional",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&q=80",
  },
  {
    id: 5,
    name: "Suresh M.",
    age: 27,
    city: "Guntur",
    profession: "Govt Job",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  },
  {
    id: 6,
    name: "Aditya T.",
    age: 32,
    city: "Vizag",
    profession: "Business",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80",
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
          {person.age} yrs · {person.city}
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