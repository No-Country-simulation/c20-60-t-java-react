import { CatIcon } from '@/components/icons/CatIcon'
import { DogIcon } from '@/components/icons/DogIcon'
import { FemaleIcon } from '@/components/icons/FemaleIcon'
import { MaleIcon } from '@/components/icons/MaleIcon'

export const PET_PLACEHOLDER_IMAGE =
  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'

export const booleanOptions = [
  {
    text: 'Si',
    value: true
  },
  {
    text: 'No',
    value: false
  }
]

export const sexOptions = [
  {
    text: 'Macho',
    value: 'male',
    icon: <MaleIcon />
  },
  {
    text: 'Hembra',
    value: 'female',
    icon: <FemaleIcon />
  }
]

export const specieOptions = [
  {
    text: 'Perro',
    value: 'dog',
    icon: <DogIcon />
  },
  {
    text: 'Gato',
    value: 'cat',
    icon: <CatIcon />
  }
]

export const razasPerro = [
  'Mestizo',
  'Pitbull',
  'Pastor Alemán',
  'Boxer',
  'Beagle',
  'Labrador Retriever',
  'Rottweiler',
  'American Staffordshire Terrier',
  'Chihuahua',
  'Cocker Spaniel',
  'Bulldog Americano',
  'Shar Pei',
  'Dálmata',
  'Husky Siberiano',
  'Bull Terrier',
  'Jack Russell Terrier',
  'Galgo Español',
  'Pastor Belga',
  'Pointer',
  'Bodeguero Andaluz',
  'Fox Terrier',
  'Perro de Agua Español',
  'Podenco Ibicenco',
  'Mastín Español',
  'American Bully',
  'Otro'
]

export const razasGato = [
  'Mestizo',
  'Gato Común Europeo',
  'Gato Callejero',
  'Gato Atigrado',
  'Gato Blanco y Negro (Tuxedo)',
  'Gato Naranja (Tabby Naranja)',
  'Gato Siamés',
  'Gato Persa (Mestizo)',
  'Gato Negro',
  'Gato Gris (Azul Ruso Mestizo)',
  'Gato de Pelo Largo',
  'Gato de Pelo Corto',
  'Manx (Mestizo)',
  'Gato Carey (Tortie)',
  'Gato Calicó',
  'Gato Montés Mestizo',
  'Otro'
]

export const peticiones = [
  {
    date: new Date('2024-08-12T10:30:00'),
    email: 'john.doe@example.com',
    name: 'John Doe',
    location: 'New York, NY',
    phone_number: '123-456-7890',
    message: 'I am interested in adopting a small dog. Do you have any available soon?',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  },
  {
    date: new Date('2024-08-15T14:45:00'),
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    location: 'Los Angeles, CA',
    phone_number: '987-654-3210',
    message: 'Looking for a friendly cat to adopt. Please send me details.',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  },
  {
    date: new Date('2024-08-18T09:15:00'),
    email: 'mike.jones@example.com',
    name: 'Mike Jones',
    location: 'Chicago, IL',
    phone_number: '456-789-0123',
    message: 'Do you have any puppies available for adoption? I would love to visit the shelter.',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  },
  {
    date: new Date('2024-08-21T12:00:00'),
    email: 'sarah.adams@example.com',
    name: 'Sarah Adams',
    location: 'Austin, TX',
    phone_number: '321-654-9870',
    message: 'I am looking to adopt a senior dog. Could you send me more information?',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  },
  {
    date: new Date('2024-08-24T16:30:00'),
    email: 'tom.baker@example.com',
    name: 'Tom Baker',
    location: 'Seattle, WA',
    phone_number: '789-123-4567',
    message: 'Interested in adopting a parrot. Please provide details on the available birds.',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  },
  {
    date: new Date('2024-08-27T11:45:00'),
    email: 'lisa.carter@example.com',
    name: 'Lisa Carter',
    location: 'Miami, FL',
    phone_number: '654-321-9870',
    message: 'I am looking for a medium-sized dog to adopt. Let me know if you have any available.',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  },
  {
    date: new Date('2024-08-30T13:20:00'),
    email: 'david.lee@example.com',
    name: 'David Lee',
    location: 'Denver, CO',
    phone_number: '012-345-6789',
    message: 'I would like to adopt a rabbit. Can you provide details about the adoption process?',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  },
  {
    date: new Date('2024-09-02T15:10:00'),
    email: 'emily.wilson@example.com',
    name: 'Emily Wilson',
    location: 'San Francisco, CA',
    phone_number: '543-210-6789',
    message: 'I am interested in adopting a pair of cats. Do you have any available for adoption?',
    pet: {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      id: '1',
      name: 'Rocco'
    }
  }
]
