import api from "./api";
export default {
  users() {
    return api.get(`/stock-nutrinatalia/persona?ejemplo=%7B%22soloUsuariosDelSistema%22%3Atrue%7D`).then(response => response.data);
  },
  clientes({nombre, apellido}) {
    let params = {}
    if (nombre) {
      params.nombre = nombre
    }
    if (apellido) {
      params.apellido = apellido
    }
    return api.get(encodeURI(`/stock-nutrinatalia/persona?like=S&ejemplo=${JSON.stringify(params)}`)).then(response => response.data.lista);
  }
}
