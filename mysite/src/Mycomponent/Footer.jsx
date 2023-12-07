import React from 'react'
import Room from '../Pages/Rooms/Room'
import Flat from '../Pages/Flats/Flat'
import Hostel from '../Pages/Hostels/Hostel'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    
       <footer  >
      <div className="container ">
        <div className="row">
          
          <div className="col-md-3">
            <h3>GharDera</h3>
            <p>you can rent the room,appartment ,and hostel and also you can search for roomates.</p>
          </div>

          <div className="col-md-3">
            <h3>Services</h3>
            <ul>
              <li><Link to="/Room" className="text-reset">Room</Link></li>
              <li><Link to="/Flat" className="text-reset">Flat/Apartment</Link></li>
              <li><Link to="/Hostel" className="text-reset">Hostel</Link></li>
              <li><a href="#!" className="text-reset">Roommate</a></li>
              
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Social</h3>
            <ul className="social-links">
              <li><a href="#!"><i className="fab fa-twitter"> </i></a> Twitter</li>
              <li><a href="#!"><i className="fab fa-facebook"> </i></a>Facebook</li>
              <li><a href="#!"><i className="fab fa-instagram"> </i></a>Instragram</li>
             
            </ul>
          </div>

          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul className="contact-links">
                <li><i className="fas fa-home " /> lalitpur-14,ramailotar</li>
                <li> <i className="fas fa-envelope  " />
                info@myapp.com </li>
              <li><i className="fas fa-phone  " /> + 01 234567</li>
              <li><i className="fas fa-print " /> + 01 567890 </li>
            </ul>
           
            </div>
            </div>
            </div>
            <div className='text-center'> Copyright © 2022 GharDera.com - All Rights Reserved</div>

      

            </footer>
            
  )
}

export default Footer

