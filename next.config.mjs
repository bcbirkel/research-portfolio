/** @type {import('next').NextConfig} */
const nextConfig = {
  // Opt in for GitHub Pages; normal Vercel builds keep their existing behavior.
  ...(process.env.GITHUB_PAGES === "true" ? { output: "export", trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
}

export default nextConfig

