import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={style.container}>
            <Text style={style.text}>About Us Screen.</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#25292e'
    },
    text: {
        color: '#fff'
    },
});