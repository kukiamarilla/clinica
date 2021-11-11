import api from "./api";

export default {
  list: () => api.get("/stock-nutrinatalia/categoria/").then(response => response.data.lista),
};