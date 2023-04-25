import axios from 'axios';

const baseUrl = import.meta.env.VITE_GIPLY_BASE_URL;
const myApiKey = import.meta.env.VITE_GIPHY_API_KEY;

export const fetchGifs = async (query: string, page: number) => {
  const limit = 20;
  const offset = (page - 1) * 20;
  try {
    const response = await axios.get(`${baseUrl}?q=${query}&limit=${limit}&offset=${offset}&page=${page}&api_key=${myApiKey}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error)
  }
};
