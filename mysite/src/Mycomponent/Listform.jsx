import React from 'react'

export default function Listform() {
  return (
    <div>
    <form action="/register" method='post'>
      <div className='container mt-5' style={{border:'3px solid #ccc ' ,
    width:'500px',
    padding:'20px ',
    borderRadius:'10px',
    margin:'auto',
    height:'auto',
    backgroundColor:'ButtonHighlight',
    backgroundColor:'aliceblue'}}>


        <h1 style={{color:'green'}}>List Your Property</h1>
        <label htmlFor="username"><b>Username</b></label> <br/>
    <input type="text" placeholder="Enter Your Name" name="username" id="username"  className='listforms' required /><br/>
    
    <label htmlFor="email"><b>Email</b></label> <br/>
          <input type="text" placeholder="Enter Email" name="email" id="email"   className='listforms' required /><br/>
    
          <label htmlFor="gender"><b>Gender</b></label> <br/>
    <input type="radio" id="male" name="gender" value="Male" style={{marginRight:'10px',scale:'1.5'}} /><label htmlFor='male'style={{marginRight:'35px',fontSize:'22px'}}>Male </label>
    <input type="radio" id="female" name="gender" value="Female"  style={{marginRight:'10px',scale:'1.5'}}/><label htmlFor='female' style={{marginRight:'35px',fontSize:'22px'}}>Female </label>
    <input type="radio" id="other" name="gender" value="Other"  style={{marginRight:'10px',scale:'1.5'}}/><label htmlFor='other' style={{marginRight:'35px',fontSize:'22px',marginBottom:'10px'}}>Other </label>
    <br/>

    <label htmlFor="phone"><b>Phone Number :</b></label>
        <input className='listforms'
          type="tel"
          id="phone"
          name="phone"
          required
        /> <br/>



 <label htmlFor="country"><b>Country</b></label>
 <input type="text"  name="country" id="country"   className='listforms' readOnly required /><br/>

 <label htmlFor="province"><b>Province</b></label>
    <select id="province" name="province" label='province' className='listforms' required>
      <option value="" > Select province</option>
      <option value="province 1">Province 1</option>
      <option value="Madesh ">Madesh</option>
      <option value="Bagmati">Bagmati</option>
      <option value="Gandaki">Gandaki</option>
      <option value="Lumbini">Lumbini</option>
      <option value="Karnali">Karnali</option>
      <option value="Sudurpaschim">Sudurpaschim</option>
    </select>

    <label htmlFor="district"><b>District</b></label>
 {/* <input type="text"  name="district" id="district" placeholder='Enter District'  className='listforms' required /><br/> */}

 <select name="district" className='listforms'  required>
  <option value="">Select Your District</option>
  <optgroup label="Province No. 1">
    <option value="Bhojpur">Bhojpur</option>
    <option value="Dhankuta">Dhankuta</option>
    <option value="Ilam">Ilam</option>
    <option value="Jhapa">Jhapa</option>
    <option value="Khotang">Khotang</option>
    <option value="Morang">Morang</option>
    <option value="Okhaldhunga">Okhaldhunga</option>
    <option value="Panchthar">Panchthar</option>
    <option value="Sankhuwasabha">Sankhuwasabha</option>
    <option value="Solukhumbu">Solukhumbu</option>
    <option value="Sunsari">Sunsari</option>
    <option value="Taplejung">Taplejung</option>
    <option value="Terhathum">Terhathum</option>
    <option value="Udayapur">Udayapur</option>
  </optgroup>
  <optgroup label="Madesh Pradesh">
    <option value="Bara">Bara</option>
    <option value="Dhanusha">Dhanusha</option>
    <option value="Mahottari">Mahottari</option>
    <option value="Parsa">Parsa</option>
    <option value="Rautahat">Rautahat</option>
    <option value="Saptari">Saptari</option>
    <option value='sarlahi'>Sarlahi</option>
    <option value="Siraha">Siraha</option>
    
  </optgroup>
  <optgroup label="Bagmati Province">
    <option value="Bhaktapur">Bhaktapur</option>
    <option value="Chitwan">Chitwan</option>
    <option value="Dhading">Dhading</option>
    <option value="Dolakha">Dolakha</option>
    <option value="Kathmandu">Kathmandu</option>
    <option value="Kavrepalanchok">Kavrepalanchok</option>
    <option value="Lalitpur">Lalitpur</option>
    <option value="Makwanpur">Makwanpur</option>
    <option value="Nuwakot">Nuwakot</option>
    <option value="Rasuwa">Rasuwa</option>
    <option value="Ramechhap">Ramechhap</option>
    <option value="Sindhuli">Sindhuli</option>
    <option value="Sindhupalchok">Sindhupalchok</option>
  </optgroup>

  <optgroup label="Gandaki Province">
    <option value="Baglung">Baglung</option>
    <option value="Gorkha">Gorkha</option>
    <option value="Kaski">Kaski</option>
    <option value="Lamjung">Lamjung</option>
    <option value="Manang">Manang</option>
    <option value="Mustang">Mustang</option>
    <option value="Myagdi">Myagdi</option>
    <option value="Nawalpur">Nawalpur</option>
    <option value="Parbat">Parbat</option>
<option value="Syangja">Syangja</option>
<option value="Tanahun">Tanahun</option>
    </optgroup>

    <optgroup label="Lumbini Province">
    <option value="Arghakhanchi">Arghakhanchi</option>
    <option value="Banke">Banke</option>
    <option value="Bardiya">Bardiya</option>
    <option value="Dang">Dang</option>
    <option value="Gulmi">Gulmi</option>
    <option value="Kapilvastu">Kapilvastu</option>
    <option value="Parasi">Parasi</option>
    <option value="Palpa">Palpa</option>
    <option value="Pyuthan">Pyuthan</option>
    <option value="Rolpa">Rolpa</option>
    <option value="Rukum Purba"> Rukum Purba</option>
    <option value="Rupandehi">Rupandehi</option>
    
  </optgroup>

  <optgroup label="Karnali Province">
    <option value="Dailekh">Dailekh</option>
    <option value="Dolpa">Dolpa</option>
    <option value="Humla">Humla</option>
    <option value="Jajarkot">Jajarkot</option>
    <option value="Jumla">Jumla</option>
    <option value="Kalikot">Kalikot</option>
    <option value="Mugu">Mugu</option>
    <option value="Rukum Paschim"> Rukum Paschim</option>

    <option value="Salyan">Salyan</option>
    <option value="Surkhet">Surkhet</option>
  </optgroup>

  <optgroup label="Sudurpashchim Province">
    <option value="Achham">Achham</option>
    <option value="Baitadi">Baitadi</option>
    <option value="Bajhang">Bajhang</option>
    <option value="Bajura">Bajura</option>
    <option value="Dadeldhura">Dadeldhura</option>
    <option value="Darchula">Darchula</option>
    <option value="Doti">Doti</option>
    <option value='Kailali'>Kailali</option>
    <option value="Kanchanpur">Kanchanpur</option>
    
  </optgroup>

  </select>



 <label htmlFor="municipality"><b>Municipality/VDC</b></label>
 <input type="text"  name="municipality" id="municipality"  className='listforms'placeholder='Enter your Municipality/VDC' required /><br/>
 <label htmlFor="ward"><b>Ward No.</b></label>
 <input type="number"  name="ward" id="ward"  className='listforms'placeholder='Enter your Ward no.' step="1" min='1' max='32' required /><br/>
 <label htmlFor="street"><b>Street/Tole</b></label>
 <input type="text"  name="street" id="street"  className='listforms'placeholder='Enter your Street/Tole.' required /><br/>


 <label htmlFor="Property">Property Type</label>
    <select id="Property" name="Property" className='listforms' required>
      <option value="" > Select Property </option>
      <option value="room">Room</option>
      <option value="flat">Flat</option>
      <option value="hostel">Hostel</option>
    
    </select><br/>
    <label htmlFor='comment'><b>Description:</b> </label>
    <textarea className="form-control" rows={8} id="comment" name="text" placeholder="Description" defaultValue={""} /><br/>

    <label htmlFor='room no'><b>No Of Rooms</b> </label>
    <input type="number" id="room no" name="room no" className='listforms' step="1" min='1' max='100'/><br/>

    <label htmlFor='bhk'><b>BHK</b> </label>
    <input type="number" id="bhk" name="bhk" className='listforms' step="1" min='0' max='10'/><br/>

    <label htmlFor='Bathroom'><b>No Of Bathroom</b> </label>
    <input type="number" id="Bathroom" name="Bathroom" className='listforms' step="1" min='0' max='150'/><br/>

    <label htmlFor='price'><b>Price</b></label>
    <input type="number" id='price' name='price' className='listforms' step='500' min='0'/><br/>

<label htmlFor='watersupply'><b>Water Supply</b> </label>
<select id="watersupply" name="watersupply" className='listforms' required>
      <option value="available">Available</option>
      <option value=" not available"> Not Available</option> 
    </select><br/>

    <label htmlFor='Electricity'><b>Electricity</b> </label>
<select id="Electricity" name="Electricity" className='listforms' required>
      <option value="available">Available</option>
      <option value=" not available"> Not Available</option>
    </select><br/>

    <label htmlFor='parking'><b>Parking'</b> </label>
<select id="parking'" name="parking" className='listforms' required>
      <option value="available">Available</option>
      <option value=" not available"> Not Available</option>
    </select><br/>

    <label htmlFor='wastemanage'><b>Waste Management</b> </label>
<select id="wastemanage'" name="wastemanage" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No </option>
    </select><br/>

    <label htmlFor='lift'><b>Lift/Escalator </b> </label>
<select id="lift" name="lift" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No </option>
    </select><br/>

    <label htmlFor='garden'><b>Garden access </b> </label>
<select id="garden" name="garden" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No </option>
    </select><br/>


    <label htmlFor='terrace'><b>Terrace access </b> </label>
<select id="terrac" name="terrac" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No</option>
    </select><br/>
    <label htmlFor='employed'><b>Should Tenant be Employed? </b> </label>
<select id="employed" name="employed" className='listforms' required>
      <option value="yes">Yes</option>
      <option value=" not "> No</option>
    </select><br/>
    <label htmlFor='married'><b>Should Tenant be Married? </b> </label>
<select id="married" name="married" className='listforms' required>
      <option value="yes">Yes</option>
      <option value=" not "> No</option>
    </select><br/>

        <label htmlFor='garden'><b>Property Image: </b> </label><br/>
  <input type="file" id="files" name="files" multiple/><br/><br/>
  <button type="reset" className="btn btn-outline-danger  mb-3  "  style={{width:'40%',marginRight:'50px'}}>Cancel</button>
 <button type="submit" className="btn btn-outline-success mb-3 "  style={{width:'40%'}}>Add</button>
      
      </div>
      </form>
    </div>
  )
}

