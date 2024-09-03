const multer = require('multer')
const path = require('path')

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/') // Folder to save uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)) // Add timestamp to file name
  }
})

// Initialize upload
const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
})

// Check file type
function checkFileType(file, cb) {
  // Allowed file types
  const fileTypes = /jpeg|jpg|png|gif/
  // Check file extension and MIME type
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = fileTypes.test(file.mimetype)

  if (mimetype && extname) {
    cb(null, true) // Accept file
  } else {
    cb(new Error('Error: Images Only!'), false) // Reject file with error
  }
}

module.exports = upload
