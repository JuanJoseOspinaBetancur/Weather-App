import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain, WiAlien } from 'react-icons/wi'


export const validValues = [
    'cloud',
    'cloudy',
    'fog',
    'sunny',
    'rain',
    'alien',
]

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
    alien: WiAlien
}
const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return (
        <StateByName/>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired

}

export default IconState