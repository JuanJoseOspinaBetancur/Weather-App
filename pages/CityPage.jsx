import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import AppFrame from '../components/AppFrame'
import Paper from '@material-ui/core/Paper'

const CityPage = () => {

  const city = "New York"
  const country = "Estados Unidos"
  const temperature = 20
  const state = "cloud"
  const Humidity = 80
  const Wind = 5
  const data = [
    {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
    },
    {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
    },
    {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
    },
    {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
    },
    {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
    },
    {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
    }
  ]

  
  const forecastItemList = [
    { weekDay: "Jueves", hour: 19, state: 'cloud', temperature: 19 },
    { weekDay: "Viernes", hour: 7, state: 'fog', temperature: 1 },
    { weekDay: "Sabado", hour: 13, state: 'alien', temperature: -1 }

  ]

  return (
    <AppFrame>
      <Paper>
        
        <Grid item container xs={12} justify="center" alignItems='flex-end'>
          <CityInfo city={city} country={country} ></CityInfo>
        </Grid>



        <Grid container item xs={12} justify='center' >

          <Weather temperature={temperature} state={state} />

          <WeatherDetails Humidity={Humidity} Wind={Wind} />


        </Grid>
        <Grid item xs={12}>
          <ForecastChart data={data} />
        </Grid>
        <Grid item xs={12} >
          <Forecast forecastItemList={forecastItemList} />
        </Grid>

      </Paper>

    </AppFrame>



  )
}


export default CityPage