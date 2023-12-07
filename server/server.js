const express = require('express');
const app = express();
const dbConfig = require('./db');
const auth = require('./routes/auth');
const property = require('./routes/propertyRoute');
const userRoute = require('./routes/user');
const formsRoute = require('./routes/form');
const wishlistRoute = require('./routes/wishlist');
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))


app.use(express.json());

app.use("/api/auth",auth);
app.use("/api/properties",property);
app.use("/api/users",userRoute);
app.use("/api/forms",formsRoute);
app.use("/api/wishlists", wishlistRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));