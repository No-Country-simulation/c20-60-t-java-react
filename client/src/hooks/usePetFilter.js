import { petFiltersStore } from '@/store/index'
import { useEffect, useState } from 'react'

export function usePetFilter(pets) {
  console.log(pets)
  const { filters, updateFilter } = petFiltersStore((state) => ({
    filters: state.filters,
    updateFilter: state.updateFilter
  }))

  const [filteredPets, setFilteredPets] = useState(filterPets(pets))

  useEffect(() => {
    handleFilterPets()
  }, [pets?.length])

  function handleFilterPets() {
    setFilteredPets(filterPets(pets))
  }

  function filterPets(pets) {
    function passFilter(field, pet) {
      const value = filters[field]

      if (value === '') return true

      // In case value is a boolean, it cannot use toLowerCase()
      if (typeof value === 'string') {
        return value.toLowerCase() === pet[field].toLowerCase()
      }

      return value === pet[field]
    }

    return pets?.filter((pet) => Object.keys(filters).every((field) => passFilter(field, pet)))
  }

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
    updateFilter('breed', value)
  }

  function updateTamaño(value) {
    updateFilter('size', value)
  }

  function updateSexo(value) {
    updateFilter('sex', value)
  }

  function updateEdad(value) {
    updateFilter('age', value)
  }

  function updateVacunado(value) {
    updateBooleanFilter('vaccinated', value)
  }

  function updateEsterilizado(value) {
    updateBooleanFilter('sterilized', value)
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
    updateRaza,
    updateTamaño,
    updateSexo,
    updateEsterilizado,
    updateEdad,
    filterPets: handleFilterPets,
    filteredPets,
    filters
  }
}
