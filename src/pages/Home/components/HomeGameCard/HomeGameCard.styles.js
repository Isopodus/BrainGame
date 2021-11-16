import { scale } from "../../../../ui/size";

export const styles = ({ colors, fonts }) => ({
  container: {
    flex: 1,
    maxHeight: scale(200),
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },
  figure: {
    flex: 1,
  },
  circle: {
    width: scale(200),
    height: scale(200),

    backgroundColor: colors.pink,

    borderRadius: scale(200) / 2,
    borderWidth: scale(3),
    borderColor: colors.white,
    borderStyle: "solid",
  },
  square: {
    width: scale(200),
    height: scale(200),

    backgroundColor: colors.pink,

    borderWidth: scale(3),
    borderColor: colors.white,
    borderStyle: "solid",
  },
  content: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
  },
  title: {
    display: "flex",
    fontFamily: fonts.tematic,
    fontSize: scale(40),
    lineHeight: scale(48),
    color: colors.white,
  },
});
