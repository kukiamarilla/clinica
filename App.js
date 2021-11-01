import React from 'react';
import RootNavigator from './routes/RootNavigator';
import AppLoading from "expo-app-loading";
import {API_URL} from "@env";
import { 
  useFonts,
  Montserrat_400Regular, 
  Montserrat_700Bold,
  Montserrat_900Black
} from '@expo-google-fonts/montserrat';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black
  });

  return (
    <>
      {fontsLoaded ? ( 
        <Provider store={store}>
          <RootNavigator/> 
        </Provider>
      ) : ( <AppLoading/> ) }
    </>
  );
}
