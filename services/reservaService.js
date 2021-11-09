import api from "./api";

export default {
  list: () => api.get("/stock-nutrinatalia/reserva").then(response => response.data.lista),
}