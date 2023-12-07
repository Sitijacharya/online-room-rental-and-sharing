import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react';
import { sliderItems } from '../data'
import './BookingDetails.css'
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Container = styled.div`
  display: flex;
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
`
const Container1 = styled.div`
  width:50%;
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
  width: 55px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -47}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
  background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  padding-left: 100px;
  padding-top: 20px;
`;

const Image = styled.img`
  height: 80%;
  /* width: 97%; */
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

const BookingDetails = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  
  const [property,setProperty] = useState([]);
  const [booking,setBooking] = useState([]);
  const [bookedusers,setBookedUsers] = useState([]);
  const [display,setDisplay] = useState(false)

  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties/find/" + id);
        setProperty(res.data);
        const book = res.data.currentbookings
        console.log(book)
        setBooking(book)
      } catch {}
    };
    getProperty();
  }, []);

  useEffect(() => {
    booking.map((item) => {
      const getData = async () => {
        const res = await axios.get('http://localhost:5000/api/users/find/' + item)
        const res1 = res.data
        setBookedUsers(bookedusers => [...bookedusers, res1]);
      }
      getData();
    })
    console.log(bookedusers)
  },[booking])

  useEffect(()=> {
    console.log(bookedusers)
    setDisplay(true)
  },[bookedusers])

  let images = property?.img
  const array = [1,2,3]
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === 'left') {
      setslideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0 );
    }
  }
  return (
    <Container>
    <Container1>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* {sliderItems.map(item => (         
          <Slide bg='#25c481'>
            <ImgContainer>         
             <Image src={item.img} />
            </ImgContainer>
          
          </Slide>
        ))} */}

          <Slide bg='#25c481'>
            <ImgContainer>         
             <Image src={images != undefined ? `/uploads/${images[0]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' } />
            </ImgContainer>
          </Slide>

           <Slide bg='#25c481'>
           <ImgContainer>         
            <Image src={images != undefined ? `/uploads/${images[1]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' } />
           </ImgContainer>
         </Slide>

         <Slide bg='#25c481'>
            <ImgContainer>         
             <Image src={images != undefined ? `/uploads/${images[2]}` : 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' } />
            </ImgContainer>
          </Slide>
          
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}> 
        <ArrowRightOutlined />
      </Arrow>     
    </Container1>
    <section>
    <h1>BOOKING DETAILS</h1>
  <div className="tbl-header">
    <table cellPadding="0" cellSpacing="0" border="0">
      <thead>
        <tr>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>CONTACT</th>
          <th>LINK</th>
        </tr>
      </thead>
      <tbody>
     {bookedusers.map((item) => (
        <tr>
          <td>{item.firstname}</td>
          <td>{item.lastname}</td>
          <td>{item.email}</td>
          <td>{item.phoneno}</td>
          <td> <button className="btn btn-primary  mb-1 ">PROFILE</button></td>
       </tr>
      ))}
     </tbody>
     </table>

        {/* {display && array.map((item) => {
          <>
           <tr>
            <td>Zenith</td>
            <td>Maharjan </td>
            <td>zmchaos@gmail.com</td>
            <td>Kathmandu</td>
            <td><button>LINK</button></td>
           </tr>
           </>
         }) }       
          */}
     
    
  </div>
  </section>
    </Container>
  )
}

export default BookingDetails
