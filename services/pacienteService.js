import api from "./api";

export default {
  users() {
    return api.get(`/stock-nutrinatalia/persona?ejemplo=%7B%22soloUsuariosDelSistema%22%3Atrue%7D`).then(response => response.data);
  },
  clientes() {
    return api.get(`/stock-nutrinatalia/persona`).then(response => response.data.lista);
  }
}