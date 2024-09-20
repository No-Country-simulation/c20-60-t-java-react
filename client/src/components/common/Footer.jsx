import { Link } from 'react-router-dom'
import { Text } from '../ui/text'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-secondary">
      <section className="mx-auto mt-8 grid max-w-desktop grid-cols-1 gap-8 px-10 pt-8 sm:grid-cols-2 sm:px-20 lg:grid-cols-4">
        <FooterSection title={'Navegación'} links={['inicio', 'Quiero adoptar', 'Sobre nosotros']} />
        <FooterSection title={'Legal'} links={['Términos legales', 'Politicas de privacidad']} />
        <FooterSection title={'Información de contacto'} links={['Calle Falsa 1234, Buenos Aires, Argentina', 'pawsomefriends@gmail.com']} />
        <FooterSection title={'Nuestras redes sociales'} links={['@PawsomeFriends', 'PawsomeFriends', '+54 11 1234-5678']} />
      </section>
      <Text variant="medium" className="m-10">
        © 2024 Refugio Pawsome Friends. Todos los derechos reservados.
      </Text>
    </footer>
  )
}

export function FooterSection({ title, links }) {
  return (
    <section className="flex flex-col gap-5 text-left">
      <Text asChild variant={'title'}>
        <h3>{title}</h3>
      </Text>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <Link className="hover:underline" to="#" key={link}>
            <Text variant="medium">{link}</Text>
          </Link>
        ))}
      </ul>
    </section>
  )
}
