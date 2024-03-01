import {
  Autocomplete,
  Avatar,
  Box,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DatePicker, LocalizationProvider, faIR } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export function BasicInformation() {
  const days = [
    { numberOfDay: "1", id: 1 },
    { numberOfDay: "2", id: 2 },
    { numberOfDay: "3", id: 3 },
    { numberOfDay: "4", id: 4 },
    { numberOfDay: "5", id: 5 },
    { numberOfDay: "6", id: 6 },
    { numberOfDay: "7", id: 7 },
    { numberOfDay: "8", id: 8 },
    { numberOfDay: "9", id: 9 },
    { numberOfDay: "10", id: 10 },
    { numberOfDay: "11", id: 11 },
    { numberOfDay: "12", id: 12 },
    { numberOfDay: "13", id: 13 },
    { numberOfDay: "14", id: 14 },
    { numberOfDay: "15", id: 15 },
    { numberOfDay: "16", id: 16 },
    { numberOfDay: "17", id: 17 },
    { numberOfDay: "18", id: 18 },
    { numberOfDay: "19", id: 19 },
    { numberOfDay: "20", id: 20 },
    { numberOfDay: "21", id: 21 },
    { numberOfDay: "22", id: 22 },
    { numberOfDay: "23", id: 23 },
    { numberOfDay: "24", id: 24 },
    { numberOfDay: "25", id: 25 },
    { numberOfDay: "26", id: 26 },
    { numberOfDay: "27", id: 27 },
    { numberOfDay: "28", id: 28 },
    { numberOfDay: "29", id: 29 },
    { numberOfDay: "30", id: 30 },
    { numberOfDay: "31", id: 31 },
  ];

  const months = [
    { name: "فروردین", id: 1 },
    { name: "اردیبهشت", id: 2 },
    { name: "خرداد", id: 3 },
    { name: "تیر", id: 4 },
    { name: "مرداد", id: 5 },
    { name: "شهریور", id: 6 },
    { name: "مهر", id: 7 },
    { name: "آبان", id: 8 },
    { name: "آذر", id: 9 },
    { name: "دی", id: 10 },
    { name: "بهمن", id: 11 },
    { name: "اسفند", id: 12 },
  ];

  const citizens = [
    { text: "ایرانی", id: 1 },
    { text: "غیر ایرانی", id: 2 },
  ];

  // initial states
  const [name, setName] = useState(null);
  const [citizen, setCitizen] = useState(
    citizens.find((item) => {
      return item.id === 1;
    }).text
  );
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState("male");
  const [marital, setMarital] = useState("single");
  const [selectDate, setSelectDate] = useState(null);
  const [profile, setProfile] = useState(null);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  // handle reset country
  //چرا کار نمیکنه
  // useEffect(() => {
  // if (citizen?.id === 1) setCountry(null);
  // }, [citizen]);

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
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          اطلاعات پایه
        </Typography>
        <Grid
          columns={12}
          container
          spacing={2.5}
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            paddingTop: "5px",
            paddingBottom: "20px",
            paddingRight: "25px",
            paddingLeft: "2px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
            xl={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Avatar src={profile} sx={{ width: "110px", height: "110px" }} />

            <Button
              variant="contained"
              sx={{
                width: "88px",
                padding: "2.2px",
              }}
            >
              <input
                className="button-input"
                style={{
                  width: "100%",
                }}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const urlImage = URL.createObjectURL(e.target.files[0]);
                  setProfile(urlImage);
                }}
              />
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              columns={12}
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <TextField
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                  label="نام و نام خانوادگی"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography>جنسیت:</Typography>
                <ToggleButtonGroup
                  value={gender}
                  color="error"
                  exclusive
                  onChange={(e, value) => {
                    if (value) {
                      setGender(value);
                    }
                  }}
                >
                  <ToggleButton
                    sx={{
                      backgroundColor: "#e7e5e4",
                      borderRadius: "10px",
                    }}
                    value={"male"}
                  >
                    مرد
                  </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                  value={gender}
                  color="error"
                  exclusive
                  onChange={(e, value) => {
                    if (value) {
                      setGender(value);
                    }
                  }}
                >
                  <ToggleButton
                    sx={{
                      backgroundColor: "#e7e5e4",
                      borderRadius: "10px",
                    }}
                    value={"female"}
                  >
                    زن
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                {" "}
                {/* <LocalizationProvider dateAdapter={AdapterDayjs} locale={faIR}>
            <DatePicker
              sx={{ width: "100%" }}
              value={selectDate}
              onChange={(value) => {
                setSelectDate(value);
              }}
              format="YYYY/MM/DD"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                    justifyContent: "space-evenly",
                    gap: "13px",
                    border: "1px solid #C4C4C4",
                    padding: "5px",
                    borderRadius: "6px",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      position: "absolute",
                      top: "-6px",
                      right: "10px",
                      backgroundColor: "#FFFFFF",
                      color: "#676767",
                      height: "10px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  >
                    تاریخ تولد
                  </Typography>
                  <Autocomplete
                    disableClearable
                    sx={{ width: "20%" }}
                    value={day}
                    onChange={(e, value) => {
                      setDay(value);
                    }}
                    options={days.map((item) => {
                      return item.numberOfDay;
                    })}
                    renderInput={(params) => (
                      <TextField {...params} label="روز" variant="standard" />
                    )}
                  />
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    /
                  </Typography>
                  <Autocomplete
                    sx={{ width: "50%" }}
                    disableClearable
                    value={month}
                    onChange={(e, value) => {
                      setMonth(value);
                    }}
                    options={months.map((item) => {
                      return item.name;
                    })}
                    renderInput={(params) => (
                      <TextField {...params} label="ماه" variant="standard" />
                    )}
                  />
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    /
                  </Typography>
                  <TextField
                    type="number"
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                    sx={{ width: "30%" }}
                    label="سال"
                    variant="standard"
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography>وضعیت تاهل:</Typography>
                <ToggleButtonGroup
                  value={marital}
                  color="secondary"
                  exclusive
                  onChange={(e, value) => {
                    if (value) {
                      setMarital(value);
                    }
                  }}
                >
                  <ToggleButton
                    sx={{
                      backgroundColor: "#e7e5e4",
                      borderRadius: "10px",
                    }}
                    value={"single"}
                  >
                    مجرد
                  </ToggleButton>
                </ToggleButtonGroup>
                {""}
                <ToggleButtonGroup
                  value={marital}
                  color="secondary"
                  exclusive
                  onChange={(e, value) => {
                    if (value) {
                      setMarital(value);
                    }
                  }}
                >
                  <ToggleButton
                    sx={{
                      backgroundColor: "#e7e5e4",
                      borderRadius: "10px",
                    }}
                    value={"married"}
                  >
                    متاهل
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Autocomplete
                  // disableClearable
                  // freeSolo
                  onChange={(e, value) => {
                    if (value) {
                      setCitizen(value);
                    }
                    if (citizens.find((item) => item.id === 2).text === value) {
                      setCountry(null);
                    }
                  }}
                  // من به جای استفاده از ویژگی گت آپشن لیبل از همون آپشن  استفاده کردم ولی  روی سیتیزنس یک حلقه ی مپ زدم،این کار من اشکالی داره؟
                  value={citizen}
                  options={citizens.map((item) => item.text)}
                  sx={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField {...params} label="تابعیت" />
                  )}
                />
              </Grid>
              {/* برای شرط زیر شما یه کد دیگه نوشته بودید و من اونو پاکش کردم و اینو به جاش نوشتم،مشکلی نداره؟ */}
              {citizens.find((item) => item.id === 2).text === citizen ? (
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    sx={{ width: "100%" }}
                    variant="outlined"
                    label="نام کشور"
                  />
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
