// Frontend is going to use the object returned by this function
// Some field doesn't have the same name that comes from the backend

import { getAgeFromBirthDate } from '@/utils/getAgeFromBirthDate'

export function mapPet(rawPet) {
  return {
    id: rawPet._id,
    species: rawPet.species ?? '-',
    name: rawPet.name ?? '-',
    sex: rawPet.sex ?? '-',
    size: rawPet.size ?? '-',
    breed: rawPet.breed ?? '-',
    age: getAgeFromBirthDate(rawPet.birthDate) ?? '-',
    birthDate: rawPet.birthDate ?? new Date(),
    thumbnail: rawPet.imgURL ?? '-',
    labels: rawPet.labels ?? '-',
    color: rawPet.color ?? '-',
    description: rawPet.description ?? '-',
    vaccinated: rawPet.vaccinated ?? false,
    sterilized: rawPet.sterilized ?? false,
    availableForAdoption: rawPet.availableForAdoption ?? false
  }
}
