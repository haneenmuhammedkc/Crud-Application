import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function CreateUser() {

const [name, setName] = useState(0)
const [email, setEmail] = useState(0)
const [age, setAge] = useState(0)
const navigate = useNavigate()

const Submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result=>{console.log(result)
        alert("User Created Successfully")
        navigate('/')
    })
    .catch(err=>{console.log(err)
        alert("Failed to Create User")
    })
}

  return (
    <>
    <div className='w-full h-[100vh] bg-[#F4F4F2] flex justify-center items-center'>
        <div className='w-[30%] h-[50%] bg-white rounded-2xl shadow-2xl shadow-[#495464] pl-[10px]'>
            <form className='flex flex-col gap-1'>
                <h2 className='text-3xl font-sans font-bold pl-[34%] pb-[10px]'>ADD USER</h2>
                <p className='text-md pb-[5px]'>Name</p>
                <input type="text" placeholder='Enter the Name' className='w-[440px] h-[35px] border-1 rounded-sm pl-[5px]' onChange={(e)=>setName(e.target.value)}/>
                <p>Email</p>
                <input type="text" placeholder='Enter the Email' className='w-[440px] h-[35px] border-1 rounded-sm pl-[5px]' onChange={(e)=>setEmail(e.target.value)}/>
                <p>Age</p>
                <input type="text" placeholder='Enter the Age' className='w-[440px] h-[35px] border-1 rounded-sm pl-[5px]' onChange={(e)=>setAge(e.target.value)}/>
                <div className='flex justify-center pt-[20px] gap-[30px]'>
                <button className=' w-[90px] h-[38px] border-0 shadow-lg rounded-md bg-red-700 hover:bg-red-400 hover:text-black cursor-pointer text-white font-semibold' onClick={()=>navigate("/")}>Cancel</button>
                <button className=' w-[90px] h-[38px] border-0 shadow-lg rounded-md bg-black hover:bg-gray-300 hover:text-black cursor-pointer text-white font-semibold' onClick={Submit}>Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default CreateUser