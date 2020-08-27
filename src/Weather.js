import React from 'react';

const Weather = ({description, city, country, error, temperature}) => {
    return( 
      <div>
        {city && country && <p>{city}, {country}</p>}
        {temperature && <p>{temperature} °C</p>}
        {description && <p>Condition: {description}</p>}
        {error && <p>{error}</p>}
      </div>
    )
}
export default Weather;