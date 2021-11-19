export const styles = ({ sizes, colors, fonts }) => ({
  container: {
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
    width: "100%",
    height: sizes.scale(120),
    top: 0,

    zIndex: 1,
  },
  containerRounded: {
    position: "absolute",
    flex: 1,
    top: -(sizes.fullWidth + sizes.scale(30)) / sizes.scale(2.3),
    left: sizes.scale(-15),
    width: sizes.fullWidth + sizes.scale(30),
    height: sizes.fullWidth + sizes.scale(30),
    justifyContent: "flex-end",

    backgroundColor: colors.white,

    borderRadius: (sizes.fullWidth + sizes.scale(30)) / 2,

    zIndex: 1,
  },
  circle: {
    position: "absolute",
    display: "flex",
    flex: 1,
    left: sizes.scale(-15),
    top: sizes.scale(-25),
    width: sizes.scale(120),
    height: sizes.scale(120),
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "25%",

    backgroundColor: colors.white,

    borderRadius: sizes.scale(120) / 2,

    zIndex: 1,
  },
  title: {
    paddingVertical: sizes.scale(10),
    paddingRight: "0.5%",

    fontFamily: fonts.tematic,
    fontSize: sizes.scale(45),
    color: colors.white,

    zIndex: 2,
  },
  titleRounded: {
    paddingBottom: sizes.scale(50),

    fontFamily: fonts.tematic,
    fontSize: sizes.scale(100),
    color: colors.blue,
  },
  subtitleRounded: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(35),
    color: colors.blue,
  },
  margin: {
    height: sizes.fullWidth * 0.6,
  },
});
