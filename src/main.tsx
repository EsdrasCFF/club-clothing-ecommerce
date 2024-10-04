import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/header'
import Home from './pages/home'
import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex h-screen flex-col items-center">
        <Header />
        <div className="flex h-full w-full max-w-screen-xl flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>
)
