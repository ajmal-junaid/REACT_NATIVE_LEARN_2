import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

export default function App() {
  const [isModalVisible,setIsModalVisible] = useState(false)
  return (
    <View style={{ backgroundColor: "yellow", flex: 1 , padding:60}}>
      <Button
      title="Press"
      onPress={()=> setIsModalVisible(true)}
      color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={()=> setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet" //ios only
      >
        <View style ={{flex:1, backgroundColor: "lightblue",padding: 60}}>
          <Text>Modal content</Text>
          <Button 
          title="Close"
          color="midnightblue"
          onPress={()=> setIsModalVisible(false)}
          />
        </View>

      </Modal>
    </View>
  );
}
 