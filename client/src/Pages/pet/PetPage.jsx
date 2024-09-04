import { DialogForm } from './DialogForm'
import './PetPageStyle.css'
import { SimilarPets } from './SimilarPets'

export function PetPage() {
  return (
    <section className="section">
      <section className="pet-page main">
        <div className="content">
          {/* Imagen del Perrito */}
          <div className="image-container">
            <img
              src="https://animalso.com/wp-content/uploads/2018/08/Golden-Retriever-1.jpg"
              alt="Perrito Golden Retriever"
              className="perrito-image"
            />
          </div>

          {/* Información de Perritos en una Card */}
          <div className="card">
            <div className="info">
              <ul className="pet-details">
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
              <h2>Información sobre mí:</h2>
              <p>
                Basqui es muy compañero, le encanta jugar y salir a pasear. Suele tomar siestas bajo el sol, y le gusta estar en compañia de otros
                perritos. Amigable y fiel, ideal para hogares con nños!
              </p>

              <DialogForm />
            </div>
          </div>
          
        </div>
      </section>
      <SimilarPets />
    </section>
  )
}
