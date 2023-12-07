import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign,faUser } from '@fortawesome/free-solid-svg-icons';
import {
    
    MDBCarousel,
    MDBCarouselItem,
    
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function viewmates() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [roommate, setroommate] = useState({});

  useEffect(() => {
    const getroommate = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/forms/find/" + id);
        setroommate(res.data);
        // setData(res.data);
      } catch(err) {err}
    };
    getroommate();
  }, []);

  console.log(roommate)
  let room = roommate?.roomphoto
  console.log(room)
  // console.log(room[0])
  return (
    <div style={{backgroundColor:'aliceblue'}}   >
      
            <div className='container ' >
            <h2 className='mt-1' style={{marginLeft:'200px'}}>{roommate.type} Required In {roommate.district} </h2>

                <div className='row'>
                    <div className='col-lg-3' >
                        <div className="col-md-4 mt-3 mx-3" >
                        {/* <img src="img_avatar.png" className="img-fluid rounded-start" alt="..." /> */}
                        <img style={{objectFit : 'contain' }} src={`/uploads/${roommate.photo}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <h5 style={{fontWeight: '400'}}>      <br/>
                        {roommate.desc}</h5>
                       </div>
                    <div className='col-lg-4 mt-2' >
                    <div  className=' mt-2 mb-3 bs' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',height:'200px',lineHeight:'35px'}}>
                         <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',marginLeft:'10px'}}> {roommate.municipalityorvdc}</span> <br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faRupeeSign} /><span style={{fontSize:'18px',marginLeft:'10px'}}> {roommate.price}</span> <br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faUser} /><span style={{fontSize:'18px',marginLeft:'10px'}}> {roommate.name}</span><br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faEnvelope} /><span style={{fontSize:'18px',marginLeft:'10px'}}> {roommate.email}</span><br/>

                        <FontAwesomeIcon className='mb-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px',marginLeft:'10px'}}> {roommate.phoneno} </span> <br/>
                     </div>              
                 </div>

                </div>

            </div>
            

    

              <div style={{backgroundColor:'aliceblue'}}>
        <div className='container'  >
        <div className='row'>
        <div className='col-lg-8 mt-2'>
                <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block  '
        itemId={1}
        // src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        src={room != undefined ? `/uploads/${roommate?.roomphoto[0]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'}
        alt='...'
        style={{height:'cover '}}
        
      >
  
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        // src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        src={room != undefined ? `/uploads/${roommate?.roomphoto[1]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'}

        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        // src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        src={room != undefined ? `/uploads/${roommate?.roomphoto[2]}` :'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'}
      >
    
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
        <div className='col-lg-4 mt-2' >
                    <div  className=' mt-3 mb-3' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',}}>
                        <h5 className='mt-3 mx-3 ' > Room Ammenities And Facilities</h5><br/>
                        <ul style={{marginLeft:'20px',fontSize:"18px"}}>
                            <li><span style={{fontWeight:' 500'}}> Bedroom: </span> {roommate.bedroom}</li>
                            <li><span style={{fontWeight:' 500'}}> Bathroom:</span> {roommate.bathroom}</li>
                            <li><span style={{fontWeight:' 500'}}> Kitchen: </span>{roommate.kitchen} </li>
                            <li><span style={{fontWeight:' 500'}}> Parking:</span> {roommate.parking}</li>
                            <li><span style={{fontWeight:' 500'}}> Garden/Terrace: </span>{roommate.gardenorterrace}</li>
                            <li><span style={{fontWeight:' 500'}}> Furnishing:</span> {roommate.furnishing}</li>
                            <li><span style={{fontWeight:' 500'}}> Wifi: </span>{roommate.wifi}</li>
                            <li><span style={{fontWeight:' 500'}}> Electricity: </span>{roommate.electricity}</li>
                            <li><span style={{fontWeight:' 500'}}> Watersupply: </span>{roommate.watersupply}</li>

                        </ul>
                     </div>

                    
    </div>
    </div>
</div>
</div>
      
      <section style={{backgroundColor:'aliceblue'}}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
                <h5 className='mt-3' style={{color: '#198754'}}>About me</h5>
                <div className='row' style={{lineHeight:'35px'}}>

                <div className='col-lg-5 mb-3' style={{fontWeight : '600'}}>
              Name <br/>
              Gender <br/>
              Age <br/>
              {/* Occupation<br/> */}
              Smoker?<br/>
              Any pets?<br/>
              Early bird/Night Owl?<br/>
              Partying<br/>
              Alcoholic<br/>
              Married<br/>
              Veg<br/>
            </div>
            <div className='col-lg-5'>
              {roommate.name}<br/>
              {roommate.gender?.slice(0,1).toUpperCase() + roommate.gender?.slice(1, roommate.gender?.length)}<br/>
              {/* {roommate.gender}<br/> */}
              {roommate.age} yrs <br/>
              {/* {roommate.occupation} <br/> */}
              No <br/>
               No <br/>
               Night Owl<br/>
              Yes <br/>
              Non-Alcoholic<br/>
               No<br/>
               Yes<br/>
            </div>
            
            
        
           
            </div>
            </div>
            <div className='col-lg-6'>
            <h5 className='mt-3' style={{color: '#198754'}}>Roommate Preferences</h5>
                <div className='row' style={{lineHeight:'35px'}}>

                <div className='col-lg-5 mb-3' style={{fontWeight : '600'}} >
              
              Gender <br/>
               Min-Age <br/>
               Max-Age <br/>

              Occupation<br/>
              Smoker?<br/>
              Pets?<br/>
              Early bird/Night Owl?<br/>
              Partying<br/>
              Alcoholic<br/>
              Married<br/>
              Veg<br/>

            </div>
            <div className='col-lg-5'>
            
              {roommate.pgender?.slice(0,1).toUpperCase() + roommate.pgender?.slice(1, roommate.pgender?.length)} <br/>
              {roommate.minage} yrs <br/>
              {roommate.maxage} yrs<br/>
              {roommate.poccupation?.slice(0,1).toUpperCase() + roommate.poccupation?.slice(1, roommate.poccupation?.length)}<br/>
              {roommate.psmoker?.slice(0,1).toUpperCase() + roommate.psmoker?.slice(1, roommate.psmoker?.length)}<br/>
              {roommate.ppets?.slice(0,1).toUpperCase() + roommate.ppets?.slice(1, roommate.ppets?.length)}<br/>
              {roommate.pebno?.slice(0,1).toUpperCase() + roommate.pebno?.slice(1, roommate.pebno?.length)}<br/>
              {roommate.ppartying?.slice(0,1).toUpperCase() + roommate.ppartying?.slice(1, roommate.ppartying?.length)}<br/>
              {roommate.palcoholic?.slice(0,1).toUpperCase() + roommate.palcoholic?.slice(1, roommate.palcoholic?.length)}<br/>
              {roommate.pmarried?.slice(0,1).toUpperCase() + roommate.pmarried?.slice(1, roommate.pmarried?.length)}<br/>
              {roommate.pveg?.slice(0,1).toUpperCase() + roommate.pveg?.slice(1, roommate.pveg?.length)}<br/>
            </div>
            
            
        
           
            </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
            
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
      </section>

    </div>
  )
}