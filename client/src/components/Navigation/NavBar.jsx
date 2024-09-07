import { usePetFilter } from '@/hooks/usePetFilter'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { NavSection, BadgeGroup } from './index'

export const NavBar = () => {
  const {
    getBooleanFilter,
    isFilterSelected,
    updateVacunado,
    updateTamaño,
    updateSexo,
    updateEdad,
    updateRaza,
    updateEsterilizado,
    filters,
    filterHaveBeenUsed,
    filterPets
  } = usePetFilter()

  return (
    <div className="nav-container">
      <h1 className="text-lg font-bold">Filtrar Por</h1>
      <NavSection title="Ubicacion">
        <Input className="mt-3" type="text" placeholder="Busca una ciudad o provincia" />
      </NavSection>
      <NavSection title="Raza">
        <BadgeGroup onUpdate={updateRaza} active={filters['breed']} items={['Sin raza', 'Siamés', 'Persa', 'Main Coon']} />
      </NavSection>
      <NavSection title="Tamaño">
        <BadgeGroup onUpdate={updateTamaño} active={filters['size']} items={['Pequeño', 'Mediano', 'Grande']} />
      </NavSection>
      <NavSection title="Sexo">
        <BadgeGroup onUpdate={updateSexo} active={filters['sex']} items={['Macho', 'Hembra']} />
      </NavSection>
      <NavSection title="Edad">
        <BadgeGroup onUpdate={updateEdad} active={filters['age']} items={['1-6 meses', '6-12 meses', '1-3 años', '3-6 años', '+6 años']} />
      </NavSection>
      <NavSection title="Vacunado">
        <BadgeGroup onUpdate={updateVacunado} active={getBooleanFilter('vaccinated')} items={['Sí', 'No']} />
      </NavSection>
      <NavSection title="Esterilizado">
        <BadgeGroup onUpdate={updateEsterilizado} active={getBooleanFilter('sterilized')} items={['Sí', 'No']} />
      </NavSection>
      <div className="mt-1 flex flex-col items-center justify-center gap-4">
        <Button
          onClick={filterPets}
          hoverable={isFilterSelected}
          disabled={!isFilterSelected && !filterHaveBeenUsed}
          fullWidth
          variant={isFilterSelected || filterHaveBeenUsed ? 'default' : 'disabled'}
        >
          Aplicar Filtros
        </Button>
      </div>
    </div>
  )
}
