import { DialogForm } from './DialogForm'
import './PetPageStyle.css'

export function PetPage() {
  return (
    <section className="section p-4">
      <section className="pet-page main flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className=" content w-full lg:w-1/2">
          {/* Imagen del Perrito */}
          <div className=" image-container w-full">
            <img
              src="https://animalso.com/wp-content/uploads/2018/08/Golden-Retriever-1.jpg"
              alt="Perrito Golden Retriever"
              className="perrito-image w-full h-auto"
            />
          </div>
        </div>

        {/* Información de Perritos en una Card */}
        <div className="card  w-full lg:w-1/2 p-4">
          <div className="info">
            <ul className="pet-details space-y-2">
              <li>
                <strong>Nombre:</strong> Basqui
              </li>
              <li>
                <strong>Raza:</strong> Golden Retriever
              </li>
              <li>
                <strong>Tamaño:</strong> Grande
              </li>
              <li>
                <strong>Sexo:</strong> Macho
              </li>
              <li>
                <strong>Edad:</strong> 3 años
              </li>
              <li>
                <strong>Color:</strong> Amarillo
              </li>
              <li>
                <strong>Esterilizado:</strong> Sí
              </li>
              <li>
                <strong>Vacunado:</strong> Sí
              </li>
              <li className="last">
                <strong>Ubicación:</strong> Buenos Aires (Capital Federal)
              </li>
            </ul>
            <h2 className="mt-4">Información sobre mí:</h2>
            <p className="mt-2">
              Basqui es muy compañero, le encanta jugar y salir a pasear. Suele tomar siestas bajo el sol, y le gusta estar en compañia de otros
              perritos. Amigable y fiel, ideal para hogares con niños!
            </p>

            <DialogForm />
          </div>
        </div>
      </section>
    </section>
  )
}
