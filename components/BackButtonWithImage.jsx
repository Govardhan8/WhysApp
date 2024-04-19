import { useNavigation } from "@react-navigation/native";
import bb from "../assets/backbutton.png";
import { Image, Pressable } from "react-native";

const BackButtonWithImage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Pressable onPress={handlePress} style={{ marginLeft: 10 }}>
      <Image source={bb} style={{ width: 20, height: 20 }} />
    </Pressable>
  );
};

export default BackButtonWithImage;
