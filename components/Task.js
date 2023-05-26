import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Task = (props) => {
  return (
    <LinearGradient style={styles.container} colors={["#758bfd", "#ffd6ff"]}>
      <Text style={styles.text}>{props.task}</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Feather name="edit" size={24} color="green" />
        <MaterialIcons name="delete-outline" size={24} color="red" />
      </View>
      <Alert></Alert>
    </LinearGradient>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#00b4d8",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});
