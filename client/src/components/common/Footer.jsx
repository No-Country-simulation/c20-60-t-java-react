import { Text } from '../ui/text'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-secondary ">
      <section className="max-w-desktop mx-auto flex flex-wrap justify-between px-20 pt-8 mt-8">
        <FooterSection title={'Navegacion'} links={['inicio', 'Quiero adoptar', 'Sobre nosotros']} />
        <FooterSection title={'Legal'} links={['Términos legales', 'Politicas de privacidad']} />
        <FooterSection title={'Información de contacto'} links={['Calle Falsa 1234, Buenos Aires, Argentina', 'pawsomefriends@gmail.com']} />
        <FooterSection title={'Nuestras redes sociales'} links={['@PawsomeFriends', 'PawsomeFriends', '+54 11 1234-5678']} />
      </section>
      <Text variant="medium" className="text-center my-12">
        © 2024 Refugio Pawsome Friends. Todos los derechos reservados.
      </Text>
    </footer>
  )
}

export function FooterSection({ title, links }) {
  return (
    <section className="text-left flex flex-col gap-5">
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
