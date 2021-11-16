import { scale, fullWidth } from "../../../ui/size";

export const styles = ({ colors, fonts }) => ({
  button: {
    width: fullWidth - scale(150),
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
