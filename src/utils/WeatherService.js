// WeatherService.js

import axios from 'axios';

const API_KEY = '4fb8a4cc427373cf8de12b28bdd0216d'; // 用你自己的 OpenWeatherMap API 密钥替换这里

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default {
  async getWeatherData(city) {
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
}
