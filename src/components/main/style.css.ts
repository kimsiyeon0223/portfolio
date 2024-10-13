import { style } from "@vanilla-extract/css";

export const Layout = style({
  position: "relative",
  backgroundColor: "#2D64F1",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

export const RBigCloud = style({
  position: "absolute",
  right: "75%",
  bottom: "65%",
  pointerEvents: "none",
});

export const LBigCloud = style({
  position: "absolute",
  bottom: "55%",
  left: "70%",
  pointerEvents: "none",
});

export const smallCloud = style({
  position: "absolute",
  bottom: "15%",
  left: "62%",
  pointerEvents: "none",
});

export const Header = style({
  position: "relative",
  zIndex: 1,
});

export const MainContainer = style({
  color: "white",
  padding: "190px 130px 0 130px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const Title = style({
  fontFamily: "Rubik Scribble",
  fontSize: "128px",
  fontWeight: "bold",
  paddingBottom: "16px",
});
export const SubTitle = style({
  fontFamily: "Pretendard-Regular",
  fontSize: "28px",
  paddingBottom: "50px",
});

export const WriteBtn = style({
  padding: "14px 18px",
  backgroundColor: "white",
  width: "fit-content",
  fontFamily: "Pretendard-Regular",
  fontSize: "18px",
  color: "#2D64F1",
  fontWeight: "bold",
  borderRadius: "10px",
  cursor: "pointer",
  outline: "none",
  border: "none ",
});

export const Line = style({
  width: "100%",
  height: "15%",
  backgroundColor: "#1B4DCB",
});
