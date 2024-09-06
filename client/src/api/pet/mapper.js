export function mapPet(rawPet) {
  return {
    id: rawPet._id,
    species: rawPet.species ?? '-',
    name: rawPet.name ?? '-',
    sex: rawPet.sex ?? '-',
    size: rawPet.size ?? '-',
    breed: rawPet.breed ?? '-',
    age: rawPet.age ?? '-',
    thumbnail: rawPet.imgURL ?? '-',
    labels: rawPet.labels ?? '-',
    color: rawPet.color ?? '-',
    description: rawPet.description ?? '-',
    vaccinated: rawPet.vaccinated ?? false,
    sterilized: rawPet.sterilized ?? false
  }
}
