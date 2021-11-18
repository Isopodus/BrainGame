export const styles = ({ colors, fonts, sizes }) => ({
  description: {
    paddingBottom: sizes.scale(40),

    fontFamily: fonts.regular,
    fontSize: sizes.scale(25),
    color: colors.white,
  },
  footer: {
    width: sizes.fullWidth,
    paddingHorizontal: "2%",
    alignItems: "stretch",
  },
});
