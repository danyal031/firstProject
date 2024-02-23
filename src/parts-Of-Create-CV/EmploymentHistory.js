import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
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
  const [numberState, setNumberState] = useState(1);
  const [newState, setNewState] = useState([]);
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
          }}
        >
          سوابق شغلی
        </Typography>
        {newState.map((item) => {
          return (
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
                position: "relative",
              }}
            >
              <button
                onClick={() => {
                  setNewState(
                    newState.filter((item4) => {
                      return item4.number !== item.number;
                    })
                  );
                }}
                className="changeBgColor"
                style={{
                  position: "absolute",
                  top: 3,
                  left: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "20px",
                  color: "#d32f2f",
                  borderRadius: "100px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "17px",
                }}
              >
                x
              </button>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <TextField
                  sx={{ width: "100%" }}
                  label="سمت شغلی مربوطه"
                  value={
                    newState.find((item2) => {
                      return item2.number === item.number;
                    }).position
                  }
                  onChange={(e) => {
                    const updatedState = newState.map((item3) => {
                      if (item3.number === item.number) {
                        return { ...item3, position: e.target.value };
                      } else {
                        return item3;
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
                  value={
                    newState.find((item2) => {
                      return item2.number === item.number;
                    }).titleOfWorkplace
                  }
                  onChange={(e) => {
                    const updatedState = newState.map((item3) => {
                      if (item3.number === item.number) {
                        return { ...item3, titleOfWorkplace: e.target.value };
                      } else {
                        return item3;
                      }
                    });
                    setNewState(updatedState);
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
                    value={
                      newState.find((item2) => {
                        return item2.number === item.number;
                      }).firstMonth
                    }
                    onChange={(e, value) => {
                      const updatedState = newState.map((item3) => {
                        if (item3.number === item.number) {
                          return { ...item3, firstMonth: value };
                        } else {
                          return item3;
                        }
                      });
                      setNewState(updatedState);
                    }}
                    options={months.map((item) => {
                      return item.name;
                    })}
                    renderInput={(params) => (
                      <TextField {...params} label="ماه" variant="standard" />
                    )}
                  />
                  <TextField
                    type="number"
                    sx={{ width: "40%" }}
                    variant="standard"
                    label="سال"
                    value={
                      newState.find((item2) => {
                        return item2.number === item.number;
                      }).firstYear
                    }
                    onChange={(e) => {
                      const updatedState = newState.map((item3) => {
                        if (item3.number === item.number) {
                          return { ...item3, firstYear: e.target.value };
                        } else {
                          return item3;
                        }
                      });
                      setNewState(updatedState);
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
                    checked={
                      newState.find((item2) => {
                        return item2.number === item.number;
                      }).checked
                    }
                    onChange={(e) => {
                      const updatedState = newState.map((item3) => {
                        if (item3.number === item.number) {
                          return { ...item3, checked: e.target.checked };
                        } else {
                          return item3;
                        }
                      });
                      setNewState(updatedState);
                    }}
                  />
                </Box>
              </Grid>
              {newState.find((item2) => {
                return item2.number === item.number;
              }).checked === true ? null : (
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
                      value={
                        newState.find((item2) => {
                          return item2.number === item.number;
                        }).lastMonth
                      }
                      onChange={(e, value) => {
                        const updatedState = newState.map((item3) => {
                          if (item3.number === item.number) {
                            return { ...item3, lastMonth: value };
                          } else {
                            return item3;
                          }
                        });
                        setNewState(updatedState);
                      }}
                      options={months.map((item) => {
                        return item.name;
                      })}
                      renderInput={(params) => (
                        <TextField {...params} label="ماه" variant="standard" />
                      )}
                    />
                    <TextField
                      type="number"
                      sx={{ width: "40%" }}
                      variant="standard"
                      label="سال"
                      value={
                        newState.find((item2) => {
                          return item2.number === item.number;
                        }).lastYear
                      }
                      onChange={(e) => {
                        const updatedState = newState.map((item3) => {
                          if (item3.number === item.number) {
                            return { ...item3, lastYear: e.target.value };
                          } else {
                            return item3;
                          }
                        });
                        setNewState(updatedState);
                      }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          );
        })}
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            height: "80px",
            width: "90%",
            alignSelf: "center",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            سابقه شغلی خود را اضافه کنید
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{ borderRadius: "1000px", fontSize: "15px" }}
            onClick={handleOnClicke}
          >
            +
          </Button>
        </Box>
      </Box>
    </>
  );
  function handleOnClicke() {
    setNumberState(numberState + 1);
    setNewState((newState) => [
      ...newState,
      {
        number: numberState,
        position: "",
        titleOfWorkplace: "",
        firstMonth: "",
        firstYear: "",
        lastMonth: "",
        lastYear: "",
        checked: "",
      },
    ]);
  }
}
