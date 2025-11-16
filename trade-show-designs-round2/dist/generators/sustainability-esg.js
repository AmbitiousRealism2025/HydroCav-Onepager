/**
 * Agent_Sustainability_ESG Generator
 * Highlights environmental benefits, sustainability metrics, and ESG alignment
 */
import { createHTMLDocument, createLogoHeader } from '../utils/html-builder.js';
export function generateSustainabilityESG(assets, variant) {
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
 * Variant 1: Bold environmental message with large product image
 */
function generateVariant1(assets) {
    const styles = `
    body {
      background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%);
    }

    .eco-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .eco-header h1 {
      font-size: 3.5rem;
      background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 900;
      margin-bottom: 0.5rem;
      line-height: 1;
    }

    .eco-header .tagline {
      font-size: 1.3rem;
      color: #065f46;
      font-weight: 600;
    }

    .hero-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
      margin-bottom: 2rem;
    }

    .product-eco {
      background: white;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(5, 150, 105, 0.15);
    }

    .product-eco img {
      width: 100%;
      border-radius: 12px;
    }

    .impact-metrics {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .impact-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 6px solid #10b981;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .impact-card .metric {
      font-size: 2.5rem;
      font-weight: 900;
      color: #10b981;
      display: block;
      margin-bottom: 0.3rem;
    }

    .impact-card .label {
      font-size: 1.1rem;
      color: #065f46;
      font-weight: 600;
      display: block;
      margin-bottom: 0.5rem;
    }

    .impact-card .description {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .esg-pillars {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
    }

    .pillar {
      text-align: center;
      padding: 1.5rem 1rem;
      border-radius: 10px;
      background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
    }

    .pillar .icon {
      font-size: 3rem;
      margin-bottom: 0.75rem;
      display: block;
    }

    .pillar h4 {
      color: #065f46;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .pillar p {
      color: #6b7280;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'center', '200px')}

    <div class="eco-header">
      <h1>Sustainable by Design</h1>
      <p class="tagline">Leading the Industry Towards a Greener Future</p>
    </div>

    <div class="hero-layout">
      <div class="product-eco">
        <img src="${assets.productImage}" alt="HydroLoop - Sustainable Water Treatment" />
      </div>

      <div class="impact-metrics">
        <div class="impact-card">
          <span class="metric">90%</span>
          <span class="label">Chemical Reduction</span>
          <p class="description">
            Dramatically reduce chemical pollutants entering the environment
          </p>
        </div>

        <div class="impact-card">
          <span class="metric">Zero</span>
          <span class="label">Hazardous Byproducts</span>
          <p class="description">
            Eliminate dangerous chlorine and trichloramine gas emissions
          </p>
        </div>

        <div class="impact-card">
          <span class="metric">100%</span>
          <span class="label">ESG Aligned</span>
          <p class="description">
            Meet environmental, social, and governance sustainability goals
          </p>
        </div>
      </div>
    </div>

    <div class="esg-pillars">
      <div class="pillar">
        <span class="icon">🌍</span>
        <h4>Environmental</h4>
        <p>
          Reduce chemical pollution, minimize waste, and protect natural ecosystems
          through intelligent water management
        </p>
      </div>

      <div class="pillar">
        <span class="icon">👥</span>
        <h4>Social</h4>
        <p>
          Safer water for users, healthier indoor air quality, and reduced health
          risks for staff and visitors
        </p>
      </div>

      <div class="pillar">
        <span class="icon">⚖️</span>
        <h4>Governance</h4>
        <p>
          Meet regulatory standards, demonstrate corporate responsibility, and
          lead industry innovation
        </p>
      </div>
    </div>
  `;
    return createHTMLDocument('HydroLoop - Sustainable by Design', body, styles);
}
/**
 * Variant 2: Comprehensive sustainability report format
 */
function generateVariant2(assets) {
    const styles = `
    .sustainability-header {
      background: linear-gradient(135deg, #065f46 0%, #10b981 100%);
      color: white;
      padding: 2rem;
      margin: -0.5in -0.5in 2rem -0.5in;
      text-align: center;
    }

    .sustainability-header h1 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .sustainability-header .subtitle {
      font-size: 1.2rem;
      opacity: 0.95;
    }

    .content-layout {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .product-sustainability {
      background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
      padding: 2rem;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .product-sustainability img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(16, 185, 129, 0.2);
    }

    .certification-badge {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
      border: 3px solid #10b981;
    }

    .certification-badge .badge-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: #065f46;
      display: block;
      margin-bottom: 0.5rem;
    }

    .certification-badge .badge-subtitle {
      color: #6b7280;
      font-size: 0.9rem;
    }

    .environmental-impact {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .environmental-impact h3 {
      color: #10b981;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 3px solid #10b981;
      padding-bottom: 0.5rem;
    }

    .impact-list {
      list-style: none;
      padding: 0;
    }

    .impact-list li {
      padding: 1rem 0;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      align-items: start;
      gap: 1rem;
    }

    .impact-list li:last-child {
      border-bottom: none;
    }

    .impact-list .icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #10b981, #34d399);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 900;
      flex-shrink: 0;
    }

    .impact-list .content h4 {
      color: #065f46;
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
    }

    .impact-list .content p {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .metric-box {
      background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
      padding: 1.5rem 1rem;
      border-radius: 10px;
      text-align: center;
      border-top: 4px solid #10b981;
    }

    .metric-box .value {
      font-size: 2rem;
      font-weight: 900;
      color: #10b981;
      display: block;
      margin-bottom: 0.3rem;
    }

    .metric-box .label {
      font-size: 0.85rem;
      color: #065f46;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      line-height: 1.3;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'left', '190px')}

    <div class="sustainability-header">
      <h1>Environmental Impact Report</h1>
      <p class="subtitle">HydroLoop System - Leading the Green Revolution</p>
    </div>

    <div class="content-layout">
      <div class="product-sustainability">
        <img src="${assets.productImage}" alt="HydroLoop Sustainable Technology" />

        <div class="certification-badge">
          <span class="badge-title">🌿 ECO-CERTIFIED TECHNOLOGY</span>
          <span class="badge-subtitle">
            Environmentally responsible pool & spa sanitation
          </span>
        </div>
      </div>

      <div class="environmental-impact">
        <h3>Key Environmental Benefits</h3>

        <ul class="impact-list">
          <li>
            <span class="icon">💧</span>
            <div class="content">
              <h4>Reduced Chemical Pollution</h4>
              <p>
                75-90% reduction in chemical additives means dramatically less
                environmental contamination from backwash and runoff
              </p>
            </div>
          </li>

          <li>
            <span class="icon">🌱</span>
            <div class="content">
              <h4>Ecosystem Protection</h4>
              <p>
                Lower chemical discharge protects local waterways, soil health,
                and biodiversity in surrounding environments
              </p>
            </div>
          </li>

          <li>
            <span class="icon">🏭</span>
            <div class="content">
              <h4>Reduced Carbon Footprint</h4>
              <p>
                Less chemical manufacturing, transportation, and packaging waste
                significantly reduces overall carbon emissions
              </p>
            </div>
          </li>

          <li>
            <span class="icon">♻️</span>
            <div class="content">
              <h4>Circular Economy Principles</h4>
            <p>
                Long-lasting materials and minimal consumables align with
                sustainable resource management
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="metrics-grid">
      <div class="metric-box">
        <span class="value">90%</span>
        <span class="label">Less Chemical Waste</span>
      </div>

      <div class="metric-box">
        <span class="value">85%</span>
        <span class="label">Lower Carbon Footprint</span>
      </div>

      <div class="metric-box">
        <span class="value">100%</span>
        <span class="label">Safe Air Quality</span>
      </div>

      <div class="metric-box">
        <span class="value">15+</span>
        <span class="label">Years Lifespan</span>
      </div>
    </div>
  `;
    return createHTMLDocument('HydroLoop - Environmental Impact Report', body, styles);
}
/**
 * Variant 3: Balanced visual presentation of sustainability
 */
function generateVariant3(assets) {
    const styles = `
    .green-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .green-header h1 {
      font-size: 3rem;
      color: #065f46;
      margin-bottom: 0.75rem;
    }

    .green-header .eco-badge {
      display: inline-block;
      background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 30px;
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .green-header .tagline {
      font-size: 1.2rem;
      color: #6b7280;
    }

    .split-design {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .benefits-column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .eco-benefit {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      border-left: 5px solid #10b981;
      display: flex;
      gap: 1rem;
    }

    .eco-benefit .icon-circle {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #10b981, #34d399);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .eco-benefit .text h4 {
      color: #065f46;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .eco-benefit .text p {
      color: #6b7280;
      line-height: 1.6;
      margin: 0;
    }

    .visual-column {
      background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
      padding: 2rem;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .visual-column img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
    }

    .sustainability-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .stat {
      background: white;
      padding: 1.2rem;
      border-radius: 10px;
      text-align: center;
    }

    .stat .number {
      font-size: 2rem;
      font-weight: 900;
      color: #10b981;
      display: block;
      margin-bottom: 0.3rem;
    }

    .stat .text {
      font-size: 0.85rem;
      color: #065f46;
      font-weight: 600;
    }

    .commitment-banner {
      background: linear-gradient(135deg, #065f46 0%, #10b981 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
    }

    .commitment-banner h3 {
      color: white;
      font-size: 1.8rem;
      margin-bottom: 0.75rem;
    }

    .commitment-banner p {
      font-size: 1.1rem;
      opacity: 0.95;
      line-height: 1.6;
      margin: 0;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'center', '190px')}

    <div class="green-header">
      <h1>Building a Sustainable Future</h1>
      <div class="eco-badge">🌿 Environmentally Responsible Technology</div>
      <p class="tagline">HydroLoop System aligns with your ESG commitments</p>
    </div>

    <div class="split-design">
      <div class="benefits-column">
        <div class="eco-benefit">
          <div class="icon-circle">🌊</div>
          <div class="text">
            <h4>Clean Water, Clean Planet</h4>
            <p>
              90% reduction in chemical usage means less pollution entering our
              waterways, protecting aquatic ecosystems and groundwater quality.
            </p>
          </div>
        </div>

        <div class="eco-benefit">
          <div class="icon-circle">🍃</div>
          <div class="text">
            <h4>Healthier Indoor Environments</h4>
            <p>
              Eliminate dangerous chlorine and trichloramine gases, creating safer
              air quality for users and staff while reducing respiratory risks.
            </p>
          </div>
        </div>

        <div class="eco-benefit">
          <div class="icon-circle">🔄</div>
          <div class="text">
            <h4>Resource Efficiency</h4>
            <p>
              Durable construction with premium materials ensures 15+ years of
              operation, minimizing replacement cycles and resource consumption.
            </p>
          </div>
        </div>

        <div class="eco-benefit">
          <div class="icon-circle">📊</div>
          <div class="text">
            <h4>ESG Reporting Benefits</h4>
            <p>
              Demonstrate measurable environmental impact with quantifiable metrics
              for sustainability reports and stakeholder communications.
            </p>
          </div>
        </div>
      </div>

      <div class="visual-column">
        <img src="${assets.productImage}" alt="HydroLoop Sustainable System" />

        <div class="sustainability-stats">
          <div class="stat">
            <span class="number">90%</span>
            <span class="text">Less Chemicals</span>
          </div>
          <div class="stat">
            <span class="number">Zero</span>
            <span class="text">Toxic Gases</span>
          </div>
          <div class="stat">
            <span class="number">85%</span>
            <span class="text">Carbon Reduction</span>
          </div>
          <div class="stat">
            <span class="number">15+</span>
            <span class="text">Years Lifespan</span>
          </div>
        </div>
      </div>
    </div>

    <div class="commitment-banner">
      <h3>Your Partner in Environmental Stewardship</h3>
      <p>
        The HydroLoop System helps organizations meet ESG goals while delivering
        superior performance. Reduce your environmental footprint without compromising
        on water quality, safety, or user experience.
      </p>
    </div>
  `;
    return createHTMLDocument('HydroLoop - Building a Sustainable Future', body, styles);
}
//# sourceMappingURL=sustainability-esg.js.map