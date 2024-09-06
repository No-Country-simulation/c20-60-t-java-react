import { PetPage, PetsPage } from '@/Pages'
import { SignupPage } from '@/Pages/auth/SignupPage'
import { LandingPage } from '@/Pages/landing/LandingPage'
import { AuthLayout, MainLayout } from '@/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/mascotas" element={<PetsPage />} />
          <Route path="/mascotas/:id" element={<PetPage />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/refugio" element={<SignupPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
