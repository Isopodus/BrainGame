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
    width: scale(70),
    height: scale(70),
    margin: 1,
    backgroundColor: colors.dark,
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
