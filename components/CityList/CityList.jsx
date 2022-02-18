//rafcp
//npm i --save-dev @storybook/addon-viewport
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import axios from 'axios'


// renderCityAndCountry se va a convertir en uan funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (CityAndCountry, weather) => {

  const { city, country } = CityAndCountry;
  //const { temperature, state } = weather;
  //li es un item de lista
  return (
    <ListItem button key={city} onClick={eventOnClickCity}>

      <Grid container justify="center" alignItems="center" >

        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item md={3} xs={12}>

          {
            weather ? (<Weather temperature={weather.temperature} state={weather.state} />)
              : ("No hay datos")
          }

        </Grid>

      </Grid>

    </ListItem>

  )
}

//cities: es una array y en cada item tiene que tener la ciudad y country
const CityList = ({ cities, onClickCity }) => {

  /*
[New York - Estados Unidos] : { temperature:10, state:"sunny" },
[Medellin - Colombia] : { temperature:10, state:"sunny" },
[Bogota - Colombia] : { temperature:10, state:"sunny" },
[Manizales - Colombia] : { temperature:10, state:"sunny" },
[Pereira - Colombia] : { temperature:10, state:"sunny" },
[Supia - Colombia] : { temperature:10, state:"sunny" },
[Cucuta - Colombia] : { temperature:10, state:"sunny" },
[Barranquilla - Colombia] : { temperature:10, state:"sunny" },
  */

  // const weather = { temperature: 10, state: 'cloud' }
  const [allWeather, setAllWeather] = useState({});

  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const appid = '3f0f42d46b6d17a6ca5d5b2cb5c11078';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

      axios.get(url).then(
        //-273.15 k a c
        response => {
          const { data } = response
          const temperature = Math.round((data.main.temp) - 273.15)
          const state = data.weather[0].main.toLowerCase()

          const propName = `${city}-${country}` //Ej: [New York - Estados Unidos]
          const propValue = { temperature, state } //Ej:  { temperature: 10, state: 'cloud' }


          console.log(propName,propValue)

          /* Explicacion de porque se puso los ...
          allWeather en la 1er pasada:
          {
            [New York - Estados Unidos] : { temperature:10, state:"sunny" },
          }
          allWeather en la 2da pasada:
          se desmonta lo pasado, abriendo campo para la otra pasada y queda asi:
          
          {
          [New York - Estados Unidos] : { temperature:10, state:"sunny" },
          [Medellin - Colombia] : { temperature:10, state:"sunny" }
          }

          Pero si viene con el mismo nombre, se reescribe 
          */
          //set[VARIABLE_ESTADO](VARIABLE_ESTADO=>VARIABLE_ESTADO+1 )
          setAllWeather(allWeather => {
            const result = { ...allWeather, [propName]: propValue }
            //La primera vez no tengo nada
            return result
          })
        })
    }
    cities.forEach(({ city, country, countryCode }) => {
      setWeather(city, country, countryCode)
    });

  }, [cities]);




  return (
    <List>
      {
        cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry,
          allWeather[`${CityAndCountry.city}-${CityAndCountry.country}`]))
      }
    </List>
  )
}
/*//¿como podemos mejorar esta validacion? 
CityList.propTypes = {
  //ptar
  cities: PropTypes.arrayof(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode:PropTypes.string.isRequired

    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired
} */


export default CityList