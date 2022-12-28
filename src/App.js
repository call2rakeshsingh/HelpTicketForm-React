import Header from "./Header.js";
import Footer from "./Footer.js";
import Form from "./Form"
import FormData from "./FormData"
import css from "./App.css"
import React from "react";
import { useState } from "react";


function App() {
  const [saveInputVal, setSaveInputVal] = useState([])

  const pullData = (inputVal) => {
    console.log("I am clicked")
    setSaveInputVal((oldData) => {
      return [...oldData, inputVal]
  }) 
  }
 
  return (
    <>
      <Header /> 
      <Form pullDatas ={pullData}/>
      <FormData ticketDataArray = {saveInputVal}/>
      <Footer />
    </>
  )
}

export default App

