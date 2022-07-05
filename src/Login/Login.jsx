import React, { useRef, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"
import './Login.css';




export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
     navigate("/lists")
    } catch {
      setError("Nhập sai email, password")
    }

    setLoading(false)
  }
    return(
  <div class="login-b">
        <div class="login-box">
      <h2>Đăng Nhập</h2>
      {error && <alert className="text-red-500 "variant="danger">{error}</alert>}
      
      <form  onSubmit={handleSubmit}>
    
        <div class="user-box mt-2.5">
          <input type="email" name="email" ref={emailRef} required/>
        
          <label>Email</label>
         
        </div>
        <div class="user-box">
          <input type="password" name="" ref={passwordRef} required  />
          <label>Password</label>
        
        </div>

        <button disabled={loading} className="bg-purple-600" type="submit">Submit</button>
        <p className='py-2 text-slate-100'>Don't have an  account yet? <Link to='/Signup' className='underline'>Sign up</Link></p>
     
       
        
      </form>
    </div>
  </div>
    )
}
