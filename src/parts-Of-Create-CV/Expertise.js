import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { EmploymentHistory } from "./EmploymentHistory";

export function Expertise() {
  const levels = [
    { level: "Junior", id: 1 },
    { level: "Mid-Level ", id: 2 },
    { level: "Senior", id: 3 },
    { level: "FullStack", id: 4 },
  ];

  // initial states
  const [expertise, setExpertise] = useState(null);
  const [level, setLevel] = useState(null);
  const [evidence, setEvidence] = useState(null);
  const [id, setId] = useState(1);
  const [haveHistory, setHaveHistory] = useState(true);
  const [skills, setSkills] = useState([
    { skill: "", levelOfSkill: "", id: 0 },
  ]);
  console.log(skills);
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
        }}
      >
        {" "}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          تخصص و مهارت های مرتبط
        </Typography>
        <Grid
          container
          columns={12}
          spacing={2.5}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            paddingTop: "5px",
            paddingBottom: "20px",
            paddingRight: "25px",
            paddingLeft: "2px",
            marginTop: "10px",
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {" "}
            <TextField
              sx={{ width: "100%" }}
              label="حوزه ی تخصص"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {" "}
            <Autocomplete
              disableClearable
              sx={{ width: "100%" }}
              value={level}
              onChange={(e, value) => {
                setLevel(value);
              }}
              options={levels.map((item) => {
                return item.level;
              })}
              renderInput={(params) => (
                <TextField {...params} label="سطح ارشدیت" variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {" "}
            <TextField
              sx={{ width: "100%" }}
              label="مدرک های اخذ شده"
              placeholder="اختیاری"
              value={evidence}
              onChange={(e) => setEvidence(e.target.value)}
            />
          </Grid>
          {skills.map((item) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  marginTop: "15px",
                  position: "relative",
                }}
              >
                {" "}
                <button
                  onClick={() => {
                    setSkills(
                      skills.filter((skill) => {
                        return skill.id !== item.id;
                      })
                    );
                  }}
                  className="changeBgColor"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {" "}
                  <TextField
                    sx={{ width: "60%" }}
                    placeholder="مثلا: C#, Java"
                    label="نام مهارت"
                    value={
                      skills.find((skill) => {
                        return skill.id === item.id;
                      }).skill
                    }
                    onChange={(e) => {
                      const updatedSkill = skills.map((val) => {
                        if (val.id === item.id) {
                          return { ...val, skill: e.target.value };
                        } else {
                          return val;
                        }
                      });
                      setSkills(updatedSkill);
                    }}
                  />{" "}
                  <Select
                    sx={{ width: "40%", border: "1px solid #C4C4C4" }}
                    value={
                      skills.find((value) => {
                        return value.id === item.id;
                      }).levelOfSkill
                    }
                    onChange={(e) => {
                      const updatedLevelOfSkill = skills.map((val2) => {
                        if (val2.id === item.id) {
                          return { ...val2, levelOfSkill: e.target.value };
                        } else {
                          return val2;
                        }
                      });
                      setSkills(updatedLevelOfSkill);
                    }}
                  >
                    <MenuItem defaultValue value={""}>
                      میزان تسلط خود را مشخص کنید{" "}
                    </MenuItem>
                    <MenuItem value={"درحال یادگیری"}>درحال یادگیری</MenuItem>
                    <MenuItem value={"کم تجربه"}>کم تجربه</MenuItem>
                    <MenuItem value={"تسلط نسبی"}>تسلط نسبی</MenuItem>
                    <MenuItem value={"حرفه ای"}>حرفه ای</MenuItem>
                  </Select>
                </Box>
              </Grid>
            );
          })}
        </Grid>{" "}
        <Grid
          container
          spacing={2.5}
          columns={12}
          sx={{
            backgroundColor: "#FFFFFF",
            height: "85px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8px",
          }}
        >
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            item
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "end",
              paddingBottom: "10px",
              gap: "2px",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              مهارت دیگری را اضافه کنید{" "}
            </Typography>
            <Button
              variant="contained"
              color="warning"
              sx={{ borderRadius: "1000px", fontSize: "15px" }}
              onClick={handleAddSkill}
            >
              +
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          columns={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            marginTop: "18px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              gap: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "24px" }}
            >
              دارای سابقه شغلی{" "}
            </Typography>{" "}
            <Checkbox
              size="medium"
              checked={haveHistory}
              onChange={(e) => {
                setHaveHistory(e.target.checked);
              }}
            />
          </Grid>
        </Grid>
        {haveHistory === true ? <EmploymentHistory /> : null}
      </Box>
    </>
  );
  function handleAddSkill() {
    setId(id + 1);
    setSkills((skills) => {
      return [...skills, { skill: "", levelOfSkill: "", id: id }];
    });
  }
}
