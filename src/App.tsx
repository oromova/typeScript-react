import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'

export const App:React.FC = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  },[])

  return token ? <Layout/> : <Login/>
}

export default App