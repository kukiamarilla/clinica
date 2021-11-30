import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
  list() {
    return AsyncStorage.getItem("ventas").then(clientes => JSON.parse(clientes))
  }
}