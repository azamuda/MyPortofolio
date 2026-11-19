/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/assets/card-1.jpg', destination: '/assets/card-1.png' },
      { source: '/assets/card-3-portrait.jpg', destination: '/assets/card-3-portrait.png' },
      { source: '/assets/card-4.jpg', destination: '/assets/card-4.png' },
      { source: '/assets/card-5.jpg', destination: '/assets/card-5.png' },
    ]
  },
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ] }]
  },
}

export default nextConfig
