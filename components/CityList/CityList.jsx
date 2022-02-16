//rafcp
//npm i --save-dev @storybook/addon-viewport
import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


// renderCityAndCountry se va a convertir en uan funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => CityAndCountry => {

  const { city, country} = CityAndCountry;
  //li es un item de lista
  return (
    <ListItem  button key={city} onClick={eventOnClickCity}>
      
      <Grid container justify="center" alignItems="center" >

        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item md={3} xs={12}>
          <Weather temperature={10} state="sunny" />
        </Grid>
        
      </Grid>

    </ListItem>

  )
}

//cities: es una array y en cada item tiene que tener la ciudad y country
const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {
        cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry))
      }
    </List>
  )
}

//¿como podemos mejorar esta validacion? 
CityList.propTypes = {
  //ptar
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired
}

export default CityList