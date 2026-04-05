"use client";

import { useState, useEffect } from "react";
import { tr, detectLanguage } from "../i18n";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  const [lang, setLang] = useState("en");
  useEffect(() => { setLang(detectLanguage()); }, []);

  const sections = ["1", "2", "3", "4", "5", "6", "7"];

  const sectionStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.7)",
    borderRadius: 16,
    padding: "20px 24px",
    border: "1px solid #e0d4f5",
    marginBottom: 12,
    boxShadow: "0 2px 12px rgba(124,108,219,0.08)",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav lang={lang} setLang={setLang} />

      <div style={{ maxWidth: 700, margin: "24px auto", padding: "40px 24px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", flex: 1 }}>
        <h1 style={{ fontSize: 26, marginBottom: 8, color: "#7C6CDB", textAlign: "center" }}>
          {"🔒 "}{tr("privacy.title", lang)}
        </h1>
        <p style={{ textAlign: "center", color: "#777", marginBottom: 24, fontSize: 13 }}>
          {tr("privacy.intro", lang)}
        </p>
        {sections.map((n) => (
          <div key={n} style={sectionStyle}>
            <div style={{ fontSize: 16, fontWeight: "bold", color: "#7C6CDB", marginBottom: 8 }}>
              {tr(`privacy.${n}.title`, lang)}
            </div>
            <div style={{ color: "#555", lineHeight: 1.8, fontSize: 13, whiteSpace: "pre-line" }}>
              {tr(`privacy.${n}.body`, lang)}
            </div>
          </div>
        ))}
        <p style={{ textAlign: "center", color: "#999", fontSize: 12, marginTop: 20 }}>
          {tr("privacy.date", lang)}
        </p>
      </div>

      <Footer lang={lang} />
    </div>
  );
}
