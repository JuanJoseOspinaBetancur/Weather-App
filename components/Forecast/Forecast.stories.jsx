import React from 'react'
import Forecast from './Forecast'

export default {
    title: 'Forecast',
    component: Forecast
}

const forecastItemList = [
    { weekDay:"Jueves", hour:19, state:'cloud', temperature:19 },
    { weekDay:"Viernes", hour:7, state:'fog', temperature:1 },
    { weekDay:"Sabado", hour:13, state:'alien', temperature:-1 }

]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
    


