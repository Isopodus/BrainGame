export const styles = ({ fonts, colors, sizes }) => ({
  container: {
    alignItems: "stretch",
  },
  button: {
    marginVertical: sizes.scale(10),
    paddingLeft: "32%",
  },
  label: {
    marginLeft: sizes.scale(10),
    fontFamily: fonts.secondary,
    fontSize: sizes.scale(30),
    color: colors.dark,
  },
});
