import React from 'react';


const Weather = ({description, city, country, error, temperature, feelsTemp, minTemp, maxTemp}) => {

  function matchValues(){
    if(description){
      const weatherDescription = description.split(' ')
      const keyWordsCloud =['cloudy', 'clouds', 'cloud', 'overcast']
      const keyWordsSun =['sun', 'sunny']
      const keyWordsClear =['clear', 'sky']
      const keyWordsMist =['mist']
      const keyWordsRain =['rain', 'rainy']

      for(let i = 0; i < weatherDescription.length; i++) {
        if(keyWordsCloud.includes(weatherDescription[i])) {
          return <img src="/img/clouds.jpg" alt="clouds" style = {{width: 400, height:400}}/>
      }
    else if(keyWordsSun.includes(weatherDescription[i])){
      return <img src="/img/sun.jpg" alt="sun" style = {{width: 400, height:400}}/>

    }
    else if(keyWordsMist.includes(weatherDescription[i])){
      return <img src="/img/mistCity.jpg" alt="mist" style = {{width: 400, height:400}}/>

    }
    else if(keyWordsClear.includes(weatherDescription[i])){
      return <img src="/img/clear.jpg" alt="clear" style = {{width: 400, height:400}}/>

    }
    else if(keyWordsRain.includes(weatherDescription[i])){
      return <img src="/img/rain.jpg" alt="rain" style = {{width: 400, height:400}}/>

    }
    }
      }
    }

    return( 
      <div>
        {city && country && <p>{city}, {country}</p>}
        {temperature && <p>Temperature: {temperature} °C</p>}
        {feelsTemp && <p>feels like: {feelsTemp} °C</p>}
        {minTemp && <p>min. temperature: {minTemp} °C</p>}
        {maxTemp && <p>max. temperature: {maxTemp} °C</p>}
        {description && <p>Condition: {description}</p>}
        {error && <p>{error}</p>}
        {description && matchValues()}
      </div>
    )
}
export default Weather;