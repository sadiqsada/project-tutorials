// most important feature: fetching
// allows bots to reliably crawl data

// static generation: render all pages at build time
// suitable for sites with low number of pages
// and not very dynamic

//

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
