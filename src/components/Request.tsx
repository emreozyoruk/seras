import React from 'react'

type requestProps = {
    status : "loading" | "succes" | "error"
}

function Request(props : requestProps) {
let message = ""

if (props.status === "loading"){
    message = "Yükleniyor"
}
if (props.status === "succes"){
    message = "Başarılı!"
}
if (props.status === "error"){
    message = "Hatalı !"
}




  return (
    <div>
      {message}
    </div>
  )
}

export default Request
