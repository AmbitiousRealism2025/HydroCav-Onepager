# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository contains marketing documentation and an orchestrator system for generating trade show promotional materials for HydroCav's HydroLoop pool and hot tub sanitation system.

## Key Components

### Documentation Files
- **HydroCav_ The Complete Solution for Revolutionizing Pool & Hot Tub Sanitation with the HydroLoop System.md** - Complete product documentation including features, benefits, technical specifications, and market positioning
- **README.md** - Instructions for using the orchestrator prompt system
- **ORCHESTRATOR_PROMPT.md** - Multi-agent orchestration prompt for generating 15 HTML trade show designs

### Asset Management
- **images/** directory contains:
  - `HydroCav_Logo.PNG` (275KB) - Company logo, must be placed at top of all generated designs
  - `HydroLoop.jpg` (358KB) - Product image for strategic integration into designs

## Orchestrator System Architecture

The ORCHESTRATOR_PROMPT.md defines a multi-agent system that deploys 5 specialized design agents, each creating 3 HTML variations (15 total designs):

1. **Agent_Technical_Focus** - Technical specifications and engineering excellence
2. **Agent_Visual_Impact** - Bold graphics and eye-catching design
3. **Agent_Value_Proposition** - ROI and business benefits
4. **Agent_Sustainability_ESG** - Environmental benefits and sustainability
5. **Agent_Customer_Success** - Testimonials and real-world applications

### Generated Output Structure
When executed, the orchestrator creates:
```
trade-show-designs/
├── Agent_Technical_Focus/
├── Agent_Visual_Impact/
├── Agent_Value_Proposition/
├── Agent_Sustainability_ESG/
├── Agent_Customer_Success/
├── index.html
└── README.md
```

Each agent folder contains 3 HTML variants with distinct layouts, content emphasis, and visual hierarchy.

## Technical Requirements for Generated HTML

All generated HTML files must be:
- **Self-contained** - Complete CSS in `<style>` tags, images embedded as Base64 data URIs
- **Print-optimized** - 8.5"×11" letter size with `@page { size: letter; margin: 0.5in; }`
- **Single-file** - No external dependencies (except optional Google Fonts)
- **Print-ready** - 300 DPI equivalent image quality, print-safe colors (#1a1a1a instead of #000)

### Required Visual Elements in Generated Designs
- **HydroCav Logo** - Must appear at top of page (top-left, top-center, or top-right)
- **Product Image** - Must be strategically integrated per agent's approach (hero image, side panel, background overlay, technical diagram, etc.)

## Image Handling

When generating designs:
1. Load both images from `/images/` directory
2. Convert to Base64 data URIs for embedding
3. Maintain print quality (minimum 300 DPI equivalent)
4. Logo: ensure appropriate sizing and brand integrity
5. Product image: optimize placement based on agent's strategic focus

## Executing the Orchestrator

To generate trade show materials:
1. Verify `/images/` folder contains both required assets
2. Reference the company information in the main documentation file
3. Execute ORCHESTRATOR_PROMPT.md instructions
4. Create `/trade-show-designs/` directory structure
5. Generate 15 HTML variants with embedded Base64 images
6. Validate print compatibility and image quality

## Design Variation Strategy

Each agent produces 3 variants following this pattern:
- **Variant 1**: Bold, minimal, high-impact (large product image)
- **Variant 2**: Information-rich, structured, comprehensive (product supports technical content)
- **Variant 3**: Balanced visual + textual elements (creative product integration)
