import { View,StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "cyan", flex: 1, padding:60}}>
      <StatusBar 
      backgroundColor="lightgreen" 
      barStyle="dark-content"
      hidden
      />
    </View>
  );
}
