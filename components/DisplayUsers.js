import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Text, View } from "react-native";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const data = useSelector((state) => {
        return state.users
    })
    console.log(data);

    const dispatch = useDispatch()

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    return (
        data.map((user, id) => {
            return <Text key={id}>
                {user}
                <View style={[{ width: "10%", marginTop: 10, backgroundColor: "red" }]}>
                    <Button title="Delete User" onPress={() => deleteUser(id)}></Button>
                </View>
            </Text>
        })
    )
}

export default DisplayUsers