"use client";

import { useState, useEffect } from "react";
import { tr, detectLanguage } from "../i18n";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function LegalPage() {
  const [lang, setLang] = useState("en");
  useEffect(() => { setLang(detectLanguage()); }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(tr("legal.contact.error", lang));
      }
    } catch {
      setError(tr("legal.contact.error", lang));
    }
    setSending(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px", borderRadius: "8px",
    border: "1px solid #d0c8e8", background: "rgba(255,255,255,0.8)", color: "#333",
    fontSize: "14px", boxSizing: "border-box",
  };

  const legalRows: [string, string][] = [
    ["legal.seller", "legal.seller.value"],
    ["legal.address", "legal.address.value"],
    ["legal.phone", "legal.phone.value"],
    ["legal.contactMethod", "legal.contactMethod.value"],
    ["legal.url", "_url_"],
    ["legal.price", "legal.price.value"],
    ["legal.additionalFees", "legal.additionalFees.value"],
    ["legal.payment", "legal.payment.value"],
    ["legal.paymentTiming", "legal.paymentTiming.value"],
    ["legal.delivery", "legal.delivery.value"],
    ["legal.cancellation", "legal.cancellation.value"],
    ["legal.environment", "legal.environment.value"],
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav lang={lang} setLang={setLang} />

      <div style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "40px 24px", margin: "24px auto", maxWidth: 700, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", lineHeight: 1.8, flex: 1 }}>

        {/* Contact Form */}
        <div style={{ padding: "24px", background: "rgba(255,255,255,0.7)", borderRadius: 16, border: "1px solid #e0d4f5", boxShadow: "0 2px 12px rgba(124,108,219,0.08)", marginBottom: 60 }}>
          <h2 style={{ fontSize: 18, marginBottom: 16, color: "#7C6CDB" }}>
            {tr("legal.contact", lang)}
          </h2>
          {sent ? (
            <p style={{ color: "#44aa44" }}>{tr("legal.contact.sent", lang)}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: "block", marginBottom: 4, color: "#777", fontSize: 13 }}>
                  {tr("legal.contact.name", lang)}
                </label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: "block", marginBottom: 4, color: "#777", fontSize: 13 }}>
                  {tr("legal.contact.email", lang)}
                </label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 4, color: "#777", fontSize: 13 }}>
                  {tr("legal.contact.message", lang)}
                </label>
                <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              {error && <p style={{ color: "#cc4444", marginBottom: 12 }}>{error}</p>}
              <button type="submit" disabled={sending} style={{
                width: "100%", padding: "12px", borderRadius: 8, border: "none",
                background: sending ? "#b0a4e0" : "#7C6CDB", color: "#fff", fontSize: 16, fontWeight: "bold",
                cursor: sending ? "default" : "pointer",
              }}>
                {sending ? tr("legal.contact.sending", lang) : tr("legal.contact.send", lang)}
              </button>
            </form>
          )}
        </div>

        {/* Legal Notice Table */}
        <h3 style={{ fontSize: 14, color: "#7C6CDB", marginBottom: 4 }}>
          {tr("legal.title", lang)}
        </h3>
        {tr("legal.subtitle", lang) && (
          <p style={{ fontSize: 11, color: "#777", marginBottom: 16 }}>
            {tr("legal.subtitle", lang)}
          </p>
        )}

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {legalRows.map(([labelKey, valueKey]) => (
              <tr key={labelKey} style={{ borderBottom: "1px solid #e0d4f5" }}>
                <td style={{ padding: "10px 12px", color: "#777", fontSize: 13, whiteSpace: "nowrap", verticalAlign: "top", width: "30%" }}>
                  {tr(labelKey, lang)}
                </td>
                <td style={{ padding: "10px 12px", color: "#555", fontSize: 13, whiteSpace: "pre-line" }}>
                  {valueKey === "_url_" ? "https://quo-labo.vercel.app" : tr(valueKey, lang)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer lang={lang} />
    </div>
  );
}
