import React, { useState } from "react"

import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Account() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
   async function handleLogout() {
    setError("")
    try {
      await logout()
     navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div className='max-w-[600px] mx-auto my-16 p-4 w-40 h-60 rounded-lg bg-slate-100'>
        <h1 className='text-2xl font-bold py-4'>Account</h1>
        <strong>Email:</strong> {currentUser && currentUser.email}
        <br />


        <button onClick={handleLogout} className='border px-6 py-2 my-4'>
          Logout
        </button>
      </div>

    </>
  )
}