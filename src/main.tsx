import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './pages/home'
import { Header } from './components/header'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex h-full flex-col">
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  </StrictMode>
)
