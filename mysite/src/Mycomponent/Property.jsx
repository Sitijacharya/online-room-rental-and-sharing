import React from 'react'
import flat31 from '/src/images/flat31.jpg'
import flat32 from '/src/images/flat32.jpg'
import flat33 from '/src/images/flat33.jpg'

const Property = ({item}) => {
  return (
    <div>
      <div className=" clg-lg-3 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        {/* <img src={`uploads/${item?.img[0]}`} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/> */}
        <img src={`/uploads/${item.img[0]}`} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">{item.category} for rent in {item.province}</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item"> <span style={{fontSize: '18px'}}> <span style={{fontWeight: '600'}}> Price: </span>Rs {item.price}</span></li>
          <li className="list-group-item"> <span style={{fontSize: '18px'}}> <span style={{fontWeight: '600'}}> Location:</span> {item.district}</span></li>
          <li className="list-group-item"> <span style={{fontSize: '18px'}}> <span style={{fontWeight: '600'}}> BHK:</span> {item.bhk}</span></li>
        </div>
        <a href={`/property/${item._id}`} className="btn btn-success  mb-1 ">View </a>
        
      </div>
    </div>
  )
}

export default Property
