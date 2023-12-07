import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import Roommates from "../Mycomponent/Roommate";
import axios from 'axios';
import styled from "styled-components";
import { useSelector } from "react-redux";

const SeachContainer = styled.div`
position: absolute;
  top: 24%;
  left: 50%;
  width: 350px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);
  background: #fff;
  transition: all 0.3s ease;
  border: 1px solid lightgray;
`

const Searches = styled.input`
position: absolute;
  top: 10px;
  left: 38px;
  font-size: 14px;
  background: none;
  color: #5a6674;
  width: 195px;
  height: 20px;
  border: none;
  appearance: none;
  outline: none;
`

const FilterContainer = styled.div`
margin-top: 44px;
margin-left: 100px;
margin-right: 100px;
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;


export default function Roommate() {

  const user = useSelector((state) => state.user.currentUser);
  console.log(user)

  const [original,setoriginal] = useState([]);
  const [roommate,setroommate] = useState([]);
  const [filteredRoommate,setfilteredRoommate] = useState([]);
  const cat = "hostel"
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [query, setQuery] = useState("");

  const keys = ["province","district"]

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };


  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  useEffect(() => {
    const getRoommate = async () => {
      try {
        const res = await axios.get( 'http://localhost:5000/api/forms');
        setoriginal(res.data);
        console.log(res.data);
        
      } catch(err) {console.log(err)}
    };
    getRoommate();
  },[cat]);

  useEffect(() => {
    const Roommatematcher = () => {
      console.log(original)
      original.map((item) =>{ 
        let profile = [];

      console.log(item)
      
      if ( user.gender === item.pgender.toLowerCase())
      {
        profile.push(user.gender)
      }

      if (item.minage <= user.age && user.age <= item.maxage )
      {
        profile.push(user.age)
      }

      if( user.alcoholic.toLowerCase() === item.palcoholic.toLowerCase()) 
      {
        profile.push(user.alcoholic)
      }

      if(user.ebno.toLowerCase() === item.pebno.toLowerCase())
      {
        profile.push(user.ebno)
      }
      
      if (user.married.toLowerCase() === item.pmarried.toLowerCase()) 
      {
        profile.push(user.married)
      }

      if(user.partying.toLowerCase() === item.ppartying.toLowerCase()) {
        profile.push(user.partying)
      }

      if(user.occupation.toLowerCase() === item.poccupation.toLowerCase()) {
        profile.push(user.occupation)
      }

      if(user.pets.toLowerCase() === item.ppets.toLowerCase()) {
        profile.push(user.pets)
      }

      if(user.smoker.toLowerCase() === item.psmoker.toLowerCase()) {
        profile.push(user.smoker)
      }

      if(user.veg.toLowerCase() === item.pveg.toLowerCase()) {
        profile.push(user.veg);
      }
      console.log(profile);
      if (profile.length > 5)
      {
        // setfilteredRoommate(item)
        setroommate(oldArray => [...oldArray,item]);
        console.log(roommate)
      }
        // profile = [
        //   user.gender === item.pgender,
        //   user.alcoholic === item.palcoholic,
        //   user.ebno === item.pebno,
        //   user.married === item.pmarried,
        //   user.partying === item.partying,
        //   user.occupation === item.poccupation,
        //   user.pets === item.ppets,
        //   user.smoker === item.psmoker,
        //   user.veg === item.pveg
        // ]
          
      }
      )
    };
    if (user && user.firstname != undefined) 
      {
        console.log('enter') 
        Roommatematcher(); 
      }
      else 
      {
        setroommate(original);
      }
  },[cat,original]);


  useEffect(() => {
    cat && setfilteredRoommate ( 
      roommate.filter((item) => 
        Object.entries(filters).every(([key,value]) => 
          item[key].includes(value)
        )      
      )
    )
  },[roommate,cat,filters])

  useEffect(() => {
    if (sort === "newest") {
      setfilteredRoommate((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredRoommate((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredRoommate((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const styles = {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  };

  return (
    <div>
      <div className=' d-flex  justify-content-end' style={{backgroundColor:'#c5e0e5',height:'55px' ,alignItems:'center'}}>
      <Link to='/postforroommate'> <button type="button" className="btn btn-success me-3 "> Add Room</button></Link>
      </div>

      <SeachContainer>
      {/* <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        /> */}
        <Searches placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())}>
        </Searches>
      </SeachContainer>

   <FilterContainer>
        <Filter>
          <FilterText>Filter :</FilterText>
          {/* <Select name="province" onChange={handleFilters}>
            <Option disabled>Province</Option>
            <Option>Province 1</Option>
            <Option>Madesh</Option>
            <Option>Bagmati</Option>
            <Option>Gandaki</Option>
            <Option>Lumbini</Option>
            <Option>Karnali</Option>
            <Option>Sudurpaschim</Option>
          </Select> */}
          <Select name="district" onChange={handleFilters}>
            <Option disabled>Province 1</Option>
            <Option>Bhojpur</Option>
            <Option>Dhankuta</Option>
            <Option>Ilam</Option>
            <Option>Jhapa</Option>
            <Option>Khotang</Option>
            <Option>Morang</Option>
            <Option>Okhaldhunga</Option>
            <Option>Panchthar</Option>
            <Option>Sankhuwasabha</Option>
            <Option>Solukhumba</Option>
            <Option>Sunsari</Option>
            <Option>Taplejung</Option>
            <Option>Terhathum</Option>
            <Option>Udayapur</Option>

            <Option disabled>Madhesh Pradesh</Option>
            <Option>Bara</Option>
            <Option>Dhanusha</Option>
            <Option>Bara</Option>
            <Option>Dhanusha</Option>
            <Option>Mahottari</Option>
            <Option>Parsa</Option>
            <Option>Rautahat</Option>
            <Option>Saptari</Option>
            <Option>Sarlahi</Option>
            <Option>Siraha</Option>
            
            <Option disabled>Bagmati</Option>
            <Option>Bhaktapur</Option>
            <Option>Chitwan</Option>
            <Option>Dhading</Option>
            <Option>Dolakha</Option>
            <Option>Kathmandu</Option>
            <Option>Kavrepalanchok</Option>
            <Option>Lalitpur</Option>
            <Option>Makwanpur</Option>
            <Option>Nuwakot</Option>
            <Option>Rasuwa</Option>
            <Option>Ramechhap</Option>
            <Option>Sindhuli</Option>
            <Option>Suindhupalchok</Option>
            
            <Option disabled>Gandaki Province</Option>
            <Option>Baglung</Option>
            <Option>Gorkha</Option>
            <Option>Kaski</Option>
            <Option>Lamjung</Option>
            <Option>Manang</Option>
            <Option>Mustang</Option>
            <Option>Myagdi</Option>
            <Option>Nawalpur</Option>
            <Option>Parbat</Option>
            <Option>Syangja</Option>
            <Option>Tanahun</Option>

            <Option disabled>Lumbini Province</Option>
            <Option>Arghakhanchi</Option>
            <Option>Banke</Option>
            <Option>Bardiya</Option>
            <Option>Dang</Option>
            <Option>Gulmi</Option>
            <Option>Kapilvastu</Option>
            <Option>Parasi</Option>
            <Option>Palpa</Option>
            <Option>Pyuthan</Option>
            <Option>Rolpa</Option>
            <Option>Rukum Purba</Option>
            <Option>Rupandehi</Option>

            <Option disabled>Karnali Province</Option>
            <Option>Dailekh</Option>
            <Option>Dolpa</Option>
            <Option>Humla</Option>
            <Option>Jajarkot</Option>
            <Option>Jumla</Option>
            <Option>Kalikot</Option>
            <Option>Mugu</Option>
            <Option>Rukum Paschim</Option>
            <Option>Salyan</Option>
            <Option>Surkhet</Option>
            
            <Option disabled>Sudurpaschim Province</Option>
            <Option>Achham</Option>
            <Option>Baitadi</Option>
            <Option>Bajhang</Option>
            <Option>Bajura</Option>
            <Option>Dadeldhura</Option>
            <Option>Darchula</Option>
            <Option>Doti</Option>
            <Option>Kailali</Option>
            <Option>Kanchanpur</Option>
          </Select>
          <Select name="pgender" onChange={handleFilters}>
            <Option disabled>Gender</Option>
            <Option>Male</Option>
            <Option>Female</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort :</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    <div className='container'>
        <div  >
              <p style={{fontSize:'50px',lineHeight:'60px',fontFamily:'sans-serif', display: 'flex'}}> Looking For A  
              <p style={{color:'green', display: 'flex',whiteSpace: 'pre'}}> Compatible Roommates </p> 
          </p>
          <p style={{fontSize:'20px',display: 'flex'}}> Find like minded Roommates to share comfortable space.
             </p>
             <Link to='/postforroommate'>  <button type="button-lg" className="btn mb-3 btn-success abc" >Post For Roommates</button></Link>
        
      </div>
        <div className='row'>
        <div style={styles}>
    { Search(filteredRoommate).map((item) => (
        <Roommates item={item} key={item.id}/>
      ))}
    </div>
{/*         
     <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"200px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"200px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Devinagar,Butwal-12</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Female</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"200px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div> */}

      </div>

    </div>
    </div>
  )
}