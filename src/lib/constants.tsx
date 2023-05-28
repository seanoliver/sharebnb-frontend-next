export const BACKEND_URL = process.env.LIVE_BACKEND_URL || 'http://localhost:3001';

export const CONST_S3_BASE_URL =
process.env.NEXT_PUBLIC_S3_PROTOCOL +
'://' +
process.env.NEXT_PUBLIC_S3_HOSTNAME +
'/' +
process.env.NEXT_PUBLIC_S3_BUCKET +
'/' +
listing.photourl;