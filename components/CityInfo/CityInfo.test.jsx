import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CityInfo from './CityInfo' //SUT: Subject under testing

test("CityInfo render", async () => {

    //A-acomodar las cosas para que el test funcione 
    //A-actuar, ejecutar algo 
    //A-vamos a evaluar que paso 
const city= 'New York';
const country= 'Estados Unidos';
    //Render: renderiza el componente y retorna una serie de funciones de utlidad
    //en este caso utilizamos "findAllByRole" para consultar a nuestro componenete
    //vamos a analizar su estado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)

    //findAllByRole nos va a buscar (en este caso) todos los componentes que sean "heading"=> H1,H2,H2,...
    const cityAndCountryComponents = await findAllByRole("heading")
    //cuando el test es correcto??
    //Cuando el primer elemento (heading) se encuentre la ciudad "New York" y cuando
    //el segundo elemento se encuentre el pais Estados Unidos


    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})