import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* www and the bare domain were both answering 200 on every URL, so Google indexed two copies of
     the site — 2.08K indexed against 1,633 in the sitemap. Every page's authority was split
     between two hosts, and duplicates competed with each other.

     The canonical tags already point at the bare domain, so www redirects to it permanently. */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.industrybosspro.com" }],
        destination: "https://industrybosspro.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
