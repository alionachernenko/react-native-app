import { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { KeyboardWrapper } from "../../components/KeyboardWrapper";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Header } from "../../components/Header";
import { SimpleLineIcons } from "@expo/vector-icons";

let ScreenHeight = Dimensions.get("window").height;
export const CreatePostScreen = () => {
  const [titleValue, setTitleValue] = useState("");
  const [isCreateButtonEnable, setIsCreateButtonEnable] = useState();
  const [locationName, setLocationName] = useState("");

  const onSubmit = () => {
    console.log({ titleValue, locationName });
  };

  useEffect(() => {
    setIsCreateButtonEnable(titleValue !== "");
  }, [titleValue]);

  const clearAll = () => {
    setTitleValue("");
    setPhoto(null);
    setLocationName("");
  };

  return (
    <KeyboardWrapper>
      <Header title={'Create'}/>
      <ScrollView>
        <View style={styles.screen}>
          <View style={styles.imageField}>
            <TouchableOpacity style={styles.makePhotoButton}>
            <SimpleLineIcons name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          </View>
          
          <TouchableOpacity>
            <Text style={styles.uploadButton}>Upload photo</Text>
          </TouchableOpacity>
          <View style={styles.inputs}>
            <TextInput
              placeholder="Title..."
              style={styles.input}
              onChangeText={(text) => setTitleValue(text)}
              value={titleValue}
            />
            <TextInput
              placeholder="Location..."
              style={styles.input}
              value={locationName}
              onChangeText={(text) => setLocationName(text)}
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.createButton,
              backgroundColor: isCreateButtonEnable ? "#FF6C00" : "#F6F6F6",
            }}
            disabled={!isCreateButtonEnable}
          >
            <Text
              style={{
                ...styles.buttonTitle,
                color: isCreateButtonEnable ? "#fff" : "#BDBDBD",
              }}
              onPress={onSubmit}
            >
              Create
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardWrapper>
  );
};

const styles = StyleSheet.create({
  retakePhoto: {
    position: "absolute",
    top: 5,
    zIndex: 1,
    right: 5,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: "15%",
    width: "11%",
    paddingVertical: 2,
    paddingHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  makePhotoButton: {
    position: "absolute",
    width: 60,
    height: 60,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 20,
    height: 80,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  clearButton: {
    alignSelf: "center",
    bottom: 16,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 20,
  },
  screen: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "white",
    height: ScreenHeight - 80,
  },
  imageField: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 8,
    overflow: "hidden",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButton: {
    fontWeight: 400,
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 33,
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: 17,
    marginBottom: 32,
  },
  input: {
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  createButton: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
  },
  buttonTitle: {
    color: "#fff",
    textAlign: "center",
  },
});
