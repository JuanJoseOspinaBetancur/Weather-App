import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

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

test("CityList Render", async () => {

    const { findAllByRole } = render(< CityList cities={cities} onClickCity={()=>{}} />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(8)

}
)

test("CityList Click on item", async () => {
    //Debemos simular una accion del usuario: click sobre item
    //Debemos eso vamos a utilizar una funcion "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    //ahora, para simular la accion, vamos a utilizar fireEvent
    //fireEvent es parte de la libreria testing

    fireEvent.click(items[0])

    // ¿que tuvo que suceder?
    //se debio llamar la funcion fnClickOnItem UNA unica vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})