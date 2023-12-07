import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Info from './Info';
import Facility from './Facility'
import { useState } from 'react';
import axios from 'axios';

import  Preference from './Preference';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        GharDera
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = [ 'General info','Roommate Preferences', 'Facilities'];

function getStepContent(step) {
  const [name,setname] = useState()
  const [age,setage] = useState()
  const [price,setprice] = useState()
  const [gender,setgender] = useState()
  const [type,settype] = useState()
  const [email,setemail] = useState()
  const [phoneno,setphoneno] = useState()
  const [country,setcountry] = useState()
  const [province,setprovince] = useState()
  const [district,setdistrict] = useState()
  const [municipalityorvdc,setmunicipalityorvdc] = useState()
  const [wardno,setwardno] = useState()
  const [tolstreet,settolstreet] = useState()
  const [desc,setdesc] = useState()
  const [photo,setphoto] = useState([])

  const [minage,setminage] = useState();
  const [maxage,setmaxage] = useState();
  const [poccupation,setpoccupation] = useState();
  const [pgender,setpgender] = useState();
  const [parking,setparking] = useState();
  const [psmoker,setpsmoker] = useState();
  const [palcoholic,setpalcoholic] = useState();
  const [ppets,setppets] = useState();
  const [pebno,setpebno] = useState();
  const [ppartying,setppartying] = useState();
  const [pmarried,setpmarried] = useState();
  const [pveg,setpveg] = useState();

  const [bedroom,setbedroom] = useState();
  const [bathroom,setbathroom] = useState();
  const [kitchen,setkitchen] = useState();
  const [watersupply,setwatersupply] = useState();
  const [gardenorterrace,setgardenorterrace] = useState();
  const [furnishing,setfurnishing] = useState();
  const [electricity,setelectricity] = useState();
  const [wifi,setwifi] = useState();
  const [roomphoto,setroomphoto] = useState([]);

  const form = {
    name, 
    age, 
    price,
    gender,
    type,
    email,
    phoneno,
    country,
    province,
    district,
    municipalityorvdc,
    wardno ,
    tolstreet,
    desc,
    photo,
    minage ,
    maxage ,
    poccupation,
    pgender ,
    parking ,
    psmoker ,
    palcoholic,
    ppets ,
    pebno ,
    ppartying ,
    pmarried ,
    pveg ,
    bedroom ,
    bathroom,
    kitchen ,
    watersupply ,
    gardenorterrace,
    furnishing ,
    electricity,
    wifi ,
    roomphoto ,
  }

  const propertyadd1 = (data) => {
    setname(data.name),
    setage(data.age),
    setprice(data.price),
    setgender(data.gender),
    settype(data.type),
    setemail(data.email),
    setphoneno(data.phoneno),
    setcountry(data.country),
    setprovince(data.province),
    setdistrict(data.district),
    setmunicipalityorvdc(data.municipalityorvdc),
    setwardno(data.wardno),
    settolstreet(data.tolstreet),
    setdesc(data.desc),
    setphoto(data.photo)
  }

  const propertyadd2 = (data) => {
    setminage(data.minage),
    setmaxage(data.maxage),
    setpoccupation(data.poccupation),
    setpgender(data.pgender),
    setparking(data.parking),
    setpsmoker(data.psmoker),
    setpalcoholic(data.palcoholic),
    setppets(data.ppets),
    setpebno(data.pebno),
    setppartying(data.ppartying),
    setpmarried(data.pmarried),
    setpveg(data.pveg)
  }

  const propertyadd3 = (data) => {
    setbedroom(data.bedroom)
    setbathroom(data.bathroom)
    setkitchen(data.kitchen)
    setwatersupply(data.watersupply)
    setgardenorterrace(data.gardenorterrace)
    setfurnishing(data.furnishing)
    setelectricity(data.electricity)
    setwifi(data.wifi)
    setroomphoto(data.roomphoto)
  }


  const styles = {
    fontSize: "16px",
    top: "60px",
    left: "1000px",
    zIndex: "200"
  };
  
  const handlesubmit = async (event) => {
    event.preventDefault();
    
    try {
    let data1 = new FormData();
      data1.append('image',photo[0])
      console.log(1)
      console.log(data1)
      const res1 = await axios.post('http://localhost:5000/api/forms/roommateimageupload',data1);
      const image1 = res1.data;
      form.photo = image1;
      console.log(image1)
      console.log(2)

      let data2 = new FormData();
      data2.append('image',roomphoto[0])
      data2.append('image',roomphoto[1])
      data2.append('image',roomphoto[2])

      const res2 = await axios.post('http://localhost:5000/api/forms/roommateimageupload',data2);
      const image2 = res2.data;
      form.roomphoto = image2;
      console.log(image2)
      
      console.log(3)

      const result = await axios.post('http://localhost:5000/api/forms/addroommateform',form)
      window.location.href = '/'
    }
    catch(err) {console.log("error") }
    console.log("Successful!!!")

  }

  console.log(form)
  switch (step) {
    case 0:
      return <Info property={propertyadd1}/> 
    case 1:
      return  < Preference property={propertyadd2}/> ;
    case 2:
      return <><Facility property={propertyadd3} />
      <Button
                type='submit'
                  variant="contained"
                  onClick={handlesubmit}
                  sx={{ mt: 3, ml: 1 }}
                  style={styles}
                >
                  Submit
                </Button>;
                </>
    
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Postroommate() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            GharDera
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" >
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Post For Roommates
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your submission
              </Typography>
              <Typography variant="subtitle1">
                Your Property number is #2001539. We have emailed your 
                confirmation, and will send you an update when we found the tenant.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button  onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                type='submit'
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}