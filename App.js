import Main from "./src/Pages/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
);
