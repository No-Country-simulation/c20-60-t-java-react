import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { NavSection, BadgeGroup } from './index'

export const NavBar = () => {
  return (
    <div className="nav-container">
      <h1 className="font-bold text-lg">Filtrar Por</h1>
      <NavSection title="Ubicacion">
        <Input className="mt-3" type="text" placeholder="Busca una ciudad o provincia" />
      </NavSection>
      <NavSection title="Raza">
        <BadgeGroup items={['Sin raza', 'Siamés', 'Persa', 'Main Coon']} />
      </NavSection>
      <NavSection title="Tamaño">
        <BadgeGroup items={['Pequeño', 'Mediano', 'Grande']} />
      </NavSection>
      <NavSection title="Sexo">
        <BadgeGroup items={['Macho', 'Hembra']} />
      </NavSection>
      <NavSection title="Edad">
        <BadgeGroup items={['1-6 meses', '6-12 meses', '1-3 años', '3-6 años', '+6 años']} />
      </NavSection>
      <NavSection title="Vacunado">
        <BadgeGroup items={['Sí', 'No']} />
      </NavSection>
      <NavSection title="Esterilizado">
        <BadgeGroup items={['Sí', 'No']} />
      </NavSection>
      <div className="flex justify-center items-center mt-1">
        <Button variant="navBar">Aplicar Filtros</Button>
      </div>
    </div>
  )
}
