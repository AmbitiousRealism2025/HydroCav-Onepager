/**
 * Image encoding utilities for converting images to Base64 data URIs
 */
export interface ImagePaths {
    logo: string;
    productImage: string;
}
/**
 * Convert an image file to Base64 data URI
 */
export declare function imageToBase64(filePath: string): string;
/**
 * Load all required images and return Base64 encoded versions
 */
export declare function loadImages(imagesDir: string): {
    logo: string;
    productImage: string;
};
//# sourceMappingURL=image-encoder.d.ts.map