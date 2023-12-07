import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Propertylist from './PropertyList'

export default function Mysearch() {
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("Room");
  const [district,setDistrict] = useState("Kathmandu");
  const [boolean,setboolean] = useState(false);
  const [filters,setFilters] = useState('');
  

  console.log(filters);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(20);
    setboolean(true);
     <Propertylist cat="Room" />
  }

  return (
    <div className=' flex' style={{width:'100%',
    height:'550px',
    backgroundSize:'cover',
    
    }}>
 
  <form className='container mt-10' style={{display:'flex' ,backgroundColor:'#e9e9e9',
  translate:'0px 250px'

  }}>
      
      <input className="form-control mt-3 mb-3 fixed mx-1" type="search" placeholder="Search" aria-label="Search"  />

      <select id="options" name="district" className='mt-3 mb-3 mx-1' onChange={(e) => setFilters(e.target.value)} style={{ width:'500px'}}>
      <option value="location">Location</option>
      <option value="kathmandu">Kathmandu</option>
      <option value="Lalitpur">Lalitpur </option>
      <option value="Bhaktapur">Bhaktapur </option>
      
    </select>
    <select id="options" name="options" className='mt-3 mb-3 mx-1 ' onChange={(e) => setCategory(e.target.value)} style={{ width:'500px'}}>
      <option value="option1">All categories</option>
      <option value="option2">Room</option>
      <option value="option3">hostel </option>
      <option value="option4">Flat </option>
      <option value="option5">Roomates </option>
    </select>
                <button className="btn btn-outline-success  me-1 mt-3 mb-3 mx-1 " type="submit " onClick={handleSubmit} style={{ width: '100px',color:'black' }}>Search</button>
      </form> 


</div>

    

  )
}
