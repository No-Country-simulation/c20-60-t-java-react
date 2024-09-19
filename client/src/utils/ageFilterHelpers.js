// Helper function to calculate age in months based on birthDate (Unix timestamp)
export const calculateAgeInMonths = (birthDate) => {
  const currentDate = new Date()
  const birthDateObj = new Date(birthDate * 1000) // Convert Unix to Date object

  const yearsDiff = currentDate.getFullYear() - birthDateObj.getFullYear()
  const monthsDiff = currentDate.getMonth() - birthDateObj.getMonth()

  return yearsDiff * 12 + monthsDiff
}

// Helper function to convert age range string to months
export const convertAgeRangeToMonths = (ageRange) => {
  switch (ageRange) {
    case '1-6 meses':
      return { min: 1, max: 6 }
    case '6-12 meses':
      return { min: 6, max: 12 }
    case '1-3 años':
      return { min: 12, max: 36 }
    case '3-6 años':
      return { min: 36, max: 72 }
    case '+6 años':
      return { min: 72, max: null } // No upper limit
    default:
      return null
  }
}
