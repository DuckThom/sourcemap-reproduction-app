import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,

    // Explicitly disable sourcemaps
    productionBrowserSourceMaps: false,
};

export default nextConfig;
