import { LoginForm } from './LoginForm'
import { AuthPageLayout } from '@/layout'

export function LoginPage() {
  return (
    <AuthPageLayout title={'Iniciar sesión'} linkText={'Queres registrar un nuevo refugio? haz click aqui!'} link={'/auth/registro'}>
      <LoginForm />
    </AuthPageLayout>
  )
}
