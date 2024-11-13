import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [formData,setFormData] = useState({})
    const [err,setErr] =useState(null)
    const [loading,setLoading] = useState(false)

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.id]:e.target.value})


    }

const handleSubmit  = async(e)=>{
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(formData)
    })
    const data  =  await res.json()
    console.log(data)
    if(data.success===false) 
    
        {
            setLoading(false)
          setErr(data.message)
          
        return
      }
      setLoading(false)


}
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg ' id='username' onChange={handleChange}/>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        {loading?  <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
        '>loading</button> : <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
        '>sign up</button>}
       


        
      </form>
      <div className='mt-5 flex gap-2'>
        <p>Have an account?</p>
        <Link to='/sign-in'>

        <span className='text-blue-700'>
            sign in
        </span>
        </Link>
      </div>
      <p className='text-sm text-red-500'>{err}</p>
    </div>
  )
}
