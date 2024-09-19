import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config'

export async function uploadImage(url) {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(url, {
      folder: 'Pawsome Friends',
      public_id: Date.now()
    })
    .catch((error) => {
      console.error(error)
    })

  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url(uploadResult.public_id, {
    transformation: [
      {
        fetch_format: 'auto',
        quality: 'auto'
      },
      {
        crop: 'fill',
        gravity: 'auto',
        width: 500,
        height: 500
      }
    ]
  })

  return optimizeUrl
}
