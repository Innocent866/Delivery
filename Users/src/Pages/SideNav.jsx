import React from 'react'
import '../Style/SideNav.css'
import Editimg from '../assets/EditUsers/Bitmap.jpg'
import cp from '../assets/EditUsers/Shape.jpg'
import { Link } from 'react-router-dom'



const SideNav = () => {
  return (
    <div>
        <div className='topsidediv'>
            <div className='topsidehead'>
           <div className='d-flex gap-2 align-items-center'>
           <img src={Editimg} alt="" className='topsideimg'/>
            <h5>Amelia <br/>Lopes</h5>
           </div>
            <h1>...</h1>
            </div>
           <Link 
           to='/EditUsers'
            className='link'> <p className='linkpara'>Personal Information</p></Link>
            <Link 
            to='/UsersChangePass'
             className='link'><p className='linkpara'><img src={cp} alt="" className='imgw'/>Change Password</p></Link>
           
            
          </div>
    </div>
  )
}

export default SideNav