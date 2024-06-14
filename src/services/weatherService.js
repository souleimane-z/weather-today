import axios from 'axios';

const PROXY_URL = 'https://weather-proxy-gold.vercel.app'; // Remplacez par l'URL de votre API Proxy

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(PROXY_URL, {
      params: {
        city: city
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo', error);
    throw error;
  }
};
