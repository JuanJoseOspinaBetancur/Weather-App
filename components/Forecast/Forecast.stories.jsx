import React from 'react'
import Forecast from './Forecast'

export default {
    title: 'Forecast',
    component: Forecast
}

const forecastItemList = [
    { weekDay:"Jueves", hour:19, state:'drizzle', temperature:19 },
    { weekDay:"Viernes", hour:7, state:'thunderstorm', temperature:1 },
    { weekDay:"Sabado", hour:13, state:'clouds', temperature:-1 },
    { weekDay:"Jueves", hour:19, state:'clear', temperature:19 },
    { weekDay:"Viernes", hour:7, state:'rain', temperature:1 },
    { weekDay:"Sabado", hour:13, state:'snow', temperature:-1 },

]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
    


