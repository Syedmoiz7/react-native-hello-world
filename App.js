/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, Button } from 'react-native';
import CompanyData from './components/CompanyData'

let name = "Moiz"
let age = 22
let email = "abc@gmail.com"

function fruit() {
  return "apple"
}


function App() {

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello React Native</Text>
      <Button title="Press Me"></Button>
      <Text>The Quick brown fox jumps over the lazy dog.</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{fruit()}</Text>
      <Text>{age === 22 ? "ok" : "unknown"}</Text>
      <CompanyData/>
    </View>
  );
}

export default App;
