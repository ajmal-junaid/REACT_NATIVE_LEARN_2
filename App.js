import { View } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "blue", flex: 1 ,padding: 60}}>
      <View style={{ width: 200, height: 200, backgroundColor: "plum" }}></View>
      <View style={{ width: 200, height: 200, backgroundColor: "green " }}></View>
    </View>
  );
}
