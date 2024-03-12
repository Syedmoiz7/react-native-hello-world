/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { Text, View, Button, TextInput, Input } from 'react-native';
import CompanyData from './components/CompanyData'

// let name = "Moiz"
// let age = 22
// let email = "abc@gmail.com"

// function fruit() {
//   return "apple"
// }


function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [test, setTest] = useState("12ehggauishjasd1")

  const register = () => {
    console.warn(name, age, email);
    
  }
  const back = () => {
    console.log('back');
  }
  return (
    // <View>
    //   <Text style={{ fontSize: 30 }}>Hello React Native</Text>
    //   <Button title="Press Me"></Button>
    //   <Text>The Quick brown fox jumps over the lazy dog.</Text>
    //   <Text>{name}</Text>
    //   <Text>{email}</Text>
    //   <Text>{fruit()}</Text>
    //   <Text>{age === 22 ? "ok" : "unknown"}</Text>
    //   <CompanyData/>
    // </View>
    <View>
      <TextInput placeholder='Enter your name' style={{borderWidth: 1, margin: 5}} onChangeText={setName} value={name}></TextInput>
      <TextInput placeholder='Enter your Age' style={{borderWidth: 1, margin: 5}} onChangeText={setAge} value={age}></TextInput>
      <TextInput placeholder='Enter your email' style={{borderWidth: 1, margin: 5}} onChangeText={setEmail} value={email}></TextInput>
      <TextInput placeholder='Testing' style={{borderWidth: 1, margin: 5}} onChangeText={setTest} value={test} ></TextInput>
      <Button title='register' onPress={() =>{
        register()
        setName("") 
        setAge("")
        setEmail("")
      }
        } ></Button>
      <Button title='back' color={'red'} onPress={back}></Button>
    </View>
  );
}

export default App;
