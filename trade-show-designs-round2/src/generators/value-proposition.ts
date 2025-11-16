/**
 * Agent_Value_Proposition Generator
 * Focuses on ROI, cost savings, and business benefits
 */

import type { DesignAssets } from '../types/design.types.js';
import { createHTMLDocument, createLogoHeader } from '../utils/html-builder.js';

export function generateValueProposition(assets: DesignAssets, variant: number): string {
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
 * Variant 1: Bold ROI focus with large product image
 */
function generateVariant1(assets: DesignAssets): string {
  const styles = `
    .value-hero {
      text-align: center;
      margin-bottom: 2rem;
    }

    .value-hero h1 {
      font-size: 3.2rem;
      color: #0066cc;
      margin-bottom: 0.5rem;
      line-height: 1.1;
    }

    .value-hero .roi-tag {
      display: inline-block;
      background: linear-gradient(135deg, #00cc66 0%, #00ff88 100%);
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 30px;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 15px rgba(0, 204, 102, 0.3);
    }

    .split-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
      margin-bottom: 2rem;
    }

    .product-visual {
      background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
      padding: 2rem;
      border-radius: 16px;
    }

    .product-visual img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 102, 204, 0.2);
    }

    .savings-breakdown {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .savings-breakdown h3 {
      color: #0066cc;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .savings-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 2px solid #f0f0f0;
    }

    .savings-item:last-child {
      border-bottom: none;
      background: linear-gradient(135deg, #00cc66 0%, #00ff88 100%);
      margin: 1rem -2rem -2rem;
      padding: 1.5rem 2rem;
      border-radius: 0 0 12px 12px;
      color: white;
      font-weight: 700;
    }

    .savings-label {
      font-size: 1.1rem;
      color: #1a1a1a;
    }

    .savings-item:last-child .savings-label {
      color: white;
      font-size: 1.3rem;
    }

    .savings-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: #00cc66;
    }

    .savings-item:last-child .savings-value {
      color: white;
      font-size: 1.8rem;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .benefit-card {
      background: linear-gradient(135deg, #f8fafc 0%, white 100%);
      padding: 1.5rem;
      border-radius: 10px;
      border-top: 4px solid #0066cc;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .benefit-card .icon {
      font-size: 2.5rem;
      margin-bottom: 0.75rem;
    }

    .benefit-card h4 {
      color: #0066cc;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .benefit-card p {
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  `;

  const body = `
    ${createLogoHeader(assets.logo, 'center', '200px')}

    <div class="value-hero">
      <h1>Maximize Your ROI</h1>
      <div class="roi-tag">Up to 90% Cost Reduction</div>
    </div>

    <div class="split-content">
      <div class="product-visual">
        <img src="${assets.productImage}" alt="HydroLoop System - Your Smart Investment" />
      </div>

      <div class="savings-breakdown">
        <h3>Annual Cost Savings</h3>
        <div class="savings-item">
          <span class="savings-label">Chemical Costs</span>
          <span class="savings-value">-75%</span>
        </div>
        <div class="savings-item">
          <span class="savings-label">Maintenance Labor</span>
          <span class="savings-value">-60%</span>
        </div>
        <div class="savings-item">
          <span class="savings-label">Professional Service Calls</span>
          <span class="savings-value">-80%</span>
        </div>
        <div class="savings-item">
          <span class="savings-label">Equipment Longevity</span>
          <span class="savings-value">+150%</span>
        </div>
        <div class="savings-item">
          <span class="savings-label">Total Annual Savings</span>
          <span class="savings-value">$5,000+</span>
        </div>
      </div>
    </div>

    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="icon">💰</div>
        <h4>Lower Operating Costs</h4>
        <p>Dramatic reduction in chemical purchases and ongoing expenses</p>
      </div>

      <div class="benefit-card">
        <div class="icon">⚡</div>
        <h4>Simple Installation</h4>
        <p>One Cut Connection minimizes labor costs and setup time</p>
      </div>

      <div class="benefit-card">
        <div class="icon">🔧</div>
        <h4>DIY Maintenance</h4>
        <p>Eliminate costly professional intervention for routine tasks</p>
      </div>
    </div>
  `;

  return createHTMLDocument('HydroLoop - Maximize Your ROI', body, styles);
}

/**
 * Variant 2: Comprehensive business case with detailed analysis
 */
function generateVariant2(assets: DesignAssets): string {
  const styles = `
    .business-header {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%);
      color: white;
      padding: 2rem;
      margin: -0.5in -0.5in 2rem -0.5in;
      text-align: center;
    }

    .business-header h1 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .business-header .subtitle {
      font-size: 1.2rem;
      color: #00cc66;
    }

    .roi-dashboard {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .metrics-panel {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .metrics-panel h3 {
      color: #0066cc;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 3px solid #0066cc;
      padding-bottom: 0.5rem;
    }

    .metric-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      padding: 1rem 0;
      border-bottom: 1px solid #e5e7eb;
      align-items: center;
    }

    .metric-row:last-child {
      border-bottom: none;
    }

    .metric-label {
      font-weight: 600;
      color: #1a1a1a;
    }

    .metric-before {
      text-align: center;
      color: #dc2626;
      font-weight: 600;
    }

    .metric-after {
      text-align: center;
      color: #00cc66;
      font-weight: 700;
      font-size: 1.1rem;
    }

    .product-roi {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .product-roi img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    .payback-box {
      background: linear-gradient(135deg, #00cc66 0%, #00ff88 100%);
      color: white;
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
    }

    .payback-box .period {
      font-size: 2.5rem;
      font-weight: 900;
      display: block;
      margin-bottom: 0.3rem;
    }

    .payback-box .label {
      font-size: 1rem;
      opacity: 0.95;
    }

    .value-props {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .value-card {
      background: linear-gradient(135deg, #eff6ff 0%, white 100%);
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 5px solid #0066cc;
    }

    .value-card h4 {
      color: #0066cc;
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }

    .value-card ul {
      list-style: none;
      padding: 0;
      color: #475569;
    }

    .value-card li {
      padding: 0.4rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .value-card li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #00cc66;
      font-weight: 700;
    }
  `;

  const body = `
    ${createLogoHeader(assets.logo, 'left', '190px')}

    <div class="business-header">
      <h1>The Business Case for HydroLoop</h1>
      <p class="subtitle">Proven ROI • Reduced Costs • Enhanced Value</p>
    </div>

    <div class="roi-dashboard">
      <div class="metrics-panel">
        <h3>Cost Comparison Analysis</h3>
        <div class="metric-row" style="font-weight: 700; background: #f8fafc; padding: 0.75rem; margin: -0.5rem -1rem 1rem; border-bottom: 2px solid #cbd5e1;">
          <span>Category</span>
          <span style="text-align: center;">Traditional</span>
          <span style="text-align: center;">HydroLoop</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Monthly Chemicals</span>
          <span class="metric-before">$200-400</span>
          <span class="metric-after">$40-80</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Labor Hours/Month</span>
          <span class="metric-before">12-15 hrs</span>
          <span class="metric-after">4-6 hrs</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Service Calls/Year</span>
          <span class="metric-before">8-12</span>
          <span class="metric-after">1-2</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Water Quality Issues</span>
          <span class="metric-before">Frequent</span>
          <span class="metric-after">Rare</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Equipment Lifespan</span>
          <span class="metric-before">5-7 years</span>
          <span class="metric-after">12-15 years</span>
        </div>
      </div>

      <div class="product-roi">
        <img src="${assets.productImage}" alt="HydroLoop System" />
        <div class="payback-box">
          <span class="period">12-18</span>
          <span class="label">Months Payback Period</span>
        </div>
      </div>
    </div>

    <div class="value-props">
      <div class="value-card">
        <h4>💰 Direct Cost Savings</h4>
        <ul>
          <li>75-90% reduction in chemical purchases</li>
          <li>60% less maintenance labor required</li>
          <li>Eliminate most professional service calls</li>
          <li>Lower insurance premiums (safer facility)</li>
        </ul>
      </div>

      <div class="value-card">
        <h4>📈 Indirect Value Creation</h4>
        <ul>
          <li>Enhanced user experience drives retention</li>
          <li>Premium positioning for marketing</li>
          <li>Reduced liability and health risks</li>
          <li>Environmental compliance benefits</li>
        </ul>
      </div>

      <div class="value-card">
        <h4>⚡ Operational Efficiency</h4>
        <ul>
          <li>One Cut Connection installation</li>
          <li>Quick Flush & Power Flush simplicity</li>
          <li>Staff can handle routine maintenance</li>
          <li>Minimal downtime and disruptions</li>
        </ul>
      </div>

      <div class="value-card">
        <h4>🏆 Competitive Advantage</h4>
        <ul>
          <li>Industry-leading water quality</li>
          <li>Sustainability credentials for ESG</li>
          <li>Innovation differentiator in market</li>
          <li>Premium materials ensure longevity</li>
        </ul>
      </div>
    </div>
  `;

  return createHTMLDocument('HydroLoop - Business Case Analysis', body, styles);
}

/**
 * Variant 3: Balanced visual presentation of value proposition
 */
function generateVariant3(assets: DesignAssets): string {
  const styles = `
    .value-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .value-header h1 {
      font-size: 2.8rem;
      color: #0066cc;
      margin-bottom: 0.5rem;
    }

    .value-header .highlight {
      background: linear-gradient(135deg, #00cc66 0%, #00ff88 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 900;
    }

    .main-grid {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .benefits-stack {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .benefit-highlight {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      border-left: 5px solid #00cc66;
    }

    .benefit-highlight .number {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #00cc66, #00ff88);
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-weight: 900;
      margin-bottom: 0.75rem;
    }

    .benefit-highlight h4 {
      color: #0066cc;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .benefit-highlight p {
      color: #475569;
      line-height: 1.6;
      margin-bottom: 0;
    }

    .visual-panel {
      background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
      padding: 2rem;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }

    .visual-panel img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 102, 204, 0.2);
    }

    .investment-summary {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
    }

    .investment-summary .amount {
      font-size: 2rem;
      font-weight: 900;
      color: #00cc66;
      display: block;
      margin-bottom: 0.3rem;
    }

    .investment-summary .description {
      color: #64748b;
      font-size: 0.95rem;
    }

    .bottom-banner {
      background: linear-gradient(135deg, #0066cc 0%, #00ccff 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
    }

    .bottom-banner h3 {
      color: white;
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .bottom-banner p {
      font-size: 1.1rem;
      opacity: 0.95;
      margin-bottom: 0;
    }
  `;

  const body = `
    ${createLogoHeader(assets.logo, 'center', '190px')}

    <div class="value-header">
      <h1>Smart Investment, <span class="highlight">Proven Returns</span></h1>
      <p style="font-size: 1.2rem; color: #64748b;">
        The HydroLoop System delivers measurable ROI from day one
      </p>
    </div>

    <div class="main-grid">
      <div class="benefits-stack">
        <div class="benefit-highlight">
          <span class="number">1</span>
          <h4>Dramatic Cost Reduction</h4>
          <p>
            Achieve 75-90% reduction in chemical additives, translating to
            thousands in annual savings while improving water quality.
          </p>
        </div>

        <div class="benefit-highlight">
          <span class="number">2</span>
          <h4>Simplified Operations</h4>
          <p>
            One Cut Connection installation and effortless Quick Flush maintenance
            eliminate costly professional service requirements.
          </p>
        </div>

        <div class="benefit-highlight">
          <span class="number">3</span>
          <h4>Extended Equipment Life</h4>
          <p>
            Premium materials (316 stainless, Schedule 80 PVC, cupronickel)
            ensure decades of reliable operation with minimal replacement costs.
          </p>
        </div>
      </div>

      <div class="visual-panel">
        <img src="${assets.productImage}" alt="HydroLoop System" />

        <div class="investment-summary">
          <span class="amount">$5,000+ Annual Savings</span>
          <span class="description">
            Average facility savings on chemicals, labor, and maintenance
          </span>
        </div>
      </div>
    </div>

    <div class="bottom-banner">
      <h3>Transform Costs into Competitive Advantage</h3>
      <p>
        The HydroLoop System isn't just an expense—it's a strategic investment
        that reduces operational costs while elevating your facility's performance,
        safety, and market positioning.
      </p>
    </div>
  `;

  return createHTMLDocument('HydroLoop - Smart Investment, Proven Returns', body, styles);
}
