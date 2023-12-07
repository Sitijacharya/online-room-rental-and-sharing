import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { List, ListItem } from '@mui/material';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link'
import FormGroup from '@mui/material/FormGroup';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios'





function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          GharDera.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }




const theme = createTheme();




export default function Hostelform() {
  const[firstname,setfirstname] = useState('');
  const[lastname,setlastname] = useState('');
  const[roomtype,setroomtype] = useState('');
  const[gender,setgender] = useState('');
  const[dob,setdob] = useState('');
  const[school,setschool] = useState('');
  const[email,setemail] = useState('');
  const[phoneno,setphoneno] = useState('');

  const[guardianname,setguardianname] = useState('');
  const[relation,setrelation] = useState('');
  const[address,setaddress] = useState('');
  const[gphoneno,setgphoneno] = useState('');

  const[lguardianname,setlguardianname] = useState('');
  const[lrelation,setlrelation] = useState('');
  const[laddress,setladdress] = useState('');
  const[lphoneno,setlphoneno] = useState('');

  const[pcountry,setpcountry] = useState('Nepal');
  const[pprovince,setpprovince] = useState('');
  const[pdistrict,setpdistrict] = useState('');
  const[pmunicipalityorvdc,setpmunicipalityorvdc] = useState('');
  const[pwardno,setpwardno] = useState('');
  const[ptolorstreet,setptolorstreet] = useState('');

  const[tcountry,settcountry] = useState('Nepal');
  const[tprovince,settprovince] = useState('');
  const[tdistrict,settdistrict] = useState('');
  const[tmunicipalityorvdc,settmunicipalityorvdc] = useState('');
  const[twardno,settwardno] = useState('');
  const[ttolorstreet,setttolorstreet] = useState('');

  const [passportphoto,setpassportphoto] = useState([]);
  const [citizenship,setcitizenship] = useState([]);

  const formdetails = {
    firstname,
    lastname,
    roomtype,
    gender,
    dob,
    school,
    email,
    phoneno,
    guardianname,
    relation,
    address,
    gphoneno,
    lguardianname,
    lrelation,
    laddress,
    lphoneno,
    pcountry,
    pprovince,
    pdistrict,
    pmunicipalityorvdc,
    pwardno,
    ptolorstreet,
    tcountry,
    tprovince,
    tdistrict,
    tmunicipalityorvdc,
    twardno,
    ttolorstreet,
    passportphoto,
    citizenship
  }
  console.log(formdetails)
  const handleform = async (event) => {
    event.preventDefault();
    try {

      let data1 = new FormData();
      data1.append('image',passportphoto[0])
      console.log(1)
      console.log(data1)
      const res1 = await axios.post('http://localhost:5000/api/forms/imageupload',data1);
      const image1 = res1.data;
      formdetails.passportphoto = image1;
      console.log(image1)
      console.log(2)

      let data2 = new FormData();
      data2.append('image',citizenship[0])
      data2.append('image',citizenship[1])

      const res2 = await axios.post('http://localhost:5000/api/forms/imageupload',data2);
      const image2 = res2.data;
      formdetails.citizenship = image2;
      console.log(image2)
      
      console.log(3)

      const result = await axios.post('http://localhost:5000/api/forms/addform',formdetails)
    }
    catch(err) {console.log("error")}
    console.log("Successful!!!")
  }
  return (
    <div>
        
      <ThemeProvider theme={theme}>
      
    
          
          <Container component="main" maxWidth="sm" sx={{ mb: 4 ,marginTop:5}}>
          <Typography component="h1" variant="h4" align="center">
            Hostel Fillup Form
          </Typography>
          <form action='' method='post' onSubmit={handleform}>
          <Grid container spacing={3}>

<Grid item xs={12} sm={6}>
<TextField
      required
      id="firstName"
      name="firstName"
      label="First name"
      fullWidth
      autoComplete="given-name"
      variant="standard"
      onChange={(event)=>setfirstname(event.target.value)} 
    />
  </Grid>

  <Grid item xs={12} sm={6}>
    <TextField
      required
      id="lastName"
      name="lastName"
      label="Last name"
      fullWidth
      autoComplete="family-name"
      variant="standard"
      onChange={(event)=>setlastname(event.target.value)} 
    />
    </Grid>
    <Grid item xs={12} >
          <TextField
          required
            id="roomtype"
            name="roomtype"
            label="Room type"
            fullWidth
            select
            variant="standard"
            onChange={(event)=>setroomtype(event.target.value)} 
          >
             <MenuItem value="1-sitter" > One-Sitter</MenuItem>
      <MenuItem value="2-sitter ">Two-Sitter</MenuItem>
      <MenuItem value="3-sitter">Three-Sitter </MenuItem>
      <MenuItem value="4-sitter">Four-Sitter</MenuItem>
      
     
            </TextField>
        </Grid>
    <Grid item xs={12}>
  <FormControl>
<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  onChange={(event)=>setgender(event.target.value)} 
>
  <FormControlLabel value="female" control={<Radio />} label="Female" />
  <FormControlLabel value="male" control={<Radio />} label="Male" />
  <FormControlLabel value="other" control={<Radio />} label="Other" />

</RadioGroup>
</FormControl>
  
  </Grid> 

  <Grid item xs={12} sm={6}>
  <Form.Group controlId="dob">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" required fullWidth 
                            onChange={(event)=>setdob(event.target.value)} />
                        </Form.Group>
    </Grid>
   

  <Grid item xs={12} >
    <TextField
      required
      id="school"
      name="school"
      label="University/school of Study"
      fullWidth
      autoComplete="family-name"
      variant="standard"
      onChange={(event)=>setschool(event.target.value)} 
    />
    </Grid>

    <Grid item xs={12}>
    <TextField
    required
      id="email"
      name="email"
      type="email" 
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
      label="Enter your email"
      fullWidth
      variant="standard"
      onChange={(event)=>setemail(event.target.value)} 
    />
  </Grid>

  <Grid item xs={12}>
    <TextField
    required
      id="phone no"
      name="phone no"
      type="tel" 
      label="Enter your Phone Number"
      fullWidth
      variant="standard"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
      onChange={(event)=>setphoneno(event.target.value)} 
    />
  </Grid>
  
  <Grid item xs={12} sx={{marginTop:3}} >
        <h5> Gaurdian</h5>
    </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
      required
      id="GName"
      name="GName"
      label="Gaurdian name"
      fullWidth
      autoComplete="given-name"
      variant="standard"
      onChange={(event)=>setguardianname(event.target.value)} 
    />
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
      required
      id="relation"
      name="Relation"
      label="Relation"
      fullWidth
    
      variant="standard"
      onChange={(event)=>setrelation(event.target.value)} 
    />
  </Grid>
  <Grid item xs={12} sm={6}>
  
  <TextField
      required
      id="Gaddress"
      name="Gaddres"
      label="Address"
      fullWidth
      variant="standard"
      onChange={(event)=>setaddress(event.target.value)} 
    />
  
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
      required
      id="gphone no"
      name="gphone no"
      type="tel" 
      label=" Phone Number"
      fullWidth
      variant="standard"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
      onChange={(event)=>setgphoneno(event.target.value)} 
    />
    
  </Grid>


  <Grid item xs={12} sx={{marginTop:3}} >
        <h5>  Local Gaurdian</h5>
    </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
      required
      id="lName"
      name="lName"
      label="Gaurdian name"
      fullWidth
      autoComplete="given-name"
      variant="standard"
      onChange={(event)=>setlguardianname(event.target.value)} 
    />
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
      required
      id="lrelation"
      name="lRelation"
      label="Relation"
      fullWidth
      onChange={(event)=>setlrelation(event.target.value)} 
      variant="standard"
    />
  </Grid>
  <Grid item xs={12} sm={6}>
  
  <TextField
      required
      id="laddress"
      name="laddres"
      label="Address"
      fullWidth
      variant="standard"
      onChange={(event)=>setladdress(event.target.value)} 
    />
  
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
      required
      id="lphone no"
      name="lphone no"
      type="tel" 
      label=" Phone Number"
      fullWidth
      variant="standard"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
      onChange={(event)=>setlphoneno(event.target.value)} 
    />
    
  </Grid>

  <Grid item xs={12} sx={{marginTop:3}} >
        <h5>  Permanent Address</h5>
    </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="country"
            fullWidth
            defaultValue="Nepal"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            onChange={(event)=>setpcountry(event.target.value)} 

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          required
            id="Province"
            name="Province"
            label="Your Province"
            fullWidth
            select
            variant="standard"
            onChange={(event)=>setpprovince(event.target.value)} 
          >
             <MenuItem value="koshi" > Koshi</MenuItem>
      <MenuItem value="Madesh ">Madesh</MenuItem>
      <MenuItem value="Bagmati">Bagmati </MenuItem>
      <MenuItem value="Gandaki">Gandaki </MenuItem>
      <MenuItem value="Lumbini">Lumbini </MenuItem>
      <MenuItem value="Karnali">Karnali </MenuItem>
      <MenuItem value="Sudurpaschim">Sudurpaschim </MenuItem>
            </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="District"
            name="District"
            label="District"
            fullWidth
          select
    
            variant="standard"
            onChange={(event)=>setpdistrict(event.target.value)} 

          >
          
       <MenuItem  unselectable ><b>Koshi</b></MenuItem> 
    <MenuItem value="Bhojpur">Bhojpur</MenuItem>
    <MenuItem value="Dhankuta">Dhankuta</MenuItem>
    <MenuItem value="Ilam">Ilam</MenuItem>
    <MenuItem value="Jhapa">Jhapa</MenuItem>
    <MenuItem value="Khotang">Khotang</MenuItem>
    <MenuItem value="Morang">Morang</MenuItem>
    <MenuItem value="Okhaldhunga">Okhaldhunga</MenuItem>
    <MenuItem value="Panchthar">Panchthar</MenuItem>
    <MenuItem value="Sankhuwasabha">Sankhuwasabha</MenuItem>
    <MenuItem value="Solukhumbu">Solukhumbu</MenuItem>
    <MenuItem value="Sunsari">Sunsari</MenuItem>
    <MenuItem value="Taplejung">Taplejung</MenuItem>
    <MenuItem value="Terhathum">Terhathum</MenuItem>
    <MenuItem value="Udayapur">Udayapur</MenuItem>
  
  <MenuItem unselectable ><b>Madhesh Pradesh </b></MenuItem>
    <MenuItem value="Bara">Bara</MenuItem>
    <MenuItem value="Dhanusha">Dhanusha</MenuItem>
    <MenuItem value="Mahottari">Mahottari</MenuItem>
    <MenuItem value="Parsa">Parsa</MenuItem>
    <MenuItem value="Rautahat">Rautahat</MenuItem>
    <MenuItem value="Saptari">Saptari</MenuItem>
    <MenuItem value='sarlahi'>Sarlahi</MenuItem>
    <MenuItem value="Siraha">Siraha</MenuItem>
    
  
    <MenuItem unselectable ><b>Bagmati </b></MenuItem>
    <MenuItem value="Bhaktapur">Bhaktapur</MenuItem>
    <MenuItem value="Chitwan">Chitwan</MenuItem>
    <MenuItem value="Dhading">Dhading</MenuItem>
    <MenuItem value="Dolakha">Dolakha</MenuItem>
    <MenuItem value="Kathmandu">Kathmandu</MenuItem>
    <MenuItem value="Kavrepalanchok">Kavrepalanchok</MenuItem>
    <MenuItem value="Lalitpur">Lalitpur</MenuItem>
    <MenuItem value="Makwanpur">Makwanpur</MenuItem>
    <MenuItem value="Nuwakot">Nuwakot</MenuItem>
    <MenuItem value="Rasuwa">Rasuwa</MenuItem>
    <MenuItem value="Ramechhap">Ramechhap</MenuItem>
    <MenuItem value="Sindhuli">Sindhuli</MenuItem>
    <MenuItem value="Sindhupalchok">Sindhupalchok</MenuItem>
  


  <MenuItem unselectable ><b>Gandaki Province</b></MenuItem>
    <MenuItem value="Baglung">Baglung</MenuItem>
    <MenuItem value="Gorkha">Gorkha</MenuItem>
    <MenuItem value="Kaski">Kaski</MenuItem>
    <MenuItem value="Lamjung">Lamjung</MenuItem>
    <MenuItem value="Manang">Manang</MenuItem>
    <MenuItem value="Mustang">Mustang</MenuItem>
    <MenuItem value="Myagdi">Myagdi</MenuItem>
    <MenuItem value="Nawalpur">Nawalpur</MenuItem>
    <MenuItem value="Parbat">Parbat</MenuItem>
<MenuItem value="Syangja">Syangja</MenuItem>
<MenuItem value="Tanahun">Tanahun</MenuItem>
    


    <MenuItem unselectable ><b>Lumbini Province</b></MenuItem>
    <MenuItem value="Arghakhanchi">Arghakhanchi</MenuItem>
    <MenuItem value="Banke">Banke</MenuItem>
    <MenuItem value="Bardiya">Bardiya</MenuItem>
    <MenuItem value="Dang">Dang</MenuItem>
    <MenuItem value="Gulmi">Gulmi</MenuItem>
    <MenuItem value="Kapilvastu">Kapilvastu</MenuItem>
    <MenuItem value="Parasi">Parasi</MenuItem>
    <MenuItem value="Palpa">Palpa</MenuItem>
    <MenuItem value="Pyuthan">Pyuthan</MenuItem>
    <MenuItem value="Rolpa">Rolpa</MenuItem>
    <MenuItem value="Rukum Purba"> Rukum Purba</MenuItem>
    <MenuItem value="Rupandehi">Rupandehi</MenuItem>
    
  


  <MenuItem unselectable ><b>Karnali Province</b></MenuItem>
    <MenuItem value="Dailekh">Dailekh</MenuItem>
    <MenuItem value="Dolpa">Dolpa</MenuItem>
    <MenuItem value="Humla">Humla</MenuItem>
    <MenuItem value="Jajarkot">Jajarkot</MenuItem>
    <MenuItem value="Jumla">Jumla</MenuItem>
    <MenuItem value="Kalikot">Kalikot</MenuItem>
    <MenuItem value="Mugu">Mugu</MenuItem>
    <MenuItem value="Rukum Paschim"> Rukum Paschim</MenuItem>

    <MenuItem value="Salyan">Salyan</MenuItem>
    <MenuItem value="Surkhet">Surkhet</MenuItem>


  
  <MenuItem unselectable ><b>Sudurpaschim Province</b></MenuItem>
    <MenuItem value="Achham">Achham</MenuItem>
    <MenuItem value="Baitadi">Baitadi</MenuItem>
    <MenuItem value="Bajhang">Bajhang</MenuItem>
    <MenuItem value="Bajura">Bajura</MenuItem>
    <MenuItem value="Dadeldhura">Dadeldhura</MenuItem>
    <MenuItem value="Darchula">Darchula</MenuItem>
    <MenuItem value="Doti">Doti</MenuItem>
    <MenuItem value='Kailali'>Kailali</MenuItem>
    <MenuItem value="Kanchanpur">Kanchanpur</MenuItem>
    
  
  
          </TextField>
        </Grid> 

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vdc/municipality"
            name="vdc/munici"
            label="Municipality/VDC"
            fullWidth
            onChange={(event)=>setpmunicipalityorvdc(event.target.value)} 
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ward"
            name="ward"
            type='number'
            label="Ward No"
            fullWidth
            onChange={(event)=>setpwardno(event.target.value)} 
            variant="standard"
            inputProps={{ pattern: "[0-9]*" ,min:'0',max:'32'}}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tol"
            name="tol"
            onChange={(event)=>setptolorstreet(event.target.value)} 
            label="Tol/Street"
            fullWidth
            variant="standard"
          />
        </Grid> 
      

        <Grid item xs={12} sx={{marginTop:3}} >
        <h5>  Temporary Address</h5>
    </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="country"
            fullWidth
            defaultValue="Nepal"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            onChange={(event)=>settcountry(event.target.value)} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          required
            id="Province"
            name="Province"
            label="Your Province"
            fullWidth
            select
            variant="standard"
            onChange={(event)=>settprovince(event.target.value)} 
          >
             <MenuItem value="Koshi" > Koshi</MenuItem>
      <MenuItem value="Madesh ">Madesh</MenuItem>
      <MenuItem value="Bagmati">Bagmati </MenuItem>
      <MenuItem value="Gandaki">Gandaki </MenuItem>
      <MenuItem value="Lumbini">Lumbini </MenuItem>
      <MenuItem value="Karnali">Karnali </MenuItem>
      <MenuItem value="Sudurpaschim">Sudurpaschim </MenuItem>
            </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="District"
            name="District"
            label="District"
            fullWidth
          select
          onChange={(event)=>settdistrict(event.target.value)} 
            variant="standard"

          >
          
       <MenuItem  unselectable ><b>Koshi</b></MenuItem> 
    <MenuItem value="Bhojpur">Bhojpur</MenuItem>
    <MenuItem value="Dhankuta">Dhankuta</MenuItem>
    <MenuItem value="Ilam">Ilam</MenuItem>
    <MenuItem value="Jhapa">Jhapa</MenuItem>
    <MenuItem value="Khotang">Khotang</MenuItem>
    <MenuItem value="Morang">Morang</MenuItem>
    <MenuItem value="Okhaldhunga">Okhaldhunga</MenuItem>
    <MenuItem value="Panchthar">Panchthar</MenuItem>
    <MenuItem value="Sankhuwasabha">Sankhuwasabha</MenuItem>
    <MenuItem value="Solukhumbu">Solukhumbu</MenuItem>
    <MenuItem value="Sunsari">Sunsari</MenuItem>
    <MenuItem value="Taplejung">Taplejung</MenuItem>
    <MenuItem value="Terhathum">Terhathum</MenuItem>
    <MenuItem value="Udayapur">Udayapur</MenuItem>
  
  <MenuItem unselectable ><b>Madhesh Pradesh </b></MenuItem>
    <MenuItem value="Bara">Bara</MenuItem>
    <MenuItem value="Dhanusha">Dhanusha</MenuItem>
    <MenuItem value="Mahottari">Mahottari</MenuItem>
    <MenuItem value="Parsa">Parsa</MenuItem>
    <MenuItem value="Rautahat">Rautahat</MenuItem>
    <MenuItem value="Saptari">Saptari</MenuItem>
    <MenuItem value='sarlahi'>Sarlahi</MenuItem>
    <MenuItem value="Siraha">Siraha</MenuItem>
    
  
    <MenuItem unselectable ><b>Bagmati </b></MenuItem>
    <MenuItem value="Bhaktapur">Bhaktapur</MenuItem>
    <MenuItem value="Chitwan">Chitwan</MenuItem>
    <MenuItem value="Dhading">Dhading</MenuItem>
    <MenuItem value="Dolakha">Dolakha</MenuItem>
    <MenuItem value="Kathmandu">Kathmandu</MenuItem>
    <MenuItem value="Kavrepalanchok">Kavrepalanchok</MenuItem>
    <MenuItem value="Lalitpur">Lalitpur</MenuItem>
    <MenuItem value="Makwanpur">Makwanpur</MenuItem>
    <MenuItem value="Nuwakot">Nuwakot</MenuItem>
    <MenuItem value="Rasuwa">Rasuwa</MenuItem>
    <MenuItem value="Ramechhap">Ramechhap</MenuItem>
    <MenuItem value="Sindhuli">Sindhuli</MenuItem>
    <MenuItem value="Sindhupalchok">Sindhupalchok</MenuItem>
  


  <MenuItem unselectable ><b>Gandaki Province</b></MenuItem>
    <MenuItem value="Baglung">Baglung</MenuItem>
    <MenuItem value="Gorkha">Gorkha</MenuItem>
    <MenuItem value="Kaski">Kaski</MenuItem>
    <MenuItem value="Lamjung">Lamjung</MenuItem>
    <MenuItem value="Manang">Manang</MenuItem>
    <MenuItem value="Mustang">Mustang</MenuItem>
    <MenuItem value="Myagdi">Myagdi</MenuItem>
    <MenuItem value="Nawalpur">Nawalpur</MenuItem>
    <MenuItem value="Parbat">Parbat</MenuItem>
<MenuItem value="Syangja">Syangja</MenuItem>
<MenuItem value="Tanahun">Tanahun</MenuItem>
    


    <MenuItem unselectable ><b>Lumbini Province</b></MenuItem>
    <MenuItem value="Arghakhanchi">Arghakhanchi</MenuItem>
    <MenuItem value="Banke">Banke</MenuItem>
    <MenuItem value="Bardiya">Bardiya</MenuItem>
    <MenuItem value="Dang">Dang</MenuItem>
    <MenuItem value="Gulmi">Gulmi</MenuItem>
    <MenuItem value="Kapilvastu">Kapilvastu</MenuItem>
    <MenuItem value="Parasi">Parasi</MenuItem>
    <MenuItem value="Palpa">Palpa</MenuItem>
    <MenuItem value="Pyuthan">Pyuthan</MenuItem>
    <MenuItem value="Rolpa">Rolpa</MenuItem>
    <MenuItem value="Rukum Purba"> Rukum Purba</MenuItem>
    <MenuItem value="Rupandehi">Rupandehi</MenuItem>
    
  


  <MenuItem unselectable ><b>Karnali Province</b></MenuItem>
    <MenuItem value="Dailekh">Dailekh</MenuItem>
    <MenuItem value="Dolpa">Dolpa</MenuItem>
    <MenuItem value="Humla">Humla</MenuItem>
    <MenuItem value="Jajarkot">Jajarkot</MenuItem>
    <MenuItem value="Jumla">Jumla</MenuItem>
    <MenuItem value="Kalikot">Kalikot</MenuItem>
    <MenuItem value="Mugu">Mugu</MenuItem>
    <MenuItem value="Rukum Paschim"> Rukum Paschim</MenuItem>

    <MenuItem value="Salyan">Salyan</MenuItem>
    <MenuItem value="Surkhet">Surkhet</MenuItem>


  
  <MenuItem unselectable ><b>Sudurpaschim Province</b></MenuItem>
    <MenuItem value="Achham">Achham</MenuItem>
    <MenuItem value="Baitadi">Baitadi</MenuItem>
    <MenuItem value="Bajhang">Bajhang</MenuItem>
    <MenuItem value="Bajura">Bajura</MenuItem>
    <MenuItem value="Dadeldhura">Dadeldhura</MenuItem>
    <MenuItem value="Darchula">Darchula</MenuItem>
    <MenuItem value="Doti">Doti</MenuItem>
    <MenuItem value='Kailali'>Kailali</MenuItem>
    <MenuItem value="Kanchanpur">Kanchanpur</MenuItem>
    
  
  
          </TextField>
        </Grid> 

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vdc/municipality"
            name="vdc/munici"
            label="Municipality/VDC"
            fullWidth
            onChange={(event)=>settmunicipalityorvdc(event.target.value)} 
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ward"
            name="ward"
            type='number'
            label="Ward No"
            fullWidth
            onChange={(event)=>settwardno(event.target.value)} 
            variant="standard"
            inputProps={{ pattern: "[0-9]*" ,min:'0',max:'32'}}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tol"
            name="tol"
            onChange={(event)=>setttolorstreet(event.target.value)} 
            label="Tol/Street"
            fullWidth
            variant="standard"
          />
        </Grid> 

        <br/>
        <Grid item xs={12} ><h5> Documents to be Submitted</h5> </Grid>
        <Grid item xs={12}> <h6>Passport size Photo</h6></Grid>
        <Grid item xs={12}>
        <form >
      <Input
        type="file"
        variant="outlined"
        onChange={(event)=>setpassportphoto(event.target.files)} 

        inputProps={{ accept: 'image/*' }} // Limit to image files
      />
      </form>
</Grid>
      <Grid item xs={12}> <h6>Citizenship (Front & back)</h6></Grid>
      <Grid item xs={12}><form >
          
          <Input
            type="file"
            variant="outlined"
            onChange={(event)=>setcitizenship(event.target.files)} 
            inputProps={{ accept: 'image/*', multiple: true }} 
          
          />
          </form></Grid>
        

    

        <Grid item ><h5> Acesssories provided by Hostel</h5> </Grid>
        <Grid item xs={12} sx={{fontSize:20}}>
                        <ul >
                  <li>Bed</li>
                  <li>Study table</li>
                  <li>Book Rack</li>
                  <li>steel/wooden Cupboard</li>
                </ul>
        </Grid>
        
        <Grid item xs={12}>
         [Note] Students must take care of their belonging themselves.Hostel admistration will not be responsible for anything misplaced or lost despite of it endeavor of making the hostel environment to the hostel
          </Grid>
  
<p className='mt-5'>The description furnished above are true  to the best of my knowedge and i will accept any action if i found wrong. I undertake to abide all rules and regulation of the hostels and shall accept any disciplinary action  taken against me if found guilty. </p>
<FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label=" Accept The Terms And Condition" />
    
    </FormGroup><br/><br/>
<Button type="submit" size='small' variant="contained" color="primary">
        Submit
      </Button>

</Grid>
</form>
</Container>
          
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
   
      </div>
  )
}