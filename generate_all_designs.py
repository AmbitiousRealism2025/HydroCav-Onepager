#!/usr/bin/env python3
import base64
import os

# Load images and convert to base64
def get_base64_images():
    with open('/home/user/HydroCav-Onepager/images/HydroCav_Logo.PNG', 'rb') as f:
        logo_base64 = base64.b64encode(f.read()).decode('utf-8')

    with open('/home/user/HydroCav-Onepager/images/HydroLoop.jpg', 'rb') as f:
        product_base64 = base64.b64encode(f.read()).decode('utf-8')

    return logo_base64, product_base64

def save_html(filepath, html_content):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"✓ Generated: {filepath}")

# Get base64 images
logo_b64, product_b64 = get_base64_images()
logo_data_uri = f"data:image/png;base64,{logo_b64}"
product_data_uri = f"data:image/jpeg;base64,{product_b64}"

print("=" * 60)
print("GENERATING AGENT_TECHNICAL_FOCUS DESIGNS")
print("=" * 60)

# ============================================================================
# AGENT 1: TECHNICAL_FOCUS - Variant 1 (Bold, minimal, high-impact)
# ============================================================================
html_tech_1 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Technical Excellence</title>
    <style>
        @page {{ size: letter; margin: 0.5in; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
        }}
        .page {{
            width: 100%;
            height: 100%;
            padding: 0.5in;
            display: flex;
            flex-direction: column;
        }}
        header {{
            text-align: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 3px solid #0066cc;
        }}
        .logo {{
            max-width: 180px;
            height: auto;
        }}
        .hero-section {{
            position: relative;
            height: 420px;
            margin-bottom: 20px;
            overflow: hidden;
            border-radius: 8px;
        }}
        .hero-image {{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }}
        .hero-overlay {{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,51,102,0.95), transparent);
            color: white;
            padding: 25px;
        }}
        .hero-overlay h1 {{
            font-size: 32px;
            margin-bottom: 8px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }}
        .hero-overlay p {{
            font-size: 15px;
            line-height: 1.4;
        }}
        .specs-grid {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 15px;
        }}
        .spec-box {{
            background: linear-gradient(135deg, #0066cc 0%, #004999 100%);
            color: white;
            padding: 18px;
            border-radius: 8px;
            text-align: center;
        }}
        .spec-number {{
            font-size: 28px;
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }}
        .spec-label {{
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}
        .materials {{
            background: #f5f5f5;
            padding: 18px;
            border-radius: 8px;
            border-left: 5px solid #0066cc;
        }}
        .materials h3 {{
            color: #0066cc;
            font-size: 16px;
            margin-bottom: 10px;
        }}
        .materials ul {{
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }}
        .materials li {{
            padding-left: 18px;
            position: relative;
            font-size: 13px;
        }}
        .materials li:before {{
            content: "✓";
            position: absolute;
            left: 0;
            color: #0066cc;
            font-weight: bold;
        }}
        @media print {{
            body {{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}
        }}
    </style>
</head>
<body>
    <div class="page">
        <header>
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
        </header>
        <div class="hero-section">
            <img src="{product_data_uri}" alt="HydroLoop System" class="hero-image">
            <div class="hero-overlay">
                <h1>HydroDynamic Cavitation Technology</h1>
                <p>Patented multi-step sanitation system engineered for maximum performance and reliability</p>
            </div>
        </div>
        <div class="specs-grid">
            <div class="spec-box">
                <span class="spec-number">75-90%</span>
                <span class="spec-label">Chemical Reduction</span>
            </div>
            <div class="spec-box">
                <span class="spec-number">99.9%</span>
                <span class="spec-label">Water Purity</span>
            </div>
            <div class="spec-box">
                <span class="spec-number">One Cut</span>
                <span class="spec-label">Installation</span>
            </div>
        </div>
        <div class="materials">
            <h3>Premium Engineering Materials</h3>
            <ul>
                <li>Schedule 80 PVC construction</li>
                <li>316 Stainless Steel components</li>
                <li>Marine-grade 90/10 Cupronickel</li>
                <li>Superior corrosion resistance</li>
                <li>Intelligent flow management system</li>
                <li>Quick Flush & Power Flush technology</li>
            </ul>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Technical_Focus/variant_1_technical.html', html_tech_1)

# ============================================================================
# AGENT 1: TECHNICAL_FOCUS - Variant 2 (Information-rich, comprehensive)
# ============================================================================
html_tech_2 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Complete Technical Specifications</title>
    <style>
        @page {{ size: letter; margin: 0.5in; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
        }}
        .page {{
            width: 100%;
            height: 100%;
            padding: 0.4in;
            display: grid;
            grid-template-columns: 1fr;
        }}
        header {{
            text-align: left;
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 2px solid #0066cc;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }}
        .logo {{
            max-width: 150px;
            height: auto;
        }}
        .tagline {{
            font-size: 14px;
            color: #0066cc;
            font-weight: bold;
        }}
        .main-content {{
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 15px;
        }}
        .left-column {{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}
        .right-column {{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}
        .product-image {{
            width: 100%;
            height: auto;
            border-radius: 8px;
            border: 3px solid #0066cc;
        }}
        .section {{
            background: #f8f9fa;
            padding: 12px;
            border-radius: 6px;
            border-left: 4px solid #0066cc;
        }}
        .section h2 {{
            color: #0066cc;
            font-size: 16px;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}
        .section h3 {{
            color: #004999;
            font-size: 14px;
            margin-bottom: 6px;
            margin-top: 8px;
        }}
        .section p, .section li {{
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 4px;
        }}
        .section ul {{
            list-style: none;
            padding-left: 0;
        }}
        .section li:before {{
            content: "▸ ";
            color: #0066cc;
            font-weight: bold;
        }}
        .highlight-box {{
            background: linear-gradient(135deg, #0066cc, #004999);
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }}
        .highlight-box h2 {{
            color: white;
            font-size: 22px;
            margin-bottom: 8px;
        }}
        .highlight-box p {{
            font-size: 12px;
            line-height: 1.4;
        }}
        .tech-specs {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }}
        .tech-item {{
            background: white;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #e0e0e0;
        }}
        .tech-label {{
            font-size: 10px;
            color: #666;
            text-transform: uppercase;
        }}
        .tech-value {{
            font-size: 13px;
            color: #0066cc;
            font-weight: bold;
        }}
        @media print {{
            body {{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}
        }}
    </style>
</head>
<body>
    <div class="page">
        <header>
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
            <div class="tagline">HydroLoop System | Technical Specifications</div>
        </header>

        <div class="main-content">
            <div class="left-column">
                <div class="highlight-box">
                    <h2>HydroDynamic Cavitation</h2>
                    <p>Patented multi-step device revolutionizing pool and hot tub maintenance through controlled cavitation technology</p>
                </div>

                <div class="section">
                    <h2>Core Technology</h2>
                    <p><strong>Intelligent Flow Management:</strong> Creates an environment where biological life cannot thrive, eliminating the need for chemical-heavy strategies.</p>
                    <h3>Key Technical Features:</h3>
                    <ul>
                        <li>Controlled HydroDynamic Cavitation process</li>
                        <li>Multi-step purification system</li>
                        <li>Integration with standard pool salt levels</li>
                        <li>Prevention-based sanitation approach</li>
                        <li>Eliminates dangerous chlorine and trichloramine gas formation</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Materials & Construction</h2>
                    <ul>
                        <li><strong>Schedule 80 PVC:</strong> Industrial-grade pipe construction</li>
                        <li><strong>316 Stainless Steel:</strong> Premium corrosion-resistant components</li>
                        <li><strong>Marine-Grade 90/10 Cupronickel:</strong> Superior durability in aquatic environments</li>
                        <li><strong>Engineered for Excellence:</strong> Unmatched longevity and operational reliability</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Installation & Maintenance</h2>
                    <h3>Seamless "One Cut Connection"</h3>
                    <p>Remarkably simple installation that integrates effortlessly into any existing system, minimizing labor and setup costs.</p>
                    <h3>Revolutionary Backflushing</h3>
                    <ul>
                        <li><strong>Quick Flush:</strong> Operates while pump runs, minimal downtime</li>
                        <li><strong>Power Flush:</strong> Deep cleaning for optimal performance</li>
                        <li>User-maintainable design eliminates costly professional service calls</li>
                    </ul>
                </div>
            </div>

            <div class="right-column">
                <img src="{product_data_uri}" alt="HydroLoop System" class="product-image">

                <div class="section">
                    <h2>Performance Metrics</h2>
                    <div class="tech-specs">
                        <div class="tech-item">
                            <div class="tech-label">Chemical Reduction</div>
                            <div class="tech-value">75-90%</div>
                        </div>
                        <div class="tech-item">
                            <div class="tech-label">Water Clarity</div>
                            <div class="tech-value">Pristine</div>
                        </div>
                        <div class="tech-item">
                            <div class="tech-label">Installation</div>
                            <div class="tech-value">One Cut</div>
                        </div>
                        <div class="tech-item">
                            <div class="tech-label">Maintenance</div>
                            <div class="tech-value">User-Level</div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2>Safety Benefits</h2>
                    <ul>
                        <li>Eliminates hazardous chlorine gases</li>
                        <li>Prevents trichloramine formation</li>
                        <li>Reduces health risks</li>
                        <li>Lowers facility liability</li>
                        <li>Ideal for indoor installations</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Industry First</h2>
                    <p><strong>World's first genuinely chemical-free saltwater pool experience</strong> through integration of cavitation technology with standard pool salt levels.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Technical_Focus/variant_2_technical.html', html_tech_2)

# ============================================================================
# AGENT 1: TECHNICAL_FOCUS - Variant 3 (Balanced visual + technical)
# ============================================================================
html_tech_3 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Engineering Innovation</title>
    <style>
        @page {{ size: letter; margin: 0.5in; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
        }}
        .page {{
            width: 100%;
            height: 100%;
            padding: 0.4in;
        }}
        header {{
            text-align: center;
            margin-bottom: 15px;
        }}
        .logo {{
            max-width: 160px;
            height: auto;
        }}
        .title-section {{
            text-align: center;
            background: linear-gradient(135deg, #0066cc, #004999);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 15px;
        }}
        .title-section h1 {{
            font-size: 28px;
            margin-bottom: 8px;
        }}
        .title-section p {{
            font-size: 13px;
            line-height: 1.4;
        }}
        .split-layout {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 12px;
        }}
        .product-showcase {{
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            height: 280px;
        }}
        .product-showcase img {{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }}
        .product-badge {{
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(0,102,204,0.95);
            color: white;
            padding: 10px 15px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 12px;
        }}
        .features-list {{
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border: 2px solid #0066cc;
        }}
        .features-list h2 {{
            color: #0066cc;
            font-size: 18px;
            margin-bottom: 12px;
            text-align: center;
        }}
        .features-list ul {{
            list-style: none;
            padding: 0;
        }}
        .features-list li {{
            padding: 8px 0;
            border-bottom: 1px solid #e0e0e0;
            font-size: 12px;
        }}
        .features-list li:last-child {{
            border-bottom: none;
        }}
        .features-list li:before {{
            content: "●";
            color: #0066cc;
            font-weight: bold;
            margin-right: 8px;
        }}
        .metrics-row {{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-bottom: 12px;
        }}
        .metric-card {{
            background: white;
            border: 2px solid #0066cc;
            padding: 12px;
            border-radius: 6px;
            text-align: center;
        }}
        .metric-value {{
            font-size: 20px;
            font-weight: bold;
            color: #0066cc;
            display: block;
            margin-bottom: 4px;
        }}
        .metric-label {{
            font-size: 10px;
            color: #666;
            text-transform: uppercase;
        }}
        .bottom-section {{
            background: #1a1a1a;
            color: white;
            padding: 15px;
            border-radius: 8px;
        }}
        .bottom-section h3 {{
            color: #0066cc;
            font-size: 16px;
            margin-bottom: 8px;
        }}
        .bottom-section p {{
            font-size: 11px;
            line-height: 1.5;
        }}
        .materials-grid {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            margin-top: 8px;
        }}
        .material-tag {{
            background: #333;
            padding: 6px;
            border-radius: 4px;
            font-size: 10px;
            text-align: center;
            border-left: 3px solid #0066cc;
        }}
        @media print {{
            body {{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}
        }}
    </style>
</head>
<body>
    <div class="page">
        <header>
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
        </header>

        <div class="title-section">
            <h1>The HydroLoop System</h1>
            <p>Patented HydroDynamic Cavitation Technology | Engineering Excellence in Pool & Hot Tub Sanitation</p>
        </div>

        <div class="split-layout">
            <div class="product-showcase">
                <img src="{product_data_uri}" alt="HydroLoop System">
                <div class="product-badge">PATENTED TECHNOLOGY</div>
            </div>

            <div class="features-list">
                <h2>Technical Advantages</h2>
                <ul>
                    <li><strong>Controlled HydroDynamic Cavitation</strong> - Multi-step purification process</li>
                    <li><strong>Intelligent Flow Management</strong> - Prevents biological growth</li>
                    <li><strong>75-90% Chemical Reduction</strong> - Significant cost savings</li>
                    <li><strong>Pristine Water Clarity</strong> - Perfectly balanced water quality</li>
                    <li><strong>One Cut Installation</strong> - Minimal labor and setup</li>
                    <li><strong>Quick Flush Technology</strong> - Operates during pump runtime</li>
                    <li><strong>User-Maintainable</strong> - No professional service required</li>
                </ul>
            </div>
        </div>

        <div class="metrics-row">
            <div class="metric-card">
                <span class="metric-value">75-90%</span>
                <span class="metric-label">Chemical Reduction</span>
            </div>
            <div class="metric-card">
                <span class="metric-value">Zero</span>
                <span class="metric-label">Harmful Gases</span>
            </div>
            <div class="metric-card">
                <span class="metric-value">100%</span>
                <span class="metric-label">Chemical-Free</span>
            </div>
            <div class="metric-card">
                <span class="metric-value">One Cut</span>
                <span class="metric-label">Installation</span>
            </div>
        </div>

        <div class="bottom-section">
            <h3>Premium Engineering Materials</h3>
            <p>Engineered for excellence with industrial-grade materials ensuring unmatched durability, superior corrosion resistance, and exceptionally long operational life.</p>
            <div class="materials-grid">
                <div class="material-tag">Schedule 80 PVC</div>
                <div class="material-tag">316 Stainless Steel</div>
                <div class="material-tag">90/10 Cupronickel</div>
            </div>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Technical_Focus/variant_3_technical.html', html_tech_3)

print("\\n" + "="*60)
print("Agent_Technical_Focus: 3 variants completed!")
print("="*60)
