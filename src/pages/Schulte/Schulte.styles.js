import { scale } from "../../ui/size";
import { colors } from "../../ui/colors";

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    border: 1,
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
  timer: {
    fontSize: 130,
    textAlign: "center",
  },
};
