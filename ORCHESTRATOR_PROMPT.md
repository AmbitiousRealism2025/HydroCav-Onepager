# Trade Show Single-Page Design Generator - Multi-Agent Orchestration (Round 2: TypeScript Edition)

## Mission
Deploy 5 specialized design agents to create trade show promotional materials using **TypeScript and modern web frameworks** for superior visual quality. Each agent will produce 3 distinct HTML variations of a single-page document optimized for 8.5"x11" print/PDF export.

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

### Technology Stack
- **TypeScript** for type-safe code generation and build process
- **Modern CSS Frameworks** for enhanced visual quality:
  - Tailwind CSS (utility-first styling)
  - CSS Grid and Flexbox for advanced layouts
  - CSS Custom Properties for dynamic theming
- **Build Tools**: Use Vite, Bun, or similar modern bundler for optimal output
- **Animation Libraries** (optional): Framer Motion, GSAP, or CSS animations for subtle visual enhancements

### HTML Output Requirements
Each HTML file must include:
- Complete CSS in `<style>` tags (compiled from Tailwind/modern CSS)
- **Embedded images as Base64 data URIs** (convert both logo and product image to Base64 for self-contained files)
- Page size: 8.5" × 11" (letter size)
- Print-optimized CSS with `@media print` rules
- `@page { size: letter; margin: 0.5in; }`
- Modern typography using Google Fonts or system font stacks
- High-contrast, print-friendly color schemes with gradient support
- Advanced layout techniques (CSS Grid, multi-column, flexbox)
- Subtle animations or transitions (that don't interfere with print)

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
/trade-show-designs-round2/
├── src/
│   ├── generators/
│   │   ├── technical-focus.ts
│   │   ├── visual-impact.ts
│   │   ├── value-proposition.ts
│   │   ├── sustainability-esg.ts
│   │   └── customer-success.ts
│   ├── utils/
│   │   ├── image-encoder.ts
│   │   └── html-builder.ts
│   ├── types/
│   │   └── design.types.ts
│   └── main.ts
├── output/
│   ├── Agent_Technical_Focus/
│   │   ├── variant_1_technical.html
│   │   ├── variant_2_technical.html
│   │   └── variant_3_technical.html
│   ├── Agent_Visual_Impact/
│   │   ├── variant_1_visual.html
│   │   ├── variant_2_visual.html
│   │   └── variant_3_visual.html
│   ├── Agent_Value_Proposition/
│   │   ├── variant_1_value.html
│   │   ├── variant_2_value.html
│   │   └── variant_3_value.html
│   ├── Agent_Sustainability_ESG/
│   │   ├── variant_1_sustainability.html
│   │   ├── variant_2_sustainability.html
│   │   └── variant_3_sustainability.html
│   └── Agent_Customer_Success/
│       ├── variant_1_customer.html
│       ├── variant_2_customer.html
│       └── variant_3_customer.html
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## TypeScript Implementation Guidelines

### Project Setup
1. Initialize with `npm init` or `bun init`
2. Install dependencies:
   ```bash
   npm install -D typescript @types/node
   npm install -D tailwindcss postcss autoprefixer
   npm install -D vite (or bun for faster builds)
   ```
3. Configure `tsconfig.json` with strict mode
4. Setup Tailwind CSS configuration

### Generator Architecture
Each agent should be implemented as a TypeScript module that:
- Exports a function returning HTML string with embedded styles
- Uses TypeScript interfaces for design configuration
- Leverages Tailwind utility classes compiled to inline CSS
- Implements type-safe image encoding utilities
- Generates self-contained HTML files

### Code Quality Requirements
- Strong typing with TypeScript interfaces/types
- Modular, reusable utility functions
- Clean separation of concerns (generators vs. utilities)
- Comprehensive inline documentation

## Agent Instructions

For each agent (implemented as TypeScript module):
1. Read and analyze the company information file in the project directory
2. **Load both images from the `/images/` folder and convert to Base64** using TypeScript utilities
3. Understand the trade show context (manufacturer partnership, target audience)
4. Create 3 distinct variations following your assigned strategic approach
5. Ensure each variation differs in:
   - Layout structure (especially product image placement)
   - Content emphasis
   - Visual hierarchy
   - Logo positioning (top area)
   - Color scheme and gradient usage (while maintaining brand consistency)
   - Typography choices and font pairings

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

### TypeScript Code Quality
- [ ] All TypeScript files pass type checking (`tsc --noEmit`)
- [ ] Proper interfaces/types defined for all data structures
- [ ] No `any` types without explicit justification
- [ ] Modular architecture with clear separation of concerns
- [ ] Reusable utility functions properly typed and documented

### HTML Output Quality
Each HTML file must:
- [ ] Be completely self-contained (single file with Base64 images and compiled CSS)
- [ ] Include HydroCav logo at the top of the page
- [ ] Integrate product image strategically into the layout
- [ ] Display correctly in browser at 8.5"×11" dimensions
- [ ] Print cleanly without cut-off content or image degradation
- [ ] Include proper meta tags and page title
- [ ] Use modern CSS techniques (Grid, Flexbox, custom properties)
- [ ] Use print-safe colors (avoid pure black #000, use #1a1a1a)
- [ ] Implement gradients and modern visual effects tastefully
- [ ] Have proper margins and padding for print
- [ ] Maintain image quality suitable for professional printing
- [ ] Be visually distinct from other variants with superior aesthetics
- [ ] Use professional typography with proper font hierarchies

## Execution Steps

### Phase 1: Project Initialization
1. **Verify assets**: Confirm location of company information file and `/images/` folder
2. **Setup TypeScript project**:
   - Create `/trade-show-designs-round2/` directory
   - Initialize `package.json` with build scripts
   - Configure `tsconfig.json` with strict settings
   - Setup Tailwind CSS with `tailwind.config.ts`
   - Install all required dependencies

### Phase 2: Build Core Infrastructure
3. **Create utility modules** in TypeScript:
   - `image-encoder.ts` - Base64 conversion with type safety
   - `html-builder.ts` - HTML template generation utilities
   - `design.types.ts` - Shared TypeScript interfaces
4. **Setup build pipeline**: Configure Vite/Bun for TypeScript compilation

### Phase 3: Agent Implementation
5. For each agent (as TypeScript module in `/src/generators/`):
   - Implement typed generator function
   - Load and parse the company information file
   - Generate 3 HTML variants following the agent's strategic approach
   - Use Tailwind utilities compiled to inline CSS
   - Embed both images as Base64 data URIs in each HTML file
   - Ensure logo is positioned at page top
   - Integrate product image per the agent's design strategy
   - Apply modern CSS techniques (gradients, Grid, custom properties)
   - Save each variant to the `/output/` folder with descriptive filenames
   - Validate TypeScript compilation and HTML structure

### Phase 4: Build & Validation
6. **Run build process**: Execute TypeScript compilation and generate all 15 HTML files
7. **Validate output**: Check type safety, print compatibility, and visual quality
8. Create an `index.html` in the output directory with interactive preview gallery
9. Generate a `README.md` documenting implementation approach and usage

## Success Criteria

### Technical Excellence
- TypeScript codebase passes strict type checking with no errors
- Clean, modular architecture with reusable utilities
- Proper separation of concerns (generators, utils, types)
- Build process executes successfully
- All dependencies properly configured

### Visual Quality
- All 15 HTML files are complete, valid, and print-ready
- Each file is self-contained with embedded Base64 images and compiled CSS
- Superior visual aesthetics using modern CSS techniques
- Professional typography with proper font hierarchies
- Tasteful use of gradients, shadows, and visual effects
- HydroCav logo appears at the top of every design
- Product image is strategically integrated in all designs
- Advanced layouts using CSS Grid and Flexbox
- Responsive design principles applied appropriately

### Content & Strategy
- Designs reflect distinct strategic approaches per agent
- Files are properly organized in named folders
- All designs incorporate information from the company file
- Images maintain print quality and visual impact
- Documents are optimized for trade show audience engagement
- Each variant is visually and strategically distinct

## Getting Started

Begin execution by:
1. Confirming the company information file location and the `/images/` folder contents
2. Setting up the TypeScript project structure in `/trade-show-designs-round2/`
3. Installing dependencies and configuring build tools
4. Proceeding with agent implementation using TypeScript modules
