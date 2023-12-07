import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function General(props) {

  const [firstname,setFirstName] = useState();
  const [lastname,setLastName] = useState();
  const [gender,setGender] = useState();
  const [email,setEmail] = useState();
  const [phoneno,setPhoneno] = useState();

  const property = {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    email: email,
    phoneno: phoneno
  }
  props.property(property)
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        General informations
      </Typography>
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
            onChange={(event)=>setFirstName(event.target.value)}
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
            onChange={(event)=>setLastName(event.target.value)}
          />
          </Grid>

          <Grid item xs={12}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event)=>setGender(event.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      
      </RadioGroup>
    </FormControl>
        
        </Grid> 


          <Grid item xs={12}>
          <TextField
          required
            id="email"
            name="email"
            type="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            onChange={(event)=>setEmail(event.target.value)}
            label="Enter your email"
            fullWidth
            variant="standard"
            inputProps={{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }}
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
            onChange={(event)=>setPhoneno(event.target.value)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
          />
        </Grid>

      </Grid>
    </div>
  )
}
