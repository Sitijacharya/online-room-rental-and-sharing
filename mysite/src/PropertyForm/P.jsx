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
import AddressForm from './AddressForm';
import PropertyDetail from './PropertyDetail'
import Other from './Other';
import General from './General';
import { useState } from 'react';


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

const steps = [ 'General info','Address', 'Property details', 'Others'];

function getStepContent(step) {
  
const [firstname,setFirstName] = useState();
const [lastname,setLastName] = useState();
const [gender,setGender] = useState();
const [email,setEmail] = useState();
const [phoneno,setPhoneno] = useState();

const [country,setCountry] = useState("Nepal");
const [province,setProvince] = useState();
const [district,setDistrict] = useState();
const [municipalityorvdc,setMunicipalityorvdc] = useState();
const [wardno,setWardno] = useState();
const [streetortole,setStreetortole] = useState();

const [category,setCategory] = useState();
const [description,setDescription] = useState();
const [roomno,setRoomno] = useState();
const [bhk,setBhk] = useState();
const [bathno,setBathno] = useState();
const [price,setPrice] = useState();
const [watersupply,setWatersupply] = useState();
const [electricity,setElectricity] = useState();
const [parking,setParking] = useState();
const [lift,setLift] = useState();

const [garden,setGarden] = useState();
const [terrace,setTerrace] = useState();
const [tenantmarried,setTenantmarried] = useState();
const [tenantemployed,setTenantemployed] = useState();
const [lookingfor,setLookingfor] = useState();
const [minimumtenure,setMinimumtenure] = useState();
const [img,setImg] = useState([]);


const property = {
  firstname,
  lastname,
  gender,
  email,
  phoneno,
  country,
  province,
  district,
  municipalityorvdc,
  wardno,
  streetortole,
  category,
  description,
  roomno,
  bhk,
  bathno,
  price,
  watersupply,
  electricity,
  parking,
  lift,
  garden,
  terrace,
  tenantmarried,
  tenantemployed,
  lookingfor,
  minimumtenure,
  img
}

const propertyadd1 = (data) => {
  setFirstName(data.firstname),
  setLastName(data.lastname),
  setGender(data.gender),
  setEmail(data.email),
  setPhoneno(data.phoneno)
}

const propertyadd2 = (data) => {
  setCountry(data.country),
  setProvince(data.province),
  setDistrict(data.district),
  setMunicipalityorvdc(data.municipalityorvdc),
  setWardno(data.wardno)
  setStreetortole(data.streetortole)
}

const propertyadd3 = (data) => {
  setCategory(data.category),
  setDescription(data.description),
  setRoomno(data.roomno),
  setBhk(data.bhk),
  setBathno(data.bathno),
  setPrice(data.price),
  setWatersupply(data.watersupply),
  setElectricity(data.electricity),
  setParking(data.parking),
  setLift(data.lift)
}

const propertyadd4 = (data) => {
  setGarden(data.garden),
  setTerrace(data.terrace),
  setTenantmarried(data.tenantmarried),
  setTenantemployed(data.tenantemployed),
  setLookingfor(data.lookingfor),
  setMinimumtenure(data.minimumtenure)
  setImg(data.img)
}


console.log(property);

  switch (step) {
    case 0:
      return <General property={propertyadd1}/>
    case 1:
      return <AddressForm property={propertyadd2}/>;
    case 2:
      return <PropertyDetail property={propertyadd3}/>;
    case 3:
      return <Other property={propertyadd4}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Propertyadd() {
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
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Property
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