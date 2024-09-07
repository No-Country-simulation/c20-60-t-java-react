import { create } from 'zustand'

const FILTER_INIT = {
  breed: '',
  size: '',
  sex: '',
  age: '',
  vaccinated: '',
  sterilized: ''
}

export const petFiltersStore = create((set) => ({
  filters: FILTER_INIT,
  filteredPets: [],
  resetFilters: () => set((state) => ({ ...state, filters: FILTER_INIT })),
  updateFilter: (field, value) =>
    set((state) => {
      const newState = { ...state.filters }
      const prevValue = newState[field]
      newState[field] = prevValue === value ? '' : value
      return { ...state, filters: newState }
    }),
  applyFilter: (pets) =>
    set((state) => {
      const { filters } = state
      const filtered = pets?.filter((pet) =>
        Object.keys(filters).every((field) => {
          const value = filters[field]
          if (value === '') return true
          return typeof value === 'string' ? value.toLowerCase() === pet[field]?.toLowerCase() : value === pet[field]
        })
      )
      return { filteredPets: filtered }
    })
}))
