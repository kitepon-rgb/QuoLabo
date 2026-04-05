"use client";

import { useState, useEffect } from "react";
import { tr, detectLanguage } from "../i18n";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function TermsPage() {
  const [lang, setLang] = useState("en");
  useEffect(() => { setLang(detectLanguage()); }, []);

  const articles = Array.from({ length: 17 }, (_, i) => i + 1);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav lang={lang} setLang={setLang} />

      <div style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "40px 24px", margin: "24px auto", maxWidth: 700, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", flex: 1 }}>
        <h1 style={{ fontSize: 24, marginBottom: 30, color: "#333" }}>
          {"📜 "}{tr("terms.title", lang)}
        </h1>
        {articles.map((n) => (
          <div key={n} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, color: "#7C6CDB", marginBottom: 8 }}>
              {tr(`terms.${n}.title`, lang)}
            </h2>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
              {tr(`terms.${n}.body`, lang)}
            </p>
          </div>
        ))}
        <p style={{ color: "#777", fontSize: 12, marginTop: 40 }}>
          {tr("terms.date", lang)}
        </p>
      </div>

      <Footer lang={lang} />
    </div>
  );
}
