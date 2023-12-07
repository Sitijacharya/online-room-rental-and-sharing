

const Error = ({message,style}) => {
  return (
    <div>
      <div class="alert alert-danger" role="alert" style={style}>
        {message}
      </div>
    </div>
  )
}

export default Error
