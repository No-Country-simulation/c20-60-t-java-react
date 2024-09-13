import { LoginForm } from './LoginForm'
import { AuthPageLayout } from '@/layout'

export function LoginPage() {
  return (
    <AuthPageLayout title={'Iniciar sesión'} linkText={'¿Queres registrar un nuevo refugio? ¡Haz click aquí!'} link={'/auth/registro'}>
      <LoginForm />
    </AuthPageLayout>
  )
}
