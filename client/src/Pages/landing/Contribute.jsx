import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/index'

export function Contribute() {
  return (
    <section className="py-4 text-center m-10">
      <Text variant="display">Con tu ayuda, podemos salvar a muchos más animales</Text>
      <Text variant="medium" className="my-6">Dona ahora o inscríbete para ser voluntario en Pawsome Friends y formar parte del cambio juntos.</Text>
      <Button className="block mx-auto my-6" variant="secondary">
        <a href="/">Quiero donar</a>
      </Button>
      <Button className="block mx-auto my-6">
        <a href="">Quiero ser voluntario</a>
      </Button>
    </section>
  )
}
