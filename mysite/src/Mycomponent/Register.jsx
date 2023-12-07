import React from 'react'
import login from './Login'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import Success from './Success'
import Error from './Error'

function Register() {
  const[username,setusername] = useState('');
  const[email,setemail] = useState('');
  const[password,setpassword] = useState('');
  const[cpassword,setcpassword] = useState('');

  const [loading,setloading] = useState(false);
  const [error,seterror] = useState();
  const [success,setsuccess] = useState();

  const [check,setCheck] = useState(true)

  const handleregister = async (event) => {
    event.preventDefault();
    console.log(password)
    console.log(username)

    if(username.length < 8 || password.length < 8 || password!==cpassword)
    {
      setCheck(true);
    }

    if(password.length >= 8 && password===cpassword && username.length >= 8 )
    {
      console.log(username)
      const user = {
        // firstname,
        // lastname,
        username,
        email,
        password,
        cpassword
      } 
      try {
        setloading(true);
        const res = await axios.post('http://localhost:5000/api/auth/register',user).data; 
        // const result= await fetch("http://localhost:5173/api/auth/register",
        // method="post",
        // body=JSON.stringify(user),
        // headers={"Content-Type":"application/json"})
        // console.log(result)
        setloading(false);
        setsuccess(true);
        seterror(false);
        setCheck(false);
        // setfirstname('');
        // setlastname('');
        setusername('');
        setemail('');
        setpassword('');
        setcpassword('');
        
        
      } catch(error) {
        console.log(error);
        setloading(false);
        setsuccess(false);
        seterror(true);
      };

      console.log(user);
    }
    else
    {
      setsuccess(false);
      seterror(true);
    }
  };

  return (
    <div className='container'>
     <div className ='mt-5 mb-5 shadow-lg bs' style={{border:'3px solid #ccc ' ,
    width:'500px',
    padding:'20px ',
    borderRadius:'10px',
    margin:'auto',
    height:'auto',
    backgroundColor:'ButtonHighlight',
    backgroundColor:'aliceblue'
    }} >
        
        {loading && (<Loading />)}
        {error && (<Error message='Something Went Wrong!!!'/>)}
        {success && (<Success message='Registration Success !!!' />)}
        {success && (<Success message='An email has been sent to your account. Please Verify!!!' />)}

        <form action="/register" method='post' onSubmit={handleregister}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="username"><b>Username</b></label> <br/>
          <input type="text" placeholder="Enter Your Name" name="username" id="username"   required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}
          onChange={(event)=>setusername(event.target.value)} /><br/>
          {check && username.length < 8 && <Error message='Username should be 8-20 letters!' />}

          <label htmlFor="email"><b>Email</b></label> <br/>
          <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"   placeholder="Enter Email" name="email" id="email" required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}
          onChange={(event)=>setemail(event.target.value)}/><br/>

          <label htmlFor="psw"><b>Password</b></label><br/>
          <input type="password" placeholder="Enter Password" name="password" id="psw"required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}
          onChange={(event)=>setpassword(event.target.value)}/><br/>
          {check && password.length < 8 && <Error message='Password should be atleast 8 letters!'/>}

          <label htmlFor="psw-repeat"><b>Confirm Password</b></label><br/>
          <input type="password" placeholder="Confirm Password" name="cpasssword" id="c-psw"  required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}
          onChange={(event)=>setcpassword(event.target.value)}/><br/>
         {check && password!==cpassword && <Error message='Passwords do not match!!!' />}

          <hr />

          <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
          <button type="submit" className="btn btn-outline-success mb-3"  style={{width:'40%'}}>Register</button>
        </div>
        <div className="container signin">
          <p>Already have an account? <Link className='mx-4' to='/Login' style={{fontSize:'20px'}}>Sign in</Link>.</p>
        </div>
      </form>
      
    </div>
    </div>
  )
}

export default Register
