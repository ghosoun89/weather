import React from "react";
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from "./Components/Weather";

const API_key = "b2a7226a9e309a61610678d8bb264cac"

class App extends React.Component{
  // this function to call api using URL
  getweather = async (e) => {
    //to prevent the page from refresh by default when we want to get data 
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=250441&APPID=${API_key}`)
    const data = await api_call.json()
    console.log('hello', data)
  }
 render() {
  return(
     <div>
     
     <Titles/>
     <Form getweather={this.getweather}/>
     <Weather/>
     </div>
   )
 }
} 
 export default App;