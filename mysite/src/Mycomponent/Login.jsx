import React,{useState} from 'react'
import Register from './Register'
import loginpic from '/src/images/login.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import loading from './Loading'
import Error from './Error'
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [check,setCheck] = useState(false)
  // const [loading,setloading] = useState(false);
  // const [error,seterror] = useState();

  const handleSubmit =  async (event) => {
    event.preventDefault();

    if(username.length < 8 || password.length < 8 )
    {
      setCheck(true);
    }

    if(username.length >= 8 && password.length >= 8 )
    {
      login(dispatch, { username, password });
    }

  //   const user = {
  //     username,
  //     password
  //   };
  //   try {
  //     setloading(true);
  //     const result = await axios.post('http://localhost:5000/api/auth/login', user).data;
  //     setloading(false);
  //     localStorage.setItem('currentUser', JSON.stringify(result));
  //     window.location.href='/'

  //   } catch (error) {
      
  //     console.log(error);
  //     setloading(false);
  //     seterror(true);
  //   }
  };
  return (
    
       <div className='container ' style={{backgroundColor:'white', paddingBottom:'20px'}}>
        <div className='row'>
          <div className='col-lg-6'>
          <img src={loginpic} className="login-img" alt="..." style={{backgroundSize:'cover',height:'500px'}}/>
          </div >
          <div className='col-lg-6'>
          <div className='mt-5 bs ' style={{border:'3px solid #ccc ' ,
     width:'350px',
     padding:'25px ',
     borderRadius:'10px',
     minHeight:'350px',
     maxHeight:'800px',
     marginLeft:'150px',
     backgroundColor:'ButtonHighlight',
    
    backgroundColor:'aliceblue'}}>
      {error && <Error message='Something Went Wrong!!!'/>}
    <form  action="/login" method="post" onSubmit={handleSubmit}>

      <label for="username"> <b>Username:</b></label><br/>
      <input type="text" id="username" name="username" required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}
      onChange={(event) => setusername(event.target.value)}/><br/>
      {check && username.length < 8 && <Error message='Username should be 8-20 letters!' />}

      <label for="password"><b>Password:</b></label><br/>
      <input type="password" id="password" name="password"  required style= {{width:'100%',padding:'10px 10px'}}
      onChange={(event) => setpassword(event.target.value)}/><br/><br/>
      {check && password.length < 8 && <Error message='Password should be atleast 8 letters!'/>}

      <button className="btn btn-outline-success mb-3" type="submit" style={{width:'40%'}}>Submit </button><br/>
      Not Register Yet.  
      <Link className='mx-4' to='/Register' style={{fontSize:'20px'}}>Register Now</Link><br/>
      <a className='mt-4' style={{fontSize:'20px'}} href="#">Forget Password?</a>
  </form> 


            </div>
            </div>
        </div>
   
    </div>
  )
}

