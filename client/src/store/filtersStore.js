import { create } from 'zustand'

const FILTER_INIT = {
  raza: '',
  tamaño: '',
  sexo: '',
  edad: '',
  vacunado: '',
  esterilizado: ''
}

export const useFilterStore = create((set) => ({
  filters: FILTER_INIT,
  updateFilter: (field, value) =>
    set((state) => {
      const newState = { ...state.filters, [field]: value }
      return { ...state, filters: newState }
    })
}))
