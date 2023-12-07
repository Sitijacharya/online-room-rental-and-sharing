import React from 'react'
import './RoomFolder.css'

const RoomDistribution = ({item}) => {
  return (
    <div>
      <div className='propertypart'>
        <img className='photo'src={item.img} />
        <div>
          <h1>{item.title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur numquam laborum eos quibusdam id optio quam excepturi ullam, officiis ducimus porro fuga aperiam sint, quas corrupti natus iusto dolores.e</p>
        </div>
      </div>
    </div>
  )
}

export default RoomDistribution
