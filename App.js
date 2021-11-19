import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackContainer } from "./src/navigation/StackContainer";

const App = () => {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <StackContainer />
    </NavigationContainer>
  );
};

export default App;
