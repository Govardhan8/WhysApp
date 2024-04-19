import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import DP from "../assets/image.jpeg";
import ImageWithName from "./ImageWithName";

const ChatList = ({ navigation }) => {
  const list = [
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
    {
      name: "gova",
      time: "12:00pm",
      displayPicture: "",
    },
  ];

  return (
    <View style={styles.container}>
      {list.map((l, i) => {
        return (
          <Pressable
            key={i}
            onPress={() =>
              navigation.navigate("messageScreen", { title: l.name, dp: DP })
            }
          >
            <View style={styles.chatContainer}>
              <View style={styles.leftContainer}>
                <ImageWithName name={l.name} DP={DP} />
              </View>
              <View style={styles.rightContainer}>
                <Text style={{ fontSize: "10px", fontWeight: "200" }}>
                  {l.time}
                </Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  chatContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: "1rem",
    paddingVertical: "0.5rem",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "0.5rem",
  },
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
  rightContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

export default ChatList;
