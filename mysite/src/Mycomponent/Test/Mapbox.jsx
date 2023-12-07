import { useState } from "react"
import React from 'react'
import ReactMapGL from 'react-map-gl'

const Mapbox = () => {
  const [viewport,setViewport] = useState({
    latitude: 45.4211,
    longitude:-75.6903,
    width:"100px",
    height: "200px",
    zoom: 10
  })
  return (
    <div>
      <ReactMapGL 
        {...viewport }
        mapboxAccessToken='pk.eyJ1Ijoiem1jaGFvcyIsImEiOiJjbGYzZjdwNDcwYmVtNDFvMTQ1NjZrNmViIn0.6DTGTmEq2e-jNgfutZl0cA'
      >
        Markers Here
      </ReactMapGL>
    </div>
  )
}

export default Mapbox
