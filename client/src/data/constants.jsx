import { CatIcon } from '@/components/icons/CatIcon'
import { DogIcon } from '@/components/icons/DogIcon'
import { FemaleIcon } from '@/components/icons/FemaleIcon'
import { MaleIcon } from '@/components/icons/MaleIcon'

export const PET_PLACEHOLDER_IMAGE =
  'https://s3-alpha-sig.figma.com/img/6ae0/8f8c/153ba436b477a2aaba513dd3fa73a699?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYxgGdA2K4lwaFz6YaSaVQHZua4yKmMFpF7PScbflMbWJ40205tG8MgoRF42rpMhxXJ0koFC9iTNXL44jJ3AAq~yFblKOEmF2Dss23ygu6JWDir51nmfainbZFgdlUKp8gmlVefJNXTSjwOkCPKLts-5TSXJoZAX0-Z57pec0ncLtirA6C0zF46JEaff3ZAtkqjZRKq4td7EhxyD9FPv0KR~OccSPZUmn1zbWD9KsL4PIL3tLY02FQCI8ZuSMgyQNvw-B7BU9J0TgUd-R-RqljScqEIP3RuQZAMtQEzLGGOfq1kcz-IuYrvR8fq37hZkK-iYaAJK8hLen89gsFDv4Q__'

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
