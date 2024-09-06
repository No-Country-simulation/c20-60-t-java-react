import { Text } from '@/components/ui'
import { Link } from 'react-router-dom'
import { LoginForm } from './LoginForm'

export function LoginPage() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <Text variant={'variant'}>Iniciar sesión</Text>
      </header>
      <LoginForm />
      <footer>
        <Link to={'/auth/registro'} className="underline text-accent text-center ">
          <Text className="justify-center">Queres registrar un nuevo refugio? haz click aqui!</Text>
        </Link>
      </footer>
    </section>
  )
}
