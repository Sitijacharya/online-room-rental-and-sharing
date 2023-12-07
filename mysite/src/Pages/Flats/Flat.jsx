import React from 'react'
import { Link } from 'react-router-dom'
import flat31 from '/src/images/flat31.jpg'
import flat32 from '/src/images/flat32.jpg'
import flat33 from '/src/images/flat33.jpg'


import Listform from '../../Mycomponent/Listform'
export default function Flat() {
  return (
    
       <div>
      <div className=' d-flex  justify-content-end' style={{backgroundColor:'#c5e0e5',height:'55px' ,alignItems:'center'}}>
      <Link to='/Listform'> <button type="button" className="btn btn-success me-3 "> Add Flat/Appartment</button></Link>
      </div>
<div className='container'>
  <div className='row'>
      <div className=" clg-lg-3 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={flat31} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Flat for rent in Nakhipot</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: Rs 15000</li>
          <li className="list-group-item">Location: Nakhipot</li>
          <li className="list-group-item"> BHK: 1</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>
      <div className=" clg-lg-6 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={flat32} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Flat for rent in Kritipur</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price:Rs 45000</li>
          <li className="list-group-item">Location: Kirtipur</li>
          <li className="list-group-item"> BHK: 2</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>
      <div className=" clg-lg-9 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={flat33} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Flat for rent in Kalanki </h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: Rs 30000</li>
          <li className="list-group-item">Location: Kalanki</li>
          <li className="list-group-item"> BHK: 2</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>
</div>


      </div>

    </div>
  )
}
