export function filterPets(pets, filters) {
  function passFilter(field, pet) {
    const value = filters[field]

    if (value === '') return pet

    // In case value is a boolean, it cannot use toLowerCase()
    if (typeof value === 'string') {
      if (value.toLowerCase() === pet[field].toLowerCase()) return pet
    }

    if (value === pet[field]) return pet
  }

  return pets.filter((pet) => Object.keys(filters).every((field) => passFilter(field, pet)))
}
