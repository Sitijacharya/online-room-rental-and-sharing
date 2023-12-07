import React from 'react'

export default function Contact() {
  return (
    
    
      <div style={{backgroundColor:'aliceblue'}}>

       <div className="container mt-3 mb-3 contactContent" >
        <h1 className="text-center">Contact Us</h1>
        <div className="row mt-4">
          <div className="col-lg-6 mb-3 shadow" style={{ border:'3px solid #ccc',borderRadius:'10px'}}>
            <form>
              <input type="text" className="form-control mt-3 " placeholder="Name" required />
              <input type="email" className="form-control mt-3" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
              <input type="text" className="form-control mt-3" placeholder="Subject" />
              <div className="mb-3 mt-3">
                <textarea className="form-control" rows={5} id="comment" name="text" placeholder="Message" defaultValue={""} />
              </div>
            </form>
            <button type="button" className="btn btn-success mt-3 mb-3 ">Contact Us</button>
          </div>
          <div className="col-lg-6  " style={{ fontSize:'3ex'}}  >
            
            <ul className="contact-links mt-10"  style={{marginLeft:'200px'}}>
                <li className='mb-3'><i className="fas fa-home "  /> lalitpur-14,ramailotar</li>
                <li className='mb-3'> <i className="fas fa-envelope  " />
                info@myapp.com </li>
              <li className='mb-3'><i className="fas fa-phone  " /> + 01 234567</li>
              <li className='mb-3'><i className="fas fa-print " /> + 01 567890 </li>
            </ul>
           
            </div>
        </div>
      </div>
      </div>

  )
}
