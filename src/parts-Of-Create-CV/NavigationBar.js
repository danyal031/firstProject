import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function NavigationBar({ pathName }) {
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "70px",
            backgroundColor: "#e7e5e4",
            position: "fixed",
            top: 1,
            zIndex: 1000,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "6px",
            "@media (max-width:660px)": {
              width: "100%",
              height: "60px",
              left: "0px",
              margin: "0px",
              transform: "none",
              top: "0px",
              right: "0px",
            },
          }}
          className="navigation-shadow"
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            <Link
              className="link-hover"
              to={"/basic"}
              style={{
                textDecoration: "none",
                color: pathName === "/basic" ? "#047857" : "black",
              }}
            >
              اطلاعات پایه
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            <Link
              className="link-hover"
              to={"/contact"}
              style={{
                textDecoration: "none",
                color: pathName === "/contact" ? "#047857" : "black",
              }}
            >
              اطلاعت تماس{" "}
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            <Link
              className="link-hover"
              to={"/education"}
              style={{
                textDecoration: "none",
                color: pathName === "/education" ? "#047857" : "black",
              }}
            >
              {" "}
              سوابق تحصیلی
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            <Link
              className="link-hover"
              to={"/expertise"}
              style={{
                textDecoration: "none",
                color: pathName === "/expertise" ? "#047857" : "black",
              }}
            >
              تخصص ها
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            <Link
              className="link-hover"
              to={"/portfolio"}
              style={{
                textDecoration: "none",
                color: pathName === "/portfolio" ? "#047857" : "black",
              }}
            >
              پروژه و نمونه کارها
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
