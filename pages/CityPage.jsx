import React, { useState, useEffect } from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import 'moment/locale/es-us'
import { useParams } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'



const forecastItemListExample = [
    { hour: 18, state: "clouds", temperature: 17, weekDay: "Jueves" },
    { hour: 6, state: "clouds", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "clouds", temperature: 18, weekDay: "Viernes" },
    { hour: 18, state: "clouds", temperature: 19, weekDay: "Viernes" },
    { hour: 6, state: "clouds", temperature: 17, weekDay: "Sábado" },
    { hour: 12, state: "clouds", temperature: 17, weekDay: "Sábado" },
]




const CityPage = () => {

    const [data, setData] = useState(null)
    const [forecastItemList, setforecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    console.log("city", city, 'countryCode', countryCode)

    useEffect(() => {

        const getForecast = async () => {
            const appid = "3f0f42d46b6d17a6ca5d5b2cb5c11078"
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;
            try {
                const { data } = await axios.get(url)
                console.log('data', data)
                const toCelsius = (temps) => Number(convertUnits(temps).from('K').to('C').toFixed(0))

                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, 'd'))

                const dataAux = days.map(day => {
                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })

                    const temps = tempObjArray.map(item => item.main.temp)
                    return ({
                        dayHour: day.format("dddd"),
                        min: toCelsius(Math.min(...temps)),
                        max: toCelsius(Math.max(...temps))


                    })

                })
                setData(dataAux)

                //{hour:18, state:'cloud', temperature:17, weekday:'jueves'}
                const interval = [4, 8, 12, 16, 20, 24]

                const forecastItemListAux = data.list
                    .filter((item, index) => interval.includes(index))
                    .map(item => {
                        return ({
                            hour: moment.unix(item.dt).hour(),
                            weekDay: moment.unix(item.dt).format('dddd'),
                            state: item.weather[0].main.toLowerCase(),
                            temperature: toCelsius(item.main.temp)
                        })
                    })

                setforecastItemList(forecastItemListAux)
            } catch (error) {
                console.log("error", error)
            }

        }

        getForecast()
    }, [city, forecastItemList]);



    const country = "Argentina"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const wind = 5
    // const data = dataExample
    //const forecastItemList = forecastItemListExample




    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid item container
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity}
                        wind={wind} />
                </Grid>
                <Grid item>
                    {
                        data && <ForecastChart data={data} />
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage