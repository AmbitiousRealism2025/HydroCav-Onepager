# Trade Show Single-Page Design Generator - Multi-Agent Orchestration

## Mission
Deploy 5 specialized design agents to create trade show promotional materials. Each agent will produce 3 distinct HTML variations of a single-page document optimized for 8.5"x11" print/PDF export.

## Context
- A company file exists in the project directory containing all necessary company information
- An `/images/` folder contains two required assets:
  - **HydroCav logo** - MUST be placed at the top of each page
  - **Product image** - MUST be integrated strategically into each design
- The company (HydroCav) is participating in a trade show as an invitee of their product manufacturer
- All designs must be print-ready, single-file HTML documents
- Final output: 15 total designs (5 agents × 3 variations each)

## Agent Roles & Design Approaches

Create 5 agents with distinct strategic perspectives:

1. **Agent_Technical_Focus**: Emphasize product specifications, technical benefits, and engineering excellence
2. **Agent_Visual_Impact**: Prioritize bold graphics, visual hierarchy, and eye-catching design
3. **Agent_Value_Proposition**: Focus on ROI, cost savings, and business benefits
4. **Agent_Sustainability_ESG**: Highlight environmental benefits, sustainability metrics, and ESG alignment
5. **Agent_Customer_Success**: Feature testimonials, case studies, and real-world applications

## Technical Requirements

Each HTML file must include:
- Complete CSS in `<style>` tags (no external stylesheets)
- **Embedded images as Base64 data URIs** (convert both logo and product image to Base64 for self-contained files)
- Page size: 8.5" × 11" (letter size)
- Print-optimized CSS with `@media print` rules
- `@page { size: letter; margin: 0.5in; }`
- Web-safe fonts or embedded Google Fonts
- High-contrast, print-friendly color schemes
- No JavaScript dependencies (unless for print-specific functionality)

## Required Visual Elements

### HydroCav Logo
- **Placement**: Top of the page (required on all designs)
- **Positioning options**:
  - Top-left corner
  - Top-center (header)
  - Top-right corner
- Ensure appropriate sizing for print clarity
- Maintain aspect ratio and brand integrity

### Product Image
- **Integration**: Must be incorporated strategically into each design
- **Placement flexibility** - agents should choose based on their strategic approach:
  - Hero image (large, prominent)
  - Side panel feature
  - Background element with overlay text
  - Multiple smaller product shots
  - Integrated with technical diagrams
  - Before/after or comparison layout
- Optimize image sizing for print quality (minimum 300 DPI equivalent)
- Consider text wrapping and visual balance

## File Structure

Create the following directory structure:
```
/trade-show-designs/
├── Agent_Technical_Focus/
│   ├── variant_1_technical.html
│   ├── variant_2_technical.html
│   └── variant_3_technical.html
├── Agent_Visual_Impact/
│   ├── variant_1_visual.html
│   ├── variant_2_visual.html
│   └── variant_3_visual.html
├── Agent_Value_Proposition/
│   ├── variant_1_value.html
│   ├── variant_2_value.html
│   └── variant_3_value.html
├── Agent_Sustainability_ESG/
│   ├── variant_1_sustainability.html
│   ├── variant_2_sustainability.html
│   └── variant_3_sustainability.html
└── Agent_Customer_Success/
    ├── variant_1_customer.html
    ├── variant_2_customer.html
    └── variant_3_customer.html
```

## Agent Instructions

For each agent:
1. Read and analyze the company information file in the project directory
2. **Load both images from the `/images/` folder and convert to Base64**
3. Understand the trade show context (manufacturer partnership, target audience)
4. Create 3 distinct variations following your assigned strategic approach
5. Ensure each variation differs in:
   - Layout structure (especially product image placement)
   - Content emphasis
   - Visual hierarchy
   - Logo positioning (top area)
   - Color scheme (while maintaining brand consistency)

## Design Variation Guidelines

Each agent's 3 variants should explore different approaches:
- **Variant 1**: Bold, minimal, high-impact single message (large product image)
- **Variant 2**: Information-rich, structured, comprehensive (product image supports technical content)
- **Variant 3**: Balanced approach with visual + textual elements (creative product image integration)

## Image Integration Examples by Agent Type

**Agent_Technical_Focus**: Product image with callouts, technical diagrams, or specification overlays

**Agent_Visual_Impact**: Large hero product image, dramatic angles, high contrast with minimal text

**Agent_Value_Proposition**: Product image showing before/after, cost comparison visuals, or ROI graphics

**Agent_Sustainability_ESG**: Product image with environmental icons, green theming, nature backgrounds

**Agent_Customer_Success**: Product image in real-world application, installation photos, or usage scenarios

## Quality Checklist

Each HTML file must:
- [ ] Be completely self-contained (single file with Base64 images)
- [ ] Include HydroCav logo at the top of the page
- [ ] Integrate product image strategically into the layout
- [ ] Display correctly in browser at 8.5"×11" dimensions
- [ ] Print cleanly without cut-off content or image degradation
- [ ] Include proper meta tags and page title
- [ ] Use print-safe colors (avoid pure black #000, use #1a1a1a)
- [ ] Have proper margins and padding for print
- [ ] Maintain image quality suitable for professional printing
- [ ] Be visually distinct from other variants

## Execution Steps

1. **Verify assets**: Confirm location of company information file and `/images/` folder
2. **Prepare images**: Load logo and product image, convert to Base64 for embedding
3. Create the `/trade-show-designs/` root directory
4. Initialize 5 agent directories with appropriate names
5. For each agent sequentially:
   - Load and parse the company information file
   - Generate 3 HTML variants following the agent's strategic approach
   - Embed both images as Base64 data URIs in each HTML file
   - Ensure logo is positioned at page top
   - Integrate product image per the agent's design strategy
   - Save each variant to the agent's folder with descriptive filenames
   - Validate HTML structure, print compatibility, and image rendering
6. Create an `index.html` in the root directory listing all 15 designs with preview thumbnails
7. Generate a `README.md` documenting each agent's approach, variant characteristics, and image usage strategies

## Success Criteria

- All 15 HTML files are complete, valid, and print-ready
- Each file is self-contained with embedded Base64 images
- HydroCav logo appears at the top of every design
- Product image is strategically integrated in all designs
- Designs reflect distinct strategic approaches per agent
- Files are properly organized in named folders
- All designs incorporate information from the company file
- Images maintain print quality and visual impact
- Documents are optimized for trade show audience engagement

Begin execution by confirming the company information file location and the `/images/` folder contents, then proceed with agent deployment.
