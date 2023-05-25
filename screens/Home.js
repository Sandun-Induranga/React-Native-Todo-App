import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "darkblue", fontSize: 40, marginBottom: 60 }}>
        Manage Todo List
      </Text>
      <TouchableOpacity style={styles.buttons} onPress={() => alert("Clicked")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    backgroundColor: "darkblue",
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});
