import { useState } from "react";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDevice } from "../Stores/useDevice";

const SetDevice = () => {
  const { ipAddress, setIpAddress } = useDevice();
  const [value, setValue] = useState(ipAddress ? ipAddress : "");

  const updateState = () => setIpAddress(value);

  return (
    <Stack spacing={2} style={{ margin: 16 }}>
      <TextInput
        variant="outlined"
        defaultValue={value}
        onChangeText={setValue}
        trailing={(props) => (
          <IconButton
            onPress={updateState}
            icon={(props) => (
              <Icon name="arrow-right-bold-outline" {...props} />
            )}
            {...props}
          />
        )}
      />
    </Stack>
  );
};

export default SetDevice;
