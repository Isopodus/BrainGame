export const styles = ({ colors, fonts, sizes }) => ({
  backdrop: {
    display: "flex",
    position: "absolute",
    width: sizes.fullWidth,
    height: sizes.fullHeight,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.rgba(colors.dark, 0.8),

    zIndex: 5,
  },
  spinner: {
    width: sizes.scale(350),
    height: sizes.scale(350),
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(200),
    color: colors.white,
  },
});
