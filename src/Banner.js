import { Box } from "@mui/system";
import React from "react";
export const Banner = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(./assets/images/banner-bg.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          height: "250px",
        }}
      ></Box>
    </>
  );
};
