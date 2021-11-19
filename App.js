import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackContainer } from "./src/navigation/StackContainer";

const App = () => {
  const navigationRef = useRef();

  // useEffect(() => {
  //   navigationRef.current.navigate("Home");
  // }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StackContainer />
    </NavigationContainer>
  );
};

export default App;
