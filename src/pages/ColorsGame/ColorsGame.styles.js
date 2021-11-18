import { scale } from "../../ui/size";
import { colors } from "../../ui/colors";

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: scale(100),
    height: scale(100),
    margin: 3,
    backgroundColor: colors.dark,
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
  headerText: {
    fontSize: 48,
    textAlign: "center",
    marginTop: scale(10),
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
    marginBottom: scale(15),
  },
};
