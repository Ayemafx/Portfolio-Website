import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Consider removing this in production to catch type errors
  },
  images: {
    unoptimized: true, // Disables Next.js image optimization for static exports
  },
};

export default withSentryConfig(nextConfig, {
  silent: true, // Suppresses source map upload logs during build
  org: "javascript-mastery", // Replace with your actual Sentry organization name
  project: "javascript-nextjs", // Replace with your actual Sentry project name
  widenClientFileUpload: true, // Improves stack traces by uploading additional source maps
  transpileClientSDK: true, // IE11 compatibility; set to false if IE11 support isn’t needed
  hideSourceMaps: true, // Prevents source maps from being publicly accessible
  disableLogger: true, // Reduces bundle size by removing Sentry logger statements
  automaticVercelMonitors: true, // Enables auto-instrumentation for Vercel Cron Monitors
});
