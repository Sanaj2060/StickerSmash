import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
      <Pressable onPress={onPress} style={style.iconButton}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={style.iconButtonLabel}>{label}</Text>
      </Pressable>
  );
}

const style = StyleSheet.create({
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    iconButtonLabel: {
        color: '#fff',
        fontSize: 12,
    },
});