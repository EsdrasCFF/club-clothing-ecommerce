import './index.css'

import { onAuthStateChanged } from 'firebase/auth'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Header } from './components/header'
import { auth } from './config/db/firebase.config'
import Home from './pages/home'
import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'

onAuthStateChanged(auth, (user) => {
  console.log(user)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster richColors />
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
