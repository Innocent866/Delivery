import React from 'react'
import SideNav from './SideNav'
import '../Style/UsersChangePass.css'

const UsersChangePass = () => {
  return (
    <div className='container'>
        <h5 className='my-5'>Edit Users</h5>
       <div className='Editpass mb-5'>
       <SideNav/>

       <div>
       <div className='pass'>
       <h4>Change Password</h4>
       <hr />
       
       <form action="">
        <label htmlFor="">Old Password</label>
        <input type="text" className='input' placeholder='**************************'/>
        <label htmlFor="">New Password</label>
        <input type="text" className='input' placeholder='**************************'/>
        <label htmlFor="">Comfirm Password</label>
        <input type="text" className='input' placeholder='**************************'/>

        </form>
       <div><button className='tbn'>CHANGE PASSWORD</button></div>

       </div>
        </div>

       </div>
    </div>
  )
}

export default UsersChangePass