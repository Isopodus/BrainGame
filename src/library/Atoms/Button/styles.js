import { scale } from "../../../ui/size";

export const styles = ({ colors, fonts }) => ({
  button: {
    minWidth: scale(200),
    display: "flex",
    paddingVertical: scale(15),

    backgroundColor: colors.pink,

    borderWidth: scale(3),
    borderColor: colors.white,
    borderStyle: "solid",
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: scale(20),
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
