import { AuthPageLayout } from '@/layout'
import { SignupForm } from './SignupForm'

export function SignupPage() {
  return (
    <AuthPageLayout title={'Registro para refugios'} linkText={'¿Ya formas parte de un refugio? ¡Inicia sesión aquí!'} link={'/auth/iniciar-sesion'}>
      <SignupForm />
    </AuthPageLayout>
  )
}
