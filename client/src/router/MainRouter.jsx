import { DashAddPetPage, DashEditPetPage, DashPetsPage, DashRequestsPage, LandingPage, LoginPage, PetPage, PetsPage, SignupPage } from '@/Pages'
import { DashPetRequests } from '@/Pages/dashboard'
import { AuthLayout, DashboardLayout, MainLayout } from '@/layout'
import AuthProvider from '@/store/authStore'
import { ProtectedRoute } from '@/utils/ProtectedRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function MainRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/mascotas" element={<PetsPage />} />
            <Route path="/mascotas/:id" element={<PetPage />} />
            <Route path="/auth/" element={<AuthLayout />}>
              <Route path="registro" element={<SignupPage />} />
              <Route path="iniciar-sesion" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard/" element={<DashboardLayout />}>
                <Route path="mascotas" element={<DashPetsPage />} />
                <Route path="peticiones" element={<DashRequestsPage />} />
                <Route path="crear-mascota" element={<DashAddPetPage />} />
                <Route path="editar-mascota/:id" element={<DashEditPetPage />} />
                <Route path="mascotas/:id/peticiones" element={<DashPetRequests />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
