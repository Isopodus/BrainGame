export const styles = ({ colors, fonts, sizes }) => ({
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
  firstButton: {
    marginBottom: sizes.scale(20),
  },
  informalText: {
    fontFamily: fonts.secondary,
    fontSize: sizes.scale(25),
    color: colors.white,
    textAlign: "center",
  },
});
