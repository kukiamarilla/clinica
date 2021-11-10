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
      params.fechaDesdeCadena = `${date.getYear()}${date.getMonth()+1}${date.getDate()}`;
    }
    if (hasta) {
      params.fechaHastaCadena = `${date.getYear()}${date.getMonth()+1}${date.getDate()}`;
    }
    return api.get(encodeURI(`/stock-nutrinatalia/reserva?ejemplo=${JSON.stringify(params)}`)).then(response => response.data.lista)
  },
}

let filtros = {
  desde: new Date(),
}

reservaService.list(filtros).then(reservas => {})