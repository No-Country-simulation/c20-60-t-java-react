import { petFiltersStore } from '@/store/index'

export function usePetFilter() {
  const { filters, updateFilter } = petFiltersStore((state) => ({
    filters: state.filters,
    updateFilter: state.updateFilter
  }))

  function updateBooleanFilter(field, value) {
    let prevValue = filters[field]

    if (prevValue === '') {
      prevValue = undefined
    } else if (prevValue) {
      prevValue = 'Sí'
    } else {
      prevValue = 'No'
    }

    if (prevValue === value) {
      updateFilter(field, '')
    } else if (value === 'Sí') {
      updateFilter(field, true)
    } else if (value === 'No') {
      updateFilter(field, false)
    }
  }

  function updateRaza(value) {
    updateFilter('raza', value)
  }

  function updateTamaño(value) {
    updateFilter('tamaño', value)
  }

  function updateSexo(value) {
    updateFilter('sexo', value)
  }

  function updateEdad(value) {
    updateFilter('edad', value)
  }

  function updateVacunado(value) {
    updateBooleanFilter('vacunado', value)
  }

  function updateEsterilizado(value) {
    updateBooleanFilter('esterilizado', value)
  }

  // Para los filtros booleanos (vacunado, esterilizado) hay
  // que hacer un mapeo porque el estado del filtro se guarda
  // como true o false
  function getBooleanFilter(field) {
    if (filters[field] === '') {
      return ''
    }
    return filters[field] ? 'Sí' : 'No'
  }

  const isFilterApplied = Object.keys(filters).some((field) => filters[field] !== '')

  return {
    isFilterApplied,
    getBooleanFilter,
    updateVacunado,
    filters,
    updateRaza,
    updateTamaño,
    updateSexo,
    updateEsterilizado,
    updateEdad
  }
}
