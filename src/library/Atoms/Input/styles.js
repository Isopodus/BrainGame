export const styles = ({ sizes, colors, fonts }) => ({
  input: {
    paddingVertical: sizes.scale(15),
    paddingHorizontal: sizes.scale(30),

    borderColor: colors.white,
    borderWidth: sizes.scale(4),
    borderStyle: "solid",

    fontFamily: fonts.secondary,
    fontSize: sizes.scale(20),
    color: colors.white,
  },
  label: {
    marginBottom: sizes.scale(10),

    fontFamily: fonts.primary,
    fontSize: sizes.scale(25),
    color: colors.pink,
  },
});
