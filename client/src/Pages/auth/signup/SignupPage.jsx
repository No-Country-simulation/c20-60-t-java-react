import { AuthPageLayout } from '@/layout'
import { SignupForm } from './SignupForm'

export function SignupPage() {
  return (
    <AuthPageLayout
      title={'Registro para refugios'}
      linkText={'Tu refugio ya se encuentra registrado? Inicia sesion aqui!'}
      link={'/auth/iniciar-sesion'}
    >
      <SignupForm />
    </AuthPageLayout>
  )
}
