import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import {
  AppBar,
  ListItem,
  ActivityIndicator,
  Switch,
} from "@react-native-material/core";
import useGZState from "../Hooks/useGZState";

const reverseBool = (val) => {
  return val === 0 ? 1 : 0;
};

export default () => {
  const {
    isLoading,
    isError,
    data,
    toggle12v,
    toggleUsb,
    toggleAc,
    toggleBacklight,
  } = useGZState("192.168.1.8");

  if (isLoading) {
    return (
      <SafeAreaView style={styles.scrollContainer}>
        <AppBar title={`Goal Zero: ${thingName}`} />
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.scrollContainer}>
        <AppBar title={`Goal Zero: ${thingName}`} />
        <Text>Error</Text>
      </SafeAreaView>
    );
  }

  const {
    thingName,
    v12PortStatus,
    usbPortStatus,
    acPortStatus,
    backlight,
    app_online,
    wattsIn,
    ampsIn,
    wattsOut,
    ampsOut,
    whOut,
    whStored,
    volts,
    socPercent,
    isCharging,
    inputDetected,
    timeToEmptyFull,
    temperature,
    wifiStrength,
    ssid,
    ipAddr,
    timestamp,
    firmwareVersion,
    version,
  } = data.data;

  const dataTable = [
    ["app_online", app_online],
    ["wattsIn", wattsIn],
    ["ampsIn", ampsIn],
    ["wattsOut", wattsOut],
    ["ampsOut", ampsOut],
    ["whOut", whOut],
    ["whStored", whStored],
    ["volts", volts],
    ["socPercent", socPercent],
    ["isCharging", isCharging],
    ["inputDetected", inputDetected],
    ["timeToEmptyFull", timeToEmptyFull],
    ["temperature", temperature],
    ["wifiStrength", wifiStrength],
    ["ssid", ssid],
    ["ipAddr", ipAddr],
    ["timestamp", timestamp],
    ["firmwareVersion", firmwareVersion],
    ["version", version],
  ];

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <AppBar title={`Goal Zero: ${thingName}`} />
      <ScrollView style={styles.scrollView}>
        <ListItem
          title="Backlight"
          trailing={
            <Switch
              value={backlight === 1}
              onValueChange={() =>
                toggleBacklight.mutate({ backlight: reverseBool(backlight) })
              }
            />
          }
        />

        <ListItem
          title="AC Port"
          trailing={
            <Switch
              value={acPortStatus === 1}
              onValueChange={() =>
                toggleAc.mutate({ acPortStatus: reverseBool(acPortStatus) })
              }
            />
          }
        />

        <ListItem
          title="12v Port"
          trailing={
            <Switch
              value={v12PortStatus === 1}
              onValueChange={() =>
                toggle12v.mutate({ v12PortStatus: reverseBool(v12PortStatus) })
              }
            />
          }
        />

        <ListItem
          title="USB Port"
          trailing={
            <Switch
              value={usbPortStatus === 1}
              onValueChange={() =>
                toggleUsb.mutate({ usbPortStatus: reverseBool(usbPortStatus) })
              }
            />
          }
        />

        {dataTable.map(([title, value]) => (
          <ListItem
            key={title}
            title={<Text>{title}</Text>}
            secondaryText={<Text>{value}</Text>}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },

  scrollView: {},
});
