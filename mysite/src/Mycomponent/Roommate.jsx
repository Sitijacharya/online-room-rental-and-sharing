import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const Roommate = ({item}) => {
  console.log(item)
  let gender = item.pgender
  gender = gender.charAt(0).toUpperCase() + gender.slice(1)

  let municipalityorvdc = item.municipalityorvdc
  municipalityorvdc = municipalityorvdc.charAt(0).toUpperCase() + municipalityorvdc.slice(1)
   
  return (
    <div>
       <div className='col-lg-6 mt-3'>
        <div className="card mb-3 bs" style={{minWidth: '500px' ,maxWidth: '600px',height:'3000x'}}>
        <div className="row g-0">
          <div className="col-md-4" style={{ position: 'relative'}}>
            {/* <img src="img_avatar.png" className="img-fluid rounded-start" alt="..." /> */}
            <img style={{objectFit: 'cover'}} src={`uploads/${item.photo}`} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.type} Required In {item.district} </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>{municipalityorvdc}, {item.district}</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}> {item.price}</span>
              <div style={{fontSize:'18px'}}> Looking For: {gender}</div>
              <div style={{fontSize:'18px'}}> Type: {item.type}  <a  href={`/viewmate/${item._id}`} className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</a>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Roommate
