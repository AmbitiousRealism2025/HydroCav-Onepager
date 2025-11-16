/**
 * HTML building utilities for generating print-ready documents
 */
/**
 * Generate base HTML structure with print-optimized styles
 */
export declare function createHTMLDocument(title: string, bodyContent: string, additionalStyles?: string): string;
/**
 * Escape HTML special characters
 */
export declare function escapeHTML(text: string): string;
/**
 * Generate a gradient background style
 */
export declare function createGradient(color1: string, color2: string, angle?: number): string;
/**
 * Create a logo header section
 */
export declare function createLogoHeader(logoBase64: string, position?: 'left' | 'center' | 'right', maxWidth?: string): string;
/**
 * Create a section with title and content
 */
export declare function createSection(title: string, content: string, className?: string): string;
/**
 * Create a grid layout container
 */
export declare function createGridLayout(columns: number, gap?: string): string;
export declare function saveHTMLFile(filePath: string, content: string): void;
//# sourceMappingURL=html-builder.d.ts.map