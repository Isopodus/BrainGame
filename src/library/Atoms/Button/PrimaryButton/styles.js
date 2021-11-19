export const styles = ({ colors, fonts, sizes }) => ({
  button: {
    display: "flex",
    paddingVertical: sizes.scale(15),

    backgroundColor: colors.pink,

    borderWidth: sizes.scale(3),
    borderColor: colors.white,
    borderStyle: "solid",
  },
  title: {
    fontFamily: fonts.primary,
    fontSize: sizes.scale(20),
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
  spinner: {
    width: sizes.scale(50),
    height: sizes.scale(10),
  },
});
