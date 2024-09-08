import './mongoose.config.js'
import Pet from '../models/pet.model.js'

const seedData = [
  {
    imgURL: 'https://example.com/dog1.jpg',
    name: 'Bella',
    species: 'Dog',
    age: 3,
    breed: 'Labrador Retriever',
    size: 'Large',
    sex: 'Female',
    color: 'Yellow',
    description: 'Friendly and playful, loves outdoor activities.',
    labels: ['Friendly', 'Playful', 'Loves Outdoors'],
    sterilized: true,
    vaccinated: true
  },
  {
    imgURL: 'https://example.com/cat1.jpg',
    name: 'Whiskers',
    species: 'Cat',
    age: 2,
    breed: 'Siamese',
    size: 'Small',
    sex: 'Male',
    color: 'Cream',
    description: 'Affectionate and curious, perfect indoor companion.',
    labels: ['Affectionate', 'Indoor', 'Curious'],
    sterilized: true,
    vaccinated: true
  },
  {
    imgURL: 'https://example.com/dog2.jpg',
    name: 'Max',
    species: 'Dog',
    age: 5,
    breed: 'German Shepherd',
    size: 'Large',
    sex: 'Male',
    color: 'Black and Tan',
    description: 'Loyal and protective, ideal for families.',
    labels: ['Loyal', 'Protective', 'Family Dog'],
    sterilized: false,
    vaccinated: true
  },
  {
    imgURL: 'https://example.com/cat2.jpg',
    name: 'Luna',
    species: 'Cat',
    age: 1,
    breed: 'Persian',
    size: 'Medium',
    sex: 'Female',
    color: 'White',
    description: 'Calm and loving, enjoys quiet time.',
    labels: ['Calm', 'Loving', 'Quiet'],
    sterilized: false,
    vaccinated: false
  },
  {
    imgURL: 'https://example.com/dog3.jpg',
    name: 'Rocky',
    species: 'Dog',
    age: 4,
    breed: 'Bulldog',
    size: 'Medium',
    sex: 'Male',
    color: 'Brindle',
    description: 'Stubborn but sweet, loves attention.',
    labels: ['Stubborn', 'Sweet', 'Attention-Seeker'],
    sterilized: true,
    vaccinated: true
  }
]

Pet.insertMany(seedData)
  .then((docs) => {
    console.log(`✅ DB seeded correctly\n-${seedData.length} new items added`)
    process.exit(0)
  })
  .catch((err) => {
    console.error('Error inserting data:', err)
  })
