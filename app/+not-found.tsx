import { View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";
import React from "react";

export default function NotFoundScreen(){
    return (
        <>
            <View style={style.container}>
                <Link href='/' style={style.button}>
                    Go back to home
                </Link>
            </View>
        </>
    )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: '#fff',
  },

  button: {
    fontSize: 20,
    color: '#fff',
    textDecorationLine: 'underline',
  },

});
