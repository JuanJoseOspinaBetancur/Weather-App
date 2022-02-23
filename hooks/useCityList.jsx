import React, { useState, useEffect } from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import { validValues } from './../components/IconState'
import { getCityCode } from './../utils/utils'


const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const appid = "3f0f42d46b6d17a6ca5d5b2cb5c11078"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

            try {
                const response = await axios.get(url)

                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                const stateFromServer = data.weather[0].main.toLowerCase()

                const state = validValues.includes(stateFromServer) ? stateFromServer : null // data.weather[0].main.toLowerCase()

                const propName = getCityCode(city, countryCode)
                const propValue = { temperature, state } // Ej: { temperature: 10, state: "sunny" }

                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            } catch (error) {
                if (error.response) { // Errores que nos responde el server
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { // Errores que suceden por no llegar al server
                    setError("Verifique la conexión a internet")
                } else { // Errores imprevistos
                    setError("Error al cargar los datos")
                }
            }

        }

        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });

    }, [cities])

    return {allWeather,error,setError}
}

export default useCityList