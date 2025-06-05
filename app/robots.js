export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: ['Yandex', 'YandexBot'],
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: ['facebookexternalhit', 'FacebookBot'],
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        crawlDelay: 0,
      }
    ],
    sitemap: 'https://www.perevozki-gruzov62.ru/sitemap.xml',
    host: 'https://www.perevozki-gruzov62.ru',
  }
}