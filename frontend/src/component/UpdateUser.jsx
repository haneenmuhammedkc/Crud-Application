import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from "axios"

function UpdateUser() {

const {id} = useParams()

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [age, setAge] = useState("")
const navigate = useNavigate()

useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
},[id])

const update = (e) => {
  e.preventDefault();
  const confirmUpdate = window.confirm("Are you sure you want to update this user?");
  if (confirmUpdate) {
    axios.put("http://localhost:3001/updateUser/"+id,{name, email, age})
      .then((result)=>{console.log(result);
        alert("User updated successfully");
        navigate("/");
      })
      .catch((err)=>{console.log(err);
        alert("Failed to update user");
      });
  } 
  else {
    alert("Update cancelled");
  }
};

  return (
    <>
    <div className='w-full h-[100vh] bg-[#F4F4F2] flex justify-center items-center'>
        <div className='w-[30%] h-[50%] bg-white rounded-2xl shadow-2xl shadow-[#495464] pl-[10px]'>
            <form className='flex flex-col gap-1'>
                <h2 className='text-3xl font-sans font-medium pl-[34%] pb-[10px]'>EDIT USER</h2>
                <p className='text-md pb-[5px]'>Name</p>
                <input type="text" placeholder='Enter the Name' className='w-[440px] h-[35px] border-1 rounded-sm pl-[5px]' value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>Email</p>
                <input type="text" placeholder='Enter the Email' className='w-[440px] h-[35px] border-1 rounded-sm pl-[5px]' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p>Age</p>
                <input type="text" placeholder='Enter the Age' className='w-[440px] h-[35px] border-1 rounded-sm pl-[5px]' value={age} onChange={(e)=>setAge(e.target.value)}/>
                <div className='flex justify-center pt-[20px] gap-[30px]'>
                <button className=' w-[90px] h-[38px] border-0 shadow-lg rounded-md bg-red-700 hover:bg-red-400 cursor-pointer text-white font-semibold' onClick={()=>navigate("/")}>Cancel</button>
                <button className=' w-[90px] h-[38px] border-0 shadow-lg rounded-md bg-green-700 hover:bg-green-400 cursor-pointer text-white font-semibold' onClick={update}>Update</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default UpdateUser