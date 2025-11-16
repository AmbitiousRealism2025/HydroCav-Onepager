# Agent Prompt - Trade Show Design Generator

## Overview
This folder contains the orchestrator prompt for deploying 5 design agents to create HydroCav trade show materials.

## Contents
- `ORCHESTRATOR_PROMPT.md` - Main prompt for Claude Code cloud agent

## How to Use

### Prerequisites
1. Ensure you have a company information file in your project directory
2. Ensure you have an `/images/` folder with:
   - HydroCav logo
   - Product image

### Deployment Steps

1. **Copy this folder to your project directory**
   ```
   your-project/
   ├── Agent_Prompt/           ← This folder
   ├── images/                 ← Your images folder
   │   ├── hydrocav-logo.png   (or similar)
   │   └── product-image.png   (or similar)
   └── company-info.md         (or similar)
   ```

2. **Launch Claude Code cloud agent**
   ```bash
   claude-code cloud
   ```

3. **Provide the prompt**
   You can either:
   - Copy and paste the entire content of `ORCHESTRATOR_PROMPT.md` into the chat
   - Reference the file: "Read and execute the prompt in Agent_Prompt/ORCHESTRATOR_PROMPT.md"

4. **Monitor execution**
   The orchestrator will:
   - Create 5 agent directories
   - Generate 15 HTML designs total
   - Place files in `/trade-show-designs/` folder

### Expected Output

```
trade-show-designs/
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
├── Agent_Customer_Success/
│   ├── variant_1_customer.html
│   ├── variant_2_customer.html
│   └── variant_3_customer.html
├── index.html
└── README.md
```

## Agent Descriptions

1. **Agent_Technical_Focus** - Technical specifications and engineering excellence
2. **Agent_Visual_Impact** - Bold graphics and eye-catching design
3. **Agent_Value_Proposition** - ROI and business benefits focus
4. **Agent_Sustainability_ESG** - Environmental benefits and sustainability
5. **Agent_Customer_Success** - Testimonials and real-world applications

## Customization

To modify agent roles or design approaches, edit the "Agent Roles & Design Approaches" section in `ORCHESTRATOR_PROMPT.md`.

## Troubleshooting

- **Images not found**: Verify the `/images/` folder path and file names
- **Company info missing**: Ensure company information file exists in project root
- **Print quality issues**: Check that images are high resolution (300 DPI minimum)

## Support

For issues with Claude Code cloud agent, visit: https://docs.claude.com/en/docs/claude-code
