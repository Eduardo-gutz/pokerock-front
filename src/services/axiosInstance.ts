import axios from "axios";

export const axionInstance = axios.create({
  baseURL: 'https://pokerock-api-dev.onrender.com',
  timeout: 100000,
  headers: {
    'Authorization': localStorage.getItem('accessToken')
  }
});