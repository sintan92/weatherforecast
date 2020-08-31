import React from 'react';
import mistCity from './mistCity.jpg';
import clouds from './clouds.jpg';



const Weather = ({description, city, country, error, temperature}) => {

  function matchValues(){
    if(description){
      const weatherDescription = description.split(' ')
      const keyWordsCloud =['cloudy', 'clouds', 'cloud', 'overcast']
      const keyWordsSun =['sun', 'sunny', 'clear']
      const keyWordsMist =['mist']

      for(let i = 0; i < weatherDescription.length; i++) {
        if(keyWordsCloud.includes(weatherDescription[i])) {
          return <img src={clouds} alt="clouds" style = {{width: 400, height:400}}/>
      }
    else if(keyWordsSun.includes(weatherDescription[i])){
      return <img src="img/clouds.jpg" alt="sun" style = {{width: 400, height:400}}/>

    }
    else if(keyWordsMist.includes(weatherDescription[i])){
      return <img src={mistCity} alt="mist" style = {{width: 400, height:400}}/>

    }
    }
      }
    }

    return( 
      <div>
        {city && country && <p>{city}, {country}</p>}
        {temperature && <p>{temperature} °C</p>}
        {description && <p>Condition: {description}</p>}
        {error && <p>{error}</p>}
        {description && matchValues()}
      </div>
    )
}
export default Weather;