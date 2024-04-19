import { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MessageScreen = ({ navigation }) => {
  const [messageSet, setMessages] = useState([]);
  const [text, setText] = useState("");
  const socketRef = useRef(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
    ws.onopen = () => {
      // connection opened
      console.log("Connection established"); // send a message
    };
    socketRef.current = ws;

    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
      setMessages([
        ...messageSet,
        {
          sentBy: "xyz",
          sentAt: "12:20pm",
          content: e.data,
        },
      ]);
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };

    return () => {
      ws.onclose = (e) => {
        // connection closed
        console.log(e.code, e.reason);
      };
    };
  }, [messageSet]);

  const handleClickSendMessage = () => {
    socketRef.current.send(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", gap: "1rem" }}>
        {messageSet.map((message, i) => (
          <Text
            key={i}
            style={{
              ...styles.messages,
              backgroundColor: message.sentBy === "xyz" ? "green" : "grey",
              alignSelf: message.sentBy === "xyz" ? "flex-end" : "flex-start",
            }}
          >
            {message.content}
          </Text>
        ))}
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text..."
          value={text}
          onChangeText={setText}
        />
        <Pressable style={styles.button} onPress={handleClickSendMessage}>
          <Icon name="arrow-right" size={20} color="green" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: "1rem",
    paddingVertical: "1rem",
  },
  messages: {
    borderWidth: 2,
    maxWidth: "50%",
    minWidth: "30%",
    padding: "0.25rem",
    fontSize: "20px",
    color: "#fff",
    borderRadius: "10px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    borderColor: "green",
    borderWidth: 2,
    borderRadius: "50%",
    width: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessageScreen;
