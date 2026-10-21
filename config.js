/**
 * VELOX RACING — CLIENT CONFIGURATION
 * Zagazig National University | Formula Student
 * 
 * Connected to live Supabase project: mmkeybgkqkoepmyuispa
 * The publishable key is safe for client-side use with Row Level Security (RLS).
 */

const SUPABASE_CONFIG = {
  url: window.SUPABASE_URL || "https://mmkeybgkqkoepmyuispa.supabase.co",
  anonKey: window.SUPABASE_ANON_KEY || "sb_publishable_bCEY9L5ztgVxQU2BXkXwIA_OqE9o4ga"
};

// Expose globally
window.VELOX_CONFIG = SUPABASE_CONFIG;

// Cloudinary Cloud Storage Configuration for Public Photo Uploads
const CLOUDINARY_CONFIG = {
  cloudName: window.CLOUDINARY_CLOUD_NAME || localStorage.getItem('velox_cloudinary_cloud_name') || "dhoqtr0se",
  uploadPreset: window.CLOUDINARY_UPLOAD_PRESET || localStorage.getItem('velox_cloudinary_upload_preset') || "velox_members"
};
window.CLOUDINARY_CONFIG = CLOUDINARY_CONFIG;

