import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Facility(props) {

  const [bedroom,setbedroom] = useState();
  const [bathroom,setbathroom] = useState();
  const [kitchen,setkitchen] = useState();
  const [watersupply,setwatersupply] = useState('Not Available');
  const [gardenorterrace,setgardenorterrace] = useState('Not Available');
  const [furnishing,setfurnishing] = useState('Not Available');
  const [electricity,setelectricity] = useState('Not Available');
  const [wifi,setwifi] = useState('Not Available');
  const [roomphoto,setroomphoto] = useState([]);

  const form = {
    bedroom : bedroom,
    bathroom : bathroom,
    kitchen : kitchen,
    watersupply : watersupply,
    gardenorterrace : gardenorterrace,
    furnishing : furnishing,
    electricity : electricity,
    wifi : wifi,
    roomphoto : roomphoto,
  }

  props.property(form)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Room's Facilities/Amenities
      </Typography>
      <Grid container spacing={3}> 
      <Grid item xs={12} sm={4}>
          <TextField
          required
            id="bedroom"
            name="bedroom"
            type="number" 
            label="Bedrooms"
            fullWidth
            variant="standard"
            onChange={(event)=>setbedroom(event.target.value)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="bathroom"
            name="bathroom"
            type="number" 
            label="Bathrooms"
            fullWidth
            onChange={(event)=>setbathroom(event.target.value)}
            variant="standard"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="kitchen"
            name="kitchen"
            type="number" 
            label="kitchen"
            onChange={(event)=>setkitchen(event.target.value)}
            fullWidth
            variant="standard"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'0',max:'100'}} 
          />
        </Grid>
      
      </Grid>
<div className='container mt-3 '>
  <form>
  <div className='row'>

      <div className='col-lg-4 '>
      <div className="list-group list-group-flush">
      <FormControlLabel value="Available" defaultValue="NotAvailable" 
            onChange={(event)=>setwatersupply(event.target.value)}
            control={<Checkbox /> } label="Water Supply 24 Hrs"  />

      <FormControlLabel 
            onChange={(event)=>setelectricity(event.target.value)}
            value="Available" defaultValue="NotAvailable"  control={<Checkbox /> } label="Electricity 24 Hrs" /> 

      <FormControlLabel  value="" 
      control={<Checkbox /> } label=" Parking" />

      </div>
      </div>
      <div className='col-lg-4' >
      <div className="list-group list-group-flush">
      <FormControlLabel value="Available" defaultValue="NotAvailable" 
            onChange={(event)=>setgardenorterrace(event.target.value)}
            control={<Checkbox /> } label=" Garden Acess" />

      <FormControlLabel value="Available" defaultValue="NotAvailable"  
            onChange={(event)=>setgardenorterrace(event.target.value)}
       control={<Checkbox /> } label=" Terrace Acesss" />


      </div>
      </div>
      <div className='col-lg-4'>
      <div className="list-group list-group-flush">
      <FormControlLabel value="Available" defaultValue="NotAvailable" 
            onChange={(event)=>setfurnishing(event.target.value)}
            control={<Checkbox /> } label="Furnished Rooms" />

      <FormControlLabel value="Available" defaultValue="NotAvailable"  
            onChange={(event)=>setwifi(event.target.value)}
            control={<Checkbox /> } label=" WIFI" />
        </div>
      </div>
    </div>
    </form>
    </div>

    <Grid item xs={12} >
        <h5> Room Image </h5>
        </Grid>

        <Grid item xs={12}>

        <form >
      <Input
        type="file"
        variant="outlined"
        onChange={(event)=>setroomphoto(event.target.files)}
        inputProps={{ accept: 'image/*',multiple: true}} 
      />
     
    </form>
    </Grid>
    </React.Fragment>
  );
}