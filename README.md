# Agent Prompt - Trade Show Design Generator

## Overview
This repository contains the orchestrator prompt for deploying 5 design agents to create HydroCav trade show materials using **TypeScript and modern web frameworks** for superior visual quality.

## Versions

### Round 1 (Python)
- Located in `/trade-show-designs/`
- Python-based generators
- Basic HTML/CSS output

### Round 2 (TypeScript) - Current
- Located in `/trade-show-designs-round2/`
- TypeScript with modern frameworks (Tailwind CSS, Vite/Bun)
- Advanced CSS techniques (Grid, Flexbox, gradients)
- Type-safe code generation
- Superior visual aesthetics

## Contents
- `ORCHESTRATOR_PROMPT.md` - Main prompt for Claude Code (TypeScript version)
- `images/` - Logo and product images
- Company documentation file

## How to Use

### Prerequisites
1. Node.js (v18+) or Bun runtime installed
2. Company information file in your project directory
3. `/images/` folder with:
   - HydroCav logo
   - Product image

### Deployment Steps

1. **Ensure prerequisites are met**
   ```
   your-project/
   ├── images/                 ← Your images folder
   │   ├── HydroCav_Logo.PNG
   │   └── HydroLoop.jpg
   ├── company-info.md         ← Company documentation
   └── ORCHESTRATOR_PROMPT.md  ← This prompt
   ```

2. **Launch Claude Code**
   ```bash
   # Local CLI
   claude

   # Or cloud agent
   claude-code cloud
   ```

3. **Provide the prompt**
   You can either:
   - Copy and paste the entire content of `ORCHESTRATOR_PROMPT.md` into the chat
   - Reference the file: "Read and execute ORCHESTRATOR_PROMPT.md"

4. **Monitor execution**
   The orchestrator will:
   - Setup TypeScript project in `/trade-show-designs-round2/`
   - Install dependencies (Tailwind, TypeScript, Vite/Bun)
   - Create 5 TypeScript generator modules
   - Generate 15 HTML designs with modern styling
   - Place output files in `/trade-show-designs-round2/output/`

### Expected Output

```
trade-show-designs-round2/
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
│   ├── Agent_Customer_Success/
│   │   ├── variant_1_customer.html
│   │   ├── variant_2_customer.html
│   │   └── variant_3_customer.html
│   ├── index.html
│   └── README.md
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Agent Descriptions

1. **Agent_Technical_Focus** - Technical specifications and engineering excellence
2. **Agent_Visual_Impact** - Bold graphics and eye-catching design
3. **Agent_Value_Proposition** - ROI and business benefits focus
4. **Agent_Sustainability_ESG** - Environmental benefits and sustainability
5. **Agent_Customer_Success** - Testimonials and real-world applications

## Build & Run Commands

After the TypeScript project is generated:

```bash
cd trade-show-designs-round2

# Install dependencies
npm install
# or with Bun
bun install

# Generate all designs
npm run generate
# or
bun run generate

# Type check
npm run typecheck
# or
bun run typecheck
```

## Customization

To modify agent roles or design approaches, edit the "Agent Roles & Design Approaches" section in `ORCHESTRATOR_PROMPT.md`.

## Key Differences: Round 1 vs Round 2

| Aspect | Round 1 (Python) | Round 2 (TypeScript) |
|--------|------------------|---------------------|
| Language | Python | TypeScript |
| Styling | Basic CSS | Tailwind CSS + modern techniques |
| Type Safety | None | Full TypeScript types |
| Build Tool | None | Vite/Bun |
| Layout | Basic | CSS Grid, Flexbox, advanced |
| Visual Quality | Standard | Superior (gradients, effects) |
| Code Structure | Scripts | Modular architecture |

## Troubleshooting

- **TypeScript errors**: Run `npm run typecheck` to identify type issues
- **Dependencies not installed**: Run `npm install` or `bun install`
- **Images not found**: Verify the `/images/` folder path and file names
- **Company info missing**: Ensure company information file exists in project root
- **Print quality issues**: Check that images are high resolution (300 DPI minimum)
- **Build failures**: Check Node.js version (v18+ required)

## Support

For issues with Claude Code, visit: https://docs.claude.com/en/docs/claude-code
