import { style } from "@vanilla-extract/css";

export const Layout = style({
  width: "100%",
  backgroundColor: "#F7F8FA",

  fontFamily: "Pretendard-Regular",
});
export const MainLayout = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "70px 300px",
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
export const ResultContainer = style({
  backgroundColor: "white",
  width: "100%",
  borderRadius: "12px",
  padding: "0 70px",
});
export const BoldText = style({
  padding: "50px 0 15px 0",
});
export const LastText = style({
  padding: "15px 0 50px 0",
});
