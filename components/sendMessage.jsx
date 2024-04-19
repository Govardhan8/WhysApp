import * as React from "react";
import { Button } from "react-native";

export default function App() {
  const ws = new WebSocket("ws://localhost:3000");

  ws.onopen = () => {
    // connection opened
    console.log("Connection established"); // send a message
  };

  ws.onmessage = (e) => {
    // a message was received
    console.log(e.data);
  };

  ws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
  };

  ws.onclose = (e) => {
    // connection closed
    console.log(e.code, e.reason);
  };

  const handleClickSendMessage = () => ws.send("Gova");

  return (
    <>
      <Button onPress={handleClickSendMessage} title="send message" />
    </>
  );
}
