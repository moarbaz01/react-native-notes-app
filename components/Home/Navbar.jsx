import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Navbar() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Notter...</Text>
        <View style={styles.rightContainer}>
          <Icon name="menufold" size={20} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  icon: {},

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
