"use client";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <header
        style={{
          width: "100%",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #e0d4f5",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#7C6CDB",
            letterSpacing: 1,
          }}
        >
          Quo Labo
        </span>
      </header>

      {/* Hero */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "60px 20px 40px",
          maxWidth: 900,
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#7C6CDB",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Quo Labo
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#555",
            textAlign: "center",
            marginBottom: 48,
            lineHeight: 1.6,
          }}
        >
          Digital Tools &amp; Services
        </p>

        {/* Product Cards */}
        <div
          style={{
            display: "flex",
            gap: 28,
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* AuctionBOT Card */}
          <a
            href="/auctionbot"
            style={{
              flex: "1 1 340px",
              maxWidth: 420,
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(10px)",
              borderRadius: 16,
              border: "1.5px solid #e0d4f5",
              boxShadow: "0 2px 16px rgba(124,108,219,0.10)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              textDecoration: "none",
              color: "inherit",
              transition: "box-shadow 0.2s, transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 28px rgba(124,108,219,0.18)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 16px rgba(124,108,219,0.10)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: 36,
                textAlign: "center",
              }}
            >
              🔨
            </div>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#7C6CDB",
                textAlign: "center",
              }}
            >
              AuctionBOT
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#777",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              Guild auction management for any game
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginTop: 4,
              }}
            >
              {[
                "Discord BOT for in-game auctions",
                "Unlimited concurrent auctions (Pro)",
                "Settlement netting & offsetting",
                "Multi-language (EN/JA/KO/ZH)",
              ].map((f) => (
                <li
                  key={f}
                  style={{ fontSize: 14, color: "#555", lineHeight: 1.5 }}
                >
                  <span style={{ color: "#5BC0BE", marginRight: 8 }}>✨</span>
                  {f}
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 16,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 28px",
                  background: "#7C6CDB",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Learn More
              </span>
            </div>
          </a>

          {/* ConnectC2X Card */}
          <a
            href="/connectc2x"
            style={{
              flex: "1 1 340px",
              maxWidth: 420,
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(10px)",
              borderRadius: 16,
              border: "1.5px solid #e0d4f5",
              boxShadow: "0 2px 16px rgba(124,108,219,0.10)",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              textDecoration: "none",
              color: "inherit",
              transition: "box-shadow 0.2s, transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 28px rgba(124,108,219,0.18)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 16px rgba(124,108,219,0.10)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: 36,
                textAlign: "center",
              }}
            >
              🔗
            </div>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#7C6CDB",
                textAlign: "center",
              }}
            >
              ConnectC2X
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#777",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              X/Twitter MCP Server for Claude
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginTop: 4,
              }}
            >
              {[
                "Fetch tweets, timelines & search",
                "Works with Claude Desktop & claude.ai",
                "Bring Your Own Key (BYOK)",
                "Multi-language (EN/JA/KO/ZH)",
              ].map((f) => (
                <li
                  key={f}
                  style={{ fontSize: 14, color: "#555", lineHeight: 1.5 }}
                >
                  <span style={{ color: "#5BC0BE", marginRight: 8 }}>✨</span>
                  {f}
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: "auto",
                paddingTop: 16,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 28px",
                  background: "#7C6CDB",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Learn More
              </span>
            </div>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          padding: "24px 32px",
          textAlign: "center",
          fontSize: 13,
          color: "#999",
          borderTop: "1px solid #e0d4f5",
          background: "rgba(255,255,255,0.7)",
        }}
      >
        &copy; 2025 Quo Labo. All rights reserved.
      </footer>
    </div>
  );
}
