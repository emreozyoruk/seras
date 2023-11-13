import React from 'react'
import {userType} from "./PropsType"

import { useState } from 'react'
function LoginCheck() {
const [user , setUser] = useState <userType | null> ({} as userType)

const handleLogin = () => {
    setUser({
        name : "Emre",
        email : "ccc@hotmail.com" ,
        age : 23  
    })
}
const handleLogout = () => {
    setUser({} as userType)
}

  return (
    <div>
      <button onClick={handleLogin} >Giriş Yap</button>
      <button onClick={handleLogout}>Cıkıs Yap</button>
      <div>Adınız : {user?.name} Mailiniz : {user?.email}  Yaşınız : {user?.age}  </div>
    </div>
  )
}

export default LoginCheck
