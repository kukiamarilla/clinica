import api from "./api";

export default {
    list({cliente, empleado, desde, hasta, tipoProducto}) {
        let params = {}

        if (cliente) {
            params.idCliente = cliente
        }
        if (empleado) {
            params.idEmpleado = empleado
        }
        if (desde) {
            params.fechaDesdeCadena = `${date.getYear()}${(date.getMonth()+1).toString().padStart(2, "0")}${(date.getDate()).toString().padStart(2, "0")}`;
        }
        if (hasta) {
            params.fechaHastaCadena = `${date.getYear()}${(date.getMonth()+1).toString().padStart(2, "0")}${(date.getDate()).toString().padStart(2, "0")}`;
        }
        if (tipoProducto) {
            params.idTipoProducto = tipoProducto
        }
        return api.get(encodeURI(`/stock-nutrinatalia/fichaClinica?ejemplo=${JSON.stringify(params)}`)).then(response => response.data.lista)
    },
}
