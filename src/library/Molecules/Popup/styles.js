export const styles = ({ sizes, colors, fonts }) => ({
  modal: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    paddingVertical: sizes.scale(15),
    paddingHorizontal: "2%",
  },
  content: {
    height: sizes.scale(500),
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fonts.tematic,
    fontSize: sizes.scale(40),
    color: colors.white,
  },
});
