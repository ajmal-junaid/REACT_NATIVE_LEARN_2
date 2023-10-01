import { View } from "react-native";
import Greet from "./components/greet";

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1 ,padding: 60}}>
      <Greet name="Ajmal junaid"/>
      <Greet name="Clara"/>
    </View>
  );
}
