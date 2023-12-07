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
  return (
    <div>
        
      <ThemeProvider theme={theme}>
      
    
          
          <Container component="main" maxWidth="sm" sx={{ mb: 4 ,marginTop:5}}>
          <Typography component="h1" variant="h4" align="center">
            Hostel Fillup Form
          </Typography>
          <form action='' method='post'>
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
    />
    </Grid>

    <Grid item xs={12}>
  <FormControl>
<FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
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
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" required fullWidth />
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
    />
  </Grid>
  <Grid item xs={12} sm={6}>
  <TextField
      required
      id="lrelation"
      name="lRelation"
      label="Relation"
      fullWidth
    
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
            
            variant="standard"
            inputProps={{ pattern: "[0-9]*" ,min:'0',max:'32'}}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tol"
            name="tol"
            
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
            
            variant="standard"
            inputProps={{ pattern: "[0-9]*" ,min:'0',max:'32'}}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Tol"
            name="tol"
            
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
        
        inputProps={{ accept: 'image/*' }} // Limit to image files
      />
      </form>
</Grid>
      <Grid item xs={12}> <h6>Citizenship (Front & back)</h6></Grid>
      <Grid item xs={12}><form >
          
          <Input
            type="file"
            variant="outlined"
            
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
