import React,{useState} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Form from './components/Form';
import Weather from './components/Weather';
import SearchAppBar from './components/SearchAppBar'



function App() {
  const [weather,setWeather] = useState([])
  const APIKEY = 'e65f20788ec89b4daacf899635e95bf7'

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
      e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}&units=metric`)
      .then( res => res.json())
      if(city && country){
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp),
        feelsTemp: Math.round(apiData.main.feels_like),
        minTemp: Math.round(apiData.main.temp_min),
        maxTemp: Math.round(apiData.main.temp_max),
        error:""
      }
      )}else{
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          feelsTemp: '',
          minTemp: '',
          maxTemp:'',
          error:"oj, något gick snett där"
        }
        )}
      }

  return (
    <React.Fragment>
      <CssBaseline />
        <div className="App">
        <SearchAppBar />
          <h1>WEATHER APP</h1>
            <Form getWeather={fetchData} />
              <Weather
              city={weather.city}
              country={weather.country}
              description={weather.description}
              temperature={weather.temperature}
              feelsTemp={weather.feelsTemp}
              minTemp={weather.minTemp}
              maxTemp={weather.maxTemp}
              error={weather.error}
              />
              
              {console.log(weather.data)}
        
        </div>
    </React.Fragment>
  );
}

export default App;
