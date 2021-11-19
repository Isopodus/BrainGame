export const styles = ({ sizes, colors, fonts }) => ({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    paddingHorizontal: "0.5%",
  },
  imageContainer: {
    justifyContent: "center",
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerImageBox: {
    flex: 1,
    width: sizes.scale(250),
  },
  drawBlocker: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  timerBlock: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "2%",
  },
  title: {
    paddingBottom: sizes.scale(10),

    fontFamily: fonts.tematic,
    fontSize: sizes.scale(35),
    color: colors.white,
  },
  time: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(40),
    color: colors.white,
  },
  button: {
    marginTop: sizes.scale(25),
    width: "100%",
  },
  buttonText: {
    fontSize: sizes.scale(30),
  },
  animation: {
    width: sizes.scale(120),
    height: sizes.scale(120),
  },
});
