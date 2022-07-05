import React, { useRef, useState } from "react"
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from "../context/AuthContext"


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Mật khẩu không hợp lệ")
    }

    try {
      setError("")
      setLoading(true,)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/Login")
    } catch {
      setError("Đăng kí không thành công")
    }

    setLoading(false)
  }
   

    return  (
      <div class="login-box">
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
      {error && <alert className="text-red-500 "variant="danger">{error}</alert>}
        
        <div class="user-box mt-2.5">
          <input type="email" name="enail"
         ref={emailRef} required/>
          <label>Email</label>
        </div>
        <div class="user-box">
      
          <input type="password" 
         ref={passwordRef} required/>
          <label>Password</label>
        </div>
        <div class="user-box">
      
      <input type="password" 
     ref={passwordConfirmRef} required/>
      <label>Confirm password</label>
    </div>
        
        <button disabled={loading}  className='bg-purple-600' type="submit">Submit</button>
        <p className='py-2 text-slate-100 '>Don't have an yet? <Link to='/Login' className='underline'>Sign in</Link></p>
      </form>
    </div>

         
    )
  
      
    
}
