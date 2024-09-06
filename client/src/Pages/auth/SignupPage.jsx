import { Text } from '@/components/ui'
import { SignupForm } from './SignupForm'
import { Link } from 'react-router-dom'

export function SignupPage() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <Text variant={'variant'}>Registro para refugios</Text>
      </header>
      <SignupForm />
      <footer>
        <Link to={'/auth/login'} className="underline text-accent text-center ">
          <Text className="justify-center">Ya formas parte de un refugio? inicia sesion aqui!</Text>
        </Link>
      </footer>
    </section>
  )
}
