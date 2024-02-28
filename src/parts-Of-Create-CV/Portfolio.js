import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

export function Portfolio() {
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
  const [key, setKey] = useState(1);
  const [projects, setProjects] = useState([
    {
      key: 0,
      title: "",
      month: "",
      year: "",
      applicator: "",
      projectLink: "",
      description: "",
    },
  ]);
  console.log(projects);
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
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          پروژه و نمونه کار ها{" "}
        </Typography>
        {projects.map((item) => {
          return (
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
                position: "relative",
              }}
            >
              {" "}
              <button
                onClick={() => {
                  setProjects(
                    projects.filter((project) => {
                      return project.key !== item.key;
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
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  label="عنوان پروژه"
                  value={
                    projects.find((project) => {
                      return project.key === item.key;
                    }).title
                  }
                  onChange={(e) => {
                    const updatedProjects = projects.map((project) => {
                      if (project.key === item.key) {
                        return { ...project, title: e.target.value };
                      } else {
                        return project;
                      }
                    });
                    setProjects(updatedProjects);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  label="کارفرما / درخواست کننده"
                  value={
                    projects.find((project) => {
                      return project.key === item.key;
                    }).applicator
                  }
                  onChange={(e) => {
                    const updatedProjects = projects.map((project) => {
                      if (project.key === item.key) {
                        return { ...project, applicator: e.target.value };
                      } else {
                        return project;
                      }
                    });
                    setProjects(updatedProjects);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  label="لینک مرتبط"
                  type="url"
                  value={
                    projects.find((project) => {
                      return project.key === item.key;
                    }).projectLink
                  }
                  onChange={(e) => {
                    const updatedProjects = projects.map((project) => {
                      if (project.key === item.key) {
                        return { ...project, projectLink: e.target.value };
                      } else {
                        return project;
                      }
                    });
                    setProjects(updatedProjects);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                {" "}
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
                    تاریخ دریافت پروژه{" "}
                  </Typography>
                  <Autocomplete
                    sx={{ width: "40%" }}
                    disableClearable
                    value={
                      projects.find((project) => {
                        return project.key === item.key;
                      }).month
                    }
                    onChange={(e, value) => {
                      const updatedProjects = projects.map((project) => {
                        if (project.key === item.key) {
                          return { ...project, month: value };
                        } else {
                          return project;
                        }
                      });
                      setProjects(updatedProjects);
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
                      projects.find((project) => {
                        return project.key === item.key;
                      }).year
                    }
                    onChange={(e) => {
                      const updatedProjects = projects.map((project) => {
                        if (project.key === item.key) {
                          return { ...project, year: e.target.value };
                        } else {
                          return project;
                        }
                      });
                      setProjects(updatedProjects);
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {" "}
                <TextField
                  sx={{ width: "100%" }}
                  label="توضیحات"
                  value={
                    projects.find((project) => {
                      return project.key === item.key;
                    }).description
                  }
                  onChange={(e) => {
                    const updatedProjects = projects.map((project) => {
                      if (project.key === item.key) {
                        return { ...project, description: e.target.value };
                      } else {
                        return project;
                      }
                    });
                    setProjects(updatedProjects);
                  }}
                />
              </Grid>
            </Grid>
          );
        })}

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
              درصورت وجود نمونه کار دیگری اضافه کنید{" "}
            </Typography>
            <Button
              variant="contained"
              color="warning"
              sx={{ borderRadius: "1000px", fontSize: "15px" }}
              onClick={handleAddProject}
            >
              +
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
  function handleAddProject() {
    setKey(key + 1);
    setProjects((projects) => {
      return [
        ...projects,
        {
          key: key,
          title: "",
          month: "",
          year: "",
          applicator: "",
          projectLink: "",
          description: "",
        },
      ];
    });
  }
}
