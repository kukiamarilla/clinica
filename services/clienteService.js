import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
  // Metodo para obtener todos los clientes
  list() {
    return AsyncStorage.getItem("clientes").then(clientes => JSON.parse(clientes))
  }
}