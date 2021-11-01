import api from "./api";

export default {
  users() {
    return api.get(`/stock-nutrinatalia/persona?ejemplo={"soloUsuariosDelSistema":true}`).then(response => response.data);
  }
}