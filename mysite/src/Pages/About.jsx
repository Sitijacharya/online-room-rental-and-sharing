import React from 'react'
import img3 from '/src/images/img3.jpg'
import man from '/src/images/man.png'
import about from '/src/images/about.jpg'
import about3 from '/src/images/about3.jpg'




export default function About() {
  return (
    <div>
      <div className=' flex' style={{width:'100%',
    backgroundImage:'url(" /src/images/img5.jpg")',
    height:'650px',
    backgroundSize:'1400px',
    lineHeight:'60px'
    
    }}>
      <div className='justify-content-end ' style={{fontSize:'80px',translate:'0px 350px',color:'white',fontFamily:'sans-serif'}}><b style={{marginLeft:'900px'}}>GharDera</b><br/>
      <b style={{fontSize:'35px' ,marginLeft:"300px"}}>Your one-stop solution for finding the perfect roommate!<br/></b>
      <b style={{fontSize:'35px' ,marginLeft:"400px"}}>And your property Rental Platform</b>
      </div>
      </div>
<h2 className='mt-5' style={{color:'green'}}><b>About us.</b></h2>
<section>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-5'>
<p  className= 'mt-5' style={{fontSize:'30px'}}> In context of Nepal we are the pioneer to introduce  platform to find Roommate and Flatmate .<br/>
We're proud to have helped thousands of people find compatible roommates, and we're constantly working to improve our platform to better serve our users.We're dedicated to helping people like you find the perfect match, whether you're a student, a working professional, or anyone in between.<br/> <br/>
</p>
      </div>
      <div className='col-lg-5'>
      <img src={about}  alt="..." style={{backgroundSize:'auto',height:'500px'}}/>

      </div>
    </div>
  </div>
</section>
<section>
  <div className='container'>
    <div className='row'>

      <div className='col-lg-6'>
      <img src={about3}  alt="..." style={{backgroundSize:'auto',height:'500px'}}/>

      </div>
      <div className='col-lg-6'>
<p  className= 'mt-5' style={{fontSize:'30px'}}> If you are looking for the Property for sale/rent in Nepal ,GharDera makes it easier for you .
It is the growing rental network for finding Rooms,Flat,hostel in rent in the major city of our Country.
Our website boasts a variety of unique features that make the search process as smooth as possible.

</p>
      </div>
    </div>
  </div>
</section>


 <h2 className='mb-5'>But don't just take our word for it - read some of the testimonials from our satisfied users:<br/></h2>
<div className='container d-flex' style={{fontSize:'20px'}}>
  <div className='row'>
   <div className='col-lg-3 card mb-3  mx-3 bs' style={{border:'3px solid #ccc',width: '20rem',height :'450px',padding:"1px"}}>
   <img src={man} className="card-img-top" alt="..." style={{backgroundSize:'auto',width:'200px',height:'200px'}}/>

    <div className='card-body'>

    <p>"I was skeptical about using an online roommate finder, but GharDera exceeded my expectations. I found the perfect roommate in just a few days!" - Harke bahadur</p><br/>

    </div>
   </div>

   <div className='col-lg-6 card mb-3 mx-3 bs' style={{border:'3px solid #ccc',width: '20rem',height :'450px',padding:"1px"}}>
   <img src={man} className="card-img-top" alt="..." style={{backgroundSize:'auto',width:'200px',height:'200px'}}/>

    <div className='card-body'>
    <p>"I've face a lot of problem in searching rooms in the city. I'm so grateful that i found this site!" - Bir bahadur<br/></p><br/>

    </div>
   </div>
   <div className='col-lg-9 card mb-3 mx-3 bs' style={{border:'3px solid #ccc',width: '20rem',height :'450px',padding:"1px"}}>
   <img src={man} className="card-img-top" alt="..." style={{backgroundSize:'auto',width:'200px',height:'200px'}}/>

    <div className='card-body'>
    <p>"I've had bad luck with roommates in the past, but GharDera helped me find someone I truly get along with. I'm so grateful!" - Saurav<br/></p><br/> 
    </div>
   </div>

   </div>
   </div>
   </div>
  )
}
