// Frontend is going to use the object returned by this function
// Some field doesn't have the same name that comes from the backend

export function mapPet(rawPet) {
  const birthDate = rawPet.birthDate ?? undefined
  const todayTimestamp = Math.round(Date.now() / 1000)

  const ageInSeconds = todayTimestamp - birthDate
  const secondsInAYear = 1000 * 60 * 60 * 24 * 365.25

  let age = ageInSeconds / secondsInAYear
  let fullAge = ''

  if (age >= 1) {
    age = Math.floor(age)
    if (age === 1) fullAge = `${fullAge} año`
    fullAge = `${fullAge} años`
  }

  if (age < 1) {
    age *= 12
    age = Math.floor(age)
    if (age > 1) fullAge = `${age} meses`
    fullAge = `${age} mes`
  }

  return {
    id: rawPet._id,
    species: rawPet.species ?? '-',
    name: rawPet.name ?? '-',
    sex: rawPet.sex ?? '-',
    size: rawPet.size ?? '-',
    breed: rawPet.breed ?? '-',
    age: fullAge ?? '-',
    thumbnail: rawPet.imgURL ?? '-',
    labels: rawPet.labels ?? '-',
    color: rawPet.color ?? '-',
    description: rawPet.description ?? '-',
    vaccinated: rawPet.vaccinated ?? false,
    sterilized: rawPet.sterilized ?? false,
    availableForAdoption: rawPet.availableForAdoption ?? false
  }
}
