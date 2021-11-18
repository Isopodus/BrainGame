import React, { useMemo } from "react";
import LottieView from "lottie-react-native";
import piggyBank from "../../../assets/animations/piggy-bank.json";

export const Animation = ({ name, style }) => {
  const animation = useMemo(() => {
    if (name === "piggy-bank") return piggyBank;
  }, [name]);
  return <LottieView style={style} source={animation} autoPlay loop resizeMode={"cover"} />;
};
