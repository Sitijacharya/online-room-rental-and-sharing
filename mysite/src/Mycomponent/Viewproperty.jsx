
import React ,{ useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { sliderItems } from '../data'


  import {
    
    MDBCarousel,
    MDBCarouselItem,
    
  } from 'mdb-react-ui-kit';

  const Container = styled.div`
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
  padding-left: 115px;
  padding-top: 20px;
`;

const Image = styled.img`
  height: 80%;
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
export default function Viewproperty() {

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
        <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (         
          <Slide bg={item.bg}>
            <ImgContainer>         
             <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}> 
        <ArrowRightOutlined />
      </Arrow>      
    </Container>
  
        <div className='col-lg-4 mt-2' style={{backgroundColor:'aliceblue'}}>
                    <div  className=' mt-3' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',}}>
                        <h4 className='mt-3 mx-2 ' style={{color:'green'}}> <b>Room For Rent In Satbobato</b></h4><br/>
                        <h5 className='mx-4 mb-3'> <b>Location: Satdobato</b></h5>
                        <h5 className='mx-4 mb-3'><b> Price: Rs 100000 </b></h5>
                     </div>
                     <div className='mt-5 mx-5'>
                     <Link to="/" className="btn btn-success  mb-1 me-3 ">Contact </Link>
                     <Link to="/" className="btn btn-primary  mb-1 ">Add To My wishlist</Link>
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
    <p style={{fontFamily:'sans-serif'}}>
        <h4> A house with 1 floor is built in an area of 3.1 aana is located at Suryabinayak, Bhaktapur, and is available for sale. <br/>It is 1 km far from Arniko Highway, Suryabinayak Chowk. It has faced towards the south direction and has road access of 13 feet.
        
        Located In Manjri B.K, Taluka Haveli,<br/> 
        These Semi/Fully-Equipped Co-Living Studios And 1 BHKs Feature All Basic Amenities And An Exclusive Game Room For Its Residents.<br/>
         With Rent Starting At Just ₹5,500/ Bed, You Can Share Your Space With A Friend Or Live By Yourself. <br/>
         Away From The Chaos Of Setting Up A House Or Paying A Huge Sum As Security Deposit, Enjoy The Perks Of Living In A Comfy Home. </h4>


    </p>
    
    </div>
  <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
  <table className=' mt-3 mx-5 me-3 mb-3' style={{fontFamily:'sans-serif',borderCollapse:'collapse',
width:'90%' }}>
  <tr>
    <td>Property Type</td>
    <td>Room</td>
    
  </tr>
  <tr>
    <td>Ad.</td>
    <td>For Rent</td>
  </tr>

  <tr>
    <td>Property Address</td>
    <td>Satdobato</td>
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
    <td>2</td>
  </tr>
  <tr>
    <td>Bathrooms</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Kitchen</td>
    <td>2</td>
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
    <td>Available</td>
    <td> bike only </td>
  </tr>
  <tr>
    <td>Water Supply</td>
    <td>Available</td>
    <td> 24 hrs </td>
  </tr>
  <tr>
    <td>Electricity</td>
    <td>Available</td>
    <td> Backup inveter/solor also </td>
  </tr>
  <tr>
    <td>waste management</td>
    <td>Available</td>
    <td> - </td>
  </tr>

  <tr>
    <td>Lift/Escalator</td>
    <td> Not Available</td>
    <td> - </td>
  </tr>

  <tr>
    <td>Garden Acesss</td>
    <td>Available</td>
    <td> open space for children </td>
  </tr>

  <tr>
    <td>Teracce Access</td>
    <td>Available</td>
    <td> -</td>
  </tr>
</table>



  </div>
  <div class="tab-pane fade" id="nav-cond" role="tabpanel" aria-labelledby="nav-condition-tab" tabindex="0">
  <ul className='mt-3 mx-3'>
   <li> <h2 style={{color:'green'}}>For Tenants</h2></li>
   <ul  style={{listStyleType: 'square',fontSize:'160%'}}>
   <li> Employed : yes</li>
  <li>Married : Any /No/Yes</li>
  <li> Gender: Any</li>
  <li>Pets: Not allowed</li>
   </ul>
  
  
</ul> 
</div>

<div class="tab-pane fade" id="nav-maps" role="tabpanel" aria-labelledby="nav-condition-maps" tabindex="0">

    <h4 className='mt-3 mb-3 mx-5'> Kun Mandir Ma Janxau Yatri!!</h4>

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
