import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {

const [users, setUsers]=useState([])

useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
})

const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    axios.delete("http://localhost:3001/deleteUser/" + id)
      .then(res=>{console.log(res);
        alert("User deleted successfully");
        window.location.reload();
      })
      .catch(err=>{console.log(err);
        alert("Failed to delete user");
      });
  }
};

  return (
    <>
    <div className='w-full h-[100vh] bg-[#F4F4F2] flex justify-center items-center'>
        <div className='w-[40%] h-auto bg-white rounded-2xl shadow-2xl shadow-[#495464] p-3'>
            <Link to="/create" className='inline-block w-[110px] h-[40px] border-0 shadow-lg rounded-md bg-green-700 hover:bg-green-900 cursor-pointer text-white font-semibold pt-[8px] pl-[21px]'>Add User</Link>
            <table className='w-full text-left'>
                <thead>
                    <tr>
                        <th className='w-auto pt-2'>Name</th>
                        <th className='w-[200px] pt-2'>Email</th>
                        <th className='w-auto pt-2'>Age</th>
                        <th className='w-[140px] pt-2'>Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {
                        users.map((user)=>{
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td className='flex gap-2 pt-2'>
                                    <Link to={`/update/${user._id}`}className='inline-block w-[80px] h-[35px] border-0 shadow-lg rounded-md bg-blue-700 hover:bg-blue-950 cursor-pointer text-white font-semibold pt-[5px] pl-[25px]'>Edit</Link>
                                    <button className=' w-[80px] h-[35px] border-0 shadow-lg rounded-md bg-red-700 hover:bg-red-400 cursor-pointer text-white font-semibold' onClick={(e)=> handleDelete(user._id)} >Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default User