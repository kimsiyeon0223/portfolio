import { style } from "@vanilla-extract/css";

export const Layout = style({
  width: "100vw",
  backgroundColor: "#F7F8FA",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "84px 190px",
  fontFamily: "Pretendard-Regular",
});

export const PortfolioContainer = style({
  height: "fit-content",
  width: "fit-content",
  justifyContent: "center",
  backgroundColor: "white",
  padding: "35px 100px",
  borderRadius: "20px",
});

export const Title = style({
  fontSize: "30px",
  fontWeight: "bold",
});

export const TagContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "10px",
});

export const Tag = style({
  backgroundColor: "#4e78ff",
  color: "white",
  minWidth: "fit-content",
  padding: "8px 10px",
  borderRadius: "15px",
  border: "none",
  fontSize: "15px",
});

export const EditBtn = style({
  backgroundColor: "#4541ff",
  color: "white",
  fontSize: "15px",
  height: "fit-content",
  padding: "15px 20px",
  fontWeight: "600",
  borderRadius: "13px",
  marginTop: "20px",
  border: "none",
  cursor: "pointer",
});

export const PDFBtn = style({
  marginTop: "21px",
  width: "fit-content",
  marginLeft: "auto",
  padding: "10px 24px",
  border: "none",
  cursor: "pointer",
  color: "white",
  backgroundColor: "#4CAF50",
  borderRadius: "10px",
  fontSize: "18px",
});
