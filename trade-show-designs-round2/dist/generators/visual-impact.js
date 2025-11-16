/**
 * Agent_Visual_Impact Generator
 * Prioritizes bold graphics, visual hierarchy, and eye-catching design
 */
import { createHTMLDocument, createLogoHeader } from '../utils/html-builder.js';
export function generateVisualImpact(assets, variant) {
    switch (variant) {
        case 1:
            return generateVariant1(assets);
        case 2:
            return generateVariant2(assets);
        case 3:
            return generateVariant3(assets);
        default:
            throw new Error(`Invalid variant: ${variant}`);
    }
}
/**
 * Variant 1: Bold, minimal, high-impact with dramatic large product image
 */
function generateVariant1(assets) {
    const styles = `
    body {
      padding: 0;
      margin: 0;
      background: linear-gradient(135deg, #0a1929 0%, #1a365d 50%, #0066cc 100%);
      color: white;
    }

    .container {
      width: 8.5in;
      min-height: 11in;
      margin: 0 auto;
      padding: 0.5in;
    }

    .logo-header {
      margin-bottom: 3rem !important;
      border-bottom: none !important;
    }

    .hero-massive {
      text-align: center;
      margin-bottom: 3rem;
    }

    .hero-massive h1 {
      font-size: 4rem;
      font-weight: 900;
      color: white;
      margin-bottom: 1rem;
      line-height: 0.9;
      text-transform: uppercase;
      letter-spacing: -2px;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }

    .hero-massive .highlight {
      background: linear-gradient(135deg, #00ccff 0%, #00ff88 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: block;
    }

    .hero-massive .subtitle {
      font-size: 1.5rem;
      color: #00ccff;
      font-weight: 300;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .product-hero {
      width: 100%;
      max-width: 600px;
      margin: 0 auto 2rem;
      position: relative;
    }

    .product-hero img {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 204, 255, 0.3),
                  0 0 80px rgba(0, 204, 255, 0.2);
      transform: perspective(1000px) rotateY(-2deg);
    }

    .impact-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      text-align: center;
    }

    .stat-massive {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 2rem 1rem;
      border-radius: 12px;
      border: 2px solid rgba(0, 204, 255, 0.3);
    }

    .stat-massive .number {
      font-size: 3.5rem;
      font-weight: 900;
      color: #00ccff;
      display: block;
      line-height: 1;
      margin-bottom: 0.5rem;
      text-shadow: 0 0 20px rgba(0, 204, 255, 0.5);
    }

    .stat-massive .label {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `;
    const body = `
    <div class="container">
      ${createLogoHeader(assets.logo, 'center', '220px')}

      <div class="hero-massive">
        <h1>
          THE FUTURE<br/>
          <span class="highlight">IS HERE</span>
        </h1>
        <p class="subtitle">HydroLoop System</p>
      </div>

      <div class="product-hero">
        <img src="${assets.productImage}" alt="HydroLoop Revolutionary System" />
      </div>

      <div class="impact-stats">
        <div class="stat-massive">
          <span class="number">90%</span>
          <span class="label">Less Chemicals</span>
        </div>
        <div class="stat-massive">
          <span class="number">100%</span>
          <span class="label">Pristine Water</span>
        </div>
        <div class="stat-massive">
          <span class="number">#1</span>
          <span class="label">Innovation</span>
        </div>
      </div>
    </div>
  `;
    return createHTMLDocument('HydroLoop - The Future Is Here', body, styles);
}
/**
 * Variant 2: Information-rich with bold visual hierarchy
 */
function generateVariant2(assets) {
    const styles = `
    .visual-header {
      background: linear-gradient(135deg, #0066cc 0%, #00ccff 100%);
      margin: -0.5in -0.5in 0 -0.5in;
      padding: 3rem 2rem;
      position: relative;
      overflow: hidden;
    }

    .visual-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('${assets.productImage}') center/cover;
      opacity: 0.15;
      filter: blur(2px);
    }

    .visual-header .content {
      position: relative;
      z-index: 1;
      color: white;
      text-align: center;
    }

    .visual-header h1 {
      font-size: 3.5rem;
      font-weight: 900;
      color: white;
      margin-bottom: 0.5rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .visual-header .tagline {
      font-size: 1.5rem;
      font-weight: 300;
      opacity: 0.95;
    }

    .main-content {
      padding: 2rem 0;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .feature-card {
      background: linear-gradient(135deg, #f0f9ff 0%, white 100%);
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 5px solid #0066cc;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      transition: transform 0.2s;
    }

    .feature-card h3 {
      color: #0066cc;
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .feature-card .icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #0066cc, #00ccff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      font-size: 1.2rem;
    }

    .feature-card p {
      color: #475569;
      line-height: 1.6;
    }

    .product-showcase {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%);
      padding: 2rem;
      border-radius: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
      color: white;
    }

    .product-showcase img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 204, 255, 0.3);
    }

    .product-showcase h2 {
      color: #00ccff;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .product-showcase ul {
      list-style: none;
      padding: 0;
    }

    .product-showcase li {
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .product-showcase li::before {
      content: '✓';
      color: #00ccff;
      font-weight: 900;
      font-size: 1.2rem;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'left', '200px')}

    <div class="visual-header">
      <div class="content">
        <h1>HydroLoop System</h1>
        <p class="tagline">Revolutionary Water Purification Technology</p>
      </div>
    </div>

    <div class="main-content">
      <div class="feature-grid">
        <div class="feature-card">
          <h3><span class="icon">⚡</span> Patented Technology</h3>
          <p>
            HydroDynamic Cavitation delivers unparalleled water purification,
            setting a new industry standard for pool and hot tub sanitation.
          </p>
        </div>

        <div class="feature-card">
          <h3><span class="icon">💎</span> Premium Materials</h3>
          <p>
            Engineered with Schedule 80 PVC, 316 stainless steel, and marine-grade
            cupronickel for maximum durability and corrosion resistance.
          </p>
        </div>

        <div class="feature-card">
          <h3><span class="icon">🔧</span> Simple Installation</h3>
          <p>
            One Cut Connection system integrates seamlessly into any existing
            pool or hot tub setup, minimizing labor and installation costs.
          </p>
        </div>

        <div class="feature-card">
          <h3><span class="icon">🛡️</span> Safety First</h3>
          <p>
            Eliminates dangerous chlorine and trichloramine gases, creating
            a safer environment for users and reducing liability concerns.
          </p>
        </div>
      </div>

      <div class="product-showcase">
        <img src="${assets.productImage}" alt="HydroLoop System" />
        <div>
          <h2>Unmatched Performance</h2>
          <ul>
            <li>75-90% reduction in chemical additives</li>
            <li>Perfectly balanced, crystal-clear water</li>
            <li>Quick Flush & Power Flush maintenance</li>
            <li>Intelligent flow management system</li>
            <li>Zero hazardous byproducts</li>
            <li>World's first chemical-free saltwater experience</li>
          </ul>
        </div>
      </div>
    </div>
  `;
    return createHTMLDocument('HydroLoop System - Revolutionary Technology', body, styles);
}
/**
 * Variant 3: Balanced visual + text with creative product integration
 */
function generateVariant3(assets) {
    const styles = `
    .asymmetric-layout {
      display: grid;
      grid-template-areas:
        "header header"
        "image content"
        "stats stats";
      grid-template-columns: 1.3fr 1fr;
      gap: 2rem;
    }

    .header-area {
      grid-area: header;
      text-align: center;
      margin-bottom: 1rem;
    }

    .header-area h1 {
      font-size: 3rem;
      background: linear-gradient(135deg, #0066cc 0%, #00ccff 50%, #00cc66 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 900;
      margin-bottom: 0.5rem;
    }

    .header-area .divider {
      width: 200px;
      height: 4px;
      background: linear-gradient(90deg, transparent, #00ccff, transparent);
      margin: 1rem auto;
    }

    .image-area {
      grid-area: image;
      position: relative;
    }

    .image-frame {
      position: relative;
      padding: 1.5rem;
      background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
      border-radius: 20px;
      transform: rotate(-2deg);
    }

    .image-frame img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 15px 40px rgba(0, 102, 204, 0.25);
      transform: rotate(2deg);
    }

    .content-area {
      grid-area: content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    .highlight-box {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-top: 4px solid #0066cc;
    }

    .highlight-box h3 {
      color: #0066cc;
      font-size: 1.3rem;
      margin-bottom: 0.75rem;
    }

    .highlight-box p {
      color: #475569;
      line-height: 1.6;
      margin-bottom: 0;
    }

    .stats-area {
      grid-area: stats;
      margin-top: 1rem;
    }

    .stats-banner {
      background: linear-gradient(135deg, #1a1a1a 0%, #0066cc 100%);
      padding: 2rem;
      border-radius: 16px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      text-align: center;
      color: white;
    }

    .stat-item .value {
      font-size: 2.5rem;
      font-weight: 900;
      color: #00ccff;
      display: block;
      margin-bottom: 0.3rem;
      text-shadow: 0 0 20px rgba(0, 204, 255, 0.4);
    }

    .stat-item .description {
      font-size: 0.85rem;
      opacity: 0.9;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'center', '190px')}

    <div class="asymmetric-layout">
      <div class="header-area">
        <h1>Experience the HydroLoop Difference</h1>
        <div class="divider"></div>
        <p style="font-size: 1.2rem; color: #475569;">
          Patented HydroDynamic Cavitation Technology
        </p>
      </div>

      <div class="image-area">
        <div class="image-frame">
          <img src="${assets.productImage}" alt="HydroLoop System" />
        </div>
      </div>

      <div class="content-area">
        <div class="highlight-box">
          <h3>🚀 Innovation Leader</h3>
          <p>
            The world's first genuinely chemical-free saltwater pool experience,
            integrating cavitation with standard pool salt levels.
          </p>
        </div>

        <div class="highlight-box">
          <h3>💧 Crystal Clear Results</h3>
          <p>
            Pristine, perfectly balanced water that eliminates the need for
            post-swim rinsing—an elevated user experience.
          </p>
        </div>

        <div class="highlight-box">
          <h3>⚙️ Effortless Maintenance</h3>
          <p>
            Quick Flush works while the pump runs, Power Flush for deep cleaning.
            User-friendly maintenance eliminates costly professional intervention.
          </p>
        </div>
      </div>

      <div class="stats-area">
        <div class="stats-banner">
          <div class="stat-item">
            <span class="value">90%</span>
            <span class="description">Chemical Reduction</span>
          </div>
          <div class="stat-item">
            <span class="value">Zero</span>
            <span class="description">Toxic Gases</span>
          </div>
          <div class="stat-item">
            <span class="value">1-Cut</span>
            <span class="description">Installation</span>
          </div>
          <div class="stat-item">
            <span class="value">Premium</span>
            <span class="description">Materials</span>
          </div>
        </div>
      </div>
    </div>
  `;
    return createHTMLDocument('HydroLoop - Experience the Difference', body, styles);
}
//# sourceMappingURL=visual-impact.js.map