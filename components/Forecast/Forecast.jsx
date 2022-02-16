import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForeCastItem from "../ForecastItem"
import { validValues } from '../IconState';

const renderForecastItem = forecast => {
  const { weekDay, hour, state, temperature } = forecast
  //hay que poner un identificador unico
  //vamos a poner una "marca" para encontrar cada item (ForecastItem)
  return (
    <Grid item data-testid="forcast-item-container"  key={`${weekDay}${hour}`}>
      <ForeCastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature} />
    </Grid>
  )
}

const Forecast = ({ forecastItemList }) => {
  return (
    //con el space-around se da un espacio sobre cada uno de los elementos (un espacio igual)
    <Grid container justify='space-around' alignItems='center'>
      {
        forecastItemList.map(forecast => renderForecastItem(forecast))
      }

    </Grid>
  )
}
/*
forecastItemList es una array de elementos
los elementos deben tener una "forma" en particular
las siguientes propiedades:

    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired
*/
//ptshr=shape= le decimos que debe tener una deterinada forma

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    
    PropTypes.shape({
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired
  })
  
  ).isRequired
}

export default Forecast
