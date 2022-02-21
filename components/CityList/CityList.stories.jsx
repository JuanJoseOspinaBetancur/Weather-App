import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "New York", country: "Estados Unidos", countryCode:"US" },
    { city: "Los Angeles", country: "Estados Unidos", countryCode:"US" },
    { city: "Houston", country: "Estados Unidos", countryCode:"US" },
    { city: "Phoenix", country: "Estados Unidos", countryCode:"US" },
    { city: "San Antonio", country: "Estados Unidos", countryCode:"US" },
    { city: "Filadelfia", country: "Estados Unidos", countryCode:"US" },
    { city: "Illinois", country: "Estados Unidos", countryCode:"US" },
    { city: "Miami", country: "Estados Unidos", countryCode:"US" },
    { city: "Detroit", country: "Estados Unidos", countryCode:"US" },
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />

