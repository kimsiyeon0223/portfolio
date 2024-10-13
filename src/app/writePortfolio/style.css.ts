import { style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  fontFamily: "Pretendard-Regular",
});

export const ContentLayout = style({
  width: "100%",
  height: "100%",
});

export const Write = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
});

export const InputTitle = style({
  padding: "1% 0 1% 1%",
  border: "none",
  outline: "none",
  fontSize: "25px",
});

export const Line = style({
  width: "100%",
  borderBottom: "2px solid #D9D9D9",
});

export const CreateTag = style({
  display: "flex",
});

export const Tag = style({
  backgroundColor: "#4e78ff",
  color: "white",
  minWidth: "fit-content",
  padding: "8px 10px",
  borderRadius: "15px",
  border: "none",
  margin: "0.6% 0 0.6% 0.6%",
  fontSize: "15px",
  selectors: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const InputTag = style({
  padding: "1% 0 1% 1%",
  marginLeft: "8px",
  fontSize: "15px",
  border: "none",
  outline: "none",
  color: "#7B7B7B",
  width: "100%",
});

export const Footer = style({
  width: "50%",
  height: "8%",
  marginTop: "auto",
  display: "flex",
  alignItems: "center",
});

export const GetOut = style({
  fontSize: "17px",
  height: "fit-content",
  padding: "15px 20px",
  fontWeight: "600",
  cursor: "pointer",
});

export const btn = style({
  backgroundColor: "#4541ff",
  color: "white",
  fontSize: "15px",
  height: "fit-content",
  padding: "15px 20px",
  fontWeight: "600",
  borderRadius: "13px",
  marginLeft: "auto",
  border: "none",
  cursor: "pointer",
});
