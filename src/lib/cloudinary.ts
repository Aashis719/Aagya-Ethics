// Cloudinary configuration for image optimization
// This will be used for future image uploads and optimization

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || 'your-api-key',
  apiSecret: process.env.CLOUDINARY_API_SECRET || 'your-api-secret',
};

// Helper function to generate optimized image URLs
export const getOptimizedImageUrl = (
  publicId: string,
  width?: number,
  height?: number,
  quality: string = 'auto'
) => {
  const baseUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;
  const transformations = [];
  
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  transformations.push(`q_${quality}`, 'f_auto');
  
  return `${baseUrl}/${transformations.join(',')}/${publicId}`;
};

// Placeholder for future product image management
export const productImageConfig = {
  defaultWidth: 600,
  defaultHeight: 400,
  thumbnailWidth: 300,
  thumbnailHeight: 200,
  quality: 'auto',
};
