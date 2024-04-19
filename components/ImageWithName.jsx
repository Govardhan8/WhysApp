import { Image, StyleSheet, Text } from "react-native";

const ImageWithName = ({ name, DP }) => {
  return (
    <>
      <Image source={DP} style={styles.image} resizeMode="cover" />
      <Text style={styles.chatName}>{name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "2rem",
    width: "2rem",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "50%",
  },
  chatName: {
    height: "3rem",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    textTransform: "capitalize",
  },
});

export default ImageWithName;
