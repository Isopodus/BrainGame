export const styles = ({ colors, fonts, sizes }) => ({
  container: {
    flex: 1,
    maxHeight: sizes.scale(180),
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: "0.5%",
    marginBottom: sizes.scale(80),
  },
  figure: {
    flex: 1,
  },
  content: {
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    display: "flex",

    fontFamily: fonts.tematic,
    fontSize: sizes.scale(29),
    lineHeight: sizes.scale(44),
    textAlign: "center",
    color: colors.white,
  },
  button: {
    width: "70%",
  },
});
