import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainRouter } from './router'
import './styles/index.css'

const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <MainRouter />
    </QueryClientProvider>
  </StrictMode>
)
