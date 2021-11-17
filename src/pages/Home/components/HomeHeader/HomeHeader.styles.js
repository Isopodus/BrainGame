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
  topCircle: {
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
  bottomCircle: {
    display: "flex",
    flex: 1,
    position: "absolute",
    right: sizes.scale(-15),
    bottom: sizes.scale(-25),
    width: sizes.scale(100),
    height: sizes.scale(100),

    backgroundColor: colors.white,

    borderRadius: sizes.scale(100) / 2,

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
});
