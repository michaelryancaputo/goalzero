import { useDevice } from "../Stores/useDevice";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const HeaderToolbar = (props) => {
  const { toggleIpAddressSet } = useDevice();
  return (
    <IconButton
      onPress={toggleIpAddressSet}
      icon={(props) => <Icon name="close-box-outline" {...props} />}
      {...props}
    />
  );
};

export default HeaderToolbar;
