import axios from 'axios';

const API_KEY = '185c5073c3fe06a81723ff2ebbcdb09b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;

export const FETH_WEATHER = 'FETH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url);

  return {
    type: FETH_WEATHER,
    payload: request
  }
}
