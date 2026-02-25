const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },

  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/farms', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },

  { url: '/practices', changefreq: 'weekly', priority: 0.8 },
  { url: '/transparency', changefreq: 'weekly', priority: 0.8 },
  { url: '/gallery', changefreq: 'weekly', priority: 0.7 },

  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/visit', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.6 },
  { url: '/certifications', changefreq: 'monthly', priority: 0.7 },

  { url: '/feed', changefreq: 'weekly', priority: 0.8 },
  { url: '/feed/livestock', changefreq: 'monthly', priority: 0.7 },
  { url: '/feed/poultry', changefreq: 'monthly', priority: 0.7 },
  { url: '/feed/fish', changefreq: 'monthly', priority: 0.7 },
  { url: '/feed-transparency', changefreq: 'monthly', priority: 0.7 },

  { url: '/farms/sheep', changefreq: 'monthly', priority: 0.7 },
  { url: '/farms/hen', changefreq: 'monthly', priority: 0.7 },
  { url: '/farms/fish', changefreq: 'monthly', priority: 0.7 },

  { url: '/blog/transparency-cost', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/soil-health', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/egg-traceability', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/animal-welfare', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/no-antibiotics', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/farm-visits', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/pasture-rotation', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/free-range-matters', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/clean-water-fish', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/seasonal-rhythms', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/traditional-feed', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/value-of-patience', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/recipe-lamb', changefreq: 'monthly', priority: 0.6 },
  { url: '/blog/community-food', changefreq: 'monthly', priority: 0.6 }
]

const sitemap = new SitemapStream({
  hostname: 'https://haritha-farms.vercel.app'
})

const writeStream = createWriteStream('./public/sitemap.xml')

sitemap.pipe(writeStream)

links.forEach(link => sitemap.write(link))

sitemap.end()

streamToPromise(sitemap).then(() => {
  console.log('Sitemap generated successfully!')
})