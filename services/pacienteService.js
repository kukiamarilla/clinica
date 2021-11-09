import api from "./api";
export default {
  list: () => api.get("/stock-nutrinatalia/persona").then(response => response.data.lista),
}
