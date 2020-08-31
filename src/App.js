import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';


function App() {
  const [weather,setWeather] = useState([])
  const APIKEY = 'e65f20788ec89b4daacf899635e95bf7'

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}&units=metric`)
      .then( res => res.json())
      .then(data => data)
      if(city && country){
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp),
        error:""
      }
      )}else{
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error:"oj, något gick snett där"
        }
        )}
      }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      />
      {console.log(weather.data)}
    
    </div>
  );
}

export default App;
