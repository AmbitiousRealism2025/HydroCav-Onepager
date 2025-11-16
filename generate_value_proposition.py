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
logo_data_uri = f"data:image/png;base64,{logo_b64}"
product_data_uri = f"data:image/jpeg;base64,{product_b64}"

print("=" * 60)
print("GENERATING AGENT_VALUE_PROPOSITION DESIGNS")
print("=" * 60)

# ============================================================================
# AGENT 3: VALUE_PROPOSITION - Variant 1 (ROI focus, bold)
# ============================================================================
html_value_1 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Unmatched ROI</title>
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
            display: flex;
            flex-direction: column;
        }}
        header {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 12px;
            border-bottom: 3px solid #28a745;
        }}
        .logo {{
            max-width: 160px;
            height: auto;
        }}
        .header-tag {{
            font-size: 16px;
            color: #28a745;
            font-weight: bold;
            text-transform: uppercase;
        }}
        .value-hero {{
            background: linear-gradient(135deg, #28a745 0%, #20883a 100%);
            color: white;
            padding: 35px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 20px;
        }}
        .value-hero h1 {{
            font-size: 42px;
            margin-bottom: 12px;
            font-weight: 900;
        }}
        .value-hero p {{
            font-size: 16px;
            line-height: 1.5;
        }}
        .split-content {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 15px;
        }}
        .product-side {{
            display: flex;
            flex-direction: column;
            gap: 15px;
        }}
        .product-image {{
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }}
        .savings-highlight {{
            background: #fff3cd;
            border-left: 5px solid #ffc107;
            padding: 15px;
            border-radius: 6px;
        }}
        .savings-highlight h3 {{
            color: #856404;
            font-size: 16px;
            margin-bottom: 8px;
        }}
        .savings-highlight p {{
            font-size: 12px;
            color: #1a1a1a;
            line-height: 1.4;
        }}
        .roi-side {{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}
        .benefit-card {{
            background: #f8f9fa;
            border-left: 5px solid #28a745;
            padding: 15px;
            border-radius: 6px;
        }}
        .benefit-card h4 {{
            color: #28a745;
            font-size: 14px;
            margin-bottom: 6px;
            font-weight: bold;
        }}
        .benefit-card p {{
            font-size: 11px;
            line-height: 1.4;
        }}
        .cost-comparison {{
            background: #1a1a1a;
            color: white;
            padding: 20px;
            border-radius: 8px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }}
        .cost-column {{
            text-align: center;
        }}
        .cost-label {{
            font-size: 11px;
            color: #ccc;
            text-transform: uppercase;
            margin-bottom: 8px;
        }}
        .cost-amount {{
            font-size: 32px;
            font-weight: bold;
        }}
        .traditional {{
            color: #ff6b6b;
        }}
        .hydroloop {{
            color: #28a745;
        }}
        .divider {{
            width: 2px;
            background: #444;
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
            <div class="header-tag">Maximum Value</div>
        </header>

        <div class="value-hero">
            <h1>Reduce Operating Costs by 75-90%</h1>
            <p>HydroLoop System delivers unprecedented cost savings while improving water quality and reducing maintenance</p>
        </div>

        <div class="split-content">
            <div class="product-side">
                <img src="{product_data_uri}" alt="HydroLoop System" class="product-image">
                <div class="savings-highlight">
                    <h3>Installation Simplicity = Cost Savings</h3>
                    <p>One Cut Connection technology means minimal labor costs, quick installation, and immediate operational benefits.</p>
                </div>
            </div>

            <div class="roi-side">
                <div class="benefit-card">
                    <h4>💰 Chemical Cost Reduction</h4>
                    <p>75-90% reduction in chemical additives translates to profound cost efficiencies for all stakeholders.</p>
                </div>
                <div class="benefit-card">
                    <h4>🔧 Maintenance Savings</h4>
                    <p>User-maintainable design eliminates costly professional intervention. Quick Flush operates during pump runtime.</p>
                </div>
                <div class="benefit-card">
                    <h4>⚡ Operational Efficiency</h4>
                    <p>Intelligent flow management reduces energy consumption and extends equipment lifespan.</p>
                </div>
                <div class="benefit-card">
                    <h4>🛡️ Liability Reduction</h4>
                    <p>Eliminates dangerous chlorine and trichloramine gases, reducing health risks and insurance costs.</p>
                </div>
            </div>
        </div>

        <div class="cost-comparison">
            <div class="cost-column">
                <div class="cost-label">Traditional Methods</div>
                <div class="cost-amount traditional">$$$$$</div>
            </div>
            <div class="divider"></div>
            <div class="cost-column">
                <div class="cost-label">With HydroLoop</div>
                <div class="cost-amount hydroloop">$$</div>
            </div>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Value_Proposition/variant_1_value.html', html_value_1)

# ============================================================================
# AGENT 3: VALUE_PROPOSITION - Variant 2 (Business benefits, comprehensive)
# ============================================================================
html_value_2 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Business Case</title>
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
        }}
        header {{
            text-align: center;
            margin-bottom: 15px;
        }}
        .logo {{
            max-width: 140px;
            height: auto;
            margin-bottom: 8px;
        }}
        .header-title {{
            font-size: 24px;
            color: #0066cc;
            font-weight: bold;
            margin-bottom: 5px;
        }}
        .header-subtitle {{
            font-size: 14px;
            color: #666;
        }}
        .main-layout {{
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            gap: 15px;
        }}
        .left-content {{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}
        .value-section {{
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border-top: 4px solid #28a745;
        }}
        .value-section h2 {{
            color: #28a745;
            font-size: 16px;
            margin-bottom: 10px;
        }}
        .value-section ul {{
            list-style: none;
            padding: 0;
        }}
        .value-section li {{
            padding: 6px 0;
            font-size: 11px;
            line-height: 1.4;
            border-bottom: 1px solid #e0e0e0;
        }}
        .value-section li:last-child {{
            border-bottom: none;
        }}
        .value-section li:before {{
            content: "✓ ";
            color: #28a745;
            font-weight: bold;
            margin-right: 6px;
        }}
        .roi-grid {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }}
        .roi-box {{
            background: linear-gradient(135deg, #28a745, #20883a);
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }}
        .roi-number {{
            font-size: 28px;
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }}
        .roi-label {{
            font-size: 11px;
            text-transform: uppercase;
        }}
        .right-content {{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }}
        .product-showcase {{
            background: #1a1a1a;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }}
        .product-img {{
            width: 100%;
            height: auto;
            border-radius: 6px;
            margin-bottom: 10px;
        }}
        .product-badge {{
            background: #28a745;
            color: white;
            padding: 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
        }}
        .stakeholder-box {{
            background: #fff3cd;
            border: 2px solid #ffc107;
            padding: 12px;
            border-radius: 8px;
        }}
        .stakeholder-box h3 {{
            color: #856404;
            font-size: 13px;
            margin-bottom: 8px;
        }}
        .stakeholder-box p {{
            font-size: 10px;
            line-height: 1.4;
            color: #1a1a1a;
        }}
        .bottom-cta {{
            margin-top: 12px;
            background: #0066cc;
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }}
        .bottom-cta h3 {{
            font-size: 18px;
            margin-bottom: 6px;
        }}
        .bottom-cta p {{
            font-size: 11px;
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
            <div class="header-title">The Business Case for HydroLoop</div>
            <div class="header-subtitle">Transforming Costs into Competitive Advantage</div>
        </header>

        <div class="main-layout">
            <div class="left-content">
                <div class="value-section">
                    <h2>Cost Efficiencies for All Stakeholders</h2>
                    <ul>
                        <li><strong>75-90% Chemical Reduction:</strong> Dramatic decrease in ongoing chemical purchases</li>
                        <li><strong>Simplified Maintenance:</strong> User-level Quick Flush and Power Flush capabilities</li>
                        <li><strong>Labor Savings:</strong> Eliminate costly professional service calls</li>
                        <li><strong>One Cut Installation:</strong> Minimal installation labor and downtime</li>
                        <li><strong>Extended Equipment Life:</strong> Premium materials reduce replacement frequency</li>
                    </ul>
                </div>

                <div class="roi-grid">
                    <div class="roi-box">
                        <span class="roi-number">75-90%</span>
                        <span class="roi-label">Lower Chem Costs</span>
                    </div>
                    <div class="roi-box">
                        <span class="roi-number">$$$</span>
                        <span class="roi-label">Annual Savings</span>
                    </div>
                </div>

                <div class="value-section">
                    <h2>Operational Benefits</h2>
                    <ul>
                        <li><strong>Intelligent Flow Management:</strong> Prevents biological growth without heavy chemicals</li>
                        <li><strong>Pristine Water Quality:</strong> Enhanced customer experience and satisfaction</li>
                        <li><strong>Safety Improvements:</strong> Eliminates dangerous chlorine and trichloramine gases</li>
                        <li><strong>Reduced Liability:</strong> Lower health risks translate to insurance savings</li>
                        <li><strong>Environmental Leadership:</strong> Market differentiation through sustainability</li>
                    </ul>
                </div>
            </div>

            <div class="right-content">
                <div class="product-showcase">
                    <img src="{product_data_uri}" alt="HydroLoop System" class="product-img">
                    <div class="product-badge">Proven ROI</div>
                </div>

                <div class="stakeholder-box">
                    <h3>Pool Service Companies</h3>
                    <p>Reduce service time, lower chemical inventory costs, differentiate with cutting-edge technology</p>
                </div>

                <div class="stakeholder-box">
                    <h3>Facility Operators</h3>
                    <p>Minimize operational expenses, improve safety compliance, enhance guest experience</p>
                </div>

                <div class="stakeholder-box">
                    <h3>Residential Users</h3>
                    <p>Lower maintenance burden, reduce chemical exposure, enjoy pristine water quality</p>
                </div>
            </div>
        </div>

        <div class="bottom-cta">
            <h3>Investment That Pays for Itself</h3>
            <p>HydroLoop delivers measurable ROI through reduced operational costs, improved efficiency, and enhanced safety</p>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Value_Proposition/variant_2_value.html', html_value_2)

# ============================================================================
# AGENT 3: VALUE_PROPOSITION - Variant 3 (Balanced value messaging)
# ============================================================================
html_value_3 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Smart Investment</title>
    <style>
        @page {{ size: letter; margin: 0.5in; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: linear-gradient(to bottom, #f8f9fa 0%, white 100%);
            color: #1a1a1a;
        }}
        .page {{
            width: 100%;
            height: 100%;
            padding: 0.5in;
        }}
        .header-bar {{
            background: linear-gradient(90deg, #28a745, #20883a);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
        }}
        .logo {{
            max-width: 130px;
            height: auto;
            filter: brightness(0) invert(1);
        }}
        .header-text {{
            text-align: right;
        }}
        .header-text h1 {{
            font-size: 22px;
            margin-bottom: 4px;
        }}
        .header-text p {{
            font-size: 12px;
            opacity: 0.9;
        }}
        .hero-section {{
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            margin-bottom: 18px;
            display: grid;
            grid-template-columns: 1.2fr 1fr;
        }}
        .hero-content {{
            padding: 25px;
        }}
        .hero-content h2 {{
            color: #28a745;
            font-size: 28px;
            margin-bottom: 12px;
        }}
        .hero-content p {{
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 15px;
        }}
        .value-highlights {{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }}
        .highlight {{
            background: #f8f9fa;
            padding: 12px;
            border-radius: 6px;
            border-left: 4px solid #28a745;
        }}
        .highlight-number {{
            font-size: 24px;
            font-weight: bold;
            color: #28a745;
            display: block;
        }}
        .highlight-text {{
            font-size: 11px;
            color: #666;
        }}
        .hero-image-container {{
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
        }}
        .hero-image {{
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 6px;
        }}
        .features-grid {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 15px;
        }}
        .feature-card {{
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-align: center;
        }}
        .feature-icon {{
            font-size: 32px;
            margin-bottom: 8px;
        }}
        .feature-title {{
            font-size: 13px;
            font-weight: bold;
            color: #28a745;
            margin-bottom: 6px;
        }}
        .feature-desc {{
            font-size: 10px;
            line-height: 1.4;
            color: #666;
        }}
        .bottom-bar {{
            background: #1a1a1a;
            color: white;
            padding: 18px;
            border-radius: 8px;
            text-align: center;
        }}
        .bottom-bar h3 {{
            font-size: 20px;
            color: #28a745;
            margin-bottom: 8px;
        }}
        .bottom-bar p {{
            font-size: 12px;
            line-height: 1.5;
        }}
        @media print {{
            body {{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}
        }}
    </style>
</head>
<body>
    <div class="page">
        <div class="header-bar">
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
            <div class="header-text">
                <h1>HydroLoop System</h1>
                <p>Smart Technology. Smarter Investment.</p>
            </div>
        </div>

        <div class="hero-section">
            <div class="hero-content">
                <h2>Maximize Value, Minimize Costs</h2>
                <p>The HydroLoop System transforms pool and hot tub maintenance economics through controlled HydroDynamic Cavitation technology, delivering unprecedented cost savings while improving water quality.</p>

                <div class="value-highlights">
                    <div class="highlight">
                        <span class="highlight-number">75-90%</span>
                        <span class="highlight-text">Chemical Cost Reduction</span>
                    </div>
                    <div class="highlight">
                        <span class="highlight-number">Simple</span>
                        <span class="highlight-text">User Maintenance</span>
                    </div>
                    <div class="highlight">
                        <span class="highlight-number">One Cut</span>
                        <span class="highlight-text">Easy Installation</span>
                    </div>
                    <div class="highlight">
                        <span class="highlight-number">Years</span>
                        <span class="highlight-text">Extended Lifespan</span>
                    </div>
                </div>
            </div>
            <div class="hero-image-container">
                <img src="{product_data_uri}" alt="HydroLoop System" class="hero-image">
            </div>
        </div>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">💰</div>
                <div class="feature-title">Reduced Chemicals</div>
                <div class="feature-desc">75-90% reduction translates to immediate and ongoing cost savings</div>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <div class="feature-title">Lower Labor</div>
                <div class="feature-desc">User-maintainable design eliminates professional service costs</div>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🛡️</div>
                <div class="feature-title">Safety Savings</div>
                <div class="feature-desc">Eliminate dangerous gases, reduce liability and insurance costs</div>
            </div>
        </div>

        <div class="bottom-bar">
            <h3>The Definitive Prevention Solution</h3>
            <p>Engineered with Schedule 80 PVC, 316 stainless steel, and marine-grade cupronickel for unmatched durability and long-term value. The HydroLoop System delivers ROI through reduced operational costs, improved efficiency, and enhanced safety.</p>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Value_Proposition/variant_3_value.html', html_value_3)

print("\\n" + "="*60)
print("Agent_Value_Proposition: 3 variants completed!")
print("="*60)
