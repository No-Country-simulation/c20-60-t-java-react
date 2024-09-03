import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/index'

export function Contribute() {
  return (
    <section className="flex flex-col gap-10 text-center">
      <header className="flex flex-col max-w-[590px] mx-auto">
        <Text variant="display" className="md:text-3xl">
          Con tu ayuda, podemos salvar a muchos más animales
        </Text>
        <Text variant="medium" className="my-6">
          Dona ahora o inscríbete para ser voluntario en Pawsome Friends y formar parte del cambio juntos.
        </Text>
      </header>
      <footer className="flex flex-col gap-6 items-center">
        <Button size="lg">
          <a href="/">Quiero donar</a>
        </Button>
        <Button variant="outline" size="lg">
          <a href="">Quiero ser voluntario</a>
        </Button>
      </footer>
    </section>
  )
}
