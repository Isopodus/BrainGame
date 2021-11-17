export const styles = ({ colors, fonts, sizes }) => ({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingTop: sizes.scale(15),
    paddingBottom: sizes.scale(70),
  },
  logo: {
    width: sizes.scale(110),
    height: sizes.scale(40),
  },
  subtitle: {
    paddingBottom: sizes.scale(20),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(23),
    color: colors.pink,
    textTransform: "uppercase",
  },
  title: {
    fontFamily: fonts.tematic,
    fontSize: sizes.scale(70),
    color: colors.white,
  },
  leftText: {
    width: sizes.fullWidth,
    marginLeft: -(sizes.fullWidth / 5),

    textAlign: "center",
  },
  rightText: {
    width: sizes.fullWidth,
    marginRight: -(sizes.fullWidth / 5),
    marginTop: sizes.scale(-15),

    textAlign: "center",
  },
  button: {
    width: sizes.fullWidth - sizes.scale(100),
  },
});
