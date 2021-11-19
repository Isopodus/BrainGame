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
    width: sizes.scale(500),
    height: sizes.scale(500),
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
    paddingBottom: sizes.scale(20),

    fontFamily: fonts.tematic,
    fontSize: sizes.scale(55),
    color: colors.white,
  },
  time: {
    paddingBottom: sizes.scale(10),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(100),
    color: colors.white,
  },
  button: {
    marginTop: sizes.scale(50),
    width: "100%",
  },
  buttonText: {
    fontSize: sizes.scale(30),
  },
  animation: {
    width: sizes.scale(200),
    height: sizes.scale(200),
  },
});
