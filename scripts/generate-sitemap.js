const fs = require('fs');
const axios = require('axios');

const DOMAIN = 'https://your-domain.com';
const staticRoutes = [
  '/',
  '/category',
  '/cart',
  '/checkout',
  '/login',
  '/register',
  '/contact',
  '/aboutus',
  '/forgot-password',
  '/info',
  '/thanks'
];

async function generateSitemap() {
  // Lấy danh sách sản phẩm từ API nếu có
  let productUrls = [];
  try {
    const res = await axios.get('http://deploy_domain/api/products');
    productUrls = res.data.map(
      (item) => `/prodetail/${item.id || item._id}`
    );
  } catch (e) {
    console.error('Không lấy được danh sách sản phẩm:', e.message);
  }

  const urls = [...staticRoutes, ...productUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${DOMAIN}${url}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync('./public/sitemap.xml', xml, 'utf8');
  console.log('Đã tạo sitemap.xml!');
}

generateSitemap();