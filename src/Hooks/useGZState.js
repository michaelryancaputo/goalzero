import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchState, mutateState } from "../Queries";

const useGZState = (ipaddress) => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery(
    ["state", ipaddress, "get"],
    fetchState
  );

  const invalidateState = (data, variables) =>
    queryClient.invalidateQueries(["state", ipaddress, "get"]);

  // setup mutation
  const toggle12v = useMutation(mutateState(["state", ipaddress]), {
    onError: () => {},
    onSuccess: invalidateState,
  });

  const toggleUsb = useMutation(mutateState(["state", ipaddress]), {
    onError: () => {},
    onSuccess: invalidateState,
  });

  const toggleAc = useMutation(mutateState(["state", ipaddress]), {
    onError: () => {},
    onSuccess: invalidateState,
  });

  const toggleBacklight = useMutation(mutateState(["state", ipaddress]), {
    onError: (e) => {},
    onSuccess: invalidateState,
  });

  return {
    toggle12v,
    toggleUsb,
    toggleAc,
    toggleBacklight,
    isLoading,
    isError,
    data,
  };
};

export default useGZState;
