import { create } from 'zustand'

const FILTER_INIT = {
  raza: '',
  tamaño: '',
  sexo: '',
  edad: '',
  vacunado: '',
  esterilizado: ''
}

export const petFiltersStore = create((set) => ({
  filters: FILTER_INIT,
  updateFilter: (field, value) =>
    set((state) => {
      const newState = { ...state.filters }

      const prevValue = newState[field]

      if (prevValue === value) {
        newState[field] = ''
      } else {
        newState[field] = value
      }

      console.log(newState)

      return { ...state, filters: newState }
    })
}))
