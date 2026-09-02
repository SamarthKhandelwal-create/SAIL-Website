/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /* AVIF first, WebP as the fallback. The optimizer negotiates per request,
       so browsers without AVIF still get WebP. Worth ~20-30% over WebP alone
       on the workshop photos, which are the heaviest thing the site serves. */
    formats: ["image/avif", "image/webp"],
    /**
     * Next 16 only honors a `quality` prop whose value appears here — anything
     * else is silently coerced to 75. The tuned `quality={60|62|68}` props on
     * the photo grids were therefore doing nothing, and every image on the
     * site shipped at q=75. These are the values actually used in components;
     * adding a new one means adding it here too.
     */
    qualities: [60, 62, 68, 75],
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
