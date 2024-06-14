import axios from "axios";

const API_KEY = "98b2932b6dc8c4d087c50da42dd9f20a"; // Remplacez par votre clé API
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo", error);
    throw error;
  }
};
