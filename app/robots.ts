import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://goatsports.ar'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      // Google AI Overview
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // ChatGPT / OpenAI
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // Claude / Anthropic
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // Common crawlers
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
