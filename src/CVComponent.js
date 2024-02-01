import { Box, Grid, Typography } from "@mui/material";
import { mainAmber, mainGray, mainWhite } from "./custom/colors";

export const CVComponent = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xl={4} lg={4} md={5} sm={12} xs={12}>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
            >
              <Box
                width={"150px"}
                height={"150px"}
                borderRadius={"150px"}
                border={`5px solid ${mainAmber}`}
                sx={{ backgroundColor: "red" }}
                overflow={"hidden"}
              >
                <img
                  style={{ width: "100%", height: "auto" }}
                  src="./assets/images/profile-image.jpeg"
                  alt=""
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Amirhossein Malekipour
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Developer
              </Typography>
              <Typography variant="h6">Web/Android Application</Typography>
              <Typography variant="h6">intermilad1@gmail.com</Typography>
              <Typography variant="h6">+989134179172</Typography>
              <Typography variant="h6">birthday: 1998/05/05</Typography>
            </Box>
          </Grid>
          <Grid item xl={8} lg={8} md={7} sm={12} xs={12}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ backgroundColor: mainGray }}
                padding={"32px 24px"}
                gap={1}
                borderRadius={5}
                className={"box-shadow"}
                color={mainWhite}
              >
                <Typography variant="h5">Profile</Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  textAlign={"justify"}
                  variant="p"
                >
                  I am an experienced programmer adept in Android development
                  using both Java and Kotlin, as well as Flutter. My proficiency
                  extends to front-end technologies, including JavaScript, HTML,
                  and CSS, with expertise in the React framework. I am also
                  familiar with Vue.js. On the server side, I excel in Python,
                  leveraging FastAPI for efficient API development.
                  Additionally, I possess strong skills in PHP and have a deep
                  understanding of the Laravel framework for web development.
                  With a varied skill set, I'm prepared to contribute
                  effectively to diverse and challenging projects.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
