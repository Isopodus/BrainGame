export const styles = ({ colors, sizes, fonts }) => ({
  container: {
    position: "absolute",
    flex: 1,
    top: sizes.scale(-(sizes.fullWidth / 1.5)),
    left: sizes.scale(-15),
    width: sizes.fullWidth + sizes.scale(30),
    height: sizes.fullWidth + sizes.scale(30),
    justifyContent: "flex-end",
    paddingBottom: sizes.scale(50),

    backgroundColor: colors.white,

    borderRadius: (sizes.fullWidth + sizes.scale(30)) / 2,

    zIndex: 1,
  },
  subtitle: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(35),
    color: colors.blue,
  },
  title: {
    fontFamily: fonts.tematic,
    fontSize: sizes.scale(100),
    color: colors.blue,
  },
});
