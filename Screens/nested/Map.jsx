import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { View } from "react-native";
const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} mapType="standard"></MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
