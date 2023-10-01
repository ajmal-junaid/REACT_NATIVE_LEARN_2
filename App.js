import { useState } from "react";
import { ActivityIndicator, Button, View } from "react-native";

export default function App() {
  const [isLoading,setIsLoading]= useState(false)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button title="Press here"  onPress={()=>setIsLoading(!isLoading)}/>
      <ActivityIndicator/>
      <ActivityIndicator size="large"/>
      <ActivityIndicator size="large" color="midnightblue"/>
      <ActivityIndicator size="large" color="midnightblue" animating={isLoading}/>

    </View>
  );
}
