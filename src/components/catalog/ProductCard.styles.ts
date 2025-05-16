import { SxProps } from "@mui/material";

const card: SxProps = {
  height: 420,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  background: "none",
  border: "none",
  boxShadow: "none",
  transition: "box-shadow 0.2s",
  cursor: "pointer",
  ":hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
  },
};

const imageWrapper: SxProps = {
  flex: "1 1 auto",
  minHeight: 220,
  maxHeight: 260,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 2,
};

const image: SxProps = {
  maxHeight: 220,
  maxWidth: "100%",
  objectFit: "contain",
};

const name: SxProps = {
  fontWeight: 700,
  fontSize: 18,
  margin: "12px 0 8px 0",
  textAlign: "left",
};

const infoRow: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 16,
};

const price: SxProps = {
  fontWeight: 500,
  color: "#222",
};

const inStock: SxProps = {
  fontWeight: 400,
  color: "#4caf50",
  fontSize: 15,
};

export default {
  card,
  imageWrapper,
  image,
  name,
  infoRow,
  price,
  inStock,
};
