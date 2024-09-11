import { useAuth } from '@/store/authStore'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute() {
  const { user } = useAuth()

  if (user === undefined || user === null) return <Navigate to={'/auth/iniciar-sesion'} />

  return <Outlet />
}
