import React from 'react'

const NotFound = () => {


    const handleClick = () =>{
       window.location="/"
    }
  
  return (
    <>
    <div style={{textAlign:'center',marginTop:"50px" }}>
      <h1>Error!404 Page Not Found
        </h1>
      <br />
<input type="button" value="Back" onClick={handleClick} />
    </div>
    </>
  )
}

export default NotFound
