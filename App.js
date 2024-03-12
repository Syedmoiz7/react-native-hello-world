/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
 import React from "react";
import { Provider } from 'react-redux';
import CompanyData from './components/CompanyData'
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <CompanyData></CompanyData>
    </Provider>
  )
}



export default App;
