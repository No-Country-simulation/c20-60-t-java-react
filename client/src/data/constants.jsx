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
