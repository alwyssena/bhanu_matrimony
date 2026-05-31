import React, { useState } from "react";

const plans = [
  {
    id: "support",
    title: "Support Matrimony",
    accent: "#3b9ae1",
    iconBg: "#e8f4fd",
    payBg: "#8b1a3a",
    badge: null,
    tabs: ["1 Month", "3 Months", "6 Months"],
    defaultTab: 0,
    prices: { "1 Month": "₹7,000", "3 Months": "₹18,000", "6 Months": "₹30,000" },
    period: { "1 Month": "/ 1 Month", "3 Months": "/ 3 Months", "6 Months": "/ 6 Months" },
    features: [
      { text: "Dedicated Relationship Manager", included: true },
      { text: "Weekly Profile Sharing", included: true },
      { text: "Processing of Selected Profiles", included: true },
      { text: "Regular Feedback & Follow-ups", included: true },
      { text: "Personal Verification of Details", included: false },
      { text: "Direct Meeting Arrangements", included: false },
    ],
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "affluent",
    title: "Affluent Matrimony",
    accent: "#fd7e14",
    iconBg: "#fff3e0",
    payBg: "linear-gradient(90deg,#fd7e14,#e67e22)",
    badge: { label: "Popular", bg: "#fd7e14" },
    tabs: ["3 Months", "6 Months", "1 Year"],
    defaultTab: 0,
    prices: { "3 Months": "₹25,000", "6 Months": "₹45,000", "1 Year": "₹80,000" },
    period: { "3 Months": "/ 3 Months", "6 Months": "/ 6 Months", "1 Year": "/ 1 Year" },
    features: [
      { text: "Affluent Family Profiles", included: true },
      { text: "Dedicated Relationship Manager", included: true },
      { text: "Handpicked Matches", included: true },
      { text: "Personal Verification of Details", included: true },
      { text: "Relationship Manager Assistance", included: true },
      { text: "Direct Meeting Arrangements", included: false },
    ],
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "tillu",
    title: "Till U Marriage",
    accent: "#9b59b6",
    iconBg: "#f3e5f5",
    payBg: "linear-gradient(90deg,#9b59b6,#8e44ad)",
    badge: { label: "Recommended", bg: "#9b59b6" },
    tabs: [],
    defaultTab: null,
    prices: { default: "₹1,00,000" },
    period: { default: "/ One Time" },
    features: [
      { text: "Rich and Affluent Matches", included: true },
      { text: "Unlimited Number of Profiles", included: true },
      { text: "Weekly Email Updates & Processing", included: true },
      { text: "Dedicated Relationship Manager", included: true },
      { text: "Daily Feedback", included: true },
      { text: "Direct Meeting Arrangements", included: true },
      { text: "VIP Match Making", included: true, vip: true },
    ],
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

function PlanCard({ plan }) {
  const [activeTab, setActiveTab] = useState(plan.defaultTab ?? null);
  const tabKey = plan.tabs.length > 0 ? plan.tabs[activeTab] : "default";
  const price = plan.prices[tabKey] || plan.prices["default"];
  const period = plan.period[tabKey] || plan.period["default"];

  return (
    <div style={{
      background: "#fff",
      borderRadius: "16px",
      padding: "28px 28px 32px",
      textAlign: "left",
      position: "relative",
      border: `2px solid ${plan.accent}`,
      fontFamily: "'Nunito', sans-serif",
    }}>
      {/* Badge */}
      {plan.badge && (
        <span style={{
          position: "absolute", top: "20px", right: "20px",
          background: plan.badge.bg, color: "#fff",
          fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px",
        }}>
          {plan.badge.label}
        </span>
      )}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
        <div style={{
          width: "50px", height: "50px", borderRadius: "12px",
          background: plan.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          {plan.icon(plan.accent)}
        </div>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#1a1a1a" }}>
          {plan.title}
        </span>
      </div>

      {/* Tabs */}
      {plan.tabs.length > 0 && (
        <div style={{ display: "flex", gap: "8px", marginBottom: "22px", flexWrap: "wrap" }}>
          {plan.tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "6px 14px", borderRadius: "6px", fontSize: "12px", fontWeight: 700,
                cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                background: activeTab === i ? (plan.id === "support" ? "#8b1a3a" : plan.accent) : "#fff",
                color: activeTab === i ? "#fff" : "#555",
                border: activeTab === i
                  ? `1.5px solid ${plan.id === "support" ? "#8b1a3a" : plan.accent}`
                  : "1.5px solid #ddd",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Price */}
      <div style={{ marginBottom: "20px", marginTop: plan.tabs.length === 0 ? "8px" : "0" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 800, color: "#1a1a1a" }}>
          {price}
        </span>
        <span style={{ fontSize: "14px", color: "#888", marginLeft: "4px" }}>{period}</span>
      </div>

      {/* Features */}
      <ul style={{ listStyle: "none", marginBottom: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {plan.features.map((f, i) => (
          <li key={i} style={{
            display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px",
            color: f.included ? "#333" : "#aaa",
            textDecoration: f.included ? "none" : "line-through",
          }}>
            <span style={{
              width: "18px", height: "18px", borderRadius: "50%", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "10px",
              background: f.included ? plan.iconBg : "#f5f5f5",
              color: f.included ? plan.accent : "#ccc",
              fontWeight: 700,
            }}>
              {f.included ? "✓" : "✕"}
            </span>
            {f.vip
              ? <span style={{ color: plan.accent, fontWeight: 700 }}>{f.text}</span>
              : f.text
            }
          </li>
        ))}
      </ul>

      {/* Pay Button */}
      <button style={{
        width: "100%", padding: "14px", border: "none", borderRadius: "10px",
        fontSize: "15px", fontWeight: 700, cursor: "pointer",
        fontFamily: "'Nunito', sans-serif", color: "#fff",
        background: plan.payBg,
      }}>
        Pay Now
      </button>
    </div>
  );
}

export default function PricingPackages() {
  return (
    <div style={{ background: "#f0f2f5", padding: "60px 40px 80px", fontFamily: "'Nunito', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 800, color: "#1a1a1a", marginBottom: "12px" }}>
          Our Assisted Matrimony Packages
        </h2>
        <p style={{ fontSize: "15px", color: "#888" }}>
          Let our expert relationship managers find the perfect match for you
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        maxWidth: "1100px",
        margin: "0 auto",
        alignItems: "start",
      }}>
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}