import * as React from 'react';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';

import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState, useEffect } from 'react';


export default function Other(props) {

  const [garden,setGarden] = useState();
  const [terrace,setTerrace] = useState();
  const [tenantmarried,setTenantmarried] = useState();
  const [tenantemployed,setTenantemployed] = useState();
  const [lookingfor,setLookingfor] = useState();
  const [minimumtenure,setMinimumtenure] = useState();
  const [img,setImg] = useState([]);

  const handleimage = (event) => {
   setImg(event.target.files)
 
  }

  const property = {
    garden: garden,
    terrace: terrace,
    tenantmarried: tenantmarried,
    tenantemployed: tenantemployed,
    lookingfor: lookingfor,
    minimumtenure: minimumtenure,
    img: img
  }
  props.property(property)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Conditions and Submission
      </Typography>


      
      <Grid item xs={12}>
        <FormControl>
      <FormLabel id="garden"> Garden Access</FormLabel>
      <RadioGroup
        row
        aria-labelledby="garden"
        name="garden"
        onChange={(event)=>setGarden(event.target.value)}

      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="terrace"> Terrace Access</FormLabel>
      <RadioGroup
        row
        aria-labelledby="terrace"
        name="terrace"
        onChange={(event)=>setTerrace(event.target.value)}

      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
      </RadioGroup>
    </FormControl>
        </Grid> 

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="marital">Should Tenant be married?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="marital"
        name="marital"
        onChange={(event)=>setTenantmarried(event.target.value)}

        
      >
        <FormControlLabel value="yes"  control={<Radio />} label="Yes"  />
        <FormControlLabel value="No"  control={<Radio />} label="No"  />
        <FormControlLabel value="any" control={<Radio />} label="Any" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="employ">Should Tenant be employed?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="employ"
        name="employ"
        onChange={(event)=>setTenantemployed(event.target.value)}

      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="any" control={<Radio />} label="Any" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 

        
        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="genderprefer">Are you looking For </FormLabel>
      <RadioGroup
        row
        aria-labelledby="prefer gender"
        name="gender"
        onChange={(event)=>setLookingfor(event.target.value)}

      >
        <FormControlLabel value="male" control={<Radio />} label="Male Tenant" />
        <FormControlLabel value="Female" control={<Radio />} label="Female Tenats" />
        <FormControlLabel value="Any" control={<Radio />} label="Any" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 


        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="tenure">Tenant's Mimimum Tenure</FormLabel>
      <RadioGroup
        row
        aria-labelledby="tenure"
        name="tenure"
        onChange={(event)=>setMinimumtenure(event.target.value)}

      >
        <FormControlLabel value="1" control={<Radio />} label="1 month" />
        <FormControlLabel value="3" control={<Radio />} label="3 months" />
        <FormControlLabel value="6" control={<Radio />} label="6 months" />
        <FormControlLabel value="1/more" control={<Radio />} label="1 year/more" />

        
      
      </RadioGroup>
    </FormControl>
        </Grid> 
        

        <p>Property Images</p>
        <form >
      <Input
        type="file"
        inputProps={{multiple: true}}
        // variant="outlined"
        onChange={handleimage}
        // onChange={(event) => setImg(event.target.files)}
        // inputProps={{ accept: 'image/*', multiple: true }} // Limit to image files
      />
      {/* <Button type="submit" size='small' variant="contained" color="primary">
        Upload
      </Button> */}
    </form>
    
    </React.Fragment>
  );
}