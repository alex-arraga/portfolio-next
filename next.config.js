/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.imagin.studio"]
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
}

module.exports = nextConfig