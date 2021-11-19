import { scale } from "../../ui/size";

export const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(30),
  },
  imageBox: {
    width: scale(200),
    height: scale(200),
  },
  drawBlocker: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  timerBlock: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: scale(30),
  },
  timerText: {
    fontSize: 110,
    textAlign: "center",
  },
};
