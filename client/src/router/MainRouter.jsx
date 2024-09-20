import { DashAddPetPage, DashEditPetPage, DashPetsPage, DashRequestsPage, LandingPage, LoginPage, PetPage, PetsPage, SignupPage } from '@/Pages'
import { DashPetRequests } from '@/Pages/dashboard'
import { AuthLayout, DashboardLayout, MainLayout } from '@/layout'
import AuthProvider from '@/store/authStore'
import { ProtectedRoute } from '@/utils/ProtectedRoute'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'mascotas', element: <PetsPage /> },
      { path: 'mascotas/:id', element: <PetPage /> },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          { path: 'registro', element: <SignupPage /> },
          { path: 'iniciar-sesion', element: <LoginPage /> }
        ]
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardLayout />,
            children: [
              { path: 'mascotas', element: <DashPetsPage /> },
              { path: 'peticiones', element: <DashRequestsPage /> },
              { path: 'crear-mascota', element: <DashAddPetPage /> },
              { path: 'editar-mascota/:id', element: <DashEditPetPage /> },
              { path: 'mascotas/:id/peticiones', element: <DashPetRequests /> }
            ]
          }
        ]
      }
    ]
  }
])

export function MainRouter() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
