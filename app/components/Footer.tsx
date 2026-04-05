"use client";

import { tr } from "../i18n";

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer
      style={{
        width: "100%",
        padding: "20px 20px",
        textAlign: "center",
        borderTop: "1px solid #e0d4f5",
        background: "rgba(255,255,255,0.7)",
      }}
    >
      <div style={{ marginBottom: 8, display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
        <a href="/terms" style={{ color: "#7C6CDB", fontSize: 12, textDecoration: "none" }}>
          {tr("footer.terms", lang)}
        </a>
        <span style={{ color: "#ccc", fontSize: 12 }}>|</span>
        <a href="/legal" style={{ color: "#7C6CDB", fontSize: 12, textDecoration: "none" }}>
          {tr("footer.legal", lang)}
        </a>
        <span style={{ color: "#ccc", fontSize: 12 }}>|</span>
        <a href="/privacy" style={{ color: "#7C6CDB", fontSize: 12, textDecoration: "none" }}>
          {tr("footer.privacy", lang)}
        </a>
      </div>
      <p style={{ fontSize: 11, color: "#999", whiteSpace: "pre-line", lineHeight: 1.6 }}>
        {tr("footer.disclaimer", lang)}
      </p>
      <p style={{ fontSize: 11, color: "#bbb", marginTop: 8 }}>
        &copy; 2025 Quo Labo
      </p>
    </footer>
  );
}
