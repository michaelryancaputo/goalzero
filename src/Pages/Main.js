import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchState } from "../Queries";

export default () => {
  const query = useQuery(["state"], fetchState);

  return (
    <View style={styles.container}>
      <Text>Goal Zero</Text>
      <Text>
        {query.isLoading
          ? "Loading..."
          : query.isError
          ? "Error!"
          : query.data
          ? JSON.stringify(query.data.data.data)
          : null}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
