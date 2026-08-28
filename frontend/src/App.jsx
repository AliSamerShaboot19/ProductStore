import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Productpage from './pages/Productpage'
import Profile from './pages/Profile'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'

const App = () => {
  return (
    <div className='min-h-screen bg-base-100'>
      <NavBar />
      <main className='max-w-5xl mx-auto px-4 py-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Productpage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
