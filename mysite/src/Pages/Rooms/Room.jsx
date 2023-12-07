import React from 'react'
import axios from 'axios';
import Listform from '../../Mycomponent/Listform';
import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react';
import Viewproperty from '../../Mycomponent/Viewproperty';

import picI from '/src/images/roomin.jpg'
import room21 from '/src/images/room21.jpg'

import room22 from '/src/images/room22.jpg'

import AddRoom from './AddRoom'
export default function Room() {
  const [data, setData] = useState([])

  const[rooms,setRooms]=useState()
  const[loading,setLoading]=useState()
  const[error,setError]=useState()
  useEffect(() =>{
    async function fetchData() {
      try {
        setLoading(true)
        const {data: response}= await axios.get('/api/rooms/getallrooms');
        setData(response)
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        
        setLoading(false);
      }
    }
  
  
fetchData()
  },
 []);

 
  
  return (
    <div >
<div >
      <div className='  d-flex  justify-content-end' style={{backgroundColor:'#c5e0e5',height:'55px' ,alignItems:'center'}}>
      <Link to='/Listform'> <button type="button" className="btn btn-success me-3 "> Add Room</button></Link>
      </div>
<div className='container '>
  <div className='row'>
      <div className=" col-lg-3 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={picI} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Room for rent in Bhaktapur</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: 7000</li>
          <li className="list-group-item">Location: Bhaktapur</li>
          <li className="list-group-item"> Single</li>
        </div>
        <Link to="/viewproperty" className="btn btn-success  mb-1 ">View </Link>
      

      </div>
      <div className=" col-lg-6 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={room21} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Room for rent in Satdobato</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: Rs 6000</li>
          <li className="list-group-item">Location: Satdobato</li>
          <li className="list-group-item"> Single</li>
        </div>
        <Link to="/viewproperty" className="btn btn-success  mb-1 ">View </Link>
      

      </div>
      <div className=" col-lg-9 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={room22} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Room for rent in Patan</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: Rs 12000</li>
          <li className="list-group-item">Location: Patan</li>
          <li className="list-group-item"> Double</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
      

      </div>
</div>

      </div>
</div>

      

    </div>
  )
}
