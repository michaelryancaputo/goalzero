import { Text, ScrollView } from "react-native";
import {
  AppBar,
  ListItem,
  ActivityIndicator,
  Switch,
} from "@react-native-material/core";
import useGZState from "../Hooks/useGZState";
import HeaderToolbar from "../Components/HeaderToolbar";

const reverseBool = (val) => (val === 0 ? 1 : 0);

export default () => {
  const {
    isLoading,
    isError,
    data,
    toggle12v,
    toggleUsb,
    toggleAc,
    toggleBacklight,
  } = useGZState();

  if (isLoading) {
    return (
      <>
        <AppBar title={`Goal Zero: Loading...`} trailing={HeaderToolbar} />
        <ActivityIndicator size="large" />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <AppBar
          title={`Goal Zero: There was a problem`}
          trailing={HeaderToolbar}
        />
        <Text>Error</Text>
      </>
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
    <>
      <AppBar title={`Goal Zero: ${thingName}`} trailing={HeaderToolbar} />
      <ScrollView>
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
    </>
  );
};
