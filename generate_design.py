#!/usr/bin/env python3
import base64
import sys

def get_base64_images():
    """Load and return base64 encoded images."""
    with open('/home/user/HydroCav-Onepager/images/HydroCav_Logo.PNG', 'rb') as f:
        logo_base64 = base64.b64encode(f.read()).decode('utf-8')

    with open('/home/user/HydroCav-Onepager/images/HydroLoop.jpg', 'rb') as f:
        product_base64 = base64.b64encode(f.read()).decode('utf-8')

    return logo_base64, product_base64

def save_html(filepath, html_content):
    """Save HTML content to file."""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Generated: {filepath}")

if __name__ == "__main__":
    logo_b64, product_b64 = get_base64_images()
    print(f"Logo base64 length: {len(logo_b64)}")
    print(f"Product base64 length: {len(product_b64)}")
    print("Images loaded successfully!")
