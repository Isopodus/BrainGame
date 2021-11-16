import { fullWidth, scale } from "../../../../ui/size";

export const styles = ({ colors, fonts }) => ({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingTop: scale(15),
    paddingBottom: scale(70),
  },
  logo: {
    width: scale(110),
    height: scale(40),
  },
  subtitle: {
    paddingBottom: scale(20),

    fontFamily: fonts.primary,
    fontSize: scale(23),
    color: colors.pink,
    textTransform: "uppercase",
  },
  title: {
    fontFamily: fonts.tematic,
    fontSize: scale(70),
    color: colors.white,
  },
  leftText: {
    width: fullWidth,
    marginLeft: -(fullWidth / 5),

    textAlign: "center",
  },
  rightText: {
    width: fullWidth,
    marginRight: -(fullWidth / 5),
    marginTop: scale(-15),

    textAlign: "center",
  },
  button: {
    width: fullWidth - scale(100),
  },
});
