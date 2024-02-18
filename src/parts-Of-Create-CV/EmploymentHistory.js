import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

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

  const [checked, setChecked] = useState(true);
  const [importEmploymentHistory, setImportEploymentHistory] = useState([]);
  const [numberState, setNumberState] = useState(0);
  const [newState, setNewState] = useState([]);

  console.log(newState);
  console.log(numberState);
  //number:"numberState"
  // checked: "";
  // firstMonth: "";
  // firstYear: "";
  // lastMonth: "";
  // lastYear: "";
  // position: "";
  // titleOfWorkplace: "";

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
              setNumberState(numberState + 1);

              setNewState((newState) => {
                return [
                  ...newState,
                  {
                    number: numberState + 1,
                    position: "",
                    titleOfWorkplace: "",
                    firstMonth: "",
                    firstYear: "",
                    lastMonth: "",
                    lastYear: "",
                    checked: "",
                  },
                ];
              });
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
                    }}
                  >
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                      <TextField
                        sx={{ width: "100%" }}
                        label="سمت شغلی مربوطه"
                        value={
                          newState.find((item) => {
                            return item.number === numberState;
                          })?.position
                        }
                        onChange={(e) => {
                          const updatedState = newState.map((item) => {
                            if (item.number) {
                              return { ...item, position: e.target.value };
                            } else {
                              return item;
                            }
                          });
                          setNewState(updatedState);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                      <TextField
                        sx={{ width: "100%" }}
                        label="عنوان محل کار"
                        value={null}
                        onChange={(e) => {}}
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
                          value={null}
                          onChange={(e, value) => {}}
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
                          value={null}
                          onChange={(e) => {}}
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
                          checked={null}
                          onChange={(e) => {
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
                            value={null}
                            onChange={(e, value) => {}}
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
                            value={null}
                            onChange={(e) => {}}
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
