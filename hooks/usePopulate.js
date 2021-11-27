import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import clientes from '../assets/data/clientes.json';
import productos from '../assets/data/productos.json';
import ventas from '../assets/data/ventas.json';

export default function usePopulate() {
  useEffect(() => {
    AsyncStorage.getItem('clientes').then((value) => {
      if (!value) {
        AsyncStorage.setItem('clientes', JSON.stringify(clientes));
      }
    });
    AsyncStorage.getItem('productos').then((value) => {
      if (!value) {
        AsyncStorage.setItem('productos', JSON.stringify(productos));
      }
    });
    AsyncStorage.getItem('ventas').then((value) => {
      if (!value) {
        AsyncStorage.setItem('ventas', JSON.stringify(ventas));
      }
    });
  }, []);
}