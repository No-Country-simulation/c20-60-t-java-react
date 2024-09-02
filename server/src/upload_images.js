import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config'

;(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

  // Upload an image
  const path = '../server/images/'
  const uploadResult = await cloudinary.uploader
    .upload(`${path}image.png`, {
      public_id: 'first cat'
    })
    .catch((error) => {
      console.log(error)
    })

  console.log(uploadResult)

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

  console.log(optimizeUrl)
})()
