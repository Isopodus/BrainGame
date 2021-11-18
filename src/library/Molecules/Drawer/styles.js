import { colors } from "../../../ui/colors";
import { scale } from "../../../ui/size";

export const styles = {
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.dark,
  },
  link: {
    fontSize: scale(30),
  },
  active: {
    color: colors.pink,
  },
  bottomCircle: {
    display: "flex",
    flex: 1,
    position: "absolute",
    left: scale(-15),
    bottom: scale(-25),
    width: scale(100),
    height: scale(100),

    backgroundColor: colors.white,

    borderRadius: scale(100) / 2,

    zIndex: 1,
  },
  topCircle: {
    display: "flex",
    flex: 1,
    position: "absolute",
    left: scale(-25),
    top: scale(-25),
    width: scale(150),
    height: scale(150),

    backgroundColor: colors.white,

    borderRadius: scale(150) / 2,

    zIndex: 1,
  },
};
