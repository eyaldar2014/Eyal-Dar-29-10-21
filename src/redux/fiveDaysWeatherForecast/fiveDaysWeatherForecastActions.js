import axios from 'axios'

import {
  FETCH_FIVE_DAYS_WEATHER_FORECAST_REQUEST,
  FETCH_FIVE_DAYS_WEATHER_FORECAST_SUCCESS,
  FETCH_FIVE_DAYS_WEATHER_FORECAST_FAILURE
} from './fiveDaysWeatherForecastTypes'

import { getFiveDaysWeatherForecast, apiKey } from '../fixtures/Apis' // +{locationKey} + {apiKey}


export const fetchFiveDaysWeather = (val) => {

  return async (dispatch) => {

    try {
      dispatch(fetchFiveDaysWeatherRequest())

      console.log(getFiveDaysWeatherForecast + val + apiKey)
      const response = await axios.get(getFiveDaysWeatherForecast + val + apiKey)
      
      console.log(response)
      const fiveDaysWeatherForecast = response.data
      if(!fiveDaysWeatherForecast) dispatch(fetchFiveDaysWeatherFailure('data not retreived'))
      else dispatch(fetchFiveDaysWeatherSuccess(fiveDaysWeatherForecast.DailyForecasts))
    }
    catch (error) {
      // error.message is the error message
      console.log('error', error)
      dispatch(fetchFiveDaysWeatherFailure(error.message))
    }
  }
}

export const fetchFiveDaysWeatherRequest = () => {
  return {
    type: FETCH_FIVE_DAYS_WEATHER_FORECAST_REQUEST
  }
}

export const fetchFiveDaysWeatherSuccess = (fiveDaysWeatherForecast) => {
  return {
    type: FETCH_FIVE_DAYS_WEATHER_FORECAST_SUCCESS,
    payload: fiveDaysWeatherForecast
  }
}

export const fetchFiveDaysWeatherFailure = (error) => {
  return {
    type: FETCH_FIVE_DAYS_WEATHER_FORECAST_FAILURE,
    payload: error
  }
}