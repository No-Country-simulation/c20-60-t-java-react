export function mapPet(rawPet) {
  const birthDate = rawPet.birthDate ?? undefined
  const todayTimestamp = Math.round(Date.now() / 1000)

  const ageInSeconds = todayTimestamp - birthDate
  const secondsInAYear = 60 * 60 * 24 * 365.25

  let fullAge = undefined
  let age = ageInSeconds / secondsInAYear

  if (age >= 1) {
    age = Math.floor(age)
    if (age === 1) fullAge = `${age} año`
    else fullAge = `${age} años`
  } else {
    age *= 12
    age = Math.floor(age)
    if (age === 1) fullAge = `${age} mes`
    else fullAge = `${age} meses`
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
    sterilized: rawPet.sterilized ?? false
  }
}
