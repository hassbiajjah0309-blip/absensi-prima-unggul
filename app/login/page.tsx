"use client"
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert("Login Gagal: " + error.message)
    else router.push('/app')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans px-4">
      <form onSubmit={handleLogin} className="w-full max-w-md p-8 border-2 border-red-600 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-red-600 tracking-tighter">SMK PRIMA UNGGUL</h1>
          <p className="text-gray-500 text-sm mt-2">Silakan login untuk masuk ke aplikasi</p>
        </div>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button 
            type="submit" 
            className="w-full bg-red-600 text-white p-4 rounded-xl font-bold hover:bg-red-700 transform transition active:scale-95 shadow-lg shadow-red-200"
          >
            MASUK
          </button>
        </div>
      </form>
    </div>
  )
}

