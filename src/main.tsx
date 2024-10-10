import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Header } from './components/header'
import { CategoryContextProvider } from './contexts/category-context'
import { UserContextProvider } from './contexts/user-context'
import Home from './pages/home'
import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoryContextProvider>
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
        </CategoryContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
)
