import React,{useState} from "react";
import axios from "axios";

function App() {
  const [data,setdata]=useState({})
  const [location,setLocation]=useState('')

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=74322a016628b86d995c198c6b8bc4be`
  const serachLocation = (event)=>{
   
      if(event.key === 'Enter'){
        axios.get(url).then((response)=>{
        setdata(response.data)
      console.log(response.data)
      
    })
    setLocation('')
  }
  
  }
  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={serachLocation}
        placeholder='Enter Location'
        type="text"/>
    
      </div>
      <div className="container">
        <div className="top">
          <h2>Hi Find your weather with me</h2>
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}

          </div>
        </div>

{data.name != undefined &&
  <div className="bottom">
          <div className="feels">
            {data.main ?<p className="bold">{Math.round(data.main.feels_like)}°F</p> :null}
          <p>Feels Like</p>
            
          </div>
          <div className="humanity">
            {data.main ?<p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main ?<p className="bold">{Math.round(data.wind.speed)}MPH</p> :null}
            <p>Wind Speed</p>

          </div>
        </div>





}        


        
        

      </div>
      
    </div>
  );
}

export default App;
