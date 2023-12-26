import React from 'react'
import SideNav from './SideNav'
import '../Style/UsersChangePass.css'

const UsersChangePass = () => {
  return (
    <div className='container'>
        <h5 className='my-5'>Edit Users Admin</h5>
       <div className='Editpass'>
       <SideNav/>

       <div>
       <div className='pass mb-5'>
       <h4>Change Password</h4>
       <hr />
       
       <form action="">
        <label htmlFor="" className='label'>Old Password</label>
        <input type="text" className='input' placeholder='***********************'/>
        <label htmlFor="" className='label'>New Password</label>
        <input type="text" className='input' placeholder='***********************'/>
        <label htmlFor="" className='label'>Comfirm Password</label>
        <input type="text" className='input' placeholder='***********************'/>

        </form>
       <div><button className='tbn'>CHANGE PASSWORD</button></div>

       </div>
        </div>

       </div>
    </div>
  )
}

export default UsersChangePass