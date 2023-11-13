import React from 'react'
import {aileListType} from "./PropsType"


function InstructorList(props : aileListType) {
  return (
    <div>
      {props.aileList.map(item => {
        return (        
             <h3 key={item.firstName}>{item.firstName} {item.lastName} </h3>
        )
      })}
    </div>
  )
}

export default InstructorList
