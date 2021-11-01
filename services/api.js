import axios from 'axios';
import { Alert } from 'react-native';
import Config from "../config";

let api = axios.create({
  baseURL: Config.API_URL,
  timeout: 5000,
})

api.interceptors.response.use((response) => response, (error) => {
  if (error.response) {
    if (error.response.status == 500)
      Alert.alert("Error 500", "Error interno del servidor")
    else
      Alert.error("Error", "Error desconocido")
  }
  throw error;
});

export default api;