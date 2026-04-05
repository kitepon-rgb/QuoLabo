"use client";

import { useState, useEffect } from "react";
import { tr, detectLanguage } from "./i18n";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  const [lang, setLang] = useState("en");
  useEffect(() => { setLang(detectLanguage()); }, []);

  const products = [
    {
      emoji: "\u{1F528}",
      nameKey: "product.auctionbot.name",
      descKey: "product.auctionbot.desc",
      features: ["product.auctionbot.f1", "product.auctionbot.f2", "product.auctionbot.f3", "product.auctionbot.f4"],
      href: "/auctionbot",
    },
    {
      emoji: "\u{1F517}",
      nameKey: "product.connectc2x.name",
      descKey: "product.connectc2x.desc",
      features: ["product.connectc2x.f1", "product.connectc2x.f2", "product.connectc2x.f3", "product.connectc2x.f4"],
      href: "/connectc2x",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav lang={lang} setLang={setLang} />

      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 20px 40px", maxWidth: 900, width: "100%", margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: "#7C6CDB", marginBottom: 12, textAlign: "center" }}>
          {tr("site.title", lang)}
        </h1>
        <p style={{ fontSize: 18, color: "#555", textAlign: "center", marginBottom: 48, lineHeight: 1.6 }}>
          {tr("site.subtitle", lang)}
        </p>

        <div style={{ display: "flex", gap: 28, width: "100%", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((p) => (
            <a
              key={p.href}
              href={p.href}
              style={{
                flex: "1 1 340px", maxWidth: 420,
                background: "rgba(255,255,255,0.88)", backdropFilter: "blur(10px)",
                borderRadius: 16, border: "1.5px solid #e0d4f5",
                boxShadow: "0 2px 16px rgba(124,108,219,0.10)",
                padding: "36px 32px",
                display: "flex", flexDirection: "column", gap: 16,
                textDecoration: "none", color: "inherit",
                transition: "box-shadow 0.2s, transform 0.2s", cursor: "pointer",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 28px rgba(124,108,219,0.18)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 16px rgba(124,108,219,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 36, textAlign: "center" }}>{p.emoji}</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#7C6CDB", textAlign: "center" }}>
                {tr(p.nameKey, lang)}
              </h2>
              <p style={{ fontSize: 14, color: "#777", textAlign: "center", lineHeight: 1.6 }}>
                {tr(p.descKey, lang)}
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                {p.features.map((fk) => (
                  <li key={fk} style={{ fontSize: 14, color: "#555", lineHeight: 1.5 }}>
                    <span style={{ color: "#5BC0BE", marginRight: 8 }}>✨</span>
                    {tr(fk, lang)}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", paddingTop: 16, textAlign: "center" }}>
                <span style={{ display: "inline-block", padding: "10px 28px", background: "#7C6CDB", color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 15 }}>
                  {tr("product.learnMore", lang)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
