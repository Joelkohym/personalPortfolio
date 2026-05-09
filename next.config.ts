import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	allowedDevOrigins: ["192.168.56.1"],
	typescript: {
		// This allows the build to complete even if there are type errors
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
