import api from "./api";

export default {
  list({cliente, empleado, desde, hasta}) {
    let params = {}

    if (cliente) {
      params.idCliente = {
        idPersona: empleado
      }
    }
    if (empleado) {
      params.idEmpleado = {
        idPersona: empleado
      }
    }
    if (desde) {
      params.fechaDesdeCadena = `${date.getYear()}${(date.getMonth()+1).toString().padStart(2, "0")}${(date.getDate()).toString().padStart(2, "0")}`;
    }
    if (hasta) {
      params.fechaHastaCadena = `${date.getYear()}${(date.getMonth()+1).toString().padStart(2, "0")}${(date.getDate()).toString().padStart(2, "0")}`;
    }
    return api.get(encodeURI(`/stock-nutrinatalia/reserva?ejemplo=${JSON.stringify(params)}`)).then(response => response.data.lista)
  },
}