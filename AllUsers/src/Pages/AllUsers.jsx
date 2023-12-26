import React, { useEffect, useState } from 'react'
import '../Style/Allusers.css'
import dele from '../assets/delete-bin-line.jpg'
import susp from '../assets/Suspend.jpg'
import edit from '../assets/Edit (2).jpg'
import Bit from '../assets/Allusers-images/Bitmap.jpg'
import Bit1 from '../assets/Allusers-images/Bitmap (1).jpg'
import Bit2 from '../assets/Allusers-images/Bitmap (2).jpg'
import Bit3 from '../assets/Allusers-images/Bitmap (3).jpg'
import Bit4 from '../assets/Allusers-images/Bitmap (4).jpg'
import Bit5 from '../assets/Allusers-images/Bitmap (5).jpg'
import Bit6 from '../assets/Allusers-images/Bitmap (6).jpg'
import Bit7 from '../assets/Allusers-images/Bitmap (7).jpg'
import Bit8 from '../assets/Allusers-images/Bitmap (8).jpg'
import Bit9 from '../assets/Allusers-images/Bitmap (9).jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AllUsers = () => {

  const [data, setData] = useState([])

  const getDate = async () =>{
    try{
      const response = await axios('https://swifdropp.onrender.com/api/v1/admin',{
        method: "GET",
        headers:{
          "Content-type": "application/json",
        }
      })
      setData(response.data.admins)
      console.log(response.data.admins);

    }catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getDate()
  },[])

  return (
    <>
    <div className='container'>
        <div className='d-flex justify-content-between my-5'>
            <h5 className=''>All Users</h5>
            <button className='top-btn'>
              <p className='d-flex align-items-center'>+</p>
              <span className='span'>Add a New User</span>
            </button>
        </div>

        <div className='whitebg mb-5'>
          <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center gap-3 '>
            <p>Show</p>
            <select name="" id="" className='select'>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <p>entries</p>
          </div>
          <div className=' d-none d-lg-block'>
            <label htmlFor="">Search:</label>
            <input type="text" className='tablesearch'/>
          </div>
          </div>
          <div className="">
          <table className='tablediv'>
            <tr> 
              <th>ID</th>
              <th>IMAGES</th>
              <th>NAME,ADDRESS</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>TOTAL PAID</th>
              <th>ACTION</th>
            </tr>
           
            {data.map((datum)=>{
              const { address, username, email, firstname, image, lastname, phoneNumber, _id} = datum
              return(
                <tr>
                <td>03DR456</td>
               <td className='tableimg'> <img src={image} alt="" className='rounded-pill tableimg'/></td>
                <td>
                  <h6>{username}</h6>
                  <p>{address}</p>
                </td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
                <td><button className='active'>Active</button></td>
                <td>$235.55</td>
                <td>
                  <Link to='/EditUsers'><button className='btn'><img src={edit} alt="" className='img-w rounded-pill'/>Edit</button></Link>
                  <Link to='/Suspend'><button className='btn'><img src={susp} alt="" className='img-w rounded-pill'/>Suspend</button></Link>
                  <button className='btn'><img src={dele} alt="" className='img-w rounded-pill'/>Delete</button>
                </td>
              </tr>
              )
            })}
          
          </table>
          </div>
          <div className='d-flex justify-content-between mt-5'>
        <p>Showing 20-30 from 100 data</p>
        <p>1</p>
        </div>
        </div>
        
        
    </div>
    </>
  )
}

export default AllUsers