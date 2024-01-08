import React, { useState } from "react"
import axios from 'axios'

function App() {
  const [data,setData]=useState({})
  const [location,setLocation]=useState("")

  const searchLocation = (event) =>{
    if (event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data);
      })
    }
    
  }

  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=72a399fd76428b0d8e8839e17e163204`

  return (
    <div className="app">
      <div className="search">
      <input 
      onKeyPress={searchLocation}
      placeholder="Enter your Location"
      onChange={event=>setLocation(event.target.value)}
      value={location}
      type="text"
      />
      </div>
      
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>

          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>:null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>:null}
            
          </div>
        </div>
      
        {data.name != undefined&&

<div className="bottom">
<div className="fields">
  {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
 
  <p className="bold">Feels like</p>
</div>
<div className="humidity">
{data.main ? <p>{data.main.humidity}%</p> : null}
  
  <p className="bold">Humidity</p>
</div>
<div className="wind">
{data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
  
  <p className="bold">wind</p>
</div>

</div>
        
}
        





      </div>



    </div>
  );
}

export default App;
