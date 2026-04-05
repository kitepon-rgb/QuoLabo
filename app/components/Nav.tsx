"use client";

import { tr, setLanguage } from "../i18n";

export default function Nav({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (l: string) => void;
}) {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px 20px",
        padding: "14px 20px",
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid #e0d4f5",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <a
        href="/"
        style={{
          color: "#7C6CDB",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        Quo Labo
      </a>
      <div style={{ marginLeft: "auto", display: "flex", gap: "6px" }}>
        {(["en", "ja", "ko", "zh"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLanguage(l, setLang)}
            style={{
              padding: "4px 10px",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 12,
              border: "none",
              background:
                lang === l ? "#7C6CDB" : "rgba(255,255,255,0.5)",
              color: lang === l ? "#fff" : "#777",
            }}
          >
            {{ en: "EN", ja: "JA", ko: "KO", zh: "ZH" }[l]}
          </button>
        ))}
      </div>
    </nav>
  );
}
