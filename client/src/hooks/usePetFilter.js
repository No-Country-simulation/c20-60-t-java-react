import { petFiltersStore } from '@/store/index'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

export function usePetFilter() {
  const queryClient = useQueryClient()
  const pets = queryClient.getQueryData(['pets-adoptable'])

  const { filters, updateFilter, filteredPets, applyFilter } = petFiltersStore((state) => ({
    filters: state.filters,
    updateFilter: state.updateFilter,
    filteredPets: state.filteredPets,
    applyFilter: state.applyFilter
  }))

  // Apply the filter when the pets change
  useEffect(() => {
    applyFilter(pets)
  }, [pets?.length])

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

  function getBooleanFilter(field) {
    if (filters[field] === '') {
      return ''
    }
    return filters[field] ? 'Sí' : 'No'
  }

  const isFilterSelected = Object.keys(filters).some((field) => filters[field] !== '')

  const filterHaveBeenUsed = pets?.length !== filteredPets?.length

  return {
    updateVacunado: (value) => updateBooleanFilter('vaccinated', value),
    updateEsterilizado: (value) => updateBooleanFilter('sterilized', value),
    updateRaza: (value) => updateFilter('breed', value),
    updateTamaño: (value) => updateFilter('size', value),
    updateSexo: (value) => updateFilter('sex', value),
    updateEdad: (value) => updateFilter('age', value),
    filterPets: () => applyFilter(pets),
    filterHaveBeenUsed,
    isFilterSelected,
    getBooleanFilter,
    filteredPets,
    filters
  }
}
