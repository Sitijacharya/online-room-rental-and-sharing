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
import { useSelector } from "react-redux";
import axios from 'axios';
import Profile from './Profile'
import Error from '../Mycomponent/Error'
import ErrorMessage from '../Mycomponent/ErrorMessage'

function Copyright(props) {
 
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          GharDera.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }




const theme = createTheme();




export default function Profilereg() {
  const user = useSelector((state) => state.user.currentUser);

  const [firstname,setfirstname] = useState('');
  const [lastname,setlastname] = useState('');
  const [gender,setgender] = useState('');
  const [dob,setdob] = useState('');
  const [phoneno,setphoneno] = useState('');
  const [age,setage] = useState('');
  const [country,setcountry] = useState('');
  const [province,setprovince] = useState('');
  const [district,setdistrict] = useState('');
  const [municipalityorvdc,setmunicipalityorvdc] = useState('');
  const [wardno,setwardno] = useState('');
  const [streetortol,setstreetortol] = useState('');

  const [occupation,setoccupation] = useState('');
  const [smoker,setsmoker] = useState('');
  const [alcoholic,setalcoholic] = useState('');
  const [pets,setpets] = useState('');
  const [veg,setveg] = useState('');
  const [ebno,setebno] = useState('');
  const [parking,setparking] = useState('');
  const [partying,setpartying] = useState('');
  const [married,setmarried] = useState('');
  const [photo,setphoto] = useState('');

  const [check,setcheck] = useState(false);
  const [error,setError] = useState(false);

  const userDetails = {
    firstname ,
    lastname ,
    gender ,
    dob ,
    phoneno ,
    age ,
    country,
    province ,
    district ,
    municipalityorvdc ,
    wardno ,
    streetortol ,
    
    occupation ,
    smoker ,
    alcoholic ,
    pets ,
    veg ,
    ebno ,
    parking,
    partying ,
    married ,
    photo
  }

  const calculate_age = (dob) => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
    setage(age_now);
    console.log(age_now);
    return age_now;
  }
  console.log(userDetails)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (firstname.length < 3 || lastname.length < 3 || age < 18 || age > 80)
    {
       setcheck(true);
       window.scrollTo(0, 0);

    }
    if (firstname.length >= 3 && lastname.length >= 3 && age>=18 && age<=80)
    {
    let data1 = new FormData();
    data1.append('image',photo[0])
    console.log(1)
    console.log(data1)
    const res1 = await axios.post('http://localhost:5000/api/forms/roommateimageupload',data1);
    const image1 = res1.data;
    
    userDetails.photo = image1
    const res = await axios.put('http://localhost:5000/api/users/' + user._id, userDetails);

    window.location.href = '/profile'
    }
  }

  return (
    <div>
        <div>

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 ,marginTop:5}}>
            <Typography component="h1" variant="h4" align="center">
              Profile Form
            </Typography>
            <form action='' method='post' onSubmit={handleSubmit}>
            <Grid container spacing={3}>
  
  <Grid item xs={12} sm={12}>
  {error && <Error message='Something Went Wrong!!!' style={{paddingLeft: '9.5vw'}}/>}

  <TextField
        required
        id="Name"
        name="Name"
        label="First name"
        fullWidth
        autoComplete="given-name"
        variant="standard"
        onChange={(event)=>setfirstname(event.target.value)} 
      />
      {check && firstname.length < 3 && <ErrorMessage message='Firstname should be greater than 3 letters!' />}

    </Grid>
  
   
      <Grid item xs={12}>
      <TextField
      required
        id="email"
        name="email"
        onChange={(event)=>setlastname(event.target.value)} 
        
        label="Last Name "
        fullWidth
        variant="standard"
      />
      {check && lastname.length < 3 &&<ErrorMessage message='Lastname should be greater than 3 letters!' />}

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
                              <Form.Control type="date" name="dob" placeholder="Date of Birth" 
                              onChange={(event)=>{ setdob(event.target.value); calculate_age(event.target.value);}} required fullWidth />
                          </Form.Group>
      {check && (age < 18 || age > 80) && <ErrorMessage message='Incorrect DOB!!!' />}

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
        onChange={(event)=>setphoneno(event.target.value)} 
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
      required
        id="age"
        name="age"
        type="number" 
        label="Enter your age"
        onChange={(event)=>setage(event.target.value)} 
        fullWidth
        variant="standard"
        value={age}
        inputProps={{ pattern: "[0-9]*" ,min:'1',max:'120'}}
        disabled
        
      />
    </Grid>
    
  
  
  
   
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              name="country"
              label="country"
              fullWidth
              onChange={(event)=>setcountry(event.target.value)} 
              defaultValue="Nepal"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
  
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            required
              id="Province"
              name="Province"
              label="Your Province"
              fullWidth
              onChange={(event)=>setprovince(event.target.value)} 
              select
              variant="standard"
  
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
        onChange={(event)=>setdistrict(event.target.value)} 
              
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
              onChange={(event)=>setmunicipalityorvdc(event.target.value)} 
      
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
        onChange={(event)=>setwardno(event.target.value)} 
              
              variant="standard"
              inputProps={{ pattern: "[0-9]*" ,min:'0',max:'32'}}
            />
          </Grid>
  
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Tol"
              name="tol"
        onChange={(event)=>setstreetortol(event.target.value)} 
              
              label="Tol/Street"
              fullWidth
              variant="standard"
            />
          </Grid> 
          <Grid item xs={12} sx={{marginTop:3}} >
        <h5>About Me  </h5>
    </Grid>

          <Grid item xs={12} sm={12}>
          <TextField
          required
            id="occupation"
            name="occupation"
        onChange={(event)=>setoccupation(event.target.value)} 
            
            label="Occupation"
            fullWidth
            variant="standard"
          />
        </Grid>
        
    
        
     
        <Grid item xs={6}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Smoker</FormLabel>
      <RadioGroup
       required
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event)=>setsmoker(event.target.value)} 
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />}  label="No" /> 
      </RadioGroup>
    </FormControl>
        </Grid>
         
        <Grid item xs={6}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Alcoholic</FormLabel>
      <RadioGroup
      required
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event)=>setalcoholic(event.target.value)} 

      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Pet Allows</FormLabel>
      <RadioGroup
      required
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event)=>setpets(event.target.value)} 
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid>

        <Grid item xs={6}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Veg</FormLabel>
      <RadioGroup
      required
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        onChange={(event)=>setveg(event.target.value)} 
        name="row-radio-buttons-group">
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        
     

      </RadioGroup>
    </FormControl>
        </Grid>

        <Grid item xs={6}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Active</FormLabel>
      <RadioGroup
      required
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event)=>setebno(event.target.value)} 
        >
        <FormControlLabel value="yes" control={<Radio />} label="Early bird" />
        <FormControlLabel value="No" control={<Radio />} label="Night Owls" />
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={6}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Parking</FormLabel>
      <RadioGroup
      required
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        onChange={(event)=>setparking(event.target.value)} 
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={8}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Partying</FormLabel>
      <RadioGroup
      required
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        onChange={(event)=>setpartying(event.target.value)} 
        name="row-radio-buttons-group">
        <FormControlLabel value="high" control={<Radio />} label="High" />
        <FormControlLabel value="moderate" control={<Radio />} label="Moderate" />
        <FormControlLabel value="No" control={<Radio />} label="No" />

      </RadioGroup>
    </FormControl>
        </Grid>

        <Grid item xs={6}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Married</FormLabel>
      <RadioGroup
      required
      row
        aria-labelledby="demo-row-radio-buttons-group-label"
        onChange={(event)=>setmarried(event.target.value)} 
        name="row-radio-buttons-group">
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />

      </RadioGroup>
      <Grid item xs={12}> <h6> Profile Photo</h6></Grid>
          <Grid item xs={12}>
          <form >
        <Input
          type="file"
          variant="outlined"
          onChange={(e) => setphoto(e.target.files)}
          inputProps={{ accept: 'image/*' }} // Limit to image files
        />
        </form>
  </Grid>
    </FormControl>
        </Grid>
      <Grid item xs={12}>
      <Button  type="submit" size='small'  variant="contained" color="primary" style={{width:'200px'}}>
          Post Details 
        </Button>
      </Grid>
  </Grid>
        
  </form>
  </Container>
            
          <Copyright sx={{ mt: 8, mb: 4 }} />
      </ThemeProvider>
     
        </div>
    </div>
  )
}