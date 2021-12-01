import AsyncStorage from "@react-native-async-storage/async-storage"
import ventaService from "./ventaService"

export default {
  // Metodo para obtener todos los clientes
  list() {
    return AsyncStorage.getItem("clientes").then(clientes => JSON.parse(clientes))
  },
  async create(cliente) {
    const clientes = await this.list()
    const maxId = clientes.reduce((max, cliente) => cliente.id > max ? cliente.id : max, 0)
    cliente.id = maxId + 1
    clientes.push(cliente)
    return AsyncStorage.setItem("clientes", JSON.stringify(clientes))
  },
  async delete(cliente) {
    const clientes = await this.list()
    const index = clientes.findIndex(c => c.id === cliente.id)
    clientes.splice(index, 1)
    AsyncStorage.setItem("clientes", JSON.stringify(clientes))
    return clientes
  }
}