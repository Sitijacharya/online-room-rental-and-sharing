import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import man2 from '/src/images/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign,faUser,faBuildingCircleArrowRight,faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';


export default function Profile() {
  const [user,setuser] = useState();
  const id = useSelector((state) => state.user.currentUser)._id;
  const [check,setCheck] = useState(false);

  useEffect(() => {
    const getuser = async () => {
      try {
        const res = (await axios.get('http://localhost:5000/api/users/find/' + id)).data
        setuser(res)
        setCheck(true)
      } catch(err) {"error"}
    }
    getuser();
  },[])
  console.log(user)
  let ebno;
  user?.ebno === 'yes' ? ebno = 'Early Bird' : ebno = 'Nightowl'

  const handleclick = () => {
    window.location.href = '/profilereg'
  }
  return (
    <div>
            
      <nav className="navbar bg-body-tertiary fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> My Profile</a>

        {check && user.firstname == undefined && (<Navigate to='/profilereg'/>)}
          {/* {user?.firstname ? 
          <></>
          :
          <button className="btn btn-primary  mb-1 " onClick={handleclick}> Add Profile Details</button>
        } */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My Profile</h5>
              <button onClick={handleclick} className="btn btn-primary  mb-1 " id="offcanvasNavbarLabel">Update Profile</button> 
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/Profile'>Home</Link>
                </li>
                <li className="nav-item">

                  <Link className="nav-link" to="/Myproperty">My Property</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Wishlist">My Wishlist</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Bookings">My Bookings</a>
                </li>
              
              </ul>
             
            </div>
          </div>
        </div>
      </nav>
      {/* <div className='container mb-3 mt-2'>
        <div className='row'>
            <div className='col-lg-4'>
            <div className="col-md-7 mt-1 mx-3">
                        <img src={`uploads/${user?.photo}`} className="img-fluid rounded-start" alt="..."  style={{height:'200px'}}/>
                        </div>
            </div>
            <div className='col-lg-8'>
                <div className='row' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',height:'200px',lineHeight:'35px'}}>
                <div  className=' col-lg-6 mt-2 mb-3 ' >
            <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faUser} /><span style={{fontSize:'18px',marginLeft:'10px'}}>{user?.firstname} {user?.lastname}</span><br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faEnvelope} /><span style={{fontSize:'18px',marginLeft:'10px'}}>{user?.email}</span><br/>
                         <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',marginLeft:'10px'}}> {user?.district}</span> <br/>
                     

                        <FontAwesomeIcon className='mb-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px',marginLeft:'10px'}}>{user?.phoneno} </span> <br/>
                     </div> 
                    <div className='col-lg-4  mt-2 mb-3' style={{fontSize:'18px'}}>
                            Gender: {user?.gender} <br></br>
                            Age: {user?.age} yrs <br></br>
                            Occupation: {user?.occupation}
                    </div>
                </div>

          

            </div>
        </div>

      </div>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
                <h5 className='mt-5'>About me</h5>
                <div className='row' style={{lineHeight:'35px'}}>

                <div className='col-lg-5 mb-3'>
              Name <br/>
              Gender <br/>
              Age <br/>
              Occupation<br/>
              Smoker?<br/>
              Any pets?<br/>
              Early bird/Night Owl?<br/>
              Partying<br/>
              Alcoholic<br/>
              Married<br/>
              Veg<br/>

            </div>
            <div className='col-lg-5'>
            {user?.firstname} {user?.lastname}  <br/>
            {user?.gender} <br/>
            {user?.age}  yrs <br/>
            {user?.occupation}  <br/>
            {user?.smoker}  <br/>
            {user?.pets}  <br/>
             {ebno}<br/>
            {user?.partying}  <br/>
            {user?.alcoholic} <br/>
            {user?.married} <br/>
            {user?.veg} <br/>
            </div>
            
            
        
           
            </div>
            </div>
            </div>
   
            </div> */}


            {/* <section className='mb-3'>
        <div className='row'>
         
          <div className='mx-5 mt-2  mb-2  shadow' style={{border:'solid #ccc',padding:'10px', borderRadius:'5px', width:'200px'}}> 
          <Link to='/Myproperty'>
          <FontAwesomeIcon icon={faBuildingCircleArrowRight} style={{fontSize:'50px',color:'indigo'}} />
          </Link>
        <span style={{marginLeft:'22px',fontSize:'30px'}}>5</span><br/>
          My Properties
          </div>
      
         
          <div className='mx-5 mt-2  mb-2  shadow' style={{border:'solid #ccc',padding:'10px', borderRadius:'5px', width:'200px'}}> 
          <Link to='/Mywishlist'>

          <FontAwesomeIcon icon={faHeartCircleCheck} style={{fontSize:'50px',color:'red'}} />
          </Link> 
          <span style={{marginLeft:'22px',fontSize:'30px'}}>3</span><br/>

          My favourite
          </div>

        </div>
      </section> */}
      <section  style={{borderBottom:'25px solid aliceblue',borderTop:'25px solid aliceblue',backgroundColor:''}}>
           
        <div className="container pt-4">
          <div style={{ display: 'flex' ,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <h1 className="text-center" style={{flex: '1'}}>About Me</h1>
          <div className='mx-5 mt-2  mb-2  shadow' style={{border:'solid #ccc',padding:'10px', borderRadius:'5px', width:'200px'}}> 
          <Link to='/Myproperty'>
          <FontAwesomeIcon icon={faBuildingCircleArrowRight} style={{fontSize:'50px',color:'indigo'}} />
          </Link>
        <span style={{marginLeft:'22px',fontSize:'30px'}}></span><br/>
          My Properties
          </div>
      
         
          <div className='mx-5 mt-2  mb-2  shadow' style={{border:'solid #ccc',padding:'10px', borderRadius:'5px', width:'200px'}}> 
          <Link to='/wishlist'>

          <FontAwesomeIcon icon={faHeartCircleCheck} style={{fontSize:'50px',color:'red'}} />
          </Link> 
          <span style={{marginLeft:'22px',fontSize:'30px'}}>{user?.wishlist.length}</span><br/>

          My favourite
          </div>

          </div>
          <div className="row mt-4">
            <div className="col-lg-4">
           
            <div className="col-md-7 mt-1 mx-3" >
                        <img src={`/uploads/${user?.photo}`} className="img-fluid rounded-start" alt="..."  style={{height:'200px'}}/>
                        </div>
            </div>
            <div className="col-lg-8">
              
              <div className="row mt-3" style={{lineHeight:'50px'}}>
                <div className="col-md-6">
                
                   <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faUser} /><span style={{fontSize:'18px',marginLeft:'10px'}}>{user?.firstname} {user?.lastname}</span><br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faEnvelope} /><span style={{fontSize:'18px',marginLeft:'10px'}}>{user?.email}</span><br/>
                         <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',marginLeft:'10px'}}> {user?.district}</span> <br/>
                     

                        <FontAwesomeIcon className='mb-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px',marginLeft:'10px'}}>{user?.phoneno} </span> <br/>
                </div>
                <div className="col-md-6">
               
                          
                          
                  <ul style={{fontSize:'18px'}}>
                    <li> Gender: {user?.gender.slice(0,1).toUpperCase() + user?.gender.slice(1, user?.gender.length)}</li>
                    <li>Age: {user?.age}</li>
                    <li>Occupation: {user?.occupation.slice(0,1).toUpperCase() + user?.occupation.slice(1, user?.occupation.length)}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div></section>
        <table className=' mt-2 mx-5 me-3 mb-2' style={{fontFamily:'sans-serif',borderCollapse:'collapse', fontSize: '40',
width:'90%' }}>
  <tr>
    <td style={{fontSize: '20px'}}>Name</td>
    <td style={{fontSize: '20px'}}>{user?.firstname.slice(0,1).toUpperCase() + user?.firstname.slice(1, user?.firstname.length)} {user?.lastname}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Gender</td>
    <td style={{fontSize: '20px'}}>{user?.gender.slice(0,1).toUpperCase() + user?.gender.slice(1, user?.gender.length)}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Age</td>
    <td style={{fontSize: '20px'}}>{user?.age}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Occupation</td>
    <td style={{fontSize: '20px'}}>{user?.occupation.slice(0,1).toUpperCase() + user?.occupation.slice(1, user?.occupation.length)}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Smoker?</td>
    <td style={{fontSize: '20px'}}>{user?.smoker.slice(0,1).toUpperCase() + user?.smoker.slice(1, user?.smoker.length)}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Any pets?</td>
    <td style={{fontSize: '20px'}}>{user?.pets.slice(0,1).toUpperCase() + user?.pets.slice(1, user?.pets.length)}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}> Early bird/Night Owl?</td>
    <td style={{fontSize: '20px'}}>{ebno}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Partying</td>
    <td style={{fontSize: '20px'}}>{user?.partying.slice(0,1).toUpperCase() + user?.partying.slice(1, user?.partying.length)}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Alcoholic</td>
    <td style={{fontSize: '20px'}}>{user?.alcoholic.slice(0,1).toUpperCase() + user?.alcoholic.slice(1, user?.alcoholic.length)}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Married</td>
    <td style={{fontSize: '20px'}}>{user?.married.slice(0,1).toUpperCase() + user?.married.slice(1, user?.married.length)}</td>
  </tr>
  <tr>
    <td style={{fontSize: '20px'}}>Veg</td>
    <td style={{fontSize: '20px'}}>{user?.veg.slice(0,1).toUpperCase() + user?.veg.slice(1, user?.veg.length)} </td>
  </tr>

 
</table>
     
        

    </div>
  )
}