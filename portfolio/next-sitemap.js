module.exports = {
    siteUrl: 'https://www.trainings.kandradigital.com',
    generateRobotsTxt: true,
    // optional
    // robotsTxtOptions: {
    //   additionalSitemaps: [
    //     'https://www.example.com/other-sitemap.xml',
    //     'https://www.example.com/another-sitemap.xml'
    //   ]
    // },
    // optional
    // exclude: ['/path1', '/path2'],
    // optional
    // changefreq: 'daily',
    // optional
    // priority: 0.7,
    // optional
    // lastmod: '2022-01-01',
    // optional
    // sitemapSize: 7000,
    // optional
    // alternateRefs: [
    //   { href: 'https://de.example.com/page', hreflang: 'de' },
    //   { href: 'https://es.example.com/page', hreflang: 'es' },
    // ],
    // optional
    additionalPaths: async (config) => {
    //   Add additional paths to the sitemap
    //   Example: Fetch dynamic routes from API and add them to the sitemap
      const response = await fetch('https://trainigs.kandradigital.com/routes');
      const data = await response.json();
      const paths = data.map((item) => `/dynamic-page/${item.slug}`);
      return paths;
    },
  };
  