import React from "react";
import api from "./api";

export default {
  list({categoria}) {
    let params = {}
    if(categoria) {
      params.idCategoria = categoria
    }
    return api.get(encodeURI(`/stock-nutrinatalia/tipoProducto/?ejemplo=${JSON.stringify(params)}`)).then(res => res.data.lista);
  }
}