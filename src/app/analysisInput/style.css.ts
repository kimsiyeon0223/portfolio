import { style } from "@vanilla-extract/css";

export const Layout = style({
  height: "100vh",
  width: "100vw",
});

export const MainLayout = style({
  height: "100%",
  backgroundColor: "#F7F8FA",
  padding: "70px 300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Pretendard-Regular",
});

export const TitleContainer = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
});
export const Title = style({
  fontSize: "28px",
  fontWeight: "bold",
  paddingLeft: "10px",
});
export const Subtitle = style({
  width: "100%",
  padding: "8px 0 18px 0",
  fontSize: "18px",
});
export const Input = style({
  width: "100%",
  height: "50vh",
  outline: "none",
  border: "none",
  borderRadius: "12px",
  padding: "10px 15px",
});
export const Btn = style({
  marginTop: "21px",
  width: "fit-content",
  marginLeft: "auto",
  padding: "10px 24px",
  border: "none",
  cursor: "pointer",
  color: "white",
  backgroundColor: "#2D64F1",
  borderRadius: "10px",
  fontSize: "18px",
});
export const Result = style({});
