import { MainLayout } from '@/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PetsPage } from '@/Pages/PetsPage'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/mascotas" element={<PetsPage />} />
          <Route path="/mascotas/:id" element={<PetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// PLACEHOLDERS
const LandingPage = () => <div />
const PetPage = () => <div />
