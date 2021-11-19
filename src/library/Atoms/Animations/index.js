import React, { useEffect, useMemo, useRef } from "react";
import LottieView from "lottie-react-native";
import piggyBank from "../../../assets/animations/piggy-bank.json";
import clock from "../../../assets/animations/clock.json";
import loader from "../../../assets/animations/loader.json";
import spinner from "../../../assets/animations/spinner.json";

export const Animation = ({ name, style, play = true }) => {
  const ref = useRef(null);

  const animation = useMemo(() => {
    switch (name) {
      case "piggy-bank":
        return piggyBank;
      case "loader":
        return loader;
      case "spinner":
        return spinner;
      default:
        return clock;
    }
  }, [name]);

  useEffect(() => {
    if (!ref?.current) return;

    if (play) ref.current.play();
    else ref.current.pause();
  }, [ref, play]);

  return <LottieView ref={ref} style={style} source={animation} resizeMode={"cover"} />;
};
