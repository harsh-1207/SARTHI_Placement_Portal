import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();

    const adminLogin = () => {
        navigate1('/admin-login')
    }
    const studentLogin = () => {
        navigate2('/student-login')
    }
  return (
    <div>
      Home Page
      <button onClick={studentLogin}> Student Login </button>
      <button onClick={adminLogin}> Admin Login </button>
    </div>
  )
}

export default HomePage
