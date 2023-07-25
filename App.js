import { Button } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 50 }}>
      <ScrollView>
        <Button title="Press here" onPress={() => console.log("button pressed")}/>
      </ScrollView>
    </View>
  );
}
//view component basic
