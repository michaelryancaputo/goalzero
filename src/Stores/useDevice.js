import create from "zustand";

export const useDevice = create((set) => ({
  ipAddress: null,
  ipAddressSet: false,
  setIpAddress: (ipAddress) => set(() => ({ ipAddress, ipAddressSet: true })),
  toggleIpAddressSet: () =>
    set((state) => ({ ipAddressSet: !state.ipAddressSet })),
  clearIpAddress: () => set(() => ({ ipAddress: null })),
}));
