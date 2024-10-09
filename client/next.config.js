/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    ssg: false // means build time the pages wont generate static html, only runtime with ISR
};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    },
};
