import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/simulations/'>
      <Routes>
        <Route path="/:p1?/:p2?" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
