import { View, Text, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    label: string,
    theme?: 'primary' | 'secondary',
    onPress?: () => void,
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View style={[style.buttonContainer, 
            {borderRadius: 18, borderColor: '#ffd33d', borderWidth: 1}]}>
                <Pressable style={[style.button, {backgroundColor: '#fff'}]
                } onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={style.buttonIcon} />
                    <Text style={[style.buttonLabel, { color: '#25292e' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={style.buttonContainer}>
            <Pressable style={style.button} onPress={onPress}>
                <Text style={style.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },

    button: {
        borderRadius: 12,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },

    buttonIcon: {
        paddingRight: 8,
    },
});