import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'

const cities = [
  { city: "New York", country: "Estados Unidos" },
  { city: "Medellin", country: "Colombia" },
  { city: "Bogota", country: "Colombia" },
  { city: "Manizales", country: "Colombia" },
  { city: "Pereira", country: "Colombia" },
  { city: "Supia", country: "Colombia" },
  { city: "Cucuta", country: "Colombia" },
  { city: "Barranquilla", country: "Colombia" }
]
//elevation para ponerle sombra
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