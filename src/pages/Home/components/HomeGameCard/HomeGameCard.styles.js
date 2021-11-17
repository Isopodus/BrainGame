import { scale } from "../../../../ui/size";

export const styles = ({ colors, fonts }) => ({
  container: {
    flex: 1,
    maxHeight: scale(180),
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: "0.5%",
    marginBottom: scale(80),
  },
  figure: {
    flex: 1,
  },
  content: {
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    display: "flex",

    fontFamily: fonts.tematic,
    fontSize: scale(29),
    lineHeight: scale(44),
    textAlign: "center",
    color: colors.white,
  },
  button: {
    width: "70%",
  },
});
