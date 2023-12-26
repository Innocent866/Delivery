import React, { useState } from 'react'
import '../Style/EditUsers.css'
import Editimg from '../assets/EditUsers/Bitmap.jpg'
import signBox from '../assets/EditUsers/Signature box.jpg'
import SideNav from './SideNav'

const DeleteUsers = () => {

  

  return (
    <div className='container'>
      <h5 className='my-5'>Edit Users</h5>

      <div className='Editdiv'>
      <div className="sidediv">
          <SideNav/>
           <div className='bottomsidediv'>
           <div className='bottomsidediv2'>
           <img src={Editimg} alt="" className='bottomsidedivimg'/>
            <button className='bottomsidedivchangephoto'>Change Photo</button>
           </div>
           <hr />
            <div className="bottomsidediv3">
            <img src={signBox} alt="" className='bottomsidedivsign'/>
            <button className='bottomsidedivsavesign'>Save Signature</button>
            </div>


          </div>
        </div>        

        <div className='bg-white border rounded'>
          <div className='seconddiv'>
          <h4>Users' Profile Information</h4>
          <hr />
          <form action="">
            <label htmlFor="" className='label'>FullName</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>Email</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>Phone Number</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>Country</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>City</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>State</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>Phostal Zip Code</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>Adderss</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>Personal ID Number</label>
            <input type="text"  placeholder='' className='input'/>
            <label htmlFor="" className='label'>Status</label>
           <select className='w-100 select'>
            <option value="Active">Active</option>
            <option value="Suspend">Suspend</option>
           </select>
          </form>
          <div className='btndiv'>
          <div>
          <button className='btn1'>Delete</button>
          </div>
          <div>
          <button className='btn2'>Save</button>
          </div>
          </div>
          </div>
        </div>
      </div>

        </div>
  
  )
}

export default DeleteUsers