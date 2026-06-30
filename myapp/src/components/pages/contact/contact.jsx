import React, { useState } from "react";
import { Link } from "react-router-dom";  

const styles = {
  body: {
    fontFamily: "'Nunito', sans-serif",
    background: "#1a3a34",
    color: "#e0e0e0",
    minHeight: "100vh",
  },
  // NAVBAR
  navbar: {
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    height: "64px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "'Cinzel', serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#1a3a34",
    textDecoration: "none",
  },
  vLogo: {
    width: "36px",
    height: "36px",
    background: "#e74c3c",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: "14px",
  },
  navLinks: {
    display: "flex",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "15px",
    fontWeight: 500,
  },
  navLinkActive: {
    textDecoration: "none",
    color: "#e74c3c",
    fontSize: "15px",
    fontWeight: 700,
  },
  navBtns: { display: "flex", gap: "10px" },
  btnRegister: {
    background: "#22c55e",
    color: "#fff",
    border: "none",
    padding: "9px 18px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
  btnAdmin: {
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    padding: "9px 18px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
  btnLogin: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "9px 18px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
  // HERO
  hero: {
    textAlign: "center",
    padding: "56px 20px 40px",
  },
  badge: {
    display: "inline-block",
    border: "1.5px solid #6ab8a8",
    color: "#a8d8ce",
    fontSize: "13px",
    padding: "6px 18px",
    borderRadius: "20px",
    marginBottom: "20px",
    letterSpacing: "0.5px",
  },
  heroTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "46px",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.15,
    marginBottom: "16px",
  },
  heroSpan: { color: "#3b9ae1" },
  heroSub: {
    color: "#a8c5be",
    fontSize: "16px",
    maxWidth: "540px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  // CARDS
  cardsRow: {
    display: "flex",
    gap: "28px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "10px 40px 60px",
    alignItems: "flex-start",
  },
  officeCard: {
    background: "#fff",
    borderRadius: "14px",
    padding: "36px 32px",
    flex: 1.1,
    color: "#222",
    minWidth: 0,
  },
  messageCard: {
    background: "#fff",
    borderRadius: "14px",
    padding: "36px 32px",
    flex: 1.4,
    color: "#222",
    minWidth: 0,
  },
  cardTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "28px",
    color: "#1a1a1a",
  },
  cardTitleFlex: {
    fontFamily: "'Cinzel', serif",
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "24px",
    color: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "26px",
  },
  iconBase: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "20px",
  },
  infoTextH: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#111",
    marginBottom: "4px",
  },
  infoTextP: {
    fontSize: "13.5px",
    color: "#555",
    lineHeight: 1.6,
    margin: 0,
  },
  // FORM
  formRow: { display: "flex", gap: "16px", marginBottom: "16px" },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "6px",
    marginBottom: "0",
  },
  formGroupFull: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "16px",
  },
  label: { fontSize: "13px", fontWeight: 600, color: "#333" },
  input: {
    border: "1.5px solid #e2e8f0",
    borderRadius: "7px",
    padding: "11px 14px",
    fontSize: "14px",
    fontFamily: "'Nunito', sans-serif",
    color: "#333",
    outline: "none",
    background: "#fff",
  },
  textarea: {
    border: "1.5px solid #e2e8f0",
    borderRadius: "7px",
    padding: "11px 14px",
    fontSize: "14px",
    fontFamily: "'Nunito', sans-serif",
    color: "#333",
    outline: "none",
    background: "#fff",
    resize: "none",
    height: "90px",
  },
  btnSend: {
    width: "100%",
    background: "#4a6cf7",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "13px",
    fontSize: "15px",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    letterSpacing: "0.3px",
    marginTop: "4px",
  },
  // FOOTER
  footer: {
    background: "#111",
    color: "#aaa",
    padding: "40px 40px 20px",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "32px",
    maxWidth: "1100px",
    margin: "0 auto 32px",
  },
  footerH3: {
    fontFamily: "'Cinzel', serif",
    fontSize: "16px",
    color: "#fff",
    marginBottom: "14px",
  },
  footerLink: {
    display: "block",
    fontSize: "13px",
    color: "#888",
    textDecoration: "none",
    marginBottom: "8px",
    lineHeight: 1.6,
  },
  footerBottom: {
    textAlign: "center",
    fontSize: "12px",
    color: "#555",
    borderTop: "1px solid #222",
    paddingTop: "16px",
  },
};

const infoItems = [
  {
    icon: "📍",
    bg: "#dbeafe",
    title: "Address",
    content: "Skd nagar, Chittor road ,\nPiller, Andhra Pradesh – 517214, India",
  },
  {
    icon: "📞",
    bg: "#dcfce7",
    title: "Phone",
    content: "+91 8179574652",
  },
  {
    icon: "✉️",
    bg: "#fef3c7",
    title: "Email",
    content: "slvmatrimony288@gmail.com",
  },
  {
    icon: "🕐",
    bg: "#ede9fe",
    title: "Working Hours",
    content: "Monday - Saturday: 10:00 AM – 7:00 PM\nSunday: Holiday",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div style={styles.body}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Nunito:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* NAVBAR */}
      {/* <nav style={styles.navbar}>
        <div style={styles.brand}>
          <div style={styles.vLogo}>V</div>
          <span style={{ color: "#e74c3c" }}>Vikshana</span>&nbsp;Matrimony
        </div>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
          <li><Link to="/contact" style={styles.navLinkActive}>Contact Us</Link></li>
        </ul>
        <div style={styles.navBtns}>
          <button style={styles.btnRegister}>Register Now</button>
          <button style={styles.btnAdmin}>Admin Login</button>
          <button style={styles.btnLogin}>Log In</button>
        </div>
      </nav> */}

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.badge}>Get In Touch</div>
        <h1 style={styles.heroTitle}>
          Contact <span style={styles.heroSpan}>Us</span>
        </h1>
        <p style={styles.heroSub}>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* CARDS */}
      <div style={styles.cardsRow}>
        {/* Office Info Card */}
        <div style={styles.officeCard}>
          <h2 style={styles.cardTitle}>Our Office</h2>
          {infoItems.map((item) => (
            <div key={item.title} style={styles.infoItem}>
              <div style={{ ...styles.iconBase, background: item.bg }}>{item.icon}</div>
              <div>
                <p style={styles.infoTextH}>{item.title}</p>
                <p style={styles.infoTextP}>
                  {item.content.split("\n").map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Form Card */}
        <div style={styles.messageCard}>
          <h2 style={styles.cardTitleFlex}>
            <span style={{ color: "#3b9ae1" }}>✈</span> Send Us a Message
          </h2>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={styles.formGroupFull}>
            <label style={styles.label}>Phone Number</label>
            <input
              style={styles.input}
              type="text"
              name="phone"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroupFull}>
            <label style={styles.label}>Your Message</label>
            <textarea
              style={styles.textarea}
              name="message"
              placeholder="How can we help you?"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button style={styles.btnSend} onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <h3 style={styles.footerH3}>Sri Lakshmi Venkateswara Matrimony</h3>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>
              Connecting hearts, building families. Find your perfect life partner with us.
            </p>
          </div>
          <div>
            <h3 style={styles.footerH3}>Quick Links</h3>
            {["Home", "About Us", "Contact Us", "Register"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : l === "About Us" ? "/about" : l === "Contact Us" ? "/contact" : "/register"} style={styles.footerLink}>
                {l}
              </Link>
            ))}
          </div>
          <div>
            <h3 style={styles.footerH3}>Contact Us</h3>
            <p style={styles.footerLink}>📍SKD Nagar ,Chittor Road, Piller ,Andhra Pradesh</p>
          <a href="tel:+918179574652" style={styles.footerLink}>
  📞 +91 8179574652
</a>
    <a
  href="mailto:slvmatrimony288@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20matrimony%20services."
  style={styles.footerLink}
>
  ✉️ slvmatrimony288@gmail.com
</a>
          </div>
          <div>
            <h3 style={styles.footerH3}>Follow Us</h3>
            {["Facebook", "Instagram", "Twitter"].map((s) => (
              <Link key={s} to="#" style={styles.footerLink}>{s}</Link>
            ))}
          </div>
        </div>
        <div style={styles.footerBottom}>© 2026 Sri Lakshmi Venkateswara Matrimony. All rights reserved.</div>
      </footer>
    </div>
  );
}