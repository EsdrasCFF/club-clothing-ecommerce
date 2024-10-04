import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './pages/home'
import { Header } from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex h-screen flex-col items-center">
        <Header />
        <div className="flex h-full w-full max-w-screen-xl flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>
)
