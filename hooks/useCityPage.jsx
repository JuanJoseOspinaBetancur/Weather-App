import { useState, useEffect, useDebugValue } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from '../utils/url'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'

const useCityPage = () => {
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()
    useDebugValue(`useCityPage${city}  y ${setForecastItemList}`)


    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl({ city, countryCode })

            try {
                const { data } = await axios.get(url)


                const dataAux = getChartData(data)


                setChartData(dataAux)

                // { hour: 18, state:"clouds", temperature:17, weekDay:"Jueves" }
                const forecastItemListAux = getForecastItemList(data)

                setForecastItemList(forecastItemListAux)
            } catch (error) {
                console.log(error)
            }
        }

        getForecast()

    }, [city, countryCode])

    return { city, chartData, countryCode,forecastItemList }
}

export default useCityPage