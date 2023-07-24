import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import CreateEvent from './pages/CreateEvent/CreateEvent'
import { useAuthContext } from './hooks/useAuthContext'
import Explore from './pages/Explore/Explore'

function App() {

  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <div className="pages">
        <Routes>

          <Route path='/' element={user ? <Navigate to='/events' /> : <Home />} />

          <Route path='/login' element={!user ? <Login/> : <Navigate to='/events' />} />

          <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/events' />} />

          <Route path='/home' element={user ? <Navigate to='/events' /> : <Home />} />

          <Route path='/createEvent' element={user ? <CreateEvent /> : <Navigate to ='/' />} />

          <Route path='/events' element={ user ? <Explore /> : <Navigate to='/' />} />

        </Routes>
      </div>  
    </BrowserRouter>
  )
}

export default App
