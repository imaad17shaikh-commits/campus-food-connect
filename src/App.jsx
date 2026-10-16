import './style.css'
import Home from './Home'
import FindFood from './FindFood'
import PostFood from './PostFood'
import Login from './Login'
import { Routes, Route } from 'react-router-dom'
import Register from './Register'
import Dashboard from './Dashboard'

function App() {
  return (
    <Routes>

     <Route path="/" element={<Home />} />
<Route path="/food" element={<FindFood />} />
<Route path="/post-food" element={<PostFood />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App