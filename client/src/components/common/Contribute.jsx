import { Button } from '@/components/ui/button'

export default function Contribute() {
  return (
    <section>
      <h2 className="text-3xl font-bold">Con tu ayuda, podemos salvar a muchos más animales</h2>
      <p className="my-4">Dona ahora o inscríbete para ser voluntario en Pawsome Friends y formar parte del cambio juntos.</p>
      <Button className="block mx-auto my-4" variant="secondary">
        <a href="/">Quiero donar</a>
      </Button>
      <Button className="block mx-auto my-4">
        <a href="">Quiero ser voluntario</a>
      </Button>
    </section>
  )
}
