import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateUser from './component/CreateUser.jsx'
import UpdateUser from './component/UpdateUser.jsx'
import User from './component/User.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/update/:id" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
