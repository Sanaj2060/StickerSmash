import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import { ImageSource } from "expo-image";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selImage, setSelImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSource | undefined>(
    undefined
  );

  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    requestPermission();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      console.log("User cancelled image");
    }
  };

  const onReset = () => {
    setSelImage(undefined);
    setShowAppOptions(false);
    setSelectedEmoji(undefined);
  };

  const onAddSticker = () => {
    setShowEmojiPicker(true);
  };

  const onCloseEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if(localUri) {
        alert("Image saved successfully!");
      }
    } catch (error) {
      console.error("Error saving image", error);
    }
  };

  return (
    <GestureHandlerRootView style={style.container}>
      <View style={style.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer source={PlaceholderImage} selectedImg={selImage} />
          {selectedEmoji && (
            <EmojiSticker imageSize={40} source={selectedEmoji} />
          )}
        </View>
      </View>
      {showAppOptions ? (
        <View style={style.optionsContainer}>
          <View style={style.optionRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={style.footerContainer}>
          <Button label="Choose a photo" theme="primary" onPress={pickImage} />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={showEmojiPicker} onClose={onCloseEmojiPicker}>
        <EmojiList
          onSelect={setSelectedEmoji}
          onCloseModal={onCloseEmojiPicker}
        ></EmojiList>
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
  },

  button: {
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "underline",
  },

  imageContainer: {
    flex: 1,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },

  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },

  optionRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
