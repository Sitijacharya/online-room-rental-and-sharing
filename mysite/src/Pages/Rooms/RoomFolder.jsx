import React from 'react'
import { rawdata } from './rawdata'
import RoomDistribution from './RoomDIstribution'
import './RoomFolder.css'


const RoomFolder = () => {
  return (
    <div className='propertylist'>
        
      {rawdata.map(item => (
        <RoomDistribution item={item} />
      ))}
      

       
    </div>
  )
}

export default RoomFolder