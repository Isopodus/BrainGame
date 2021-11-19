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
    paddingBottom: sizes.scale(20),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(28),
    color: colors.white,
    textAlign: "center",
  },
  gridContainer: {
    justifyContent: "center",
    width: sizes.fullWidth,
    paddingTop: sizes.scale(10),
    paddingHorizontal: "2%",
  },
  cell: {
    flex: 1,
    height: sizes.scale(80),
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: sizes.scale(10),

    borderWidth: sizes.scale(4),
    borderColor: colors.white,
    borderStyle: "solid",

    backgroundColor: colors.blue,
  },
  innerCell: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  validColorContainer: {
    paddingHorizontal: "4%",
  },
  validColor: {
    width: "100%",
    height: sizes.scale(80),

    borderWidth: sizes.scale(4),
    borderColor: colors.white,
    borderStyle: "solid",
  },
});
