import { scale } from "../../../../ui/size";

export const styles = ({ colors, fonts }) => ({
  container: {
    flex: 1,
    maxHeight: scale(180),
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },
  figure: {
    flex: 1,
  },
  circle: {
    width: scale(180),
    height: scale(180),

    backgroundColor: colors.pink,

    borderRadius: scale(180) / 2,
    borderWidth: scale(3),
    borderColor: colors.white,
    borderStyle: "solid",
  },
  content: {
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    display: "flex",

    fontFamily: fonts.tematic,
    fontSize: scale(35),
    lineHeight: scale(48),
    textAlign: "center",
    color: colors.white,
  },
  button: {
    width: scale(200),
  },
});
