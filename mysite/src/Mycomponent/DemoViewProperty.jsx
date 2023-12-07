
import React  from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { MDBCarousel , MDBCarouselItem } from 'mdb-react-ui-kit';
import { useSelector } from "react-redux";
import Mapbox from './Mapbox'
import { sliderItems } from '../data'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

const Container = styled.div`
  height: 500px;
  width: 200vh;
  /* border: 2px solid red; */
  margin-left: 18px;
  margin-right: 20px;
`
const Container1 = styled.div`
  width: 65%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=>props.direction === 'left' && '10px'};
  right: ${props=>props.direction === 'right'  && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.75;
  z-index: 2;

  &:hover {
    opacity: 1;
    background-color: grey;
  }
`;



const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -60}vw);
`;

const Slide = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  /* padding-left: 115px; */
  padding-top: 20px;
`;

const Image = styled.img`
  height: 80%;
  width: 97%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function DemoViewproperty() {
  const user = useSelector((state) => state.user.currentUser)._id;
  const userDetails = useSelector((state) => state.user.currentUser);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [property, setProperty] = useState({});
  const [wishlistUser,setWishlistUser] = useState([])
  const [bookingUser,setBookingUser] = useState([])
  const [imagedata, setData] = useState([]);
  const [contact,setcontact] = useState(true);
  const [wishlistcheck,setwishlistcheck] = useState(true);
  const [booking,setbooking] = useState(true);

  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties/find/" + id);
        setProperty(res.data);
        // setData(res.data);
      } catch {}
    };
    getProperty();
  }, []);

  useEffect(()=> {
    const getWishlist = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/find/" + user)
        const res1 = res.data.wishlist
        const res2 = res.data.currentbooking

        setWishlistUser(res1)
        setBookingUser(res2)

      } catch {}
    };
    getWishlist();
  },[property])

  useEffect(()=> {
    wishlistUser.includes(property._id) ? setwishlistcheck(false) : setwishlistcheck(true);
    bookingUser.includes(property._id) ? setbooking(false) : setbooking(true);
  },[wishlistUser,bookingUser])

  console.log(property)
  let images = property?.img
  console.log(images)

  let propertydetails = {
    id : id
  }

  const handleclick = () => 
  {
    setcontact(false);
    console.log(contact)
    
  }

  const handlewishlist = () => {
    const addtowishlist = async () => {
      try {
        const res = axios.put('http://localhost:5000/api/users/wishlist/' + user , propertydetails)
      } catch(err) {"err"}
    }
    addtowishlist();
    setwishlistcheck(false);
  }

  const handlebooking = async () => {
    try{
      console.log(userDetails)
      const res1 = axios.put('http://localhost:5000/api/users/booking/'+ user , propertydetails)
      const res2 = axios.put('http://localhost:5000/api/properties/booking/' + property._id , userDetails)
      
    } catch(err) {"err"}
    setbooking(false)
  }

  
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === 'left') {
      setslideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0 );
    }
  }

  return (
    <div>
        <div className='container'  >
        <div className='row'>
        {/* <div className='col-lg-8 mt-2'>
                <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block  '
        itemId={1}
        // src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        // src={`/uploads/1678248617372--flat2.png`}
        src={images != undefined ? `/uploads/${images[0]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' }
        alt='...'
        style={{height:'cover '}}
      >
        {/* <h6>pict1</h6>
        <p>..</p> */}
      {/* </MDBCarouselItem> */}

      {/* <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        // src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        src={images != undefined ? `/uploads/${images[1]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' }
        alt='...'
      > */}
        
      {/* </MDBCarouselItem> */}

      {/* <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        // src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        src={images != undefined ? `/uploads/${images[2]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' }
        alt='...'
      > */}
        {/* <h5>pict3</h5>
        <p>..</p> */}
      {/* </MDBCarouselItem> */}
    {/* </MDBCarousel> */}
    {/* </div> */}

    <Container1>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>

          <Slide bg='white'>
            <ImgContainer>         
             <Image src={images != undefined ? `/uploads/${images[0]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' } />
            </ImgContainer>
          </Slide>

           <Slide bg='white'>
           <ImgContainer>         
            <Image src={images != undefined ? `/uploads/${images[1]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' } />
           </ImgContainer>
         </Slide>

         <Slide bg='white'>
            <ImgContainer>         
             <Image src={images != undefined ? `/uploads/${images[2]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' } />
            </ImgContainer>
          </Slide>
        
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}> 
        <ArrowRightOutlined />
      </Arrow>      
    </Container1>
        <div className='col-lg-4 mt-2' style={{backgroundColor:'aliceblue'}}>
                    <div  className=' mt-3' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',}}>
                        <h4 className='mt-3 mx-2 ' style={{color:'green'}}> <b>Room For Rent In {property.province}</b></h4><br/>
                        <h5 className='mx-4 mb-3'> <b>Location: {property.province}</b></h5>
                        <h5 className='mx-4 mb-3'><b> Price: Rs {property.price} </b></h5>
                     </div>
                     <div className='mt-5 mx-5'>
                      <div style={{display: 'flex'}}>
                      {contact ?
                     <button  onClick={handleclick} className="btn btn-success  mb-1 me-3 " style={{marginLeft: "30px"}}>Contact </button>
                      : 
                      <>
                      <button  onClick={handleclick} className="btn btn-success  mb-1 me-3 " style={{marginLeft: "20px"}}>{property.phoneno} </button>
                     </>
                      }

                      {wishlistcheck ?
                     <button onClick={handlewishlist} className="btn btn-primary  mb-1 " style={{marginLeft: "10px"}}>Add To My wishlist</button>
                     :
                     <button  className="btn btn-success  mb-1 me-3"  style={{marginLeft: "20px"}}>Added to Wishlist</button>
                      }
                    </div>
                      {booking ? 
                      <button onClick={handlebooking} className="btn btn-primary  mb-1 " style={{margin: "10px", marginLeft: "80px"}}>BOOKING</button>
                      :
                      <button  className="btn btn-success  mb-1 me-3 " style={{margin: "10px", marginLeft: contact ? "80px" : "100px"}}>BOOKED</button>
                      }
                     </div>

                    
    </div>
    </div>
</div>
<div className='mt-4'>
<nav>
  <div class="nav nav-tabs nav-justified" id="nav-tab" role="tablist" >
    <button class="nav-link active" id="nav-desc-tab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="true">Description </button>
    <button class="nav-link" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" type="button" role="tab" aria-controls="nav-info" aria-selected="false">Information</button>
    <button class="nav-link" id="nav-facility-tab" data-bs-toggle="tab" data-bs-target="#nav-facility" type="button" role="tab" aria-controls="nav-facility" aria-selected="false">Facilities and Amenities</button>
    <button class="nav-link" id="nav-cond-tab" data-bs-toggle="tab" data-bs-target="#nav-cond" type="button" role="tab" aria-controls="nav-condition" aria-selected="false">Condition</button>
    <button class="nav-link" id="nav-maps-tab" data-bs-toggle="tab" data-bs-target="#nav-maps" type="button" role="tab" aria-controls="nav-maps" aria-selected="false">Maps</button>
    <button class="nav-link" id="nav-comm-tab" data-bs-toggle="tab" data-bs-target="#nav-comm" type="button" role="tab" aria-controls="nav-comment" aria-selected="false">Comment</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab" tabindex="0">
  <p  className='mt-3 mb-3' style={{ fontSize:'23px',fontFamily:'inherit', lineHeight: '2', color: '#333', marginBottom: '20px',paddingLeft:'30px', paddingRight:'30px'}} >
        {/* <h4> */}
          {property.description} 
          {/* </h4> */}


    </p>
    
    </div>
  <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
  <table className=' mt-3 mx-5 me-3 mb-3' style={{fontFamily:'sans-serif',borderCollapse:'collapse',
width:'90%' }}>
  <tr>
    <td>Property Type</td>
    <td>{property.category}</td>
    
  </tr>
  <tr>
    <td>Ad.</td>
    <td>For Rent</td>
  </tr>

  <tr>
    <td>Property Address</td>
    <td>{property.location}</td>
  </tr>

 
  <tr>
    <td>Property Faced </td>
    <td>North</td>

  </tr>
  <tr>
    <td>Floor</td>
    <td>2nd storey house</td>
  </tr>
  <tr>
    <td>Bedrooms</td>
    <td>{property.bhk}</td>
  </tr>
  <tr>
    <td>Bathrooms</td>
    <td>{property.bhk}</td>
  </tr>
  <tr>
    <td>Kitchen</td>
    <td>{property.bhk}</td>
  </tr>
  <tr>
    <td>Hall</td>
    <td>2</td>
  </tr>

  <tr>
    <td>Furnished</td>
    <td>Not</td>
  </tr>


  
</table>

  
  
  </div>
  <div class="tab-pane fade" id="nav-facility" role="tabpanel" aria-labelledby="nav-facility-tab" tabindex="0">

  <table className=' mt-3 mx-5 me-3 mb-3' style={{fontFamily:'sans-serif',borderCollapse:'collapse',
width:'90%' }}>
  <tr>
    <td>Parking</td>
    <td>{property.parking}</td>
    <td> Bike Only </td>
  </tr>
  <tr>
    <td>Water Supply</td>
    <td>{property.watersupply}</td>
    <td> 24 hrs </td>
  </tr>
  <tr>
    <td>Electricity</td>
    <td>{property.electricity}</td>
    <td> Backup inverter/Solar also </td>
  </tr>
  <tr>
    <td>waste management</td>
    <td>{property.wastemanagement}</td>
    <td> - </td>
  </tr>

  <tr>
    <td>Lift/Escalator</td>
    <td> {property.lift}</td>
    <td> - </td>
  </tr>

  <tr>
    <td>Garden Acesss</td>
    <td>{property.garden}</td>
    <td> Open Space for Children </td>
  </tr>

  <tr>
    <td>Teracce Access</td>
    <td>{property.terrace}</td>
    <td> -</td>
  </tr>
</table>



  </div>
  <div class="tab-pane fade" id="nav-cond" role="tabpanel" aria-labelledby="nav-condition-tab" tabindex="0">
  <ul className='mt-3 mx-3'>
   <li> <h2 style={{color:'green'}}>For Tenants</h2></li>
   <ul  style={{listStyleType: 'square',fontSize:'160%'}}>
   <li> Employed : {property.tenantemployed}</li>
  <li>Married : {property.tenantmarried}</li>
  <li> Gender: {property.lookingfor}</li>
  <li>Pets: Not allowed</li>
   </ul>
  
  
</ul> 
</div>

<div class="tab-pane fade" id="nav-maps" role="tabpanel" aria-labelledby="nav-condition-maps" tabindex="0">
  
  <Container>
    {/* <Mapbox latitude={property.latitude} longitude={property.longitude} /> */}
    <Mapbox />
  </Container>
  {/* <h4 className='mt-3 mb-3 mx-5'> Kun Mandir Ma Janxau Yatri!!</h4> */}

</div>
<div class="tab-pane fade" id="nav-comm" role="tabpanel" aria-labelledby="nav-condition-comment" tabindex="0">
       
<div >

<div className="container mt-3 mb-3 contactContent" >
 <h1 className="text-left"> Add comment</h1>
 <div className="row mt-4">
   <div className="col-lg-4 mb-3 shadow" style={{ border:'3px solid #ccc',borderRadius:'10px'}}>
     <form>
       <input type="text" className="form-control mt-3 " placeholder="Name" required />
       <input type="email" className="form-control mt-3" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  required/>
       
       <div className="mb-3 mt-3">
         <textarea className="form-control" rows={5} id="comment" name="text" placeholder="Comment" defaultValue={""} />
       </div>
     </form>
     <button type="button" className="btn btn-success mt-3 mb-3 ">Submit</button>
   </div>


   <div className="col-lg-8  "  >
     <div className=" mt-10"  style={{marginLeft:'200px'}}>
         <p>comment1</p>
         <p>comment2</p>

     </div>
 </div>
</div>
</div>


</div>


</div>
</div>




   
    
</div>
    </div>
  )
}
