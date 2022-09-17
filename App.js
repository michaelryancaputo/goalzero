import Main from "./src/Pages/Main";
import SetDevice from "./src/Pages/SetDevice";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDevice } from "./src/Stores/useDevice";
const queryClient = new QueryClient();
import { SafeAreaView, StyleSheet } from "react-native";

export default () => {
  const { ipAddressSet } = useDevice();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.scrollContainer}>
        {ipAddressSet ? <Main /> : <SetDevice />}
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
