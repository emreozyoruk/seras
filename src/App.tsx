import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';
import EventAction from './components/EventAction';
import {instructorList} from "./components/PropsType"
import LoginCheck from './components/LoginCheck';
import ContextExample from "./components/ContextExample"
import  {ThemeContextProvider}  from './components/ThemeContext';
function App() {

  const [dogru , setDogru] = useState(true)

  const kursDegistir = () => {
         setDogru(!dogru)   
  }

  const instructor = {
    firstName : "Emre" , 
    lastName : "Özyörük"
   }

  return (
    <div className="App">
    <Home name="Emre" courseNumber={15} isBest ={dogru} />
    <button onClick={kursDegistir}  > Kurs Tipi Değiştir </button>
    <br /><br />
    <Instructor fullName = {instructor} /> 
    <InstructorList  aileList = {instructorList} />
    <Request status = "loading" />
    <EventAction  />
    <LoginCheck />
    <ThemeContextProvider>
    <ContextExample />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
