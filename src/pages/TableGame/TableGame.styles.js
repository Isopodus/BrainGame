export const styles = ({ sizes, colors, fonts }) => ({
  animation: {
    width: sizes.scale(140),
    height: sizes.scale(140),
  },
  title: {
    paddingBottom: sizes.scale(5),

    fontFamily: fonts.tematic,
    fontSize: sizes.scale(30),
    color: colors.blue,
  },
  time: {
    paddingBottom: sizes.scale(10),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(30),
    color: colors.dark,
  },
  mistakes: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(28),
    color: colors.white,
    textAlign: "center",
  },
  gridContainer: {
    flex: 1,
    width: sizes.fullWidth,
    height: sizes.fullWidth,
    paddingTop: sizes.scale(10),
    paddingHorizontal: "2%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: sizes.scale(10),

    borderWidth: sizes.scale(4),
    borderColor: colors.white,
    borderStyle: "solid",

    backgroundColor: colors.blue,
  },
  cellText: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(35),
    color: colors.white,
  },
});
