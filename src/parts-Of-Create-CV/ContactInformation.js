import { Box, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function ContactInformation({ setContactInfo }) {
  // initial states
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [landlineNumber, setLandlineNumber] = useState(null);
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    setContactInfo({
      email: email,
      phoneNumber: phoneNumber,
      landlineNumber: landlineNumber,
      city: city,
      address: address,
    });
  }, [email, phoneNumber, landlineNumber, city, address, setContactInfo]);
  return (
    <>
      <Box
        sx={{
          paddingLeft: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: "25px",
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          اطلاعت تماس
        </Typography>
        <Grid
          columns={12}
          container
          spacing={3}
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            paddingTop: "5px",
            paddingBottom: "20px",
            paddingRight: "25px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              sx={{ width: "100%", textAlign: "center" }}
              type="email"
              label="آدرس ایمیل"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {" "}
            <TextField
              sx={{ width: "100%" }}
              type="number"
              label="شماره موبایل"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {" "}
            <TextField
              sx={{ width: "100%" }}
              type="number"
              label="شماره ثابت"
              value={landlineNumber}
              onChange={(e) => {
                setLandlineNumber(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              sx={{ width: "100%" }}
              label="شهر سکونت"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            {" "}
            <TextField
              sx={{ width: "100%" }}
              label="آدرس محل سکونت"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
