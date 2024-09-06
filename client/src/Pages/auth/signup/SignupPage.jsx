import { SignupForm } from './SignupForm'
import { AuthPageLayout } from '@/layout'

export function SignupPage() {
  return (
    <AuthPageLayout title={'Registro para refugios'} linkText={'Ya formas parte de un refugio? inicia sesion aqui!'} link={'/auth/iniciar-sesion'}>
      <SignupForm />
    </AuthPageLayout>
  )
}
