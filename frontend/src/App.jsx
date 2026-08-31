import { Routes, Route, Navigate } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Productpage from './pages/Productpage'
import Profile from './pages/Profile'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import { useAuth } from '@clerk/react'
const App = () => {
  const { isSignedIn } = useAuth()
  return (
    <div className='min-h-screen bg-base-100'>
      <NavBar />
      <main className='max-w-5xl mx-auto px-4 py-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/product/:id'
            element={isSignedIn ? <Productpage /> : <Navigate to={'/'} />}
          />
          <Route
            path='/profile'
            element={isSignedIn ? <Profile /> : <Navigate to={'/'} />}
          />
          <Route
            path='/create'
            element={isSignedIn ? <CreatePage /> : <Navigate to={'/'} />}
          />
          <Route
            path='/edit/:id'
            element={isSignedIn ? <EditPage /> : <Navigate to={'/'} />}
          />
        </Routes>
      </main>
    </div>
  )
}
export default App
