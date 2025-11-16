/**
 * Image encoding utilities for converting images to Base64 data URIs
 */
import { readFileSync } from 'fs';
import { join } from 'path';
/**
 * Convert an image file to Base64 data URI
 */
export function imageToBase64(filePath) {
    try {
        const imageBuffer = readFileSync(filePath);
        const base64 = imageBuffer.toString('base64');
        // Determine MIME type from file extension
        const ext = filePath.split('.').pop()?.toLowerCase();
        const mimeType = getMimeType(ext || '');
        return `data:${mimeType};base64,${base64}`;
    }
    catch (error) {
        console.error(`Error encoding image ${filePath}:`, error);
        throw new Error(`Failed to encode image: ${filePath}`);
    }
}
/**
 * Get MIME type from file extension
 */
function getMimeType(extension) {
    const mimeTypes = {
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'gif': 'image/gif',
        'webp': 'image/webp',
        'svg': 'image/svg+xml',
    };
    return mimeTypes[extension] || 'image/png';
}
/**
 * Load all required images and return Base64 encoded versions
 */
export function loadImages(imagesDir) {
    const logoPath = join(imagesDir, 'HydroCav_Logo.PNG');
    const productImagePath = join(imagesDir, 'HydroLoop.jpg');
    return {
        logo: imageToBase64(logoPath),
        productImage: imageToBase64(productImagePath),
    };
}
//# sourceMappingURL=image-encoder.js.map