import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const VerificationPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const token = location.pathname.split("/")[4];

  useEffect( async () => {
    const res = await axios.get('http://localhost:5000/api/users/'+ id + '/verify/' + token)
  },[])
  return (
    <div>
      <h1>Your account has been verified</h1>
      <h1>
        <a> Login</a>
      </h1>
    </div>
  )
}

export default VerificationPage
