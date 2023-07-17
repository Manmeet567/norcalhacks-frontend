import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import UserHomePage from './pages/UserHomePage/UserHomePage'
import CreateEvent from './pages/CreateEvent/CreateEvent'
import { useAuthContext } from './hooks/useAuthContext'
import SharePost from './pages/SharePost/SharePost'
import Explore from './pages/Explore/Explore'

function App() {

  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <div className="pages">
        <Routes>

          <Route path='/' element={user ? <Navigate to='/home' /> : <Home />} />

          <Route path='/login' element={!user ? <Login/> : <Navigate to='/home' />} />

          <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/home' />} />

          <Route path='/home' element={!user ? <Navigate to='/' /> : <UserHomePage />} />

          <Route path='/createEvent' element={<CreateEvent />} />
          
          <Route path='/newPost' element={user ? <SharePost /> : <Navigate to='/home' /> } />

          <Route path='/explore' element={ user ? <Explore /> : <Navigate to='/home' />} />

        </Routes>
      </div>  
    </BrowserRouter>
  )
}

export default App
