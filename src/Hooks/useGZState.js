import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchState, mutateState } from "../Queries";
import { useDevice } from "../Stores/useDevice";

const useGZState = () => {
  const { ipAddress } = useDevice();

  const queryKey = ["state", ipAddress];

  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery(queryKey, fetchState, {
    keepPreviousData: true,
  });

  const onSuccess = (data) => queryClient.setQueryData(queryKey, data);
  const onError = (e) => console.log(e);

  // setup mutation
  const toggle12v = useMutation(mutateState(queryKey), {
    onError,
    onSuccess: onSuccess,
  });

  const toggleUsb = useMutation(mutateState(queryKey), {
    onError,
    onSuccess: onSuccess,
  });

  const toggleAc = useMutation(mutateState(queryKey), {
    onError,
    onSuccess: onSuccess,
  });

  const toggleBacklight = useMutation(mutateState(queryKey), {
    onError,
    onSuccess: onSuccess,
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
