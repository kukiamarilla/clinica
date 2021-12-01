import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
  list() {
    return AsyncStorage.getItem("ventas").then(clientes => JSON.parse(clientes))
  },
  async create(cliente, detalle) {
    const ventas = await AsyncStorage.getItem("ventas")
    const ventasArray = JSON.parse(ventas)
    const maxId = ventasArray.reduce((max, venta) => Math.max(max, venta.id), 0)
    const maxNroFactura = ventasArray.reduce((max, venta) => Math.max(max, venta.nroFactura), 0)
    const venta = {
      id: maxId + 1,
      nroFactura: maxNroFactura + 1,
      cliente,
      detalle,
      fecha: new Date().toISOString(),
      prefijoFactura: "001-001-",
      total: detalle.reduce((total, detalle) => total + detalle.producto.precioVenta * detalle.cantidad, 0)
    }
    ventasArray.push(venta)
    await AsyncStorage.setItem("ventas", JSON.stringify(ventasArray))
    return venta

  }
}