import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const forecastItemList = [
    { weekDay: "Jueves", hour: 19, state: 'cloud', temperature: 19 },
    { weekDay: "Viernes", hour: 7, state: 'fog', temperature: 1 },
    { weekDay: "Sabado", hour: 13, state: 'alien', temperature: -1 }

]

test("Forecast render", async () => {
    //nos ayuda a encontrar 

    const { finAlldByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

  //  const forecastItems = await finAlldByTestId("forcast-item-container")

    //expect(forecastItems).toHaveLength(3)
})