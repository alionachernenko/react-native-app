import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export const PostsScreen = () => {
  return (
    <>
    <Header title={'Posts'}/>
      <View style={styles.screen}>
        <View style={styles.userCard}>
          <View style={styles.avatarWrapper}>
            <Image />
          </View>
          <View>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.email}>Email</Text>
          </View>
        </View>
        <FlatList
          data={[]}
          renderItem={({ item }) => item}
          style={styles.posts}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },

  userCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "orange",
    borderRadius: 16,
  },
  name: {
    fontWeight: 700,
    fontSize: 13,
  },
  email: {
    color: " rgba(33, 33, 33, 0.8)",
    fontSize: 11,
  },
});
