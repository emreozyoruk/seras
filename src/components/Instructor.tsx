import React from 'react'
import {deneme} from "./PropsType"


function Instructor(props : deneme) {
  return (
    <div>
      {props.fullName.firstName} {props.fullName.lastName}

    </div>
  )
}

export default Instructor
