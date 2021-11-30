import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
  list() {
    return AsyncStorage.getItem("productos").then(clientes => JSON.parse(clientes))
  }
}