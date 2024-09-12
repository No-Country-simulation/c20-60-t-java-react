import { CrearPage, LandingPage, LoginPage, PetPage, PetsPage, SignupPage, DashboardPage } from '@/Pages'
import { AuthLayout, MainLayout } from '@/layout'
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
              <Route path="/crear-mascota" element={<CrearPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
