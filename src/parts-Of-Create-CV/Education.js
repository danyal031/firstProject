import {
  Box,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function Education() {
  // initial states
  const [degree, setDegree] = useState(null);
  const [major, setMajor] = useState(null);
  const [studying, setStudying] = useState(null);
  return (
    <>
      <Box
        sx={{
          paddingLeft: 2.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: "23px",
          width: "100%",
        }}
      >
        {" "}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          سوابق تحصیلی{" "}
        </Typography>
        <Grid
          columns={12}
          container
          spacing={2.5}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            paddingTop: "5px",
            paddingBottom: "20px",
            paddingRight: "25px",
            paddingLeft: "2px",
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <TextField
              sx={{ width: "100%" }}
              label="مدرک تحصیلی"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {" "}
            <TextField
              sx={{ width: "100%" }}
              label="رشته تحصیلی"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {" "}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                درحال تحصیل:
              </Typography>
              <ToggleButtonGroup
                value={studying}
                onChange={(e, value) => {
                  setStudying(value);
                }}
                exclusive
                color="success"
              >
                <ToggleButton
                  sx={{
                    backgroundColor: "#e7e5e4",
                    borderRadius: "10px",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  value={"is"}
                >
                  هستم
                </ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                value={studying}
                onChange={(e, value) => {
                  setStudying(value);
                }}
                color="secondary"
                exclusive
              >
                <ToggleButton
                  sx={{
                    backgroundColor: "#e7e5e4",
                    borderRadius: "10px",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  value={"isnt"}
                >
                  نیستم
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
