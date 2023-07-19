const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    distDir: 'dist',
    reactStrictMode:true,
    swcMinify:true,
    experimental:{
        appDir:true
    }
}

module.exports = withNextra()
