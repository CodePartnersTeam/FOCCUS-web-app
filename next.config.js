/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*'
			},
			{
				protocol: 'http',
				hostname: '*'
			}
		]
	},
	async redirects() {
		return [{ source: '/vision%20general', destination: '/vision_general', permanent: true }]
	}
}

module.exports = nextConfig
