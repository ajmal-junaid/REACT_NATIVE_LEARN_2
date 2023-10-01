import { useState } from "react";
import { Modal, Text } from "react-native";
import { Button } from "react-native";
import { View } from "react-native";

export default function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <View style={{ backgroundColor: "blue", flex: 1, paddingTop: 30 }}>
      <Button title="Press here" onPress={() => setIsModal(!isModal)} />
      <Modal  visible={isModal}
       onRequestClose={() => setIsModal(false)}
        animationType="slide" 
        presentationStyle="pageSheet" //ios only
        >
        <View style={{ flex: 1, backgroundColor: "white", padding: 50 }}>
          <Text>Modal content ok</Text>
          <Button onPress={() => setIsModal(!isModal)} title="close modal" color="green" />
        </View>
      </Modal>
    </View>
  );
}
