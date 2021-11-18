import { scale, fullWidth } from "../../ui/size";
import { colors } from "../../ui/colors";

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    width: fullWidth,
    height: fullWidth,
    padding: 30,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    margin: 3,
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCell: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  validColor: {
    width: scale(150),
    height: scale(150),
  },
  cellText: {
    fontSize: 20,
  },
  timerText: {
    fontSize: 130,
    textAlign: "center",
  },
  colorsLeft: {
    fontSize: 20,
    textAlign: "center",
    marginTop: scale(15),
  },
  mistakesText: {
    fontSize: 20,
    textAlign: "center",
  },
};
