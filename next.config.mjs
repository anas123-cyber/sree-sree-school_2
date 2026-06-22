/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images directly instead of through Next's optimizer endpoint
    // (/_next/image). That endpoint isn't available on static / shared hosting,
    // which is why photos showed as broken on the live site even though they
    // work locally. Serving the original files makes them load on any host.
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;