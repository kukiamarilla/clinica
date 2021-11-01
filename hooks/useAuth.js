import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import pacienteService from "../services/pacienteService";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../store/authSlice";

export default function useAuth() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();


  useEffect(() => {
    AsyncStorage
      .getItem("isLoggedIn")
      .then(isLoggedInResponse => dispatch(setIsLoggedIn(!!JSON.parse(isLoggedInResponse))))
  }, [])

  const authenticate = (username, _) => {
    return pacienteService.users().then(users => {
      const success = users.lista.some(user => user.usuarioLogin == username)
      AsyncStorage
        .setItem("isLoggedIn", JSON.stringify(success))
        .then(() => dispatch(setIsLoggedIn(success)))
      return success
    }).catch(err => {
      console.log(err)
    })
  }

  const logout = () => {

    AsyncStorage
      .setItem("isLoggedIn", "false")
      .then(() => dispatch(setIsLoggedIn(false)))

  }

  return [isLoggedIn, authenticate, logout];
}