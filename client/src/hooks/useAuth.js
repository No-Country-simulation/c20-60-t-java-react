import { useContext } from 'react'
import { AuthContext } from '@/store/authStore'

export const useAuth = () => {
  const values = useContext(AuthContext)

  if (values === undefined) {
    throw new Error('Ensure using useAuth within AuthProvider')
  }

  return values
}
