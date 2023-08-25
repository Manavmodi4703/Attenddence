import React, { useState } from 'react'
import { services } from '../../services'

const ForgotPassword = () => {

    const [newPassword,setNewPassword] = useState()

    services.user.read()
    .then((res) =>{
        
    })
  return (
    <div>
      
    </div>
  )
}

export default ForgotPassword
