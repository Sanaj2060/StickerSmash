import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type ImageViewerProps = {
  source: ImageSource,
  selectedImg?: string,
};

export default function ImageViewer({ source, selectedImg }: ImageViewerProps) {
  return (
      <Image source={selectedImg ? {uri: selectedImg} : source} style={style.image} />
  );
}

const style = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
});