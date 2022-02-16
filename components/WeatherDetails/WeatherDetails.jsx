import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({ Humidity, Wind }) => {
    return (

        <React.Fragment>
            <Typography>Humedad: {Humidity}%</Typography>
            <Typography>Viento: {Wind}Km/h</Typography>
        </React.Fragment>
    )
}

WeatherDetails.propTypes = {
    Humidity: PropTypes.number.isRequired,
    Wind: PropTypes.number.isRequired
}

export default WeatherDetails