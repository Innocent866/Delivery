import React from 'react'
import '../Style/EditUsers.css'
import Editimg from '../assets/EditUsers/Bitmap.jpg'
import signBox from '../assets/EditUsers/Signature box.jpg'
import SideNav from './SideNav'

const DeleteUsers = () => {
  return (
    <div className='container'>
      <h5 className='my-5'>Edit Users Admin</h5>

      <div className='Editdiv'>
      <div className="sidediv">
          <SideNav/>
           <div className='bottomsidediv'>
           <div className='bottomsidediv2'>
           <img src={Editimg} alt="" className='bottomsidedivimg'/>
            <button className='bottomsidedivchangephoto'>Change Photo</button>
           </div>
           <hr/>
            
             <form action="">
              <label htmlFor="" className='my-3'>Select Type</label>
              <select name="" id="" className='sel'>
                <option value="">Super Admin</option>
                <option value=""></option>
              </select>
              <label htmlFor="" className='my-3'>FullName</label>
              <input type="text" placeholder='Name' className='input' />
              <label htmlFor="" className='my-3'> Status</label>
              <select name="" id="" className='sel'>
                <option value="">Active</option>
                <option value="">Suspend</option>
              </select>
              <button className='btn2 w-100'>SAVE</button>
              </form>
            


          </div>
        </div>        

        <div>
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
           <select className='w-100 sel'>
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