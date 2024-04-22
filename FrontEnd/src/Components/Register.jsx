import React, { useState } from 'react'

export const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const handleForm =()=>{

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        handleForm()
    }
    return (
   
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Full Name"
                        onClick={(data)=>setEmail(data.target.value)} />

                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Email" 
                        onClick={(data)=>setEmail(data.target.value)}/>

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Password"
                        onClick={(data)=>setEmail(data.target.value)} />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
                        onClick={handleSubmit}
                    >Create Account</button>

                </div>
            </div>
        </div>
  )
}
