#!/usr/bin/env python3
import base64

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

logo_b64, product_b64 = get_base64_images()
logo_data_uri = f"data:image/png;base64,{logo_b64}"
product_data_uri = f"data:image/jpeg;base64,{product_b64}"

print("=" * 60)
print("GENERATING AGENT_VISUAL_IMPACT DESIGNS")
print("=" * 60)

# ============================================================================
# AGENT 2: VISUAL_IMPACT - Variant 1 (Bold graphics, minimal text)
# ============================================================================
html_visual_1 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Visual Impact</title>
    <style>
        @page {{ size: letter; margin: 0.5in; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Impact', 'Arial Black', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: #1a1a1a;
            color: white;
            position: relative;
        }}
        .page {{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }}
        .background-image {{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.3;
        }}
        .logo-top {{
            position: absolute;
            top: 0.3in;
            right: 0.3in;
            width: 140px;
            z-index: 10;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.8));
        }}
        .content-overlay {{
            position: relative;
            z-index: 5;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 1in;
        }}
        .mega-headline {{
            font-size: 72px;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 20px;
            text-shadow: 0 0 30px rgba(0,102,204,0.8), 0 0 60px rgba(0,102,204,0.6);
            color: #00aaff;
            letter-spacing: -2px;
        }}
        .sub-headline {{
            font-size: 32px;
            font-weight: bold;
            color: white;
            margin-bottom: 40px;
            text-shadow: 0 4px 12px rgba(0,0,0,0.9);
            text-transform: uppercase;
            letter-spacing: 3px;
        }}
        .impact-stat {{
            font-size: 120px;
            font-weight: 900;
            color: #00ff88;
            line-height: 1;
            margin: 30px 0;
            text-shadow: 0 0 40px rgba(0,255,136,0.6), 0 8px 20px rgba(0,0,0,0.9);
        }}
        .impact-label {{
            font-size: 28px;
            color: white;
            text-transform: uppercase;
            letter-spacing: 4px;
            text-shadow: 0 4px 12px rgba(0,0,0,0.9);
        }}
        .bottom-bar {{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, #0066cc 0%, #00aaff 100%);
            padding: 20px;
            text-align: center;
            z-index: 10;
        }}
        .bottom-bar h3 {{
            font-size: 18px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 3px;
        }}
        @media print {{
            body {{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}
        }}
    </style>
</head>
<body>
    <div class="page">
        <img src="{product_data_uri}" alt="Background" class="background-image">
        <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo-top">

        <div class="content-overlay">
            <div class="mega-headline">HYDROLOOP</div>
            <div class="sub-headline">The Future is Here</div>
            <div class="impact-stat">75-90%</div>
            <div class="impact-label">Less Chemicals</div>
        </div>

        <div class="bottom-bar">
            <h3>HydroDynamic Cavitation Technology</h3>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Visual_Impact/variant_1_visual.html', html_visual_1)

# ============================================================================
# AGENT 2: VISUAL_IMPACT - Variant 2 (Dynamic angular design)
# ============================================================================
html_visual_2 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Bold Design</title>
    <style>
        @page {{ size: letter; margin: 0.5in; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Arial Black', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: white;
            color: #1a1a1a;
        }}
        .page {{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }}
        .diagonal-split {{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0066cc 0%, #0066cc 60%, white 60%);
        }}
        .logo-container {{
            position: absolute;
            top: 0.3in;
            left: 0.3in;
            z-index: 20;
        }}
        .logo {{
            width: 160px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }}
        .product-image {{
            position: absolute;
            bottom: 0.3in;
            right: 0.3in;
            width: 45%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            border: 4px solid white;
            z-index: 15;
        }}
        .content-area {{
            position: absolute;
            top: 1.2in;
            left: 0.5in;
            width: 55%;
            z-index: 10;
        }}
        .main-title {{
            font-size: 54px;
            color: white;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 15px;
            text-transform: uppercase;
            text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }}
        .subtitle {{
            font-size: 18px;
            color: #00ff88;
            margin-bottom: 40px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
        }}
        .stat-box {{
            background: white;
            color: #0066cc;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }}
        .stat-number {{
            font-size: 48px;
            font-weight: 900;
            line-height: 1;
            display: block;
        }}
        .stat-text {{
            font-size: 14px;
            color: #1a1a1a;
            margin-top: 5px;
            font-weight: bold;
        }}
        .feature-strip {{
            position: absolute;
            bottom: 0.5in;
            left: 0.3in;
            width: 50%;
            background: #1a1a1a;
            color: white;
            padding: 15px;
            border-radius: 8px;
            z-index: 20;
        }}
        .feature-strip h4 {{
            font-size: 12px;
            margin-bottom: 8px;
            color: #00aaff;
            text-transform: uppercase;
        }}
        .feature-strip p {{
            font-size: 10px;
            line-height: 1.4;
            font-family: Arial, sans-serif;
        }}
        @media print {{
            body {{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}
        }}
    </style>
</head>
<body>
    <div class="page">
        <div class="diagonal-split"></div>

        <div class="logo-container">
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
        </div>

        <div class="content-area">
            <h1 class="main-title">HYDROLOOP SYSTEM</h1>
            <p class="subtitle">Cavitation Technology</p>

            <div class="stat-box">
                <span class="stat-number">75-90%</span>
                <span class="stat-text">CHEMICAL REDUCTION</span>
            </div>

            <div class="stat-box">
                <span class="stat-number">ONE CUT</span>
                <span class="stat-text">SIMPLE INSTALLATION</span>
            </div>

            <div class="stat-box">
                <span class="stat-number">ZERO</span>
                <span class="stat-text">HARMFUL GASES</span>
            </div>
        </div>

        <img src="{product_data_uri}" alt="HydroLoop System" class="product-image">

        <div class="feature-strip">
            <h4>Patented Innovation</h4>
            <p>Controlled HydroDynamic Cavitation delivers unparalleled water purification. Engineered with Schedule 80 PVC, 316 stainless steel, and marine-grade cupronickel.</p>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Visual_Impact/variant_2_visual.html', html_visual_2)

# ============================================================================
# AGENT 2: VISUAL_IMPACT - Variant 3 (High contrast, dramatic)
# ============================================================================
html_visual_3 = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HydroCav HydroLoop - Dramatic Impact</title>
    <style>
        @page {{ size: letter; margin: 0.5in; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Arial', sans-serif;
            width: 8.5in;
            height: 11in;
            margin: 0 auto;
            background: #000;
            color: white;
        }}
        .page {{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }}
        .top-bar {{
            background: linear-gradient(90deg, #00aaff, #0066cc);
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}
        .logo {{
            height: 50px;
            width: auto;
        }}
        .tagline {{
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
        }}
        .hero-product {{
            flex: 1;
            position: relative;
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }}
        .product-img {{
            max-width: 85%;
            max-height: 85%;
            object-fit: contain;
            filter: drop-shadow(0 0 50px rgba(0,170,255,0.6));
        }}
        .side-badge {{
            position: absolute;
            left: -40px;
            top: 50%;
            transform: translateY(-50%) rotate(-90deg);
            background: #00ff88;
            color: #1a1a1a;
            padding: 15px 60px;
            font-size: 22px;
            font-weight: 900;
            letter-spacing: 3px;
            text-transform: uppercase;
        }}
        .metrics-bar {{
            background: #0066cc;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1px;
        }}
        .metric {{
            background: #004999;
            padding: 20px;
            text-align: center;
        }}
        .metric-value {{
            font-size: 32px;
            font-weight: 900;
            color: #00ff88;
            display: block;
            line-height: 1;
            margin-bottom: 8px;
        }}
        .metric-label {{
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: white;
        }}
        .bottom-impact {{
            background: #1a1a1a;
            padding: 25px;
            text-align: center;
            border-top: 4px solid #00aaff;
        }}
        .impact-title {{
            font-size: 28px;
            font-weight: 900;
            color: #00aaff;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }}
        .impact-desc {{
            font-size: 13px;
            line-height: 1.5;
            max-width: 80%;
            margin: 0 auto;
            color: #ccc;
        }}
        @media print {{
            body {{ print-color-adjust: exact; -webkit-print-color-adjust: exact; }}
        }}
    </style>
</head>
<body>
    <div class="page">
        <div class="top-bar">
            <img src="{logo_data_uri}" alt="HydroCav Logo" class="logo">
            <div class="tagline">HydroLoop System</div>
        </div>

        <div class="hero-product">
            <div class="side-badge">PATENTED</div>
            <img src="{product_data_uri}" alt="HydroLoop Product" class="product-img">
        </div>

        <div class="metrics-bar">
            <div class="metric">
                <span class="metric-value">75-90%</span>
                <span class="metric-label">Chemical Reduction</span>
            </div>
            <div class="metric">
                <span class="metric-value">100%</span>
                <span class="metric-label">Chemical-Free</span>
            </div>
            <div class="metric">
                <span class="metric-value">ZERO</span>
                <span class="metric-label">Harmful Gases</span>
            </div>
            <div class="metric">
                <span class="metric-value">ONE</span>
                <span class="metric-label">Cut Install</span>
            </div>
        </div>

        <div class="bottom-impact">
            <h2 class="impact-title">HydroDynamic Cavitation Revolution</h2>
            <p class="impact-desc">Engineered with Schedule 80 PVC, 316 stainless steel, and marine-grade 90/10 cupronickel. The world's first genuinely chemical-free saltwater pool experience through controlled cavitation technology.</p>
        </div>
    </div>
</body>
</html>"""

save_html('/home/user/HydroCav-Onepager/trade-show-designs/Agent_Visual_Impact/variant_3_visual.html', html_visual_3)

print("\\n" + "="*60)
print("Agent_Visual_Impact: 3 variants completed!")
print("="*60)
