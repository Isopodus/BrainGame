import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackContainer } from "./src/navigation/StackContainer";
import { Provider } from "react-redux";
import { store } from "./store/index";

const App = () => {
  const navigationRef = useRef();

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StackContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
