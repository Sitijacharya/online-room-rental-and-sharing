import React from 'react'
import { Link } from 'react-router-dom'
import flat31 from '/src/images/flat31.jpg'
import flat32 from '/src/images/flat32.jpg'
import flat33 from '/src/images/flat33.jpg'
import Property from "./Property";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";


const SeachContainer = styled.div`
position: absolute;
  top: 20%;
  left: 50%;
  width: 350px;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);
  background: #fff;
  transition: all 0.3s ease;
  border: 1px solid lightgray;
  &:focus {
  
  border: 3px solid #555;

}
 
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
display: flex;
justify-content: space-between;
padding-top: 20px;
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


const PropertyList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [properties,setproperties] = useState([]);
  const [filteredProperty,setFilteredProperty] = useState([]);

  const [query, setQuery] = useState("");

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const keys = ["province","district"]

  const Search = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(query))
        );
      };

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  
  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios.get( cat ? `http://localhost:5000/api/properties?category=${cat}` : 'http://localhost:5000/api/properties');
        setproperties(res.data);
        console.log(res.data);
        
      } catch(err) {}
    };
    getProperty();
  },[]);

  useEffect(() => {
    cat && setFilteredProperty ( 
      properties.filter((item) => 
        Object.entries(filters).every(([key,value]) => 
          item[key].includes(value)
        )      
      )
    )
  },[properties,cat,filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProperty((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProperty((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProperty((prev) =>
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
      <SeachContainer>
        <Searches placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())}>
        </Searches>
      </SeachContainer>

      <FilterContainer>
        <Filter>
          <FilterText>Filter {cat}:</FilterText>
          <Select name="province" onChange={handleFilters}>
            <Option disabled>Province</Option>
            <Option>Province 1</Option>
            <Option>Madesh</Option>
            <Option>Bagmati</Option>
            <Option>Gandaki</Option>
            <Option>Lumbini</Option>
            <Option>Karnali</Option>
            <Option>Sudurpaschim</Option>
          </Select>
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
          <Select name="roomno" onChange={handleFilters}>
            <Option disabled>No of Room</Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort {cat}:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    <div style={styles}>
    {Search(filteredProperty).map((item) => (
        <Property item={item} key={item.id}/>
      ))}
    </div>
    </div>
  )
}

export default PropertyList
