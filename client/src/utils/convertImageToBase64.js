export function convertFileToBase64 (file) {
   return new Promise((resolve, reject) => {
     const reader = new FileReader()
     reader.readAsDataURL(file)
     reader.onloadend = () => resolve(reader.result) // This will be the base64 string
     reader.onerror = reject
   })
 }