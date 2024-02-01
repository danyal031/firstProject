import { Box, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { styled } from "@mui/material/styles";
import { mainGray, mainAmber, darkGray, mainWhite } from "./custom/colors";
const ColorButton = styled(Button)({
  backgroundColor: mainAmber,
  "&:hover": {
    backgroundColor: darkGray,
  },
});
export default function Header() {
  return (
    <>
      <Box
        bgcolor={mainGray}
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        padding={"16px 24px"}
      >
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <PlayArrowIcon sx={{ color: mainWhite }} />
          <Typography sx={{ color: mainWhite }} variant="h6">
            code
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={5} color={mainWhite}>
          <Typography color={mainAmber} variant="h6">
            خانه
          </Typography>
          <Typography variant="h6">درباره من</Typography>
          <Typography variant="h6">نمونه کارها</Typography>
          <Typography variant="h6">بلاگ</Typography>
          <Typography variant="h6">امکانات</Typography>
        </Box>
        <Box>
          <ColorButton variant="contained" startIcon={<MapsUgcIcon />}>
            ارسال پیام
          </ColorButton>
        </Box>
      </Box>
    </>
  );
}
