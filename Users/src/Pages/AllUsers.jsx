import React from 'react'
import '../Style/Allusers.css'
import dele from '../assets/delete-bin-line.jpg'
import edit from '../assets/Edit (2).jpg'
import Bit from '../assets/Allusers-images/Bitmap.jpg'
import Bit1 from '../assets/Allusers-images/Bitmap (1).jpg'
import Bit2 from '../assets/Allusers-images/Bitmap (2).jpg'
import { Link } from 'react-router-dom'


const AllUsers = () => {
  
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

        <div className='whitebg'>
          <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center gap-3'>
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
            <tr>
              <td>03DR456</td>
             <td className='tableimg'> <img src={Bit} alt="" className='rounded-pill tableimg'/></td>
              <td>
                <h6>John Cage</h6>
                <p>02111, 50, G. Washington ave. app 5, Boston, USA</p>
              </td>
              <td>+1(612) 265-42219</td>
              <td>info@yourmail.com</td>
              <td><button className='active'>Active</button></td>
              <td>$235.55</td>
              <td>
                <Link to='/EditUsers'><button className='btn'><img src={edit} alt="" className='img-w rounded-pill'/>Edit</button></Link>
                <button className='btn'><img src={dele} alt="" className='img-w rounded-pill'/>Delete</button>
              </td>
            </tr>
            <tr>
              <td>03DR456</td>
             <td className='tableimg'> <img src={Bit1} alt="" className='rounded-pill tableimg'/></td>
              <td>
                <h6>John Cage</h6>
                <p>02111, 50, G. Washington ave. app 5, Boston, USA</p>
              </td>
              <td>+1(719) 345-12345</td>
              <td>name@yourmail.com</td>
              <td><button className='active'>Active</button></td>
              <td>$235.55</td>
              <td>
              <Link to='/EditUsers'><button className='btn'><img src={edit} alt="" className='img-w rounded-pill'/>Edit</button></Link>
                <button className='btn'><img src={dele} alt="" className='img-w rounded-pill'/>Delete</button>
              </td>
            </tr>
            <tr>
              <td>03DR456</td>
             <td className='tableimg'> <img src={Bit2} alt="" className='rounded-pill tableimg'/></td>
              <td>
                <h6>John Cage</h6>
                <p>02111, 50, G. Washington ave. app 5, Boston, USA</p>
              </td>
              <td>+1(366) 426-82343</td>
              <td>support@yourmail.com</td>
              <td><button className='active'>Active</button></td>
              <td>$235.55</td>
              <td>
              <Link to='/EditUsers'><button className='btn'><img src={edit} alt="" className='img-w rounded-pill'/>Edit</button></Link>
                <button className='btn' ><img src={dele} alt="" className='img-w rounded-pill'/>Delete</button>
              </td>
            </tr>
           
            
            
          </table>

          <div className='d-flex justify-content-between mt-5'>
        <p>Showing 20-30 from 100 data</p>
        <p>1</p>
        </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default AllUsers