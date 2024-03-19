import { Box, Typography, Button } from "@mui/material";
import { BasicInformation } from "./BasicInformation";
import { ContactInformation } from "./ContactInformation";
import { Education } from "./Education";
import { Expertise } from "./Expertise";
import { Portfolio } from "./Portfolio";

export function NavigationBar({
  setDisplayBasic,
  displaybasic,
  setDisplayContact,
  displayContact,
  setDisplayEducation,
  displayEducation,
  setDisplayExpertise,
  displayExpertise,
  setDisplayPortfolio,
  displayPortfolio,
  setBasicInfo,
  setContactInfo,
  setEducationInfo,
  setExpertiseInfo,
  setEmploymentInfo,
  setPortfolioInfo,
}) {
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
            onClick={() => {
              setDisplayBasic("flex");
              setDisplayContact("none");
              setDisplayEducation("none");
              setDisplayExpertise("none");
              setDisplayPortfolio("none");
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: displaybasic === "flex" ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            اطلاعات پایه
          </Typography>
          <Typography
            onClick={() => {
              setDisplayBasic("none");
              setDisplayContact("flex");
              setDisplayEducation("none");
              setDisplayExpertise("none");
              setDisplayPortfolio("none");
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: displayContact === "flex" ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            اطلاعت تماس{" "}
          </Typography>
          <Typography
            onClick={() => {
              setDisplayBasic("none");
              setDisplayContact("none");
              setDisplayEducation("flex");
              setDisplayExpertise("none");
              setDisplayPortfolio("none");
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: displayEducation === "flex" ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            {" "}
            سوابق تحصیلی
          </Typography>
          <Typography
            onClick={() => {
              setDisplayBasic("none");
              setDisplayContact("none");
              setDisplayEducation("none");
              setDisplayExpertise("flex");
              setDisplayPortfolio("none");
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: displayExpertise === "flex" ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            تخصص ها
          </Typography>
          <Typography
            onClick={() => {
              setDisplayBasic("none");
              setDisplayContact("none");
              setDisplayEducation("none");
              setDisplayExpertise("none");
              setDisplayPortfolio("flex");
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: displayPortfolio === "flex" ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            پروژه و نمونه کارها
          </Typography>
        </Box>
      </Box>
    </>
  );
}
