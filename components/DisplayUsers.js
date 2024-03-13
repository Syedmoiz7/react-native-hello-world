import React from "react";
import { useSelector } from "react-redux";
import { Text } from "react-native";
const DisplayUsers = () => {
    const data = useSelector((state) => {
        return state.users
    })
    console.log(data);

    return (
        data.map((user, id) => {
            return <Text key={id}>
                {user}
            </Text>
        })
    )
}

export default DisplayUsers