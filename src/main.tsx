import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Header } from './components/header'
import { CategoryContextProvider } from './contexts/category-context'
import { UserContextProvider } from './contexts/user-context'
import ExplorePage from './pages/explore'
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
            <div className="flex w-full max-w-screen-xl flex-1 flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/explore" element={<ExplorePage />} />
              </Routes>
            </div>
          </div>
        </CategoryContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
)
