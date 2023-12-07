import React from 'react'

const ErrorMessage = ({message,style}) => {
  return (
   
       <div style={{display:'flex'}}>
        <span style={{color: 'red', display: 'flex'}}>{message}</span>
      </div>
    
  )
}

export default ErrorMessage
