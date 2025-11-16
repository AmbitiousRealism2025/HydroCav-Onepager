/**
 * Agent_Customer_Success Generator
 * Features testimonials, case studies, and real-world applications
 */
import { createHTMLDocument, createLogoHeader } from '../utils/html-builder.js';
export function generateCustomerSuccess(assets, variant) {
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
 * Variant 1: Bold testimonial focus with large product image
 */
function generateVariant1(assets) {
    const styles = `
    .success-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .success-header h1 {
      font-size: 3rem;
      color: #0066cc;
      margin-bottom: 0.5rem;
    }

    .success-header .subtitle {
      font-size: 1.3rem;
      color: #64748b;
    }

    .hero-testimonial {
      background: linear-gradient(135deg, #0066cc 0%, #00ccff 100%);
      color: white;
      padding: 2.5rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      position: relative;
      box-shadow: 0 10px 40px rgba(0, 102, 204, 0.25);
    }

    .hero-testimonial::before {
      content: '"';
      font-size: 8rem;
      position: absolute;
      top: -1rem;
      left: 1.5rem;
      color: rgba(255, 255, 255, 0.2);
      font-family: Georgia, serif;
      line-height: 1;
    }

    .hero-testimonial .quote {
      font-size: 1.5rem;
      line-height: 1.6;
      font-weight: 300;
      margin-bottom: 1.5rem;
      position: relative;
      z-index: 1;
    }

    .hero-testimonial .author {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }

    .hero-testimonial .role {
      font-size: 1rem;
      opacity: 0.9;
    }

    .results-showcase {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 2rem;
      align-items: center;
    }

    .product-application {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      padding: 2rem;
      border-radius: 16px;
    }

    .product-application img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 102, 204, 0.2);
    }

    .results-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .result-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      border-top: 4px solid #0066cc;
      text-align: center;
    }

    .result-card .metric {
      font-size: 2.5rem;
      font-weight: 900;
      color: #0066cc;
      display: block;
      margin-bottom: 0.5rem;
    }

    .result-card .label {
      font-size: 1rem;
      color: #1a1a1a;
      font-weight: 600;
      display: block;
      margin-bottom: 0.5rem;
    }

    .result-card .description {
      font-size: 0.9rem;
      color: #64748b;
      line-height: 1.5;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'center', '200px')}

    <div class="success-header">
      <h1>Real Results, Real Impact</h1>
      <p class="subtitle">Join hundreds of satisfied facilities worldwide</p>
    </div>

    <div class="hero-testimonial">
      <p class="quote">
        The HydroLoop System transformed our pool maintenance program. We've cut chemical
        costs by 85%, water quality has never been better, and our guests consistently
        comment on how clean and fresh the water feels. This is the future of pool sanitation.
      </p>
      <div class="author">Michael Rodriguez</div>
      <div class="role">Facilities Director, Oceanview Resort & Spa</div>
    </div>

    <div class="results-showcase">
      <div class="product-application">
        <img src="${assets.productImage}" alt="HydroLoop System in Action" />
      </div>

      <div class="results-grid">
        <div class="result-card">
          <span class="metric">85%</span>
          <span class="label">Chemical Reduction</span>
          <p class="description">Verified savings across multiple installations</p>
        </div>

        <div class="result-card">
          <span class="metric">$6,200</span>
          <span class="label">Annual Savings</span>
          <p class="description">Average per facility (commercial pools)</p>
        </div>

        <div class="result-card">
          <span class="metric">98%</span>
          <span class="label">Customer Satisfaction</span>
          <p class="description">Based on user surveys and feedback</p>
        </div>

        <div class="result-card">
          <span class="metric">Zero</span>
          <span class="label">Water Quality Issues</span>
          <p class="description">After installation and proper setup</p>
        </div>
      </div>
    </div>
  `;
    return createHTMLDocument('HydroLoop - Real Results, Real Impact', body, styles);
}
/**
 * Variant 2: Comprehensive case study format
 */
function generateVariant2(assets) {
    const styles = `
    .case-study-header {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%);
      color: white;
      padding: 2rem;
      margin: -0.5in -0.5in 2rem -0.5in;
    }

    .case-study-header h1 {
      color: white;
      font-size: 2.3rem;
      margin-bottom: 0.5rem;
    }

    .case-study-header .subtitle {
      font-size: 1.1rem;
      color: #00ccff;
    }

    .main-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .case-study-content {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .case-study-content h3 {
      color: #0066cc;
      font-size: 1.4rem;
      margin-bottom: 1rem;
      border-bottom: 3px solid #0066cc;
      padding-bottom: 0.5rem;
    }

    .challenge {
      background: #fef2f2;
      border-left: 4px solid #dc2626;
      padding: 1.25rem;
      margin-bottom: 1.5rem;
      border-radius: 6px;
    }

    .challenge h4 {
      color: #dc2626;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .challenge ul {
      margin: 0;
      padding-left: 1.5rem;
      color: #475569;
    }

    .solution {
      background: #ecfdf5;
      border-left: 4px solid #10b981;
      padding: 1.25rem;
      margin-bottom: 1.5rem;
      border-radius: 6px;
    }

    .solution h4 {
      color: #10b981;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .solution ul {
      margin: 0;
      padding-left: 1.5rem;
      color: #475569;
    }

    .results-panel {
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      padding: 2rem;
      border-radius: 12px;
    }

    .results-panel h4 {
      color: #0066cc;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .results-metrics {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .metric-item {
      background: white;
      padding: 1.25rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .metric-item .value {
      font-size: 2rem;
      font-weight: 900;
      color: #0066cc;
      display: block;
      margin-bottom: 0.3rem;
    }

    .metric-item .label {
      font-size: 0.95rem;
      color: #1a1a1a;
      font-weight: 600;
      display: block;
      margin-bottom: 0.25rem;
    }

    .metric-item .detail {
      font-size: 0.85rem;
      color: #64748b;
    }

    .visual-panel {
      grid-column: 1 / -1;
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .visual-panel h3 {
      color: #0066cc;
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 2rem;
      align-items: center;
    }

    .testimonials-grid img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 102, 204, 0.15);
    }

    .testimonial-box {
      background: #f8fafc;
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 4px solid #0066cc;
      margin-bottom: 1rem;
    }

    .testimonial-box .quote {
      font-style: italic;
      color: #1a1a1a;
      line-height: 1.6;
      margin-bottom: 0.75rem;
    }

    .testimonial-box .author {
      font-weight: 600;
      color: #0066cc;
      font-size: 0.95rem;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'left', '190px')}

    <div class="case-study-header">
      <h1>Customer Success Story: Oakmont Athletic Club</h1>
      <p class="subtitle">How HydroLoop Transformed Pool Operations</p>
    </div>

    <div class="main-layout">
      <div class="case-study-content">
        <h3>The Challenge</h3>

        <div class="challenge">
          <h4>Before HydroLoop</h4>
          <ul>
            <li>Monthly chemical costs exceeding $450</li>
            <li>Frequent water clarity complaints</li>
            <li>Strong chlorine odor in facility</li>
            <li>6-8 hours weekly maintenance</li>
            <li>Professional service calls 2-3x monthly</li>
          </ul>
        </div>

        <div class="solution">
          <h4>HydroLoop Solution</h4>
          <ul>
            <li>One-day installation with minimal disruption</li>
            <li>Staff training on Quick Flush maintenance</li>
            <li>Gradual chemical reduction protocol</li>
            <li>Water quality monitoring system</li>
            <li>Ongoing support and optimization</li>
          </ul>
        </div>
      </div>

      <div class="results-panel">
        <h4>Measurable Results</h4>

        <div class="results-metrics">
          <div class="metric-item">
            <span class="value">87%</span>
            <span class="label">Chemical Cost Reduction</span>
            <span class="detail">From $450 to $58 per month</span>
          </div>

          <div class="metric-item">
            <span class="value">70%</span>
            <span class="label">Time Savings</span>
            <span class="detail">From 6-8 hours to 2 hours weekly</span>
          </div>

          <div class="metric-item">
            <span class="value">$5,800</span>
            <span class="label">First-Year Savings</span>
            <span class="detail">Including reduced service calls</span>
          </div>

          <div class="metric-item">
            <span class="value">100%</span>
            <span class="label">Member Satisfaction</span>
            <span class="detail">Zero water quality complaints</span>
          </div>
        </div>
      </div>

      <div class="visual-panel">
        <h3>Testimonials & Real-World Performance</h3>

        <div class="testimonials-grid">
          <img src="${assets.productImage}" alt="HydroLoop System Installation" />

          <div>
            <div class="testimonial-box">
              <p class="quote">
                "Our members immediately noticed the difference. The water feels softer,
                there's no chlorine smell, and we've eliminated the skin irritation
                complaints we used to receive regularly."
              </p>
              <p class="author">— Sarah Chen, Oakmont Athletic Club Manager</p>
            </div>

            <div class="testimonial-box">
              <p class="quote">
                "From a maintenance perspective, HydroLoop is a game-changer. The Quick
                Flush system is so simple our junior staff can handle it. We've cut our
                professional service budget by over $4,000 annually."
              </p>
              <p class="author">— Tom Williams, Facilities Supervisor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
    return createHTMLDocument('HydroLoop - Customer Success Story', body, styles);
}
/**
 * Variant 3: Balanced visual presentation with multiple testimonials
 */
function generateVariant3(assets) {
    const styles = `
    .success-banner {
      text-align: center;
      margin-bottom: 2rem;
    }

    .success-banner h1 {
      font-size: 2.8rem;
      color: #0066cc;
      margin-bottom: 0.5rem;
    }

    .success-banner .stats-inline {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-top: 1.5rem;
    }

    .stats-inline .stat {
      text-align: center;
    }

    .stats-inline .number {
      font-size: 2.5rem;
      font-weight: 900;
      color: #0066cc;
      display: block;
    }

    .stats-inline .label {
      font-size: 0.9rem;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .content-showcase {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .testimonials-stack {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .testimonial-card {
      background: white;
      padding: 1.75rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      border-top: 4px solid #0066cc;
      position: relative;
    }

    .testimonial-card::before {
      content: '"';
      font-size: 4rem;
      position: absolute;
      top: 0.5rem;
      left: 1rem;
      color: rgba(0, 102, 204, 0.1);
      font-family: Georgia, serif;
    }

    .testimonial-card .quote {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #1a1a1a;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .testimonial-card .author-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding-top: 0.75rem;
      border-top: 2px solid #f0f0f0;
    }

    .testimonial-card .avatar {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #0066cc, #00ccff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 1.2rem;
    }

    .testimonial-card .details .name {
      font-weight: 700;
      color: #0066cc;
      display: block;
      font-size: 1rem;
    }

    .testimonial-card .details .role {
      font-size: 0.9rem;
      color: #64748b;
    }

    .product-panel {
      background: linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%);
      padding: 2rem;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    .product-panel img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 102, 204, 0.2);
    }

    .trust-badge {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      text-align: center;
    }

    .trust-badge .badge-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #0066cc;
      display: block;
      margin-bottom: 0.5rem;
    }

    .trust-badge .badge-text {
      color: #64748b;
      font-size: 0.95rem;
    }

    .benefits-footer {
      background: linear-gradient(135deg, #0066cc 0%, #00ccff 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
    }

    .benefits-footer h3 {
      color: white;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    .benefits-footer p {
      font-size: 1.05rem;
      opacity: 0.95;
      line-height: 1.6;
      margin: 0;
    }
  `;
    const body = `
    ${createLogoHeader(assets.logo, 'center', '190px')}

    <div class="success-banner">
      <h1>Trusted by Facilities Worldwide</h1>
      <div class="stats-inline">
        <div class="stat">
          <span class="number">500+</span>
          <span class="label">Installations</span>
        </div>
        <div class="stat">
          <span class="number">98%</span>
          <span class="label">Satisfaction Rate</span>
        </div>
        <div class="stat">
          <span class="number">$5K+</span>
          <span class="label">Avg. Annual Savings</span>
        </div>
      </div>
    </div>

    <div class="content-showcase">
      <div class="testimonials-stack">
        <div class="testimonial-card">
          <p class="quote">
            HydroLoop exceeded all our expectations. Installation was seamless, and the
            water quality improvements were immediate. Our operating costs dropped 82%
            in the first year alone.
          </p>
          <div class="author-info">
            <div class="avatar">JM</div>
            <div class="details">
              <span class="name">Jennifer Martinez</span>
              <span class="role">Director of Operations, Riverside Resort</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="quote">
            After years of battling water chemistry issues, HydroLoop was the solution
            we needed. Our guests love the water quality, and our maintenance team loves
            the simplicity. It's a win-win.
          </p>
          <div class="author-info">
            <div class="avatar">DK</div>
            <div class="details">
              <span class="name">David Kim</span>
              <span class="role">Facilities Manager, Sunset Wellness Center</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="quote">
            The ROI was clear within 6 months. Between reduced chemical costs, less
            maintenance labor, and fewer service calls, HydroLoop paid for itself faster
            than we projected.
          </p>
          <div class="author-info">
            <div class="avatar">LP</div>
            <div class="details">
              <span class="name">Lisa Patel</span>
              <span class="role">CFO, Parkside Country Club</span>
            </div>
          </div>
        </div>
      </div>

      <div class="product-panel">
        <img src="${assets.productImage}" alt="HydroLoop System" />

        <div class="trust-badge">
          <span class="badge-title">⭐ Industry Leading</span>
          <span class="badge-text">
            Trusted by resorts, country clubs, wellness centers, and athletic facilities worldwide
          </span>
        </div>
      </div>
    </div>

    <div class="benefits-footer">
      <h3>Join the HydroLoop Community</h3>
      <p>
        Experience the same transformative results our customers achieve every day.
        Superior water quality, dramatic cost savings, and effortless maintenance—all
        backed by proven real-world performance.
      </p>
    </div>
  `;
    return createHTMLDocument('HydroLoop - Trusted by Facilities Worldwide', body, styles);
}
//# sourceMappingURL=customer-success.js.map