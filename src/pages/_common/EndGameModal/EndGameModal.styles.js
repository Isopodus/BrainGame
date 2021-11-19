export const styles = ({ colors, fonts, sizes }) => ({
  statusSecondaryText: {
    marginBottom: sizes.scale(10),

    fontFamily: fonts.secondaryItalic,
    fontSize: sizes.scale(25),
    color: colors.black,
    textAlign: "center",
  },
  statusMainText: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(35),
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
  scoreText: {
    marginBottom: sizes.scale(20),

    fontFamily: fonts.secondary,
    fontSize: sizes.scale(40),
    color: colors.white,
    textAlign: "center",
  },
  scoreValue: {
    fontFamily: fonts.tematic,
    fontSize: sizes.scale(150),
    color: colors.white,
    textAlign: "center",
  },

  setting: {
    paddingVertical: sizes.scale(40),

    fontFamily: fonts.regularItalic,
    fontSize: sizes.scale(22),
    color: colors.white,
    textAlign: "center",
  },
  description: {
    paddingBottom: sizes.scale(40),

    fontFamily: fonts.regular,
    fontSize: sizes.scale(25),
    color: colors.white,
  },
  rulesTitle: {
    paddingTop: sizes.scale(10),
    paddingBottom: sizes.scale(40),

    fontFamily: fonts.secondary,
    fontSize: sizes.scale(25),
    color: colors.black,
  },
  footer: {
    width: sizes.fullWidth,
    paddingTop: "5%",
    paddingHorizontal: "2%",
    alignItems: "stretch",
  },
});
