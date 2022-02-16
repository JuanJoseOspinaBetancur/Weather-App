import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "New York", country: "Estados Unidos" },
    { city: "Medellin", country: "Colombia" },
    { city: "Bogota", country: "Colombia" },
    { city: "Manizales", country: "Colombia" },
    { city: "Pereira", country: "Colombia" },
    { city: "Supia", country: "Colombia" },
    { city: "Cucuta", country: "Colombia" },
    { city: "Barranquilla", country: "Colombia" },
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />

