import React from 'react'
import { Link } from 'react-router-dom'
import Listform from '../../Mycomponent/Listform'
import picI from '/src/images/roomin.jpg'
import hostel2 from '/src/images/hostel2.jpg'
import hostel1 from '/src/images/hostel1.jpg'
import hostel3 from '/src/images/hostel3.jfif'



export default function Hostel() {
  return (
    
       <div>
      <div className=' d-flex  justify-content-end' style={{backgroundColor:'#c5e0e5',height:'55px' ,alignItems:'center'}}>
      <Link to='/Listform'> <button type="button" className="btn btn-success me-3 "> Add Hostel</button></Link>
      </div>
<div className='container'>
  <div className='row'>
      <div className=" clg-lg-3 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel2} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Hostel  in Delhibazar</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price:12000</li>
          <li className="list-group-item">Location:Delhibazar</li>
          <li className="list-group-item"> Double sitter</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>
      <div className=" clg-lg-6 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel3} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Hostel  in Satdobato</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price:10500</li>
          <li className="list-group-item">Location:Satdobato</li>
          <li className="list-group-item"> Three sitter</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>
      <div className=" clg-lg-9 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel1} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Hostel  in Baneshwor</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price:10000</li>
          <li className="list-group-item">Location:Baneshwor</li>
          <li className="list-group-item"> Double sitter</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>
      </div>
</div>


      

    </div>
  )
}
