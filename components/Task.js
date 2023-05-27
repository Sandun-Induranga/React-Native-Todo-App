import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Dialog from "react-native-dialog";
import { useState } from "react";

const Task = (props) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleUpdate = () => {
    setVisible(false);
  };

  return (
    <LinearGradient style={styles.container} colors={["#758bfd", "#ffd6ff"]}>
      <Text style={styles.text}>{props.task}</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Feather name="edit" size={24} color="green" onPress={showDialog} />
        <MaterialIcons name="delete-outline" size={24} color="red" />
      </View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Update TODO</Dialog.Title>
        <TextInput style={styles.input} placeholder="" value="TODO"></TextInput>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="UPDATE" onPress={handleUpdate} />
      </Dialog.Container>
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
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "#00b4d8",
    fontSize: 20,
  },
});
