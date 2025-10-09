import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	output: "export",
	basePath: "/sfe-competition-2025",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
