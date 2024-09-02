import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { NavSection, BadgeGroup } from './index'
import { useFilterStore } from '@/store/filtersStore'

export const NavBar = ({ onRefetch }) => {
  const { filters, updateFilter } = useFilterStore((state) => ({
    filters: state.filters,
    updateFilter: state.updateFilter
  }))

  function updateVacunado(value) {
    let prevValue = filters.vacunado

    if (prevValue === '') {
      prevValue = undefined
    } else if (prevValue) {
      prevValue = 'Sí'
    } else {
      prevValue = 'No'
    }

    if (prevValue === value) {
      updateFilter('vacunado', '')
    } else if (value === 'Sí') {
      updateFilter('vacunado', true)
    } else if (value === 'No') {
      updateFilter('vacunado', false)
    }
  }

  function getActiveVacunado() {
    if (filters.vacunado === '') {
      return ''
    }
    return filters.vacunado ? 'Sí' : 'No'
  }

  const isFilterApplied = Object.keys(filters).some((field) => filters[field] !== '')

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
        <BadgeGroup onUpdate={updateVacunado} active={getActiveVacunado()} items={['Sí', 'No']} />
      </NavSection>
      <NavSection title="Esterilizado">
        <BadgeGroup items={['Sí', 'No']} />
      </NavSection>
      <div className="flex justify-center items-center mt-1">
        <Button onClick={onRefetch} hoverable variant={isFilterApplied ? 'navBar' : 'navBarInactive'}>
          Aplicar Filtros
        </Button>
      </div>
    </div>
  )
}
