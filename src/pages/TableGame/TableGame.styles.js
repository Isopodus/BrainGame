import { scale, fullWidth } from "../../ui/size";
import { colors } from "../../ui/colors";

export const styles = {
  gridContainer: {
    flex: 1,
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
    margin: 1,
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
  validCell: {
    backgroundColor: colors.pink,
  },
  cellText: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 48,
    textAlign: "center",
    marginTop: scale(10),
  },
  explanationText: {
    fontSize: 18,
    padding: scale(10),
    textAlign: "center",
  },
  timerText: {
    fontSize: 130,
    textAlign: "center",
  },
  mistakesText: {
    fontSize: 20,
    textAlign: "center",
  },
};
