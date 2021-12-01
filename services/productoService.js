import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
  list() {
    return AsyncStorage.getItem("productos").then(clientes => JSON.parse(clientes))
  },
  async create(producto) {
    const productos = await this.list()
    const maxId = productos.reduce((max, producto) => Math.max(max, producto.id), 0)
    producto.id = maxId + 1
    productos.push(producto)
    AsyncStorage.setItem("productos", JSON.stringify(productos))
  }
}