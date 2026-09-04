const http = require('http');

http.get('http://localhost:3000/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Check H1
    const h1s = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
    console.log('Number of H1 elements:', h1s.length);
    h1s.forEach(h => console.log('H1:', h.replace(/<[^>]+>/g, '').trim()));

    // Check H2
    const h2s = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
    console.log('Number of H2 elements:', h2s.length);

    // Check JSON-LD
    const jsonLd = html.match(/<script type="application\/ld\+json"[\s\S]*?<\/script>/gi) || [];
    console.log('JSON-LD script tags:', jsonLd.length);

    // Check OG tags
    const ogTags = html.match(/<meta property="og:[^"]+"[^>]*>/gi) || [];
    console.log('OpenGraph tags found:', ogTags.length);

    // Check Twitter tags
    const twitterTags = html.match(/<meta name="twitter:[^"]+"[^>]*>/gi) || [];
    console.log('Twitter tags found:', twitterTags.length);

    // Check Canonical
    const canonical = html.match(/<link rel="canonical"[^>]*>/gi) || [];
    console.log('Canonical link tags:', canonical.length);
  });
});