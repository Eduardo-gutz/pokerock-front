import axios from "axios";

export const axionInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 100000,
  headers: {
    'Authorization': localStorage.getItem('accessToken')
  }
});