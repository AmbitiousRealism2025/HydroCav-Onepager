/**
 * Main orchestrator for HydroLoop trade show design generation
 */

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { loadImages } from './utils/image-encoder.js';
import { saveHTMLFile } from './utils/html-builder.js';
import { generateTechnicalFocus } from './generators/technical-focus.js';
import { generateVisualImpact } from './generators/visual-impact.js';
import { generateValueProposition } from './generators/value-proposition.js';
import { generateSustainabilityESG } from './generators/sustainability-esg.js';
import { generateCustomerSuccess } from './generators/customer-success.js';

// Get directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const imagesDir = join(projectRoot, '..', 'images');
const outputDir = join(projectRoot, 'output');

interface AgentConfig {
  name: string;
  folderName: string;
  generator: (assets: any, variant: number) => string;
}

const agents: AgentConfig[] = [
  {
    name: 'Technical Focus',
    folderName: 'Agent_Technical_Focus',
    generator: generateTechnicalFocus,
  },
  {
    name: 'Visual Impact',
    folderName: 'Agent_Visual_Impact',
    generator: generateVisualImpact,
  },
  {
    name: 'Value Proposition',
    folderName: 'Agent_Value_Proposition',
    generator: generateValueProposition,
  },
  {
    name: 'Sustainability ESG',
    folderName: 'Agent_Sustainability_ESG',
    generator: generateSustainabilityESG,
  },
  {
    name: 'Customer Success',
    folderName: 'Agent_Customer_Success',
    generator: generateCustomerSuccess,
  },
];

async function main() {
  console.log('🚀 HydroLoop Trade Show Design Generator');
  console.log('========================================\n');

  // Load images
  console.log('📸 Loading images...');
  let assets;
  try {
    assets = loadImages(imagesDir);
    console.log('✓ Images loaded successfully\n');
  } catch (error) {
    console.error('❌ Error loading images:', error);
    process.exit(1);
  }

  // Generate designs for each agent
  let totalGenerated = 0;
  for (const agent of agents) {
    console.log(`\n🎨 Generating designs for: ${agent.name}`);
    console.log('─'.repeat(50));

    for (let variant = 1; variant <= 3; variant++) {
      try {
        // Generate HTML
        const html = agent.generator(assets, variant);

        // Determine filename
        const filename = `variant_${variant}_${agent.folderName.toLowerCase().replace('agent_', '').replace('_', '-')}.html`;
        const filePath = join(outputDir, agent.folderName, filename);

        // Save file
        saveHTMLFile(filePath, html);
        totalGenerated++;
      } catch (error) {
        console.error(`❌ Error generating ${agent.name} variant ${variant}:`, error);
      }
    }
  }

  console.log('\n========================================');
  console.log(`✓ Generation complete! ${totalGenerated} HTML files created.`);
  console.log(`📁 Output directory: ${outputDir}\n`);
}

// Run the generator
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
