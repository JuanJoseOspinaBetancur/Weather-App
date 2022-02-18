import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'

const cities = [
  { city: "New York", country: "Estados Unidos", countryCode:"US" },
  { city: "Los Angeles", country: "Estados Unidos", countryCode:"US" },
  { city: "Houston", country: "Estados Unidos", countryCode:"US" },
  { city: "Phoenix", country: "Estados Unidos", countryCode:"US" },
  { city: "San Antonio", country: "Estados Unidos", countryCode:"US" },
  { city: "Filadelfia", country: "Estados Unidos", countryCode:"US" },
  { city: "Illinois", country: "Estados Unidos", countryCode:"US" },
  { city: "Miami", country: "Estados Unidos", countryCode:"US" },
  { city: "Detroit", country: "Estados Unidos", countryCode:"US" }
]
const MainPage = () => {
  const history = useHistory()
  
  const onClickHandler = () => {
    //cual va a ser la nueva url que va a mostrar en el navegador
    //history.push nos permite alterar la url por programacion
    history.push('/city')
  }
  return (
    <AppFrame>

      <Paper elevation={10}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  )
}


export default MainPage