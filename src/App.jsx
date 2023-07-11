import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import UserHomePage from './pages/UserHomePage/UserHomePage'
import CreateEvent from './pages/CreateEvent/CreateEvent'

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/home' element={<UserHomePage />} />

          <Route path='/createEvent' element={<CreateEvent />} />

        </Routes>
      </div>  
    </BrowserRouter>
  )
}

export default App
