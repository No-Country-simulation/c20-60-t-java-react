import { envs } from '@/config/envs'

const CLOUDINARY_POST_URL = `https://api.cloudinary.com/v1_1/${envs.CLOUDINARY_CLOUD_NAME}image/upload`

export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'unsigned_uploads')
  formData.append('folder', 'pets')

  const response = await fetch(CLOUDINARY_POST_URL, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error('Failed to upload image')
  }

  const data = await response.json()
  return data.secure_url
}
