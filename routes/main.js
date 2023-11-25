const express = require("express")
const router = express.Router()
const path = require('path')


router.get("/", (req, res) => {
  res.render("index")
})

router.get("/career-join-us", async (req, res) => {
  res.render('career-join-us')
});

router.get("/about", async (req, res) => {
  res.render('about')
});

router.get("/abcd", async (req, res) => {
  res.render('abcd')
})

router.get("/approach", async (req, res) => {
  res.render('approach')
});


router.get("/contact", async (req, res) => {
  res.render('contact')
});

router.get("/faq", async (req, res) => {
  res.render('faq')
});

// router.get("/blog-detail", async (req, res) => {
//   res.render('blog-detail')
// });

router.get("/blogs", async (req, res) => {
  res.render('blog')
});

// router.get("/service-detail", async (req, res) => {
//   res.render('service-l1')
// });

router.get("/services", async (req, res) => {
  res.render('service')
});

router.get("/industries", async (req, res) => {
  res.render('industries')
});


router.get("/career", async (req, res) => {
  res.render('career')
});


router.get("/term-of-use", async (req, res) => {
  res.render('term-of-use')
});

router.get("/privacy-policy", async (req, res) => {
  res.render('privacy-policy')
});


// services url start

router.get('/services/:slug', async (req, res) => {
  const slug = req.params.slug;

  arr = ['inbound-customer-support', 'seller-support', 'outbound-collections', 'query-handling', 'accounting-financial', 'end-to-end-sales', 'pre-sales', 'outbound-surveys', 'appointment-generations', 'outbound-lead-generation', 'email-support', 'gst-cin-verification', 'security-surveillance', 'video-labelling', 'data-science-project', 'optical-character-recognition', 'import-export-code-verification', 'customer-verification', 'telemarketing-service', 'chat-support-service', 'online-data-entry', 'data-minning'];

  if (arr.includes(slug)) {
    res.render(slug);
  } else {
    res.status(404).render('404');
  }
});


router.get('/blogs/:slug', async (req, res) => {
  const slug = req.params.slug;
  res.render(slug);
});





router.get('/sitemap.xml', (req, res) => {
  const sitemapPath = path.join(__dirname, '../sitemap.xml');
  res.sendFile(sitemapPath);
});

router.get('/robots.txt', (req, res) => {
  const robotsPath = path.join(__dirname, '../robots.txt');
  res.sendFile(robotsPath);
});



// services url end
module.exports = router