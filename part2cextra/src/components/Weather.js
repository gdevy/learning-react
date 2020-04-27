import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {

    const [currentWeather, setCurrentWeather] = useState(0)

    //`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY

        axios({
                method: 'get',
                baseURL: 'http://api.weatherstack.com',
                url: '/current',
                params: {
                    access_key: api_key,
                    query: city
                }
            })
            .then(response => {
                console.log(response)
                const currentTemp = response.data.current
                if (!currentTemp) {
                    console.log('error')
                } else {
                    const newWeather = {
                        temp: currentTemp.temperature,
                        icon: currentTemp.weather_icons,
                        wind: {
                            speed: currentTemp.wind_speed,
                            direction: currentTemp.wind_dir
                        }
                    }
                    setCurrentWeather(newWeather)
                }
            })
    }, [city])


    if (currentWeather === 0) {
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <h3>Weather in {city}</h3>
                <p><b>temperature:</b> {currentWeather.temp} Celcius</p>
                {currentWeather.icon.map((pic, i) => <img key={i} src={pic} alt={`weather icon number ${i}`} />)}
                <p><b>wind:</b> {currentWeather.wind.speed} mph direction {currentWeather.wind.direction} </p>
            </>
        )

    }
}

export default Weather
