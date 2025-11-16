/**
 * Agent_Technical_Focus Generator
 * Emphasizes product specifications, technical benefits, and engineering excellence
 */

import type { DesignAssets } from '../types/design.types.js';
import { createHTMLDocument, createLogoHeader } from '../utils/html-builder.js';

export function generateTechnicalFocus(assets: DesignAssets, variant: number): string {
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
 * Variant 1: Bold, minimal, high-impact technical showcase with large product image
 */
function generateVariant1(assets: DesignAssets): string {
  const styles = `
    .hero-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
      align-items: center;
    }

    .hero-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 102, 204, 0.2);
    }

    .hero-content h1 {
      font-size: 2.5rem;
      color: #0066cc;
      margin-bottom: 1rem;
      line-height: 1.1;
    }

    .hero-content .tagline {
      font-size: 1.3rem;
      color: #1a1a1a;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }

    .tech-specs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 2rem;
      padding: 2rem;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      border-radius: 8px;
    }

    .spec-item {
      text-align: center;
    }

    .spec-value {
      font-size: 2rem;
      font-weight: 700;
      color: #0066cc;
      display: block;
      margin-bottom: 0.5rem;
    }

    .spec-label {
      font-size: 0.9rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `;

  const body = `
    ${createLogoHeader(assets.logo, 'left', '180px')}

    <div class="hero-section">
      <div class="hero-content">
        <h1>HydroDynamic Cavitation Technology</h1>
        <p class="tagline">Engineered Excellence for Superior Water Purification</p>
        <p style="font-size: 1.1rem; line-height: 1.7;">
          The HydroLoop System leverages patented HydroDynamic Cavitation to deliver
          unparalleled water purification, reducing chemical reliance by up to 90% while
          maintaining pristine water clarity.
        </p>
      </div>
      <div class="hero-image-container">
        <img src="${assets.productImage}" alt="HydroLoop System" class="hero-image" />
      </div>
    </div>

    <div class="tech-specs">
      <div class="spec-item">
        <span class="spec-value">75-90%</span>
        <span class="spec-label">Chemical Reduction</span>
      </div>
      <div class="spec-item">
        <span class="spec-value">316</span>
        <span class="spec-label">Stainless Steel</span>
      </div>
      <div class="spec-item">
        <span class="spec-value">Schedule 80</span>
        <span class="spec-label">PVC Construction</span>
      </div>
      <div class="spec-item">
        <span class="spec-value">90/10</span>
        <span class="spec-label">Cupronickel Marine Grade</span>
      </div>
      <div class="spec-item">
        <span class="spec-value">One Cut</span>
        <span class="spec-label">Installation</span>
      </div>
      <div class="spec-item">
        <span class="spec-value">Zero</span>
        <span class="spec-label">Hazardous Byproducts</span>
      </div>
    </div>
  `;

  return createHTMLDocument('HydroLoop System - Technical Excellence', body, styles);
}

/**
 * Variant 2: Information-rich, structured, comprehensive technical documentation
 */
function generateVariant2(assets: DesignAssets): string {
  const styles = `
    .header-banner {
      background: linear-gradient(135deg, #0066cc 0%, #00ccff 100%);
      color: white;
      padding: 2rem;
      margin: -0.5in -0.5in 2rem -0.5in;
      text-align: center;
    }

    .header-banner h1 {
      color: white;
      font-size: 2.2rem;
      margin-bottom: 0.5rem;
    }

    .header-banner .subtitle {
      font-size: 1.2rem;
      opacity: 0.95;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }

    .technical-details {
      background: #f8fafc;
      padding: 1.5rem;
      border-radius: 8px;
      border-left: 4px solid #0066cc;
    }

    .technical-details h3 {
      color: #0066cc;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .detail-list {
      list-style: none;
      padding: 0;
    }

    .detail-list li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #e2e8f0;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
    }

    .detail-list li:last-child {
      border-bottom: none;
    }

    .detail-label {
      font-weight: 600;
      color: #1a1a1a;
    }

    .detail-value {
      color: #475569;
    }

    .product-showcase {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .product-showcase img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .feature-box {
      background: white;
      padding: 1rem;
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      text-align: center;
      font-size: 0.85rem;
      color: #0066cc;
      font-weight: 600;
    }

    .materials-section {
      margin-top: 2rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      border-radius: 8px;
    }

    .materials-section h3 {
      color: #0066cc;
      margin-bottom: 1rem;
    }

    .materials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .material-card {
      background: white;
      padding: 1rem;
      border-radius: 6px;
      text-align: center;
    }

    .material-card strong {
      display: block;
      color: #0066cc;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .material-card small {
      color: #64748b;
      font-size: 0.85rem;
    }
  `;

  const body = `
    ${createLogoHeader(assets.logo, 'center', '200px')}

    <div class="header-banner">
      <h1>HydroLoop System: Technical Specifications</h1>
      <p class="subtitle">Patented HydroDynamic Cavitation Technology</p>
    </div>

    <div class="content-grid">
      <div class="left-column">
        <div class="technical-details">
          <h3>Performance Specifications</h3>
          <ul class="detail-list">
            <li>
              <span class="detail-label">Chemical Reduction:</span>
              <span class="detail-value">75-90% reduction in additives</span>
            </li>
            <li>
              <span class="detail-label">Water Clarity:</span>
              <span class="detail-value">Pristine, perfectly balanced</span>
            </li>
            <li>
              <span class="detail-label">Maintenance Method:</span>
              <span class="detail-value">Quick Flush & Power Flush backflushing</span>
            </li>
            <li>
              <span class="detail-label">Installation:</span>
              <span class="detail-value">One Cut Connection system</span>
            </li>
            <li>
              <span class="detail-label">Safety Features:</span>
              <span class="detail-value">Eliminates chlorine & trichloramine gases</span>
            </li>
            <li>
              <span class="detail-label">Flow Management:</span>
              <span class="detail-value">Intelligent flow creates bio-hostile environment</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="right-column">
        <div class="product-showcase">
          <img src="${assets.productImage}" alt="HydroLoop System" />
          <div class="feature-box">
            World's First Chemical-Free Saltwater Pool Experience
          </div>
        </div>
      </div>
    </div>

    <div class="materials-section">
      <h3>Premium Engineering Materials</h3>
      <div class="materials-grid">
        <div class="material-card">
          <strong>Schedule 80 PVC</strong>
          <small>Superior pressure rating & durability</small>
        </div>
        <div class="material-card">
          <strong>316 Stainless Steel</strong>
          <small>Maximum corrosion resistance</small>
        </div>
        <div class="material-card">
          <strong>90/10 Cupronickel</strong>
          <small>Marine-grade excellence</small>
        </div>
      </div>
    </div>
  `;

  return createHTMLDocument('HydroLoop System - Technical Specifications', body, styles);
}

/**
 * Variant 3: Balanced visual + technical with creative product integration
 */
function generateVariant3(assets: DesignAssets): string {
  const styles = `
    .split-layout {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 2rem;
      min-height: 9.5in;
    }

    .left-panel {
      padding-right: 2rem;
      border-right: 3px solid #e0f2fe;
    }

    .left-panel h1 {
      font-size: 2.3rem;
      color: #0066cc;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }

    .innovation-tag {
      display: inline-block;
      background: linear-gradient(135deg, #0066cc 0%, #00ccff 100%);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      letter-spacing: 0.5px;
    }

    .tech-feature {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
      border-left: 3px solid #0066cc;
    }

    .tech-feature h4 {
      color: #0066cc;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .tech-feature p {
      color: #475569;
      line-height: 1.6;
    }

    .right-panel {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .product-image-stack {
      position: relative;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      padding: 2rem;
      border-radius: 12px;
      margin-bottom: 1.5rem;
    }

    .product-image-stack img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 10px 40px rgba(0, 102, 204, 0.15);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .stat-card {
      background: white;
      padding: 1.2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
      text-align: center;
      border-top: 3px solid #0066cc;
    }

    .stat-card .number {
      font-size: 1.8rem;
      font-weight: 700;
      color: #0066cc;
      display: block;
      margin-bottom: 0.3rem;
    }

    .stat-card .label {
      font-size: 0.8rem;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .engineering-badge {
      background: #1a1a1a;
      color: white;
      padding: 1rem;
      border-radius: 6px;
      text-align: center;
      font-size: 0.85rem;
      line-height: 1.5;
    }

    .engineering-badge strong {
      display: block;
      color: #00ccff;
      margin-bottom: 0.5rem;
    }
  `;

  const body = `
    ${createLogoHeader(assets.logo, 'left', '170px')}

    <div class="split-layout">
      <div class="left-panel">
        <div class="innovation-tag">PATENTED TECHNOLOGY</div>
        <h1>HydroDynamic Cavitation: The Future of Water Sanitation</h1>

        <div class="tech-feature">
          <h4>Revolutionary Flow Management</h4>
          <p>
            Intelligent flow control actively creates an environment where biological
            contaminants cannot thrive, surpassing traditional chemical-heavy strategies.
          </p>
        </div>

        <div class="tech-feature">
          <h4>Advanced Material Engineering</h4>
          <p>
            Premium construction featuring Schedule 80 PVC, 316 stainless steel, and
            marine-grade 90/10 cupronickel ensures unmatched durability and longevity.
          </p>
        </div>

        <div class="tech-feature">
          <h4>Simplified Maintenance Protocol</h4>
          <p>
            Revolutionary Quick Flush technology operates while the pump runs, dramatically
            reducing maintenance time. Power Flush provides deep cleaning when needed.
          </p>
        </div>

        <div class="tech-feature">
          <h4>Safety-First Design</h4>
          <p>
            Eliminates dangerous chlorine and trichloramine gas formation, critical for
            indoor facilities and reducing health risks and liability concerns.
          </p>
        </div>
      </div>

      <div class="right-panel">
        <div class="product-image-stack">
          <img src="${assets.productImage}" alt="HydroLoop System Engineering" />
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <span class="number">90%</span>
            <span class="label">Less Chemicals</span>
          </div>
          <div class="stat-card">
            <span class="number">100%</span>
            <span class="label">Safer Water</span>
          </div>
          <div class="stat-card">
            <span class="number">1-Cut</span>
            <span class="label">Installation</span>
          </div>
          <div class="stat-card">
            <span class="number">Zero</span>
            <span class="label">Toxic Gases</span>
          </div>
        </div>

        <div class="engineering-badge">
          <strong>ENGINEERING EXCELLENCE</strong>
          Precision-crafted with premium materials for maximum performance,
          corrosion resistance, and operational longevity.
        </div>
      </div>
    </div>
  `;

  return createHTMLDocument('HydroLoop System - Engineering Excellence', body, styles);
}
