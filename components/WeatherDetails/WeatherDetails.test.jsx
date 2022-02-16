import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

//permite encontrar un texto por el componente que muestra
test("WeatherDetails render", async () => {
    const { findBytext } = render(<WeatherDetails Humidity={10} Wind={19} />)

    //al utilizar las barras, utilizamos REGEXP, que al menos tenga ese componente es como el %hola% en bases de datos
   // const wind = await findBytext(/19/)
    //const Humidity = await findBytext(/10/)

    //expect(wind).toHaveTextContent('Viento: 19Km/h')
   // expect(Humidity).toHaveTextContent('Humedad: 10%')
})