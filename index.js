import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { withTheme } from "./src/hocs/withTheme";
import "react-native-gesture-handler";

const Root = () => withTheme(App);

AppRegistry.registerComponent(appName, () => Root);
