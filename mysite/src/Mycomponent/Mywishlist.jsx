import React from 'react'
import { Link } from 'react-router-dom'
import picI from '/src/images/roomin.jpg'
import hostel2 from '/src/images/hostel2.jpg'
import man2 from '/src/images/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from 'axios'
import { Modal, Button } from "react-bootstrap";


const Mywishlist = ({item,userid}) => {
  const user = useSelector((state) => state.user.currentUser).wishlist;
  console.log(user)
  
let property  = {
  id : item._id
}

const [showModal,setShowModal] = useState(false);

const hideModal = () => {
  setShowModal(false);
}

const handleClickDelete = () => {
  setShowModal(true);
}

const handleDelete = async () => {
  
  try 
  {
    console.log(item._id)
    const res = await axios.put("http://localhost:5000/api/users/deletewishlist/" + userid, property );
    window.location.reload(true);
  } 
  catch(err) {};

  setShowModal(false);

}
  return (
    <div>
       <Modal show={showModal} onHide={hideModal} style={{display: 'flex', justifyContent: 'center',  alignItems: 'center', marginTop: '300px'}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">Are you sure you want to Delete this Property?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className=" col-lg-3 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={`/uploads/${item.img[0]}`} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">{item?.category} for rent in {item?.province}</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Type: {item?.category}</li>
          <li className="list-group-item">Location: {item?.district}</li>
          <li className="list-group-item">Price: {item?.price}</li>
        </div>
        <div className='row'>
        <Link to={`/property/${item._id}`} className="btn btn-success mt-1  mb-1 " style={{width:'168px',marginLeft:'15px'}}>View </Link>
        <button onClick={handleClickDelete} type="button" className="btn btn-danger mt-1 mb-1" style={{width:'168px',marginLeft:'5px'}}>Remove</button>
        </div>
      

      </div>
    </div>
  )
}

export default Mywishlist
