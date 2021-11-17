export const styles = ({ sizes, colors }) => ({
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
});
