export const styles = ({ colors, sizes, fonts }) => ({
  container: {
    flex: 1,
    alignItems: "stretch",
    marginTop: "10%",
  },
  title: {
    marginBottom: sizes.scale(15),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(30),
    color: colors.white,
    textAlign: "center",
  },
  bestScore: {
    fontFamily: fonts.tematic,
    fontSize: sizes.scale(70),
    color: colors.white,
    textAlign: "center",
  },
  subtitle: {
    marginTop: sizes.scale(20),
    marginBottom: sizes.scale(35),

    fontFamily: fonts.secondary,
    fontSize: sizes.scale(27),
    color: colors.white,
  },
  scoreRow: {
    flex: 1,
    alignItems: "stretch",
  },
  scoreColumn: {
    flex: 0.33,
    paddingVertical: sizes.scale(10),

    borderBottomWidth: sizes.scale(4),
    borderColor: colors.white,
    borderStyle: "solid",
  },
  firstColumn: {
    borderRightWidth: sizes.scale(4),
  },
  lastColumn: {
    borderLeftWidth: sizes.scale(4),
  },
  headers: {
    fontFamily: fonts.secondary,
    fontSize: sizes.scale(22),
    color: colors.white,
    textAlign: "center",
  },
  text: {
    fontFamily: fonts.regularItalic,
    color: colors.dark,
  },
});
