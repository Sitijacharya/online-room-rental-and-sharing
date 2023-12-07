import React from 'react'
import Room from '../Pages/Rooms/Room'
import Flat from '../Pages/Flats/Flat'
import Hostel from '../Pages/Hostels/Hostel'
import { Link } from 'react-router-dom'

export default function Subhead() {
  return (
    <>
   
    <div  className='bg-dark'>
                <ul className="nav nav-tabs nav-justified  ">
       
       <li className="nav-item  subtab  "   >
         <a className="nav-link  " style={{color:'white'}} href="/Properties/Room">Rooms</a>
       </li>
       <li className="nav-item subtab"  >
         <a className="nav-link " style={{color:'white'}} href="/Properties/Flat">Flat/apartments</a>
       </li>
       <li className="nav-item subtab" >
         <a  className="nav-link" style={{color:'white'}} href="/Properties/Hostel">Hostels</a>
       </li>
      
       <li className="nav-item subtab" >
         <a className="nav-link" style={{color:'white'}} href="/Roommate">Roommate</a>
       </li>
       </ul>
        </div>



        </>
  )
}
