import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  width: "100%",
  padding: "20px 100px",
  color: "white",
});

export const LayoutColor = style({
  color: "#274696",
  backgroundColor: "white",
});

export const Title = style({
  fontFamily: "Rubik Scribble",
});

export const Bars = style({
  fontFamily: "Pretendard-Regular",
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  gap: "50px",
  fontSize: "17px",
});

export const Btn = style({
  backgroundColor: "none",
});
