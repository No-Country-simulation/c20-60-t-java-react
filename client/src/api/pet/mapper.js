// Frontend is going to use the object returned by this function
// Some fields dont have the same name that comes from the backend

import { getAgeFromBirthDate } from '@/utils/getAgeFromBirthDate'

export function petMapper(rawPet) {
  return {
    id: rawPet._id,
    species: rawPet.species ?? '-',
    name: rawPet.name ?? '-',
    sex: rawPet.sex ?? '-',
    size: rawPet.size ?? '-',
    breed: rawPet.breed ?? '-',
    age: getAgeFromBirthDate(rawPet.birthDate) ?? '-',
    birthDate: rawPet.birthDate ?? new Date(),
    thumbnail: rawPet.imgURL[0] ?? '-',
    description: rawPet.description ?? '-',
    vaccinated: rawPet.vaccinated ?? false,
    sterilized: rawPet.sterilized ?? false,
    availableForAdoption: rawPet.availableForAdoption ?? false
  }
}

export function petShelterMapper(rawPet) {
  const pet = petMapper(rawPet)
  const shelter = rawPet.shelter ? shelterMapper(rawPet.shelter) : {}

  return {
    ...pet,
    shelter
  }
}

function shelterMapper(rawShelter) {
  return {
    id: rawShelter._id ?? '-',
    location: rawShelter.address ?? '-',
    email: rawShelter.email ?? '-',
    name: rawShelter.shelterName ?? '-'
  }
}
