import { Image, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Image source={logoImg} style={{width:300, height: 400}}/>
      <Image source={{uri:"https://picsum.photos/300"}} style={{width:300, height: 400}}/>
    </View>
  );
}
 //view component basic