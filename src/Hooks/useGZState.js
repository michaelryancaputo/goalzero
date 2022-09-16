import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchState, mutateState } from "../Queries";

const useGZState = (ipaddress) => {
  const queryKey = ["state", ipaddress];

  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery(queryKey, fetchState, {
    keepPreviousData: true,
  });

  const invalidateState = (data) => queryClient.setQueryData(queryKey, data);

  // setup mutation
  const toggle12v = useMutation(mutateState(queryKey), {
    onError: () => {},
    onSuccess: invalidateState,
  });

  const toggleUsb = useMutation(mutateState(queryKey), {
    onError: () => {},
    onSuccess: invalidateState,
  });

  const toggleAc = useMutation(mutateState(queryKey), {
    onError: () => {},
    onSuccess: invalidateState,
  });

  const toggleBacklight = useMutation(mutateState(queryKey), {
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
