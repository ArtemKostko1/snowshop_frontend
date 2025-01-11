import React from "react";
import { Container, Box } from "@mui/material";
import Header from "../header/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 4 }}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
