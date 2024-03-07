import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const CVComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="change-cv"
        onClick={() => {
          navigate("/basic");
        }}
        sx={{
          borderRadius: "200px",
          width: "110px",
          color: "black",
          fontWeight: "bold",
          position: "fixed",
          left: 50,
          bottom: 180,
          zIndex: 1000,
          height: "40px",
        }}
      >
        ویرایش رزومه
      </Button>
      <Box
        className="container"
        sx={{ width: "100%", backgroundColor: "#F5F5F5", paddingTop: 5 }}
      >
        <Grid container columns={12} spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                gap: "7px",
                width: "100%",
                paddingRight: "30px",
                paddingLeft: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  width: "100%",
                  marginBottom: "15px",
                }}
              >
                <Avatar
                  alt=""
                  src="../assets\images/photo.jpg"
                  sx={{
                    width: "100px",
                    height: "100px",
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "26px" }}
                  >
                    دانیال هوشنگی
                  </Typography>
                  <Typography variant="p" sx={{ fontSize: "20px" }}>
                    برنامه نویس وب
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  اطلاعات پایه
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p">
                    ghghhghhhhhhhhhhhhhhhhhh
                    {/* khjkkhhhggggggggggggggglllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                    llllllllllllllllggggggg
                    gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhf
                    fffffffff */}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />{" "}
                  <Typography variant="p">kjhkhjjjjjjjjjjjj</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />{" "}
                  <Typography variant="p">tertertttttttttt</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />{" "}
                  <Typography variant="p">gggggggggggggggggree</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />{" "}
                  <Typography variant="p">dfgdfgffffffffff</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />{" "}
                  <Typography variant="p">675675675677777777</Typography>
                </Box>{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  اطلاعات تماس{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p">khjkkhhhhhhffffffffff</Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p">khjkkhhhhhhffffffffff</Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p">khjkkhhhhhhffffffffff</Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p">khjkkhhhhhhffffffffff</Typography>
                </Box>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  وضعیت تحصیل{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <Typography variant="p">dfgdfggggggggggg</Typography>
                <Typography variant="p">
                  675675675fffffffffffffff677777777
                </Typography>
                <Typography variant="p">
                  67567567567ssssssstertert7777777
                </Typography>
                <Typography variant="p">675675675yyyyyyyy677777777</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                gap: "7px",
                width: "100%",
                paddingRight: "30px",
                paddingLeft: "30px",
              }}
            >
              <Box
                className="skills"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  تخصص و مهارت ها{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                className="skill-items"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <Typography variant="p">dfgdfggggggggggg</Typography>
                <Typography variant="p">
                  675675675fffffffffffffff677777777
                </Typography>
                <Typography variant="p">
                  67567567567ssssssstertert7777777
                </Typography>
                <Typography variant="p">675675675yyyyyyyy677777777</Typography>
              </Box>
              <Box
                className="jobs"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  سوابق شغلی{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                className="jobs-item"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                    gap: "10px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  <Typography variant="p">dfgdfggggggggggg</Typography>
                  <Typography variant="p">
                    675675675fffffffffffffff677777777
                  </Typography>
                  <Typography variant="p">
                    67567567567ssssssstertert7777777
                  </Typography>
                  <Typography variant="p">
                    675675675yyyyyyyy677777777
                  </Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                    gap: "10px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  <Typography variant="p">dfgdfggggggggggg</Typography>
                  <Typography variant="p">
                    675675675fffffffffffffff677777777
                  </Typography>
                  <Typography variant="p">
                    67567567567ssssssstertert7777777
                  </Typography>
                  <Typography variant="p">
                    675675675yyyyyyyy677777777
                  </Typography>
                </Box>
              </Box>{" "}
              <Box
                className="project"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  پروژه و نمونه کارها{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                className="project-item"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                    gap: "10px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  <Typography variant="p">dfgdfggggggggggg</Typography>
                  <Typography variant="p">
                    675675675fffffffffffffff677777777
                  </Typography>
                  <Typography variant="p">
                    67567567567ssssssstertert7777777
                  </Typography>
                  <Typography variant="p">
                    675675675yyyyyyyy677777777
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                    gap: "10px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  <Typography variant="p">dfgdfggggggggggg</Typography>
                  <Typography variant="p">
                    675675675fffffffffffffff677777777
                  </Typography>
                  <Typography variant="p">
                    67567567567ssssssstertert7777777
                  </Typography>
                  <Typography variant="p">
                    675675675yyyyyyyy677777777
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
