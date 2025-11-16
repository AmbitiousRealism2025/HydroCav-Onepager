/**
 * Type definitions for trade show design generation
 */

export interface DesignAssets {
  logo: string; // Base64 encoded logo
  productImage: string; // Base64 encoded product image
}

export interface DesignConfig {
  title: string;
  variant: number;
  agentName: string;
  focusArea: string;
}

export interface HTMLGeneratorOptions {
  assets: DesignAssets;
  config: DesignConfig;
  content: DesignContent;
}

export interface DesignContent {
  headline: string;
  subheadline?: string;
  mainPoints: string[];
  callToAction?: string;
  technicalSpecs?: TechnicalSpec[];
  testimonial?: Testimonial;
}

export interface TechnicalSpec {
  label: string;
  value: string;
  description?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export type AgentType =
  | 'technical-focus'
  | 'visual-impact'
  | 'value-proposition'
  | 'sustainability-esg'
  | 'customer-success';

export interface GeneratorFunction {
  (assets: DesignAssets, variant: number): string;
}
