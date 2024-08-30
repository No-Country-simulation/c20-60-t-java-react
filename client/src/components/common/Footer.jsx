import { Button } from "../ui/button";

export default function Footer() {
return (
  <footer className=" bg-secondary flex flex-wrap justify-between pt-8 mt-8">
    <section className="text-left">
      <h3 className="text-xl font-bold">Navegación</h3>
      <Button className="block my-4" variant="link">
        Inicio
      </Button>
      <Button className="block my-4" variant="link">
        Quiero adoptar
      </Button>
      <Button className="block my-4" variant="link">
        Sobre nosotros
      </Button>
    </section>
    <section className="text-left">
      <h3 className="text-xl font-bold">Legal</h3>
      <Button className="block my-4" variant="link">
        Términos legales
      </Button>
      <Button className="block my-4" variant="link">
        Política de privacidad
      </Button>
    </section>
    <section className="text-left">
      <h3 className="text-xl font-bold">Información de contacto</h3>
      <Button className="block my-4" variant="link">
        Calle Falsa 1234, Buenos Aires, Argentina
      </Button>
      <Button className="block my-4" variant="link">
        pawsomefriends@gmail.com
      </Button>
    </section>
    <section className="text-left">
      <h3 className="text-xl font-bold">Nuestras redes sociales</h3>
      <Button className="block my-4" variant="link">
        @PawsomeFriends
      </Button>
      <Button className="block my-4" variant="link">
        PawsomeFriends
      </Button>
      <Button className="block my-4" variant="link">
        +54 11 1234-5678
      </Button>
    </section>
      <p className="block w-full p-4">©Pawsome Friends. Todos los derechos reservados.</p>
  </footer>
)
}