import React from "react";
import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const CompanyData = () => {
    const dispatch = useDispatch()
    
    const addNewUser = (data) => {
        // console.log(data);
        dispatch(addUser(data))
    }
    return (


        <View>
            <Button title='Add new users' onPress={() => addNewUser(fakeUserData())}></Button>
            <Button title='Clear all users'></Button>
            <DisplayUsers></DisplayUsers>
        </View>
    );
}

export default CompanyData;









  // const [name, setName] = useState("")
    // const [age, setAge] = useState("")
    // const [email, setEmail] = useState("")
    // const [test, setTest] = useState("12ehggauishjasd1")

    // const register = () => {
    //     console.warn(name, age, email);

    // }
    // const back = () => {
    //     console.log('back');
    // }



    
        // <View>
        //   <TextInput placeholder='Enter your name' style={{borderWidth: 1, margin: 5}} onChangeText={setName} value={name}></TextInput>
        //   <TextInput placeholder='Enter your Age' style={{borderWidth: 1, margin: 5}} onChangeText={setAge} value={age}></TextInput>
        //   <TextInput placeholder='Enter your email' style={{borderWidth: 1, margin: 5}} onChangeText={setEmail} value={email}></TextInput>
        //   <TextInput placeholder='Testing' style={{borderWidth: 1, margin: 5}} onChangeText={setTest} value={test} ></TextInput>
        //   <Button title='register' onPress={() =>{
        //     register()
        //     setName("") 
        //     setAge("")
        //     setEmail("")
        //   }
        //     } ></Button>
        //   <Button title='back' color={'red'} onPress={back}></Button>
        // </View>