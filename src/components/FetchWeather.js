import React from 'react';
import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5c41e00262625cb4c5a18ccc583b3276';

export const FetchWeather = async (query) => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });

  return data;
};
