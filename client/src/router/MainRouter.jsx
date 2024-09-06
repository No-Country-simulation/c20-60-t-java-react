import { LandingPage, LoginPage, PetPage, PetsPage, SignupPage } from '@/Pages'
import { AuthLayout, MainLayout } from '@/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '@/Pages/landing/LandingPage'
import { PetsPage, PetPage } from '@/Pages'
import { CrearPage } from '@/Pages/crear/CrearPage'


export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/mascotas" element={<PetsPage />} />
          <Route path="/mascotas/:id" element={<PetPage />} />
          <Route path="/crear-mascota" element={<CrearPage />} />
          <Route path="/auth/" element={<AuthLayout />}>
            <Route path="registro" element={<SignupPage />} />
            <Route path="iniciar-sesion" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
