import React from 'react'
import {DataComing} from "./PropsType"



function Home(props : DataComing) {
  return (
    <div>
         {props.name}  Eğitime Hoş Geldiniz <br />
         Kurs Sayısı : {props.courseNumber} <br /> 
         En iyi eğitim bu mu ? <br /> 
         Cevap : {props.isBest ? <p>Evet bu eğitim</p> : <p>Hayır Bu eğitim degil.</p>  } 
    </div>
  )
}

export default Home
