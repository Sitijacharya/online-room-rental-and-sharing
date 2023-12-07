import React from 'react'
import { Link } from 'react-router-dom'
import picI from '/src/images/roomin.jpg'
import hostel2 from '/src/images/hostel2.jpg'
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign,faBuildingCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyPropertylist from '../Mycomponent/MyPropertylist'

export default function Myproperty() {

  const id = useSelector((state) => state.user.currentUser)._id;

  const [properties,setproperties] = useState([]);
  
  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios.get( `http://localhost:5000/api/properties?id=${id}`);
        setproperties(res.data);
        console.log(res.data);
      } catch(err) {console.log('error')}
    };
    getProperty();
  },[]);

console.log(properties)
const styles = {
  padding: "20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};
  return (
    <div>
       <section className='mt-4 justify-content' style={{borderBottom:'15px solid aliceblue',color:'green'}}>
              <div className='row'>
                
              <div className= '  mb-3' style={{marginLeft:'400px' , width:'300px',fontSize:'40px'}}> 

          
         My Properties
          </div>
          <div className= '  mb-3' style={{ fontSize:'30px', width:'200px',marginLeft:'240px'}}> 
          <Link to='/propertyform'> <button type="button" className="btn btn-success me-3 "> Add Your Properties</button></Link>

 </div>


          <div className= 'shadow  mb-3' style={{border:'solid #ccc',padding:'10px', borderRadius:'12px', width:'120px'}}> 

<FontAwesomeIcon icon={faBuildingCircleArrowRight} style={{fontSize:'30px',color:'red'}} />
<span style={{marginLeft:'20px',fontSize:'30px'}}>{properties.length}</span><br/>
</div>
              </div>
            
               </section>
       
      <section style={{borderBottom:'15px solid #ccc',borderTop:'15px solid aliceblue'}}></section>
      <div className='container mt-5'>
        <div className='row'>
    <div style={styles}>
       {
        properties.map((item) => <MyPropertylist item={item} user={id} key={item.id}/>)
       }
       </div>
       
      {/* <div className=" col-lg-3 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={picI} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Flat for rent in Bhaktapur</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: 7000</li>
          <li className="list-group-item">Location: Bhaktapur</li>
          <li className="list-group-item"> Single</li>
        </div>
        <Link to="/viewproperty" className="btn btn-success  mb-1 ">View </Link>
      

      </div> */}
      {/* <div className=" clg-lg-3 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel2} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Delhibazar Boys Hostel</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
        <li className="list-group-item">Min-Price:10000</li>
          <li className="list-group-item">Max-Price:13000</li>
          <li className="list-group-item">Location:Delhibazar</li>
          
        </div>

         <Link  to="/viewhostel" className="btn btn-success  mb-1 ">View </Link> 
        
      </div> */}
        </div>
      </div>

    </div>
  )
}