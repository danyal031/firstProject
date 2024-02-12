import {
  Button,
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { position } from "stylis";

export function EmploymentHistory() {
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
  // initial states
  // const [position, setPosition] = useState(null);
  const [titleOfWorkplace, setTitleOfWorkplace] = useState(null);
  const [firstMonth, setFirstMonth] = useState(null);
  const [firstYear, setFirstYear] = useState(null);
  const [lastMonth, setLastMonth] = useState(null);
  const [lastYear, setLastYear] = useState(null);
  const [checked, setChecked] = useState(true);
  const [importEmploymentHistory, setImportEploymentHistory] = useState([]);
  const [newState, setNewState] = useState([
    {
      position: "",
      titleOfWorkplace: "",
      firstMonth: "",
      firstYear: "",
      lastMonth: "",
      lastYear: "",
      checked: "",
    },
  ]);

  // console.log(countState);
  // console.log(position);
  // console.log(titleOfWorkplace);
  // console.log(firstMonth);
  // console.log(firstYear);
  // console.log(checked);
  // console.log(lastMonth);
  // console.log(lastYear);

  console.log(newState);

  return (
    <>
      <Box
        sx={{
          paddingTop: 1,
          paddingRight: 3,
          paddingLeft: 5,
          paddingBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: "7px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          سوابق شغلی
        </Typography>

        {importEmploymentHistory}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            height: "80px",
            width: "100%",
            alignSelf: "center",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>
            سابقه شغلی خود را اضافه کنید
          </Typography>
          <Box
            onClick={() => {
              setNewState(
                newState.concat({
                  position: "",
                  titleOfWorkplace: "",
                  firstMonth: "",
                  firstYear: "",
                  lastMonth: "",
                  lastYear: "",
                  checked: "",
                })
              );

              setImportEploymentHistory(
                importEmploymentHistory.concat(
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
                      marginTop: "10px",
                      // backgroundColor: "aqua",
                    }}
                  >
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                      <TextField
                        sx={{ width: "100%" }}
                        label="سمت شغلی مربوطه"
                        value={(newState.length - 1).position}
                        onChange={(e) => {
                          setNewState((newState) => {
                            return newState.map((item, index) => {
                              if (index === newState.length - 1) {
                                return { ...item, position: e.target.value };
                              } else {
                                return item;
                              }
                            });
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                      <TextField
                        sx={{ width: "100%" }}
                        label="عنوان محل کار"
                        value={newState[newState.length - 1].titleOfWorkplace}
                        onChange={(e) => {
                          newState[newState.length - 1].titleOfWorkplace =
                            e.target.value;
                          console.log(
                            newState[newState.length - 1].titleOfWorkplace
                          );
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
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
                        {" "}
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
                          تاریخ شروع{" "}
                        </Typography>
                        <Autocomplete
                          sx={{ width: "40%" }}
                          disableClearable
                          value={newState[newState.length - 1].firstMonth}
                          onChange={(e, value) => {
                            newState[newState.length - 1].firstMonth = value;
                            console.log(
                              newState[newState.length - 1].firstMonth
                            );
                          }}
                          options={months.map((item) => {
                            return item.name;
                          })}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="ماه"
                              variant="standard"
                            />
                          )}
                        />
                        <TextField
                          type="number"
                          sx={{ width: "40%" }}
                          variant="standard"
                          label="سال"
                          value={newState[newState.length - 1].firstYear}
                          onChange={(e) => {
                            newState[newState.length - 1].firstYear =
                              e.target.value;
                            console.log(
                              newState[newState.length - 1].firstYear
                            );
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          مشغول فعالیت در این مجموعه هستم
                        </Typography>
                        <Checkbox
                          checked={newState[newState.length - 1].checked}
                          onChange={(e) => {
                            newState[newState.length - 1].checked =
                              e.target.checked;
                            console.log(newState[newState.length - 1].checked);
                            // if (e.target.checked === false) {
                            // setLastYear(null);
                            // setLastMonth(null);
                            // }
                          }}
                        />
                      </Box>
                    </Grid>
                    {checked === true ? null : (
                      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
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
                            تاریخ پایان
                          </Typography>{" "}
                          <Autocomplete
                            sx={{ width: "40%" }}
                            disableClearable
                            value={newState[newState.length - 1].lastMonth}
                            onChange={(e, value) => {
                              newState[newState.length - 1].lastMonth = value;
                              console.log(
                                newState[newState.length - 1].lastMonth
                              );
                            }}
                            options={months.map((item) => {
                              return item.name;
                            })}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="ماه"
                                variant="standard"
                              />
                            )}
                          />
                          <TextField
                            type="number"
                            sx={{ width: "40%" }}
                            variant="standard"
                            label="سال"
                            value={newState[newState.length - 1].lastYear}
                            onChange={(e) => {
                              newState[newState.length - 1].lastYear =
                                e.target.value;
                              console.log(
                                newState[newState.length - 1].lastYear
                              );
                            }}
                          />
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                )
              );
            }}
            sx={{
              borderRadius: "30px",
              width: "30px",
              height: "30px",
              backgroundColor: "#ff9000",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ paddingLeft: "1px" }}>
              +
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
