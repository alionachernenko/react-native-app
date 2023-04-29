import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.png")}
    >
      <View style={styles.page}>
        <View style={styles.avatarWrapper}></View>
        <TouchableOpacity style={styles.signOut}>
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.name}>Name</Text>
        <FlatList
          data={[]}
          renderItem={({ item }) => item}
          style={styles.posts}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  page: {
    flex: 0.8,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingHorizontal: 16,
    position: "relative",
  },
  avatarWrapper: {
    position: "absolute",
    width: 120,
    alignSelf: "center",
    height: 120,
    backgroundColor: "grey",
    top: -60,
    borderRadius: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
    marginBottom: 33,
  },
  posts: {
    width: "100%",
  },
});
