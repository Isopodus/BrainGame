import { Dimensions } from "react-native";

export const fullWidth = Dimensions.get("window").width;
export const fullHeight = Dimensions.get("window").height;

export const scale = value => {
  if (fullHeight / fullWidth >= 2) return (value * fullWidth) / 375;
  else return (value * fullHeight) / 812;
};
