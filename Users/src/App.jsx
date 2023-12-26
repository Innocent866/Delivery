import React from 'react'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import "./App.css";
import EditUsers from '../src/Pages/EditUsers'
import AllUsers from '../src/Pages/AllUsers'
import UsersChangePass from '../src/Pages/UsersChangePass'

const App = () => {
  return (
   <div className='bg'>
       <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<AllUsers />} />
      <Route path="/EditUsers" element={<EditUsers />} />
      <Route path="/UsersChangePass" element={<UsersChangePass />} />
           

      </Routes>
      </BrowserRouter>
    </div>
   </div>
  )
}

export default App