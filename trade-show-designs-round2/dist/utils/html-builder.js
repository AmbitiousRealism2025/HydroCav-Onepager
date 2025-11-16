/**
 * HTML building utilities for generating print-ready documents
 */
/**
 * Generate base HTML structure with print-optimized styles
 */
export function createHTMLDocument(title, bodyContent, additionalStyles = '') {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHTML(title)}</title>
  <style>
    /* Print-optimized base styles */
    @page {
      size: letter;
      margin: 0.5in;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      background: white;
      width: 8.5in;
      min-height: 11in;
      margin: 0 auto;
      padding: 0.5in;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 0.5em;
    }

    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.5rem; }

    p {
      margin-bottom: 1em;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /* Print-specific styles */
    @media print {
      body {
        width: 100%;
        margin: 0;
        padding: 0.5in;
      }

      * {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }

    ${additionalStyles}
  </style>
</head>
<body>
${bodyContent}
</body>
</html>`;
}
/**
 * Escape HTML special characters
 */
export function escapeHTML(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char] || char);
}
/**
 * Generate a gradient background style
 */
export function createGradient(color1, color2, angle = 135) {
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}
/**
 * Create a logo header section
 */
export function createLogoHeader(logoBase64, position = 'left', maxWidth = '200px') {
    const alignment = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
    };
    return `
  <div class="logo-header" style="
    display: flex;
    justify-content: ${alignment[position]};
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e0e0e0;
  ">
    <img src="${logoBase64}" alt="HydroCav Logo" style="max-width: ${maxWidth}; height: auto;" />
  </div>`;
}
/**
 * Create a section with title and content
 */
export function createSection(title, content, className = 'section') {
    return `
  <section class="${className}" style="margin-bottom: 2rem;">
    <h2 style="color: #0066cc; margin-bottom: 1rem;">${escapeHTML(title)}</h2>
    <div class="section-content">
      ${content}
    </div>
  </section>`;
}
/**
 * Create a grid layout container
 */
export function createGridLayout(columns, gap = '1.5rem') {
    return `
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: ${gap};
  `;
}
/**
 * Save HTML to file
 */
import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { mkdirSync } from 'fs';
export function saveHTMLFile(filePath, content) {
    try {
        // Ensure directory exists
        mkdirSync(dirname(filePath), { recursive: true });
        // Write file
        writeFileSync(filePath, content, 'utf-8');
        console.log(`✓ Generated: ${filePath}`);
    }
    catch (error) {
        console.error(`Error saving HTML file ${filePath}:`, error);
        throw new Error(`Failed to save HTML file: ${filePath}`);
    }
}
//# sourceMappingURL=html-builder.js.map