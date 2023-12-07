import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map,{Marker, Popup}from "react-map-gl"

const Mapbox = ({latitude,longitude}) => {
    // const [lng,setlng] = useState(longitude);
    // const [lat,setlat]=useState(latitude);
    const [lng,setlng] = useState(54.37587);
    const [lat,setlat]=useState(24.4567);
    const [click,setclick] = useState(null)

    const onMapLoaded = () => {
      Map.resize();
    }
    const handleClick = () => {
      console.log('Hamburger')
      console.log(Map)
    }
  return (
    <div>
    <button onClick={handleClick}>Hamburger</button>

      <Map  
          mapboxAccessToken='pk.eyJ1Ijoiem1jaGFvcyIsImEiOiJjbGYzZjdwNDcwYmVtNDFvMTQ1NjZrNmViIn0.6DTGTmEq2e-jNgfutZl0cA'
          style={{
              objectFit: "cover",
              width:"96.5vw",
              height: "500px",
            }}
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 12
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onLoad={onMapLoaded}>
            
        <Marker
          longitude={lng}
          latitude={lat}
          background-image          
        >
          <button style={{background: "none", border: "none" , cursor: "pointer"}} onClick={e => { e.preventDefault(); setclick(true);}}>
          <img src="http://maps.google.com/mapfiles/marker.png" />
          </button>
        </Marker>
        {click ? (
          <Popup latitude={lat} longitude={lng}>
            <div>
              <a href={`http://google.com/maps/place/${lat}N+${lng}E`} >SICK</a>
            </div>
          </Popup>
        ) : null}
      </Map>
     
    </div>
  )
}

export default Mapbox
