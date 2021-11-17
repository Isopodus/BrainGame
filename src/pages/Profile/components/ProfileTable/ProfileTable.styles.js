export const styles = ({ colors, sizes, fonts }) => ({
  container: {
    alignItems: "stretch",
    marginTop: sizes.scale(300),
    paddingHorizontal: "2%",
  },
  title: {
    marginBottom: sizes.scale(20),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(30),
    color: colors.white,
    textAlign: "center",
  },
  columnText: {
    marginBottom: sizes.scale(20),

    fontFamily: fonts.regular,
    fontSize: sizes.scale(25),
    color: colors.white,
  },
  columnName: {
    marginBottom: sizes.scale(20),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(25),
    color: colors.white,
  },
  column: {
    alignItems: "flex-start",
    paddingRight: sizes.scale(20),
  },
});
