import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/header'
import CategoryDetailsPage from './pages/category-details'
import ExplorePage from './pages/explore'
import Home from './pages/home'
import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'
import { ComponentsProvider } from './providers/components-provider'
import { ContextsProvider } from './providers/contexts-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextsProvider>
        <ComponentsProvider />
        <div className="flex h-screen flex-col items-center">
          <Header />
          <div className="flex w-full max-w-screen-xl flex-1 flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/category/:id" element={<CategoryDetailsPage />} />
            </Routes>
          </div>
        </div>
      </ContextsProvider>
    </BrowserRouter>
  </StrictMode>
)
