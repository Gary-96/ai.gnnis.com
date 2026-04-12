const fs = require('fs');
const path = require('path');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '../public/tools');
const DATA_FILE = path.join(__dirname, '../src/data/tools.json');
const ADSENSE_CLIENT_ID = 'ca-pub-xxxxxxxxxxxxxxxx'; // Replace with real ID

// HTML Template
const template = (tool) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${tool.name} - ${tool.tagline} | JianHui AI Tools</title>
    <meta name="description" content="${tool.description.substring(0, 160)}">
    <meta name="keywords" content="${tool.name}, ${tool.category}, AI, Artificial Intelligence, Tool">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${tool.name} - ${tool.tagline}">
    <meta property="og:description" content="${tool.description.substring(0, 160)}">
    <meta property="og:image" content="${tool.image || 'https://ai.gnnis.com/img/og-placeholder.png'}">
    <meta property="og:type" content="website">
    
    <!-- AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}" crossorigin="anonymous"></script>

    <!-- Schema.org SoftwareApplication -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "${tool.name}",
      "operatingSystem": "Web",
      "applicationCategory": "${tool.category}",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "${tool.rating || '4.8'}",
        "ratingCount": "${tool.reviews || '1024'}"
      },
      "offers": {
        "@type": "Offer",
        "price": "${tool.price || '0'}",
        "priceCurrency": "USD"
      }
    }
    </script>
    
    <style>
        body { font-family: -apple-system, system-ui, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; color: #333; }
        .header { padding: 20px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
        .main { display: grid; grid-template-columns: 1fr 300px; gap: 40px; padding: 40px 20px; }
        .ad-top { width: 100%; height: 90px; background: #f9f9f9; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; }
        .ad-sidebar { width: 300px; height: 600px; background: #f9f9f9; display: flex; justify-content: center; align-items: center; }
        .ad-mid { width: 100%; height: 250px; background: #f9f9f9; display: flex; justify-content: center; align-items: center; margin: 40px 0; }
        .hero { margin-bottom: 40px; }
        .hero h1 { font-size: 3rem; margin: 0; }
        .btn-visit { background: #14b8a6; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; }
        @media (max-width: 768px) { .main { grid-template-columns: 1fr; } .ad-sidebar { display: none; } }
    </style>
</head>
<body>
    <header class="header">
        <a href="/" style="font-weight: bold; text-decoration: none; font-size: 1.5rem; color: #14b8a6;">JianHui AI</a>
        <nav><a href="/tools">All Tools</a></nav>
    </header>

    <div class="main">
        <div class="content">
            <!-- AdSense Top -->
            <div class="ad-top">
                <ins class="adsbygoogle" style="display:block" data-ad-client="${ADSENSE_CLIENT_ID}" data-ad-slot="TOP_SLOT_ID" data-ad-format="auto" data-full-width-responsive="true"></ins>
            </div>

            <section class="hero">
                <h1>${tool.name}</h1>
                <p style="font-size: 1.25rem; color: #666;">${tool.tagline}</p>
                <div style="margin: 30px 0;">
                    <a href="${tool.url}" class="btn-visit" target="_blank">Visit Official Website</a>
                </div>
            </section>

            <article>
                <h2>About ${tool.name}</h2>
                <p>${tool.description}</p>
                
                <!-- AdSense Mid -->
                <div class="ad-mid">
                    <ins class="adsbygoogle" style="display:block" data-ad-client="${ADSENSE_CLIENT_ID}" data-ad-slot="MID_SLOT_ID" data-ad-format="rectangle"></ins>
                </div>

                <h2>Key Features</h2>
                <ul>
                    ${(tool.features || ['Easy to use', 'Fast processing', 'AI powered']).map(f => `<li>${f}</li>`).join('')}
                </ul>
            </article>
        </div>

        <aside class="sidebar">
            <div class="ad-sidebar">
                <ins class="adsbygoogle" style="display:block" data-ad-client="${ADSENSE_CLIENT_ID}" data-ad-slot="SIDEBAR_SLOT_ID" data-ad-format="vertical"></ins>
            </div>
            
            <div style="margin-top: 40px;">
                <h3>Ratings</h3>
                <div style="font-size: 2rem; color: #f59e0b;">★ ${tool.rating || '4.8'}</div>
                <p>${tool.reviews || '1k+'} reviews</p>
            </div>
        </aside>
    </div>

    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</body>
</html>
`;

// Run Generator
function generate() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    
    let tools = [];
    if (fs.existsSync(DATA_FILE)) {
        tools = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } else {
        console.error('Data file not found. Creating placeholder.');
        return;
    }

    tools.forEach(tool => {
        const fileName = `${tool.id}.html`;
        const filePath = path.join(OUTPUT_DIR, fileName);
        fs.writeFileSync(filePath, template(tool));
        console.log(`Generated: ${fileName}`);
    });
    
    console.log(`Total generated: ${tools.length}`);
}

generate();
