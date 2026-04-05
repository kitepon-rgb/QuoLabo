import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quo Labo",
  description: "Quo Labo - Digital Tools & Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif",
          color: "#333",
          backgroundImage: "url(/bg.jpg)",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
