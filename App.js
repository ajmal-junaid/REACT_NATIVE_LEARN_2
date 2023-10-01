import { Alert, Button, View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "blue", flex: 1, padding: 60 }}>
      <Button title="Alert 1" onPress={() => Alert.alert("Invalid data!")} />
      <Button title="Alert 2" onPress={() => Alert.alert("Invalid data!", "Incorrect Dob")} />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid data!", "Incorrect Dob", [
            {
              text: "OK",
              onPress: () => console.log("Ok pressed"),
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel pressed"),
            },
          ])
        }
      />
    </View>
  );
}
