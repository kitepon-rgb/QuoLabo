import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/auctionbot",
        destination: "https://web-quo-lu.vercel.app/",
      },
      {
        source: "/auctionbot/:path*",
        destination: "https://web-quo-lu.vercel.app/:path*",
      },
      {
        source: "/connectc2x",
        destination: "https://connectc2x.vercel.app/",
      },
      {
        source: "/connectc2x/:path*",
        destination: "https://connectc2x.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
