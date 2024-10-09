import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Header } from './components/header'
import { UserContextProvider } from './contexts/user-context'
import Home from './pages/home'
import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'

// const AuthListener = () => {
//   const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       const isSigningOut = isAuthenticated && !user
//       if (isSigningOut) {
//         return logoutUser()
//       }

//       const isSigningIn = !isAuthenticated && user
//       if (isSigningIn) {
//         const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', user.uid)))

//         const userFromFirestore = querySnapshot.docs[0]?.data()

//         return loginUser(userFromFirestore as User)
//       }
//     })

//     return () => unsubscribe() // Limpa o listener quando o componente desmonta
//   }, [isAuthenticated, loginUser, logoutUser])

//   return null
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
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
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
)
