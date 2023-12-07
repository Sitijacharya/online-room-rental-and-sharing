import React from 'react'
import login from './Login'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Room from '../Pages/Rooms/Room'
import Flat from '../Pages/Flats/Flat'
import Hostel from '../Pages/Hostels/Hostel'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../redux/userRedux"

export default function Header() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/'
  }

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

  return (
        <header >
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
          <Link className="navbar-brand" to="/">GharDera</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li> 
              
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" to="/Room">Room</Link></li>
            <li><Link className="dropdown-item" to="/Flat">Flat/appartment</Link></li>
            
            <li><Link className="dropdown-item" to="/Hostel">Hostels</Link></li>
            <li><a className="dropdown-item" href="#">Roommates</a></li>
          </ul>
          </li>

             <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
             
              
            </ul>
            
      
      
    
            {user ? <>
           <h2> <a href='/profile' style={{color: isHover ? '#87194c' : 'White',
                                          textDecoration: 'none',
                                          WebkitTextStrokeWidth: isHover ? '0.5px ' : '0px',
                                          WebkitTextFillColor: isHover ? '#198754' : 'white'
                                          }} 
                                          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 

              Welcome, {user?.username.slice(0,1).toUpperCase() + user?.username.slice(1, user?.username.length)}! 
            </a> </h2>
            <button className="btn btn-outline-success mx-2 " type="submit" onClick={handleLogout}>Logout</button> 
            </> : <>
            <button className="btn btn-outline-success mx-2 " type="submit"> <Link to="/Register " className="nav-link" >Sign up</Link></button>

            <button className="btn btn-outline-success " type="submit"> <Link to="/Login " className="nav-link" >Login</Link></button>
            </>
          }
          </div>
        </div>
      </nav>
      </header>
    
  )
}
