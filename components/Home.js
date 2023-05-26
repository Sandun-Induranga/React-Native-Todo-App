import { SafeAreaView, Text, StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>YOUR TODO LIST</Text>
      </View>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    width: "100%",
    backgroundColor: "#00b4d8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
