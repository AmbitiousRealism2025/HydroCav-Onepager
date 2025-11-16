#!/usr/bin/env python3
import base64

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

logo_b64, product_b64 = get_base64_images()
logo_data_uri = f"data:image/png;base64,{{logo_b64}}"
product_data_uri = f"data:image/jpeg;base64,{{product_b64}}"

print("=" * 60)
print("GENERATING AGENT_SUSTAINABILITY_ESG DESIGNS")
print("=" * 60)

# ============================================================================
# AGENT 4: SUSTAINABILITY_ESG - Variant 1 (Bold environmental focus)
# ============================================================================
html_sustain_1 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Sustainable Future</title>
    <style>
        @page {{{{ size: letter; margin: 0.5in; }}}}
        * {{{{ margin: 0; padding: 0; box-sizing: border-box; }}}}
        body {{{{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: linear-gradient(to bottom, #e8f5e9, white);
            color: #1a1a1a;
        }}}}
        .page {{{{
            width: 100%;
            height: 100%;
            padding: 0.5in;
        }}}}
        header {{{{
            text-align: center;
            margin-bottom: 18px;
        }}}}
        .logo {{{{
            max-width: 150px;
            height: auto;
            margin-bottom: 10px;
        }}}}
        .eco-badge {{{{
            background: linear-gradient(135deg, #2e7d32, #4caf50);
            color: white;
            padding: 12px 25px;
            border-radius: 30px;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }}}}
        .hero-green {{{{
            background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 20px;
        }}}}
        .hero-green h1 {{{{
            font-size: 38px;
            margin-bottom: 10px;
            font-weight: bold;
        }}}}
        .hero-green p {{{{
            font-size: 15px;
            line-height: 1.5;
        }}}}
        .content-grid {{{{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin-bottom: 15px;
        }}}}
        .product-eco {{{{
            position: relative;
            border-radius: 12px;
            overflow: hidden;
        }}}}
        .product-img {{{{
            width: 100%;
            height: auto;
            display: block;
            border-radius: 12px;
            box-shadow: 0 6px 20px rgba(46,125,50,0.3);
        }}}}
        .eco-overlay {{{{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(46,125,50,0.95), transparent);
            color: white;
            padding: 20px;
        }}}}
        .eco-overlay h3 {{{{
            font-size: 18px;
            margin-bottom: 5px;
        }}}}
        .eco-overlay p {{{{
            font-size: 11px;
        }}}}
        .benefits-panel {{{{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}}}
        .benefit-item {{{{
            background: white;
            padding: 15px;
            border-radius: 8px;
            border-left: 5px solid #4caf50;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }}}}
        .benefit-item h4 {{{{
            color: #2e7d32;
            font-size: 14px;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
        }}}}
        .benefit-item p {{{{
            font-size: 11px;
            line-height: 1.4;
            color: #555;
        }}}}
        .icon {{{{
            font-size: 20px;
        }}}}
        .impact-metrics {{{{
            background: #1a1a1a;
            color: white;
            padding: 20px;
            border-radius: 8px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }}}}
        .metric {{{{
            text-align: center;
        }}}}
        .metric-value {{{{
            font-size: 32px;
            font-weight: bold;
            color: #4caf50;
            display: block;
            margin-bottom: 6px;
        }}}}
        .metric-label {{{{
            font-size: 11px;
            color: #ccc;
            text-transform: uppercase;
        }}}}
        @media print {{{{
            body {{{{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}}}
        }}}}
    </style>
</head>
<body>
    <div class="page">
        <header>
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
            <div class="eco-badge">🌿 Eco-Friendly Technology</div>
        </header>

        <div class="hero-green">
            <h1>Chemical-Free Pool Revolution</h1>
            <p>World's first genuinely chemical-free saltwater pool experience through controlled HydroDynamic Cavitation</p>
        </div>

        <div class="content-grid">
            <div class="product-eco">
                <img src="{product_data_uri}" alt="HydroLoop System" class="product-img">
                <div class="eco-overlay">
                    <h3>Sustainable Design</h3>
                    <p>Engineered for longevity and minimal environmental impact</p>
                </div>
            </div>

            <div class="benefits-panel">
                <div class="benefit-item">
                    <h4><span class="icon">♻️</span> 75-90% Less Chemicals</h4>
                    <p>Dramatic reduction in chemical additives means fewer harmful substances entering our water systems and ecosystems.</p>
                </div>
                <div class="benefit-item">
                    <h4><span class="icon">🌊</span> Pristine Water Quality</h4>
                    <p>Perfectly balanced water through intelligent flow management, eliminating need for harsh chemical treatments.</p>
                </div>
                <div class="benefit-item">
                    <h4><span class="icon">🛡️</span> Zero Harmful Gases</h4>
                    <p>Eliminates dangerous chlorine and trichloramine gas formation, protecting both people and planet.</p>
                </div>
                <div class="benefit-item">
                    <h4><span class="icon">🌱</span> Long-Term Durability</h4>
                    <p>Premium materials ensure extended lifespan, reducing replacement waste and resource consumption.</p>
                </div>
            </div>
        </div>

        <div class="impact-metrics">
            <div class="metric">
                <span class="metric-value">75-90%</span>
                <span class="metric-label">Chemical Reduction</span>
            </div>
            <div class="metric">
                <span class="metric-value">100%</span>
                <span class="metric-label">Chemical-Free Option</span>
            </div>
            <div class="metric">
                <span class="metric-value">Zero</span>
                <span class="metric-label">Toxic Gas Emission</span>
            </div>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Sustainability_ESG/variant_1_sustainability.html', html_sustain_1)

# ============================================================================
# AGENT 4: SUSTAINABILITY_ESG - Variant 2 (ESG comprehensive)
# ============================================================================
html_sustain_2 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - ESG Leadership</title>
    <style>
        @page {{{{ size: letter; margin: 0.5in; }}}}
        * {{{{ margin: 0; padding: 0; box-sizing: border-box; }}}}
        body {{{{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
        }}}}
        .page {{{{
            width: 100%;
            height: 100%;
            padding: 0.4in;
        }}}}
        .header-esg {{{{
            background: linear-gradient(90deg, #2e7d32, #66bb6a);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }}}}
        .logo {{{{
            max-width: 130px;
            height: auto;
            filter: brightness(0) invert(1);
        }}}}
        .header-title {{{{
            text-align: right;
        }}}}
        .header-title h1 {{{{
            font-size: 20px;
            margin-bottom: 4px;
        }}}}
        .header-title p {{{{
            font-size: 11px;
            opacity: 0.9;
        }}}}
        .main-layout {{{{
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 15px;
            margin-bottom: 15px;
        }}}}
        .esg-pillars {{{{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}}}
        .pillar-card {{{{
            background: #f8f9fa;
            border-radius: 8px;
            overflow: hidden;
            border-top: 4px solid #4caf50;
        }}}}
        .pillar-header {{{{
            background: linear-gradient(135deg, #2e7d32, #4caf50);
            color: white;
            padding: 10px 15px;
            font-weight: bold;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }}}}
        .pillar-content {{{{
            padding: 12px 15px;
        }}}}
        .pillar-content ul {{{{
            list-style: none;
            padding: 0;
        }}}}
        .pillar-content li {{{{
            font-size: 11px;
            line-height: 1.5;
            padding: 4px 0;
            padding-left: 16px;
            position: relative;
        }}}}
        .pillar-content li:before {{{{
            content: "•";
            position: absolute;
            left: 0;
            color: #4caf50;
            font-weight: bold;
        }}}}
        .product-panel {{{{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}}}
        .product-image-box {{{{
            background: #1a1a1a;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }}}}
        .product-img {{{{
            width: 100%;
            height: auto;
            border-radius: 6px;
            margin-bottom: 10px;
        }}}}
        .green-badge {{{{
            background: #4caf50;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: bold;
            display: inline-block;
        }}}}
        .impact-box {{{{
            background: white;
            border: 2px solid #4caf50;
            border-radius: 8px;
            padding: 12px;
        }}}}
        .impact-box h3 {{{{
            color: #2e7d32;
            font-size: 13px;
            margin-bottom: 8px;
            text-align: center;
        }}}}
        .impact-grid {{{{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }}}}
        .impact-stat {{{{
            background: #e8f5e9;
            padding: 8px;
            border-radius: 4px;
            text-align: center;
        }}}}
        .impact-number {{{{
            font-size: 18px;
            font-weight: bold;
            color: #2e7d32;
            display: block;
        }}}}
        .impact-label {{{{
            font-size: 9px;
            color: #666;
        }}}}
        .bottom-statement {{{{
            background: #2e7d32;
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }}}}
        .bottom-statement h3 {{{{
            font-size: 18px;
            margin-bottom: 8px;
        }}}}
        .bottom-statement p {{{{
            font-size: 11px;
            line-height: 1.5;
        }}}}
        @media print {{{{
            body {{{{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}}}
        }}}}
    </style>
</head>
<body>
    <div class="page">
        <div class="header-esg">
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
            <div class="header-title">
                <h1>ESG Leadership Through Innovation</h1>
                <p>Environmental, Social & Governance Excellence</p>
            </div>
        </div>

        <div class="main-layout">
            <div class="esg-pillars">
                <div class="pillar-card">
                    <div class="pillar-header">🌍 Environmental Impact</div>
                    <div class="pillar-content">
                        <ul>
                            <li><strong>75-90% Chemical Reduction:</strong> Massive decrease in chemical manufacturing demand and environmental burden</li>
                            <li><strong>Chemical-Free Operation:</strong> World's first truly chemical-free saltwater pool system</li>
                            <li><strong>Zero Toxic Emissions:</strong> Eliminates dangerous chlorine and trichloramine gas formation</li>
                            <li><strong>Long-Term Durability:</strong> Premium materials reduce replacement cycles and waste</li>
                        </ul>
                    </div>
                </div>

                <div class="pillar-card">
                    <div class="pillar-header">👥 Social Responsibility</div>
                    <div class="pillar-content">
                        <ul>
                            <li><strong>Health & Safety:</strong> Eliminates exposure to hazardous chemicals and gases</li>
                            <li><strong>Indoor Air Quality:</strong> Critical for facilities with enclosed pool areas</li>
                            <li><strong>Accessibility:</strong> User-maintainable design empowers all stakeholders</li>
                            <li><strong>Community Impact:</strong> Safer, healthier aquatic facilities for everyone</li>
                        </ul>
                    </div>
                </div>

                <div class="pillar-card">
                    <div class="pillar-header">⚖️ Governance & Compliance</div>
                    <div class="pillar-content">
                        <ul>
                            <li><strong>Patented Technology:</strong> Protected intellectual property and innovation</li>
                            <li><strong>Safety Standards:</strong> Reduces liability and regulatory compliance burden</li>
                            <li><strong>Transparent Benefits:</strong> Measurable environmental and operational improvements</li>
                            <li><strong>Sustainable Leadership:</strong> Aligns with corporate sustainability goals</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="product-panel">
                <div class="product-image-box">
                    <img src="{product_data_uri}" alt="HydroLoop System" class="product-img">
                    <div class="green-badge">🌿 Sustainable Technology</div>
                </div>

                <div class="impact-box">
                    <h3>Environmental Metrics</h3>
                    <div class="impact-grid">
                        <div class="impact-stat">
                            <span class="impact-number">75-90%</span>
                            <span class="impact-label">Lower Chemicals</span>
                        </div>
                        <div class="impact-stat">
                            <span class="impact-number">Zero</span>
                            <span class="impact-label">Toxic Gases</span>
                        </div>
                        <div class="impact-stat">
                            <span class="impact-number">Years</span>
                            <span class="impact-label">Long Lifespan</span>
                        </div>
                        <div class="impact-stat">
                            <span class="impact-number">100%</span>
                            <span class="impact-label">Chem-Free</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-statement">
            <h3>Pioneering Sustainable Pool Sanitation</h3>
            <p>HydroLoop establishes a new benchmark in environmental responsibility, combining controlled HydroDynamic Cavitation with premium engineering to deliver the definitive prevention solution for pool and hot tub maintenance.</p>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Sustainability_ESG/variant_2_sustainability.html', html_sustain_2)

# ============================================================================
# AGENT 4: SUSTAINABILITY_ESG - Variant 3 (Balanced sustainability)
# ============================================================================
html_sustain_3 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Green Innovation</title>
    <style>
        @page {{{{ size: letter; margin: 0.5in; }}}}
        * {{{{ margin: 0; padding: 0; box-sizing: border-box; }}}}
        body {{{{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
        }}}}
        .page {{{{
            width: 100%;
            height: 100%;
            padding: 0.5in;
            display: flex;
            flex-direction: column;
        }}}}
        .top-section {{{{
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%232e7d32" width="100" height="100"/><circle fill="%234caf50" opacity="0.2" cx="20" cy="20" r="40"/><circle fill="%2366bb6a" opacity="0.2" cx="80" cy="80" r="50"/></svg>');
            background-size: cover;
            color: white;
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 18px;
        }}}}
        .logo-top {{{{
            max-width: 140px;
            height: auto;
            filter: brightness(0) invert(1);
            margin-bottom: 15px;
        }}}}
        .top-section h1 {{{{
            font-size: 34px;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }}}}
        .top-section p {{{{
            font-size: 14px;
            line-height: 1.6;
        }}}}
        .feature-showcase {{{{
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 18px;
            margin-bottom: 15px;
            flex: 1;
        }}}}
        .product-container {{{{
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
            padding: 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }}}}
        .product-img {{{{
            width: 90%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(46,125,50,0.3);
            margin-bottom: 12px;
        }}}}
        .eco-stamp {{{{
            background: #2e7d32;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }}}}
        .benefits-column {{{{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}}}
        .benefit-bar {{{{
            background: white;
            border: 2px solid #4caf50;
            padding: 15px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
        }}}}
        .benefit-icon {{{{
            background: linear-gradient(135deg, #2e7d32, #4caf50);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            flex-shrink: 0;
        }}}}
        .benefit-text {{{{
            flex: 1;
        }}}}
        .benefit-text h4 {{{{
            color: #2e7d32;
            font-size: 14px;
            margin-bottom: 4px;
        }}}}
        .benefit-text p {{{{
            font-size: 11px;
            color: #555;
            line-height: 1.4;
        }}}}
        .impact-footer {{{{
            background: #1a1a1a;
            color: white;
            padding: 18px;
            border-radius: 8px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }}}}
        .impact-item {{{{
            text-align: center;
            border-right: 1px solid #444;
        }}}}
        .impact-item:last-child {{{{
            border-right: none;
        }}}}
        .impact-value {{{{
            font-size: 24px;
            font-weight: bold;
            color: #4caf50;
            display: block;
            margin-bottom: 5px;
        }}}}
        .impact-text {{{{
            font-size: 10px;
            color: #ccc;
            text-transform: uppercase;
        }}}}
        @media print {{{{
            body {{{{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}}}
        }}}}
    </style>
</head>
<body>
    <div class="page">
        <div class="top-section">
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo-top">
            <h1>The Green Revolution in Pool Care</h1>
            <p>HydroLoop combines environmental responsibility with exceptional performance through controlled HydroDynamic Cavitation technology</p>
        </div>

        <div class="feature-showcase">
            <div class="product-container">
                <img src="{product_data_uri}" alt="HydroLoop System" class="product-img">
                <div class="eco-stamp">🌿 100% Chemical-Free Option</div>
            </div>

            <div class="benefits-column">
                <div class="benefit-bar">
                    <div class="benefit-icon">♻️</div>
                    <div class="benefit-text">
                        <h4>Massive Chemical Reduction</h4>
                        <p>75-90% less chemicals means reduced environmental impact and healthier ecosystems</p>
                    </div>
                </div>

                <div class="benefit-bar">
                    <div class="benefit-icon">🌊</div>
                    <div class="benefit-text">
                        <h4>Pristine Water Quality</h4>
                        <p>Perfectly balanced water through intelligent flow management, not harsh chemicals</p>
                    </div>
                </div>

                <div class="benefit-bar">
                    <div class="benefit-icon">🛡️</div>
                    <div class="benefit-text">
                        <h4>Zero Harmful Emissions</h4>
                        <p>Eliminates dangerous chlorine and trichloramine gases for safer environments</p>
                    </div>
                </div>

                <div class="benefit-bar">
                    <div class="benefit-icon">⚡</div>
                    <div class="benefit-text">
                        <h4>Sustainable Engineering</h4>
                        <p>Premium materials ensure decades of reliable service, reducing waste and replacements</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="impact-footer">
            <div class="impact-item">
                <span class="impact-value">75-90%</span>
                <span class="impact-text">Chemical Reduction</span>
            </div>
            <div class="impact-item">
                <span class="impact-value">Zero</span>
                <span class="impact-text">Toxic Gases</span>
            </div>
            <div class="impact-item">
                <span class="impact-value">100%</span>
                <span class="impact-text">Chemical-Free</span>
            </div>
            <div class="impact-item">
                <span class="impact-value">Years</span>
                <span class="impact-text">Long Lifespan</span>
            </div>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Sustainability_ESG/variant_3_sustainability.html', html_sustain_3)

print("\\n" + "="*60)
print("Agent_Sustainability_ESG: 3 variants completed!")
print("="*60)
